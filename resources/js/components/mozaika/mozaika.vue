<template>
    <div class="pt-3">
        <ErrorStreamMozaika></ErrorStreamMozaika>
        <ProblemStreamMozaika></ProblemStreamMozaika>
        <v-container fluid>
            <p class="text-left caption text--disabled font-weight-medium">
                Dynamická mozaika
            </p>

            <v-row class="mx-auto mt-1">
                <v-col v-for="stream in streams" :key="stream.id" class="my-2">
                    <ImageCard :stream="stream"></ImageCard>
                </v-col>
            </v-row>
        </v-container>
        <v-bottom-navigation fixed background-color="transparent">
            <v-pagination
                class="mx-auto"
                color="#192B4A"
                style="color: #192b4a"
                v-model="pagination.current"
                :length="pagination.total"
                @input="onPageChange()"
            ></v-pagination>
        </v-bottom-navigation>
    </div>
</template>

<script>
import ErrorStreamMozaika from "./ErrorStreamMozaika.vue";
import ProblemStreamMozaika from "./ProblemStreamMozaika.vue";
import ImageCard from "./ImageCards/ImageCard.vue"
export default {
    metaInfo: {
        title: "IPTV Dohled - mozaika",
    },

    data() {
        return {
            streams: [],
            paginationInterval: null,
            pagination: {
                current: 1,
                total: 0,
            },
        };
    },
    components: {
        ErrorStreamMozaika,
        ProblemStreamMozaika,
        ImageCard
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios
                .get("streams/running?page=" + this.pagination.current)
                .then((response) => {
                    this.streams = response.data.data;
                    this.pagination.current = response.data.current_page;
                    this.pagination.total = response.data.last_page;
                });
        },

        getStreamImage(streamId) {
            axios.get("streams/image/" + streamId).then((response) => {
                return response.data;
            });
        },

        onPageChange() {
            this.index();
        },

         websocketData() {
            Echo.channel("RunningStreams").listen(
                "BroadcastMonitoredStreamsEvent",
                (e) => {
                    this.onPageChange();
                }
            );
        },
    },

    mounted() {
        this.websocketData();
        this.paginationInterval = setInterval(
            function () {
                try {
                    if (this.pagination.current <= this.pagination.total - 1) {
                        this.pagination.current = this.pagination.current + 1;
                        this.index();
                    } else {
                        this.pagination.current = 1;
                        this.index();
                    }
                } catch (error) {}
            }.bind(this),
            30000
        );
    },
    watch: {
        $route(to, from) {
            this.paginationInterval;
        },
    },
    beforeDestroy: function () {},
};
</script>
