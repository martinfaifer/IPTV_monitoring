<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                    <v-form @submit.prevent="UpdatePagination()">
                        <v-card
                            class="overflow-hidden rounded-xl blur shadow-blur"
                            flat
                        >
                            <v-card-text>
                                <v-container fluid>
                                    <v-row>
                                        <v-text-field
                                            class="d-flex justify-space-between"
                                            :error-messages="errors.pagination"
                                            v-model="user.pagination"
                                            label="Počet streamů na stránce"
                                            name="username"
                                            prepend-icon="mdi-television-guide"
                                            type="number"
                                            color="#328AF1"
                                            autofocus
                                        ></v-text-field>

                                        <v-btn
                                            plain
                                            color="#328AF1"
                                            class="rounded-lg d-flex justify-space-between my-auto mx-3"
                                            outlined
                                            type="submit"
                                            >Upravit</v-btn
                                        >
                                    </v-row>
                                </v-container>
                            </v-card-text>
                        </v-card>
                    </v-form>
                </v-col>
                <v-col cols="12" sm="12" md="12" lg="12">
                    <v-form @submit.prevent="UpdateStaticMozaika()">
                        <v-card
                            class="overflow-hidden rounded-xl blur shadow-blur"
                            flat
                        >
                            <v-card-text>
                                <v-container fluid>
                                    <v-row>
                                        <v-autocomplete
                                            class="d-flex justify-space-between"
                                            :error-messages="errors.customData"
                                            v-model="user.customData"
                                            label="Streamy, které budete mít připnuté ve Vaší mozaice"
                                            :items="streams"
                                            item-text="nazev"
                                            item-value="id"
                                            name="username"
                                            prepend-icon="mdi-television"
                                            type="text"
                                            color="#328AF1"
                                            multiple
                                            clearable
                                            chips
                                        ></v-autocomplete>
                                        <v-btn
                                            plain
                                            color="#328AF1"
                                            class="rounded-lg d-flex justify-space-between my-auto mx-3"
                                            outlined
                                            type="submit"
                                            >Upravit</v-btn
                                        >
                                    </v-row>
                                </v-container>
                            </v-card-text>
                        </v-card>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: [],
            errors: [],
            streams: [],
        };
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios.get("users/user").then((response) => {
                this.user = response.data;
            });

            axios.get("streams").then((response) => {
                this.streams = response.data;
            });
        },

        UpdatePagination() {
            axios
                .patch("users/pagination", {
                    pagination: this.user.pagination,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.index();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },
        UpdateStaticMozaika() {
            axios
                .patch("users/static-mozaika", {
                    customData: this.user.customData,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.index();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },
    },
};
</script>
