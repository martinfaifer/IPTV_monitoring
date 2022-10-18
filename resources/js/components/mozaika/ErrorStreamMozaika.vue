<template>
    <div>
        <v-container fluid v-if="count != 0">
            <p class="text-left caption text--disabled font-weight-medium">
                Nefunkční kanály
                <span class="red--text">{{ count }}</span>
            </p>
            <v-row class="mx-auto mt-1">
                <v-col
                    v-for="stream in errorStreams"
                    :key="stream.id"
                    class="my-2"
                >
                    <ErrorImageCard :stream="stream"></ErrorImageCard>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import ErrorImageCard from "./ImageCards/errorImageCard.vue";
export default {
    data() {
        return {
            count: 0,
            errorStreams: null,
        };
    },

    created() {
        this.index();
    },

    components: {
        ErrorImageCard,
    },

    methods: {
        index() {
            axios.get("streams/not-running").then((response) => {
                if (response.data.length > 0) {
                    this.errorStreams = response.data;
                    this.count = response.data.length;
                } else {
                    this.errorStreams = null;
                    this.count = 0;
                }
            });
        },

        websocketData() {
            Echo.channel("ErrorStreams").listen(
                "BroadcastErrorStreamsEvent",
                (e) => {
                    if (e[0].length > 0) {
                        this.errorStreams = e[0];
                        this.count = e[0].length;
                    } else {
                        this.errorStreams = null;
                        this.count = 0;
                    }
                }
            );
        },
    },

    mounted() {
        this.websocketData();
    },
};
</script>
