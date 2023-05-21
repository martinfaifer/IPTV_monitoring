<template>
    <div>
        <v-container fluid v-if="count != 0">
            <p
                class="text-left subtitle-2 text--disabled font-weight-medium ml-3"
            >
                Nefunkční kanály
                <span class="red--text subtitle-1 font-weight-black mx-3">{{
                    count
                }}</span>
            </p>
            <v-row class="mx-auto mt-1">
                <v-col
                    v-for="stream in errorStreams"
                    :key="stream.id"
                    class="my-2"
                >
                    <ErrorImageCard
                        v-if="hideCards == false"
                        :stream="stream"
                    ></ErrorImageCard>
                </v-col>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            @click="changeVisibility()"
                            bottom
                            right
                            fab
                            small
                            color="blue"
                            v-on="on"
                        >
                            <v-icon v-if="hideCards == false">mdi-eye</v-icon>
                            <v-icon v-else>mdi-eye-off</v-icon>
                        </v-btn>
                    </template>
                    <span>Schovat nebo zviditelnit padlé streamy</span>
                </v-tooltip>
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
            hideCards: false,
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

        changeVisibility() {
            this.hideCards = !this.hideCards;
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
        setInterval(
            function () {
                try {
                    this.index();
                } catch (error) {}
            }.bind(this),
            5000
        );
    },
};
</script>
