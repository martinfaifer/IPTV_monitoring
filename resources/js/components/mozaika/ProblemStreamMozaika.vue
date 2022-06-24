<template>
    <div>
        <v-container fluid v-if="count != 0">
            <p class="text-left caption text--disabled font-weight-medium">
                Problémové kanály
                <span class="red--text">{{ count }}</span>
            </p>
            <v-row class="mx-auto mt-1">
                <v-col
                    v-for="stream in problemStreans"
                    :key="stream.id"
                    class="my-2"
                >
                    <ProblemImageCard :stream="stream"></ProblemImageCard>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import ProblemImageCard from "./ImageCards/problemImageCard.vue";
export default {
    data() {
        return {
            count: 0,
            problemStreans: null,
        };
    },

    created() {
        this.index();
    },

    components: {
        ProblemImageCard,
    },

    methods: {
        index() {
            axios.get("streams/problems").then((response) => {
                if (response.data.length > 0) {
                    this.problemStreans = response.data;
                    this.count = response.data.length;
                } else {
                    this.problemStreans = null;
                    this.count = 0;
                }
            });
        },

        // websocketData() {
        //     Echo.channel("RunningStreams").listen(
        //         "BroadcastMonitoredStreamsEvent",
        //         (e) => {
        //             if (e[0].length > 0) {
        //                 this.problemStreans = e[0];
        //                 this.count = e[0].length;
        //             } else {
        //                 this.problemStreans = null;
        //                 this.count = 0;
        //             }
        //         }
        //     );
        // },
    },

    mounted() {
        // this.websocketData();
    },
    // mounted() {
    //     setInterval(
    //         function () {
    //             try {
    //                 this.index();
    //             } catch (error) {}
    //         }.bind(this),
    //         2000
    //     );
    // },
};
</script>
