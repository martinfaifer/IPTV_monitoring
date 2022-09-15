<template>
    <div>
        <v-container fluid>
            <v-row class="mx-auto">
                <v-col v-for="item in items.checkResults" :key="item.id">
                    <v-card
                        class="overflow-hidden rounded-lg blur shadow-blur"
                        flat
                    >
                        <v-card-text>
                            <p class="headline text-center">
                                {{ translateName(item.name) }}
                            </p>
                            <p
                                class="text-right title font-weight-bold"
                                :class="textColor(item.shortSummary)"
                            >
                                {{ explodeTextAndTakeFirst(item.shortSummary) }}
                            </p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <!-- vytížení sítě -->
            <SettingsDashboardNetwork></SettingsDashboardNetwork>
            <!-- prehled zatížení RAM -->

            <!-- prehled poctu aktivních streamů v čase -->
            <SettingsDashboardStreamsStatuses></SettingsDashboardStreamsStatuses>
        </v-container>
    </div>
</template>
<script>
import SettingsDashboardStreamsStatuses from "./settingsDashboardStreamsStatuses.vue";
import SettingsDashboardNetwork from "./settingsDashboardNetwork.vue";
export default {
    components: { SettingsDashboardStreamsStatuses, SettingsDashboardNetwork },
    data() {
        return {
            items: [],
        };
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios
                .get("settings/dashboard?fresh")
                .then((response) => {
                    this.items = response.data;
                })
                .catch((error) => {
                    if (error.response.status == 403) {
                        this.$router.push("/403");
                    }
                });
        },

        translateName(name) {
            if (name == "UsedDiskSpace") {
                return "Využité místo HDD";
            }

            if (name == "Database") {
                return "Databáze";
            }

            if (name == "DatabaseConnectionCount") {
                return "Počet spojení do DB";
            }

            if (name == "Redis") {
                return "Redis cache";
            }

            if (name == "CpuLoad") {
                return "Zatížení CPU";
            }
        },

        textColor(result) {
            if (result == "Ok") {
                return "green--text";
            }

            if (result == "Ko") {
                return "red--text";
            }

            return "blue--text";
        },

        explodeTextAndTakeFirst(data) {
            if (typeof data == "number") {
                return parseFloat(data).toFixed(1);
            }

            let splitedData = data.split(" ");
            return splitedData[0];
        },
    },
};
</script>
