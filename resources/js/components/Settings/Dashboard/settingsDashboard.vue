<template>
    <div>
        <v-container fluid>
            <v-row class="mx-auto">
                <v-col v-for="item in items.checkResults" :key="item.id">
                    <v-card
                        v-if="item.label != 'network'"
                        class="overflow-hidden rounded-lg blur shadow-blur"
                        flat
                    >
                        <v-card-text>
                            <p class="headline text-center">
                                {{ translateName(item.name) }}
                            </p>
                            <v-row class="justify-center my-2">
                                <v-progress-circular
                                    :rotate="360"
                                    :size="140"
                                    :width="10"
                                    :value="
                                        explodeTextAndTakeFirst(
                                            item.shortSummary
                                        )
                                    "
                                    :color="pickBgColor(item.shortSummary)"
                                >
                                    <span class="font-weight-bold">
                                        {{
                                            explodeTextAndTakeFirst(
                                                item.shortSummary
                                            )
                                        }}
                                        %
                                    </span>
                                </v-progress-circular>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-card
                        v-else
                        class="overflow-hidden rounded-lg blur shadow-blur"
                        flat
                    >
                        <v-card-text>
                            <p class="headline text-center">
                                {{ item.name }}
                            </p>
                            <v-row class="justify-center my-2">
                                <div
                                    v-for="(item, index) in item.shortSummary"
                                    :key="item"
                                    class="mx-auto"
                                >
                                    <v-progress-circular
                                        :rotate="360"
                                        :size="140"
                                        :width="10"
                                        :value="(item / 10000) * 100"
                                        :color="
                                            pickBgColor((item / 10000) * 100)
                                        "
                                    >
                                        <div class="d-flex flex-column">
                                            <span class="font-weight-bold">
                                                {{ index }}
                                            </span>
                                            {{ item }} Mbps
                                        </div>
                                    </v-progress-circular>
                                </div>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <v-row class="mx-auto my-auto">
                <v-col cols="12" sm="12" md="4" lg="4">
                    <!-- <settingsHealthChart
                        title="Využití Disku"
                        name="UsedDiskSpace"
                    ></settingsHealthChart> -->
                    <SettingsDashboardNetwork></SettingsDashboardNetwork>
                </v-col>
                <v-col cols="12" sm="12" md="4" lg="4">
                    <settingsHealthChart
                        title="Počet spojení do DB"
                        name="DatabaseConnectionCount"
                    ></settingsHealthChart>
                </v-col>
                <v-col cols="12" sm="12" md="4" lg="4">
                    <settingsHealthChart
                        title="Vytížení CPU"
                        name="CpuLoad"
                    ></settingsHealthChart>
                </v-col>
            </v-row>

            <v-row class="mx-auto my-auto">
                <!-- <v-col cols="12" sm="12" md="8" lg="8">
                    <SettingsDashboardNetwork></SettingsDashboardNetwork>
                </v-col> -->
                <v-col cols="12" sm="12" md="8" lg="8">
                    <!-- prehled poctu aktivních streamů v čase -->
                    <SettingsDashboardStreamsStatuses></SettingsDashboardStreamsStatuses>
                </v-col>

                <!-- prehed problémových streamů -->
                <v-col cols="12" sm="12" md="4" lg="4">
                    <settingsDashboardProblemStrems></settingsDashboardProblemStrems>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import SettingsDashboardStreamsStatuses from "./settingsDashboardStreamsStatuses.vue";
import SettingsDashboardNetwork from "./settingsDashboardNetwork.vue";
import settingsHealthChart from "./settingsHealthChart.vue";
import settingsDashboardProblemStrems from "./settingsDashboardProblemStreams.vue";
export default {
    components: {
        SettingsDashboardStreamsStatuses,
        SettingsDashboardNetwork,
        settingsHealthChart,
        settingsDashboardProblemStrems,
    },
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
                .get("settings/dashboard")
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
                return "HDD";
            }

            if (name == "DatabaseConnectionCount") {
                return "Vytížení Databáze";
            }

            if (name == "Redis") {
                return "Redis cache";
            }

            if (name == "CpuLoad") {
                return "Zatížení CPU";
            }

            return name;
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

        pickBgColor(value) {
            if (value <= 50) {
                return "green";
            }

            if (value > 50 && value <= 75) {
                return "orange";
            }

            if (value > 75) {
                return "red";
            }
        },

        explodeTextAndTakeFirst(data) {
            if (typeof data == "number") {
                return parseFloat(data).toFixed(1);
            }

            let splitedData = data.split(" ");
            return splitedData[0];
        },
    },

    mounted() {
        setInterval(
            function () {
                try {
                    this.index();
                } catch (error) {}
            }.bind(this),
            6000
        );
    },
};
</script>
