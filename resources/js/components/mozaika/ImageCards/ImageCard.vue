<template>
    <v-card
        link
        :to="'stream/' + stream.id"
        class="overflow-hidden rounded-lg blur shadow-blur"
        height="120"
        width="230"
    >
        <v-img
            :lazy-src="stream.image"
            :src="stream.image"
            :aspect-ratio="16 / 9"
        >
            <v-container fluid>
                <p
                    class="text-center text-secondary white--text font-weight-medium"
                    v-html="stream.nazev"
                ></p>
                <v-bottom-navigation
                    v-if="
                        stream.audio_pids_errors != 0 ||
                        stream.video_pids_errors != 0
                    "
                    absolute
                    background-color="rgba(12, 22, 38, 0.9)"
                    dense
                >
                    <v-col cols="12" sm="12" md="6" lg="6">
                        <p
                            v-if="stream.audio_pids_errors != 0"
                            class="red--text caption font-weight-bold"
                        >
                            audio errors:

                            {{ stream.audio_pids_errors }}
                        </p>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6">
                        <p
                            v-if="stream.video_pids_errors != 0"
                            class="red--text caption font-weight-bold"
                        >
                            video erros:

                            {{ stream.video_pids_errors }}
                        </p>
                    </v-col>
                </v-bottom-navigation>
            </v-container>
        </v-img>
    </v-card>
</template>
<script>
export default {
    props: ["stream"],
    data() {
        return {
            audioPidErrors: 0,
            videoPidErrors: 0,
        };
    },
    components: {},

    created() {},
    methods: {
        websocketData() {
            Echo.channel("StreamImage" + this.stream.id).listen(
                "BroadcastStreamImageEvent",
                (e) => {
                    this.stream.image = e[0];
                }
            );
        },
    },

    mounted() {
        this.websocketData();
    },
    watch: {
        $route(to, from) {},
    },
    beforeDestroy: function () {},
};
</script>
