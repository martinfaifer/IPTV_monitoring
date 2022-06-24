<template>
    <div>
        <v-snackbar
            v-if="alert.length != 0"
            :timeout="-1"
            :value="true"
            bottom
            right
            :color="getAlertColor(alert.status)"
            elevation="24"
            class="my-3"
        >
            <v-row class="d-flex justify-space-between ml-3 mr-6">
                <v-icon>{{ iconFunction(alert.status) }}</v-icon>
                <span class="body-1">{{ alert.message }}</span>
            </v-row>
        </v-snackbar>
    </div>
</template>
<script>
export default {
    computed: {
        alert() {
            return this.$store.state.alerts;
        },
    },
    data() {
        return {};
    },

    created() {},

    methods: {
        iconFunction(status) {
            if (status == "success") {
                return "mdi-check";
            }

            if (status == "info") {
                return "mdi-information";
            }

            if (status == "error") {
                return "mdi-close";
            }
        },

        getAlertColor(status) {
            if (status == "info") {
                return "blue";
            }

            if (status == "error") {
                return "red";
            }

            if (status == "success") {
                return "green";
            }
        },
    },

    watch: {
        alert() {
            if (this.alert.length != 0) {
                setTimeout(
                    function () {
                        this.$store.state.alerts = [];
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
