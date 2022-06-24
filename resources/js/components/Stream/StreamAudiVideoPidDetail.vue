<template>
    <div>
        <v-card class="overflow-hidden rounded-lg blur shadow-blur">
            <p class="text-center mt-3">
                Informace o audio / video pidech
                <v-btn
                    @click="showFfmpegDetail = !showFfmpegDetail"
                    x-small
                    text
                    plain
                    outlined
                    color="info"
                    class="mx-12"
                >
                <span v-if="showFfmpegDetail == false">
                    Zobrazit detail o pidech z ffmpeg
                </span>
                <span v-else>
                    Zakrýt detail o pidech z ffmpegu
                </span>
                </v-btn>
            </p>
            <v-card-text>
                <v-container fluid>
                    <p class="subtitle-1">Audio pidy</p>
                    <v-row class="caption">
                        <v-col
                            cols="12"
                            sm="12"
                            :md="countGrid(audioPids)"
                            :lg="countGrid(audioPids)"
                            class="white--text"
                            v-for="audioPid in audioPids"
                            :key="audioPid"
                        >
                            <span
                                v-for="(
                                    ffprobeAudio, ffprobeAudioKey
                                ) in lisFfprobeAudioPids[audioPid.pid]"
                                :key="ffprobeAudio"
                            >
                                <p
                                    v-if="
                                        ffprobeAudioKey != 'disposition' &&
                                        ffprobeAudioKey != 'tags'
                                    "
                                >
                                    <span v-if="showFfmpegDetail == true">
                                        {{ ffprobeAudioKey }}:
                                        {{ ffprobeAudio }}
                                    </span>
                                </p>
                            </span>
                            <span
                                v-for="(audio, audioPidKey) in audioPid"
                                :key="audioPidKey"
                            >
                                <p>
                                    {{ audioPidKey }}:
                                    <span
                                        :class="
                                            checkIfIsProblem(audio, audioPidKey)
                                        "
                                    >
                                        {{ audio }}
                                    </span>
                                </p>
                            </span>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="12"
                            :md="countGrid(audioPids)"
                            :lg="countGrid(audioPids)"
                            v-for="audioPid in listAudioPids"
                            :key="audioPid"
                        >
                            <StreamAllDiscontinutiesErrors
                                :pid="audioPid"
                            ></StreamAllDiscontinutiesErrors>
                            <AreaChart :pidsData="audioPid"></AreaChart>
                        </v-col>
                    </v-row>
                    <v-divider class="py-3 ml-3 mr-3"></v-divider>
                    <p class="subtitle-1">Video pidy</p>
                    <v-row class="caption">
                        <v-col
                            cols="12"
                            sm="12"
                            :md="countGrid(videoPids)"
                            :lg="countGrid(videoPids)"
                            class="white--text"
                            v-for="videoPid in videoPids"
                            :key="videoPid"
                        >
                            <span
                                v-for="(video, videoPidKey) in videoPid"
                                :key="videoPidKey"
                            >
                                <p>
                                    {{ videoPidKey }}:
                                    <span
                                        :class="
                                            checkIfIsProblem(video, videoPidKey)
                                        "
                                    >
                                        {{ video }}
                                    </span>
                                </p>
                            </span>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="12"
                            :md="countGrid(videoPids)"
                            :lg="countGrid(videoPids)"
                            v-for="videoPid in listVideoPids"
                            :key="videoPid"
                        >
                            <StreamAllDiscontinutiesErrors
                                :pid="videoPid"
                            ></StreamAllDiscontinutiesErrors>
                            <AreaChart :pidsData="videoPid"></AreaChart>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
let AreaChart = () => import("./Charts/AreaChart.vue");
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
