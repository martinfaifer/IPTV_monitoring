<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col v-cloak v-if="items.length == 0" cols="12">
                    <v-alert
                        color="#182948"
                        type="info"
                        class="overflow-hidden rounded-lg blur shadow-blur-warning-blue-alert text-center my-3"
                    >
                        <strong> Neexistuje žádný Slack kanál </strong>
                    </v-alert>
                </v-col>
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
                                @click="openNewNotificationDialog()"
                            >
                                Nové upozornění
                            </v-btn>
                        </v-card-title>
                        <v-data-table
                            :headers="headers"
                            :items="items"
                            :search="search"
                        >
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
            <v-row justify="center">
                <v-dialog
                    v-model="createDialog"
                    persistent
                    max-width="800px"
                    overlay-color="rgb(17, 27, 45)"
                >
                    <v-card>
                        <p class="pt-3 text-center title">
                            Přidání nového kanálu
                        </p>
                        <v-card-text>
                            <v-container class="pt-3">
                                <v-row>
                                    <v-col cols="12" sm="12" md="12" lg="12">
                                        <v-text-field
                                            outlined
                                            autofocus
                                            :error-messages="errors.popis"
                                            v-model="formData.popis"
                                            label="Popis kanálu"
                                            type="text"
                                            color="#0277BD"
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12" lg="12">
                                        <v-text-field
                                            outlined
                                            :error-messages="errors.webhook"
                                            v-model="formData.webhook"
                                            label="URL"
                                            type="text"
                                            color="#0277BD"
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions color="#101B1D" class="mx-6">
                            <v-btn
                                color="red darken-1"
                                @click="closeDialog()"
                                class="rounded-md shadow-blur-close-btn"
                                plain
                                outlined
                            >
                                Zavřít
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="green darken-1"
                                @click="storeSlackChannel()"
                                class="rounded-md shadow-blur-submit-btn"
                                plain
                                outlined
                            >
                                Uložit
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

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
                                            Přejete si odebrat Url?
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions color="#101B1D">
                            <v-btn
                                color="blue darken-1"
                                @click="closeDialog()"
                                depressed
                                outlined
                            >
                                <v-icon class="mx-2" small> mdi-close </v-icon>
                                Zavřít
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="red darken-1"
                                @click="deleteSlackChannel()"
                                plain
                                outlined
                            >
                                <v-icon class="mx-2" small> mdi-delete </v-icon>
                                Odebrat
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            warningDialog: false,
            createDialog: false,
            formData: [],
            errors: [],
            items: [],
            headers: [
                { text: "Popis", value: "popis" },
                { text: "URL", value: "webhook" },
                { text: "Akce", value: "actions" },
            ],
        };
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios.get("users/slack").then((response) => {
                this.items = response.data;
            });
        },
        resetForm() {
            this.errors = [];
            this.formData = [];
        },

        openNewNotificationDialog() {
            this.createDialog = true;
        },

        storeSlackChannel() {
            axios
                .post("users/slack", {
                    popis: this.formData.popis,
                    webhook: this.formData.webhook,
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

        deleteItem(slackChannelId) {
            this.formData.slackChannelId = slackChannelId;
            this.warningDialog = true;
        },

        deleteSlackChannel() {
            axios
                .delete("users/slack/" + this.formData.slackChannelId)
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                });
        },

        closeDialog() {
            this.createDialog = false;
            this.warningDialog = false;
            this.resetForm();
        },
    },
};
</script>
