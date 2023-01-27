<template>
    <div>
        <v-card class="overflow-hidden rounded-lg blur shadow-blur" flat>
            <v-card-text>
                <p class="title text-center">Vytížení sítě</p>
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
                    categories: [],
                    labels: {
                        show: true,
                    },
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
