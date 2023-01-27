<template>
    <div>
        <v-card class="overflow-hidden rounded-lg blur shadow-blur" flat>
            <v-card-text>
                <div class="d-flex justify-space-between ml-6 mr-6">
                    <p class="title">Historie počtu dohledovaných streamů</p>
                    <p class="body-1 font-weight-bold">
                        <span class="green--text">{{ current.active }}</span> /
                        <span class="blue--text">{{ current.stoped }} </span>/
                        <span class="red--text">{{ current.problem }}</span> /
                        <span class="orange--text">{{ current.waiting }}</span>
                    </p>
                </div>

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
            current: [],
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
    },
    methods: {
        index() {
            axios
                .get("settings/dashboard/streams/status-history")
                .then((response) => {
                    this.chartOptions.xaxis.categories =
                        response.data.categories;
                    this.series = response.data.series;
                    this.current = response.data.current;
                });
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
