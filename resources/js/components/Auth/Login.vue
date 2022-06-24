<template>
    <v-main>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="12" md="5" lg="5">
                    <v-form @submit.prevent="login()">
                        <v-card
                            class="overflow-hidden rounded-xl blur shadow-blur"
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
                                ></v-text-field>

                                <v-text-field
                                    :error-messages="errors.password"
                                    v-model="password"
                                    label="Heslo"
                                    name="password"
                                    prepend-inner-icon="mdi-lock"
                                    type="password"
                                    color="#328AF1"
                                ></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    type="submit"
                                    color="#328AF1"
                                    class="rounded-lg"
                                    outlined
                                    >Přihlášení</v-btn
                                >
                            </v-card-actions>
                        </v-card>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            errors: [],
            email: null,
            password: null,
            alert: [],
        };
    },

    components: {},
    created() {},
    methods: {
        login() {
            this.errors = [];
            axios
                .post("login", {
                    email: this.email,
                    password: this.password,
                })
                .then((response) => {
                    this.alert = response.data;
                    if (response.data.status === "success") {
                        this.$store.state.user = response.data.data;
                        setTimeout(function () {}, 2000);
                        this.$router.push("/");
                    } else {
                        this.email = null;
                        this.password = null;
                    }
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },
    },
    watch: {},
};
</script>
