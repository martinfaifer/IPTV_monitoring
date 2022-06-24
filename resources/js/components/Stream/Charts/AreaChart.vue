<template>
    <div>
        <p class="caption font-weight-bold">Datový tok u Pidu {{ pidsData }}</p>
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
    </div>
</template>
<script>
export default {
    props: ["pidsData"],
    data() {
        return {
            chartOptions: {
                dataLabels: {
                    enabled: true,
                },
                colors: ["#3490dc"],
                chart: {
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
                    show: false,
                    labels: {
                        show: false,
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
            if (this.pidsData != undefined) {
                await axios
                    .get(
                        "streams/charts/" +
                            this.$route.params.streamId +
                            "/" +
                            this.pidsData
                    )
                    .then((response) => {
                        this.chartOptions.xaxis.categories = response.xaxis;
                        this.series = response.data.seriesData;
                    });
            }
        },
    },

    computed: {},
    mounted() {
        this.$root.$on("update_pid_bitrate_charts", (update) => {
            if (this.$route.params.streamId) {
                this.index();
            }
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
