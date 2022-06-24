<template>
    <div>
        <p :class="checkNumberOfDiscontinuites()">
            Celkový počet Discontinuity Errorů u Pidu {{ pid }}:
            <span v-cloak>{{ discontinuityErros }}</span>
            <v-btn small icon color="#328AF1" @click="resetErrors()"
                ><v-icon small> mdi-restore </v-icon></v-btn
            >
        </p>
    </div>
</template>
<script>
export default {
    props: ["pid"],
    data() {
        return {
            discontinuityErros: "",
        };
    },
    components: {},

    created() {
        this.getDiscontinuity();
    },
    methods: {
        resetErrors() {
            axios
                .post(
                    "streams/pids/discontinuity/" +
                        this.$route.params.streamId +
                        "/" +
                        this.pid
                )
                .then((response) => {
                    this.discontinuityErros = response.data;
                });
        },
        websocketData() {
            Echo.channel(
                "streamDiscontinuityPidErrors_" +
                    this.pid +
                    "_" +
                    this.$route.params.streamId
            ).listen("StreamDiscontinuityPidErrorsEvent", (e) => {
                this.discontinuityErros = e[0];
            });
        },
        checkNumberOfDiscontinuites() {
            if (this.discontinuityErros == 0) {
                return "green--text";
            }

            return "red--text font-weight-bold";
        },

        getDiscontinuity() {
            axios
                .get(
                    "streams/pids/discontinuity/" +
                        this.$route.params.streamId +
                        "/" +
                        this.pid
                )
                .then((response) => {
                    this.discontinuityErros = response.data;
                });
        },
    },

    computed: {},
    mounted() {
        this.websocketData();
        this.checkNumberOfDiscontinuites();
    },
    watch: {
        $route(to, from) {
            this.websocketData();
        },
    },
    beforeDestroy: function () {},
};
</script>
