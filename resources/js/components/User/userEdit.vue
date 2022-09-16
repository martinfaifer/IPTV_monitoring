<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                    <v-card
                        class="overflow-hidden rounded-xl blur shadow-blur"
                        flat
                    >
                        <v-card-text>
                            <v-container fluid>
                                <v-row>
                                    <v-text-field
                                        class="d-flex justify-space-between"
                                        :error-messages="errors.password"
                                        v-model="formData.password"
                                        label="Nové heslo"
                                        name="password"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                        color="#328AF1"
                                    ></v-text-field>
                                    <v-text-field
                                        class="d-flex justify-space-between mx-3"
                                        :error-messages="
                                            errors.password_confirm
                                        "
                                        v-model="formData.password_confirm"
                                        label="Heslo pro kontrolu"
                                        name="password_confirm"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                        color="#328AF1"
                                        autofocus
                                    ></v-text-field>

                                    <v-btn
                                        plain
                                        color="#328AF1"
                                        class="rounded-lg d-flex justify-space-between my-auto mx-3"
                                        outlined
                                        @click="UpdatePassword()"
                                        >Upravit</v-btn
                                    >
                                </v-row>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formData: [],
            errors: [],
        };
    },

    created() {},
    methods: {
        resetForm() {
            this.formData = [];
        },
        UpdatePassword() {
            axios
                .patch("users/password", {
                    password: this.formData.password,
                    password_confirm: this.formData.password_confirm,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.resetForm();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },
    },
};
</script>
