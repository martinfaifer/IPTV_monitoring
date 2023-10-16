<template>
    <div>
        <apexchart
            dark
            class="info--text"
            v-cloak
            type="area"
            :options="chartOptions"
            :series="series"
            ref="chart"
            height="180"
        ></apexchart>
    </div>
</template>
<script>
export default {
    props: ["pidsData"],
    data() {
        return {
            chartOptions: {
                dataLabels: {
                    enabled: false,
                },
                grid: {
                    show: true,
                },
                noData: {
                    text: "Načítání dat...",
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.1,
                        opacityTo: 0.4,
                        stops: [0, 90, 100],
                    },
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
                    show: false,
                    categories: [],
                    labels: {
                        show: false,
                    },
                },
                yaxis: {
                    show: true,
                    labels: {
                        show: true,
                    },
                },
            },
            series: [],
        };
    },
    components: {},

    created() {},
    methods: {
        async index() {
            // if (this.pidsData != undefined) {
                await axios
                    .get(
                        "streams/charts/" +
                            this.$route.params.streamId +
                            "/" +
                            this.pidsData
                    )
                    .then((response) => {
                        console.log(response.data);
                        this.chartOptions.xaxis.categories =
                            response.data.xaxis;
                        this.series = response.data.seriesData;
                    });
            // }
        },
    },

    computed: {},
    mounted() {
        this.$root.$on("update_pid_bitrate_charts", (update) => {
            if (this.$route.params.streamId) {
                this.index();
            }
        });

        this.$nextTick(() => {
            window.dispatchEvent(new Event("resize"));
        });
    },
    watch: {
        $route(to, from) {
            this.index();
        },
    },
    beforeDestroy: function () {},
};
</script>
