<template>
    <v-main>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="12" md="5" lg="6">
                    <v-form @submit.prevent="login()">
                        <v-card
                            class="overflow-hidden rounded-lg shadow-blur-card"
                        >
                            <v-card-text>
                                <h1 class="mt-4 mb-4 text-center">
                                    <v-icon color="error" large>
                                        mdi-television-play
                                    </v-icon>
                                    <strong>IPTV Dohled</strong>
                                </h1>

                                <v-text-field
                                    :error-messages="errors.email"
                                    v-model="email"
                                    label="Email"
                                    name="username"
                                    prepend-inner-icon="mdi-account"
                                    type="text"
                                    color="#328AF1"
                                    autofocus
                                    outlined
                                    clearable
                                    class="mb-6"
                                ></v-text-field>

                                <v-text-field
                                    :error-messages="errors.password"
                                    v-model="password"
                                    label="Heslo"
                                    name="password"
                                    prepend-inner-icon="mdi-lock"
                                    type="password"
                                    color="#328AF1"
                                    outlined
                                    clearable
                                ></v-text-field>
                            </v-card-text>
                            <v-card-actions class="mb-6 mx-2">
                                <v-btn
                                    :loading="loading"
                                    block
                                    type="submit"
                                    class="rounded-md shadow-blur-submit-btn"
                                    color="blue darken-3"
                                    height="40"
                                    >Přihlášení
                                    <v-icon class="mx-3"
                                        >mdi-arrow-right</v-icon
                                    ></v-btn
                                >
                            </v-card-actions>
                        </v-card>
                    </v-form>
                </v-col>
            </v-row>

            <v-snackbar
                v-if="alert == true"
                :timeout="-1"
                :value="true"
                bottom
                right
                color="red"
                elevation="24"
                class="my-3"
            >
                <v-row class="d-flex justify-space-between ml-3 mr-6">
                    <v-icon>mdi-close</v-icon>
                    <span class="body-1">Nesprávné přihlašovací údaje</span>
                </v-row>
            </v-snackbar>
        </v-container>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            errors: [],
            email: null,
            password: null,
            alert: false,
        };
    },

    components: {},
    created() {},
    methods: {
        login() {
            this.errors = [];
            this.loading = true;
            axios
                .post("auth/login", {
                    email: this.email,
                    password: this.password,
                })
                .then((response) => {
                    this.loading = false;
                    if (response.data == true) {
                        this.$router.push("/");
                    } else {
                        this.alert = true;
                        this.email = null;
                        this.password = null;
                    }
                })
                .catch((error) => {
                    this.loading = false;
                    this.errors = error.response.data.errors;
                });
        },
    },
    watch: {
        alert() {
            if (this.alert == true) {
                setTimeout(
                    function () {
                        this.alert = false;
                    }.bind(this),
                    5000
                );
            } else {
                return;
            }
        },
    },
};
</script>
