<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                    <v-card
                        class="overflow-hidden rounded-xl blur shadow-blur"
                        flat
                    >
                        <v-card-title>
                            <v-text-field
                                autofocus
                                outlined
                                dense
                                v-model="search"
                                color="#1E293B"
                                prepend-inner-icon="mdi-magnify"
                                label="Hledání ..."
                                single-line
                                hide-details
                            ></v-text-field>
                            <v-spacer></v-spacer>
                            <v-btn
                                plain
                                outlined
                                color="#0277BD"
                                @click="openNewEmailDialog()"
                            >
                                Nový email
                            </v-btn>
                        </v-card-title>
                        <v-data-table
                            :headers="headers"
                            :items="items"
                            :search="search"
                        >
                            <template v-slot:item.user="{ item }">
                                <span>
                                    {{ item.email }}
                                </span>
                            </template>
                            <template v-slot:item.actions="{ item }">
                                <v-icon
                                    @click="deleteItem(item.id)"
                                    small
                                    color="red"
                                    >mdi-delete</v-icon
                                >
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-dialog
            v-model="warningDialog"
            persistent
            max-width="400px"
            overlay-color="rgb(17, 27, 45)"
        >
            <v-card>
                <v-card-text>
                    <v-container class="pt-3">
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="12">
                                <p class="mt-6 text-center headline">
                                    Přejete si odebrat email?
                                </p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions color="#101B1D">
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        @click="closeDialog()"
                        plain
                        outlined
                    >
                        Zavřít
                    </v-btn>
                    <v-btn
                        color="red darken-1"
                        @click="deleteNotification()"
                        plain
                        outlined
                    >
                        Odebrat
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
            v-model="createDialog"
            persistent
            max-width="800px"
            overlay-color="rgb(17, 27, 45)"
        >
            <v-card>
                <p class="pt-3 text-center subtitle-1">Přidání nového emailu</p>
                <v-card-text>
                    <v-container class="pt-3">
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="12">
                                <v-text-field
                                    dense
                                    outlined
                                    autofocus
                                    :error-messages="errors.email"
                                    v-model="formData.email"
                                    label="Email na který se budou dorucovat notifikace"
                                    type="text"
                                    color="#0277BD"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions color="#101B1D">
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        @click="closeDialog()"
                        plain
                        outlined
                    >
                        Zavřít
                    </v-btn>
                    <v-btn
                        color="green darken-1"
                        @click="storeStream()"
                        plain
                        outlined
                    >
                        Uložit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            createDialog: false,
            warningDialog: false,
            formData: [],
            errors: [],
            search: "",
            items: [],
            headers: [
                { text: "Email", value: "email" },
                { text: "Uživatel", value: "user" },
                { text: "Akce", value: "actions" },
            ],
        };
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios
                .get("settings/notifications")
                .then((response) => {
                    this.items = response.data;
                })
                .catch((error) => {
                    if (error.response.status == 403) {
                        this.$router.push("/403");
                    }
                });
        },

        openNewEmailDialog() {
            this.createDialog = true;
            this.formData = [];
        },

        storeStream() {
            axios
                .post("settings/notifications", {
                    email: this.formData.email,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        deleteItem(notificationId) {
            this.formData = notificationId;
            this.warningDialog = true;
        },

        deleteNotification() {
            axios
                .delete("settings/notifications/" + this.formData)
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },
        closeDialog() {
            this.createDialog = false;
            this.warningDialog = false;
            this.formData = [];
            this.errors = [];
        },
    },
};
</script>
