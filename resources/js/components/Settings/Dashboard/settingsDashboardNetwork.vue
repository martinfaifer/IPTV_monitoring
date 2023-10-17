<template>
    <div>
        <v-card class="overflow-hidden rounded-lg blur shadow-blur" flat>
            <v-card-subtitle>
                <p class="mt-3 text-center body-1 font-weight-bold">
                    Vytížení sítě
                </p>
            </v-card-subtitle>
            <v-card-text>
                <v-container fluid>
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
                </v-container>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
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
                    // type: "datetime",
                    categories: [],
                    // convertedCatToNumeric: false,
                    tickPlacement: "between",
                },
                // tooltip: {
                //     x: {
                //         format: "dd/MM/yy HH:mm",
                //     },
                // },
                yaxis: {
                    show: true,
                },
            },
            series: [],
        };
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios.get("settings/dashboard/network-speed").then((response) => {
                this.chartOptions.xaxis.categories = response.data.categories;
                this.series = response.data.series;
            });
        },
    },

    mounted() {},
};
</script>
