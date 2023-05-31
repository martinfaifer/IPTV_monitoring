<template>
    <v-main class="body-1">
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12">
                    <v-card class="elevation-0" color="transparent">
                        <v-card-text>
                            <v-container fluid>
                                <v-row>
                                    <v-col cols="12">
                                        <p
                                            class="mt-4 mb-4 text-center display-4"
                                            style="color: white"
                                        >
                                            403 | Nemáte dostatečné oprávnění
                                        </p>
                                        <p
                                            class="mt-4 mb-4 text-center display-2"
                                            style="color: white"
                                        >
                                            Dojde k přesměrování na domovskou
                                            stránku za {{ timeout }}
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            timeout: 10,
        };
    },
    components: {},

    created() {
        this.index();
    },
    methods: {
        index() {
            if (this.timeout > 0) {
                setTimeout(() => {
                    this.timeout--;
                }, 1000);
            }
        },
    },
    mounted() {},
    watch: {
        timeout: {
            handler(value) {
                if (value > 0) {
                    setTimeout(() => {
                        this.timeout--;
                    }, 1000);
                }

                if (value == 0) {
                    this.$router.push("/");
                }
            },
        },
    },
};
</script>
