<template>
    <div>
        <v-card class="overflow-hidden rounded-lg blur shadow-blur">
            <p class="text-center mt-3">Informace o audio / video pidech</p>
            <v-card-text>
                <v-container fluid>
                    <v-row>
                        <v-col cols="12">
                            <p class="subtitle-1 font-weight-bold">
                                Audio pidy
                            </p>
                        </v-col>
                        <!-- audio content -->

                        <v-col
                            cols="12"
                            sm="12"
                            md="12"
                            lg="12"
                            v-for="audioPid in audioPids"
                            :key="audioPid.pid"
                        >
                            <v-row>
                                <v-col cols="12" sm="12" md="3" lg="3">
                                    Pid:
                                    <span class="font-weight-bold mx-2">{{
                                        audioPid.pid
                                    }}</span>
                                </v-col>
                                <v-col cols="12" sm="12" md="3" lg="3">
                                    Jazyková stopa:
                                    <span class="font-weight-bold mx-2">{{
                                        audioPid.language
                                    }}</span>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="6">
                                    Popis:
                                    <span class="font-weight-bold mx-2">{{
                                        audioPid.description
                                    }}</span>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="12"
                                    md="5"
                                    lg="5"
                                    class="d-inline-flex"
                                >
                                    Chyby:
                                    <StreamAllDiscontinutiesErrors
                                        class="mx-3"
                                        :pid="audioPid.pid"
                                    ></StreamAllDiscontinutiesErrors>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <AreaChart
                                        :pidsData="audioPid.pid"
                                    ></AreaChart>
                                </v-col>
                            </v-row>
                        </v-col>
                        <!-- end of audio content -->
                    </v-row>
                    <!-- end of table -->
                    <v-row>
                        <v-col cols="12">
                            <p class="subtitle-1 font-weight-bold">
                                Video pidy
                            </p>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="12"
                            md="12"
                            lg="12"
                            v-for="videoPid in videoPids"
                            :key="videoPid.pid"
                        >
                            <v-row>
                                <v-col cols="12" sm="12" md="3" lg="3">
                                    Pid:
                                    <span class="font-weight-bold mx-2">{{
                                        videoPid.pid
                                    }}</span>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="12"
                                    md="3"
                                    lg="3"
                                    class="d-inline-flex"
                                >
                                    Chyby:
                                    <StreamAllDiscontinutiesErrors
                                        class="mx-3"
                                        :pid="videoPid.pid"
                                    ></StreamAllDiscontinutiesErrors>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="6">
                                    Popis:
                                    <span class="font-weight-bold mx-2">{{
                                        videoPid.description
                                    }}</span>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <AreaChart
                                        :pidsData="videoPid.pid"
                                    ></AreaChart>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import AreaChart from "./Charts/AreaChart.vue";
let StreamAllDiscontinutiesErrors = () =>
    import("./streamAllDiscontinutiesErrors.vue");
export default {
    data() {
        return {
            showFfmpegDetail: false,
            audioPids: [],
            videoPids: [],
            listAudioPids: [],
            lisFfprobeAudioPids: [],
            listVideoPids: [],
            lisFfprobeVideoPids: [],
        };
    },
    components: {
        AreaChart,
        StreamAllDiscontinutiesErrors,
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios
                .get("streams/pids/audio/" + this.$route.params.streamId)
                .then((response) => {
                    this.audioPids = response.data;
                    for (const audioPid in this.audioPids) {
                        if (
                            Object.hasOwnProperty.call(this.audioPids, audioPid)
                        ) {
                            this.listAudioPids.push(
                                this.audioPids[audioPid]["pid"]
                            );
                        }
                    }
                });
            axios
                .get("streams/pids/video/" + this.$route.params.streamId)
                .then((response) => {
                    this.videoPids = response.data;
                    for (const videoPid in this.videoPids) {
                        if (
                            Object.hasOwnProperty.call(this.videoPids, videoPid)
                        ) {
                            this.listVideoPids.push(
                                this.videoPids[videoPid]["pid"]
                            );
                        }
                    }
                });
        },
        countGrid(pidsArray) {
            if (Object.keys(pidsArray).length == 1) {
                return 12;
            }
            return 6;
        },
        async websocketPidsData() {
            await Echo.channel(
                "StreamAudioVideoPids" + this.$route.params.streamId
            ).listen("BroadcastAudioVideoStreamPidsEvent", (e) => {
                console.log(e);
                this.$root.$emit("update_pid_bitrate_charts", "update");
                this.videoPids = e.videoPids;
                this.lisFfprobeAudioPids = e.audioFfmpegPids;
                this.audioPids = e.audioPids;
                this.lisFfprobeVidoPids = e.videoFfmpegPids;
            });
        },
        checkIfIsProblem(value, key) {
            if (key == "access") {
                if (value == "clear") {
                    return "green--text";
                }

                if (value == "scrambled") {
                    return "red--text";
                }
            }

            if (key == "scrambled") {
                if (value == 0) {
                    return "green--text";
                }
                return "red--text";
            }

            if (key == "discontinuities") {
                if (value == 0) {
                    return "green--text";
                }
                return "red--text";
            }

            if (key == "pid") {
                return "font-weight-bold";
            }
        },
    },

    computed: {},

    mounted() {
        this.websocketPidsData();
    },
    watch: {
        $route(to, from) {
            this.index();
            window.Echo.leave(
                "StreamAudioVideoPids" + this.$route.params.streamId
            );
            this.websocketPidsData();
        },
    },

    beforeDestroy: function () {
        window.Echo.leave("StreamAudioVideoPids" + this.$route.params.streamId);
    },
};
</script>
