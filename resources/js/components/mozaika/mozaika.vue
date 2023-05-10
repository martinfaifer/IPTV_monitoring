<template>
    <div class="mt-12">
        <div>
            <ErrorStreamMozaika></ErrorStreamMozaika>
            <ProblemStreamMozaika></ProblemStreamMozaika>
            <CustomMozaika></CustomMozaika>
            <v-container fluid>
                <p
                    class="text-left subtitle-2 text--disabled font-weight-medium ml-3"
                >
                    Dynamická mozaika
                </p>

                <v-row class="mx-auto mt-1">
                    <v-col
                        v-for="stream in streams"
                        :key="stream.id"
                        class="my-2"
                    >
                        <ImageCard :stream="stream"></ImageCard>
                    </v-col>
                </v-row>
            </v-container>
            <v-bottom-navigation
                fixed
                style="
                    background: rgba(13, 25, 44, 0.25);
                    box-shadow: 0 8px 32px 0 rgba(17, 27, 45, 0.37);
                    backdrop-filter: blur(4px);
                    -webkit-backdrop-filter: blur(4px);
                "
            >
                <v-pagination
                    class="mx-auto"
                    v-model="pagination.current"
                    :length="pagination.total"
                    @input="onPageChange()"
                ></v-pagination>
            </v-bottom-navigation>
        </div>
    </div>
</template>

<script>
import CustomMozaika from "./CustomMozaika.vue";
import ErrorStreamMozaika from "./ErrorStreamMozaika.vue";
import ProblemStreamMozaika from "./ProblemStreamMozaika.vue";
import ImageCard from "./ImageCards/ImageCard.vue";
export default {
    metaInfo: {
        title: "IPTV Dohled - mozaika",
    },

    data() {
        return {
            pageLoading: true,
            streams: [],
            paginationInterval: null,
            pagination: {
                current: 1,
                total: 0,
            },
        };
    },
    components: {
        CustomMozaika,
        ErrorStreamMozaika,
        ProblemStreamMozaika,
        ImageCard,
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            this.pageLoading = true;
            axios
                .get("streams/running?page=" + this.pagination.current)
                .then((response) => {
                    this.streams = response.data.data;
                    this.pagination.current = response.data.current_page;
                    this.pagination.total = response.data.last_page;
                    this.pageLoading = false;
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
