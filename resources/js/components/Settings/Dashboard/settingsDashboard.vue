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
            <!-- prehled zatížení RAM -->

            <!-- prehled poctu aktivních streamů v čase -->
            <v-col cols="12" sm="12" md="12" lg="12" class="pt-6">
                <v-card
                    class="overflow-hidden rounded-lg blur shadow-blur"
                    flat
                >
                    <v-card-text>
                        <p class="title text-center">
                            Historie počtu dohledovaných streamů
                        </p>
                        <apexchart
                            dark
                            class="info--text"
                            v-cloak
                            height="200"
                            type="area"
                            :options="chartOptions"
                            :series="series"
                            ref="chart"
                        ></apexchart>
                    </v-card-text>
                </v-card>
            </v-col>
            <!-- naposledy nefunkční streamy -->
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [],
            chartOptions: {
                legend: {
                    show: false,
                },
                dataLabels: {
                    enabled: false,
                },
                chart: {
                    toolbar: {
                        show: false,
                    },
                    type: "area",
                    animations: {
                        enabled: false,
                        easing: "linear",
                        dynamicAnimation: {
                            speed: 1000,
                        },
                    },
                },
                xaxis: {
                    show: true,
                    categories: [],
                },
                yaxis: {
                    show: true,
                },
            },
            series: [],
        };
    },

    created() {
        this.index();
        this.getStreamHistoryStatuses();
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

        getStreamHistoryStatuses() {
            axios
                .get("settings/dashboard/streams/status-history")
                .then((response) => {
                    this.chartOptions.xaxis.categories =
                        response.data.categories;
                    this.series = response.data.series;
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

        async websocketData() {
            await Echo.channel("StreamsStoredStatuses").listen(
                "BroadcastStoredStreamStatusesEvent",
                (e) => {
                    this.chartOptions.xaxis.categories = e.categories;
                    this.series = e.series;
                }
            );
        },
    },

    mounted() {
        this.websocketData();
    },
};
</script>
