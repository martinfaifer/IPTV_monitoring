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
                                @click="openNewUserDialog()"
                            >
                                Nový uživatel
                            </v-btn>
                        </v-card-title>
                        <v-data-table
                            :headers="headers"
                            :items="items"
                            :search="search"
                        >
                            <template v-slot:item.customData="{ item }">
                                <v-icon
                                    small
                                    color="red"
                                    v-if="item.customData == null"
                                >
                                    mdi-close
                                </v-icon>
                                <v-icon
                                    small
                                    color="red"
                                    v-else-if="item.customData == '[]'"
                                >
                                    mdi-close
                                </v-icon>
                                <v-icon v-else color="green" small> mdi-check </v-icon>
                            </template>
                            <template v-slot:item.actions="{ item }">
                                <v-icon
                                    @click="openEditDialog(item)"
                                    small
                                    color="info"
                                    >mdi-pencil</v-icon
                                >
                                <v-icon
                                    @click="changePasswordDialog(item.id)"
                                    small
                                    color="orange"
                                    >mdi-lock</v-icon
                                >
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
                                    Přejete si odebrat uživatele?
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
                        @click="deleteUser()"
                        plain
                        outlined
                    >
                        Odebrat
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
            v-model="generatePasswordDialog"
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
                                    Přejete si vygenerovat nové heslo uživatele?
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
                        @click="generatePassword()"
                        plain
                        outlined
                    >
                        Generovat
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
                <p class="pt-3 text-center subtitle-1">
                    Založení nového uživatele
                </p>
                <v-card-text>
                    <v-container class="pt-3">
                        <v-row>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-text-field
                                    dense
                                    outlined
                                    autofocus
                                    :error-messages="errors.name"
                                    v-model="formData.name"
                                    label="Jméno"
                                    type="text"
                                    color="#0277BD"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-text-field
                                    dense
                                    outlined
                                    :error-messages="errors.email"
                                    v-model="formData.email"
                                    label="E-mail"
                                    type="text"
                                    color="#0277BD"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-text-field
                                    dense
                                    outlined
                                    :error-messages="errors.password"
                                    v-model="formData.password"
                                    label="Heslo"
                                    type="password"
                                    color="#0277BD"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-text-field
                                    dense
                                    outlined
                                    :error-messages="errors.password_confirmed"
                                    v-model="formData.password_confirmed"
                                    label="Potvrďte heslo"
                                    type="password"
                                    color="#0277BD"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-autocomplete
                                    dense
                                    outlined
                                    :error-messages="errors.role"
                                    v-model="formData.role"
                                    item-text="role_name"
                                    item-value="id"
                                    label="Uživatelská role"
                                    :items="userRoles"
                                    type="text"
                                    color="#0277BD"
                                ></v-autocomplete>
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
                        @click="storeUser()"
                        plain
                        outlined
                    >
                        Uložit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog
            v-model="editDialog"
            persistent
            max-width="800px"
            overlay-color="rgb(17, 27, 45)"
        >
            <v-card>
                <p class="pt-3 text-center subtitle-1">Úprava uživatele</p>
                <v-card-text>
                    <v-container class="pt-3">
                        <v-row>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-text-field
                                    dense
                                    outlined
                                    autofocus
                                    :error-messages="errors.name"
                                    v-model="user.name"
                                    label="Jméno"
                                    type="text"
                                    color="#0277BD"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-autocomplete
                                    dense
                                    outlined
                                    :error-messages="errors.role"
                                    v-model="user.role"
                                    item-text="role_name"
                                    item-value="id"
                                    label="Uživatelská role"
                                    :items="userRoles"
                                    type="text"
                                    color="#0277BD"
                                ></v-autocomplete>
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
                        @click="editUser()"
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
            editDialog: false,
            generatePasswordDialog: false,
            formData: [],
            errors: [],
            userRoles: [],
            user: [],
            search: "",
            items: [],
            stream: [],
            headers: [
                { text: "Jméno", value: "name" },
                { text: "E-mail", value: "email" },
                { text: "Role", value: "role" },
                { text: "Mozaika", value: "mozaika" },
                { text: "Upravená mozaika", value: "customData" },
                { text: "Počet streamů v mozaice", value: "pagination" },
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
                .get("settings/users")
                .then((response) => {
                    this.items = response.data;
                })
                .catch((error) => {
                    if (error.response.status == 403) {
                        this.$router.push("/403");
                    }
                });
        },

        storeUser() {
            axios
                .post("settings/users", {
                    name: this.formData.name,
                    email: this.formData.email,
                    password: this.formData.password,
                    password_confirmed: this.formData.password_confirmed,
                    role: this.formData.role,
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
        closeDialog() {
            this.createDialog = false;
            this.warningDialog = false;
            this.editDialog = false;
            this.generatePasswordDialog = false;
            this.formData = [];
            this.errors = [];
        },
        async openNewUserDialog() {
            await axios.get("settings/users/roles").then((response) => {
                this.userRoles = response.data;
            });
            this.createDialog = true;
        },
        deleteUser() {
            axios.delete("settings/users/" + this.formData).then((response) => {
                this.$store.state.alerts = response.data;
                this.closeDialog();
                this.index();
            });
        },
        deleteItem(userId) {
            this.formData = userId;
            this.warningDialog = true;
        },

        async openEditDialog(user) {
            await axios.get("settings/users/roles").then((response) => {
                this.userRoles = response.data;
            });
            this.user = user;
            this.editDialog = true;
        },
        editUser() {
            axios
                .patch("settings/users/" + this.user.id, {
                    name: this.user.name,
                    role: this.user.role,
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

        changePasswordDialog(userId) {
            this.formData = userId;
            this.generatePasswordDialog = true;
        },

        generatePassword() {
            axios
                .patch("settings/users/" + this.formData + "/generate-password")
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                });
        },
    },
};
</script>
