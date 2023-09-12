<template>
    <div>
        <v-app-bar
            style="
                background: rgba(13, 20, 38, 0.25);
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
                backdrop-filter: blur(4px);
                -webkit-backdrop-filter: blur(4px);
            "
            fixed
            flat
            dense
        >
            <div
                class="justify-start d-flex"
                style="position: fixed; z-index: 1"
            >
                <v-img
                    class="ml-6"
                    height="30"
                    width="130"
                    link
                    @click="returnToHome()"
                    src="storage/logo.png"
                    lazy-src="storage/logo.png"
                    style="cursor: pointer"
                >
                </v-img>
            </div>

            <v-spacer></v-spacer>
            <Search></Search>
            <Weather></Weather>
            <User></User>
            <div class="mx-1">
                <v-tooltip bottom color="#192B4B">
                    <template v-slot:activator="{ on }">
                        <v-btn
                            v-on="on"
                            icon
                            @click.stop="alertSideBar = !alertSideBar"
                        >
                            <v-icon> mdi-bell </v-icon>
                        </v-btn>
                    </template>
                    <span>
                        <v-container>
                            <v-row> Notifikace </v-row>
                        </v-container>
                    </span>
                </v-tooltip>
            </div>
            <v-snackbar
                v-model="snackbar"
                :multi-line="multiLine"
                :timeout="-1"
                top
                centered
                color="rgba(172, 76, 0, 0.9)"
            >
                <span class="font-weight-medium">
                    Vysoké množství streamů s rozhozeným I frame!!!
                </span>
            </v-snackbar>
        </v-app-bar>
        <v-navigation-drawer
            style="z-index: 100"
            v-model="alertSideBar"
            absolute
            temporary
            right
            color="#0b131f"
            :width="screenWidth"
        >
            <p
                class="mt-2 ml-3 text-left caption text--disabled font-weight-medium"
                fixed
            >
                Historie událostí
            </p>
            <v-timeline
                dense
                v-if="streamsHistory.length != 0"
                class="ml-n6 mr-3"
            >
                <v-timeline-item
                    small
                    v-for="streamHistory in streamsHistory"
                    :key="streamHistory.id"
                    :color="getAlertColor(streamHistory.status)"
                    class="overflow-hidden rounded-lg blur"
                >
                    <v-alert
                        :color="getAlertColor(streamHistory.status)"
                        class="overflow-hidden rounded-lg blur text-center my-3"
                        :class="getAlertBlur(streamHistory.status)"
                    >
                        <v-col cols="12">
                            <strong>{{ streamHistory.stream }}</strong> -
                            {{ streamHistory.msg }}
                        </v-col>
                        <v-col cols="12">
                            <small class="caption">{{
                                new Date(streamHistory.created_at)
                            }}</small>
                        </v-col>
                    </v-alert>
                </v-timeline-item>
            </v-timeline>
            <v-timeline v-else dense class="mr-3">
                <v-timeline-item small color="#182948">
                    <v-alert
                        color="#182948"
                        class="overflow-hidden rounded-lg blur shadow-blur-warning-blue-alert text-center my-3"
                    >
                        <strong>Není zde žádná nová událost</strong>
                    </v-alert>
                </v-timeline-item>
            </v-timeline>
        </v-navigation-drawer>
    </div>
</template>
<script>
import Search from "./Search/search.vue";
import User from "./User/user.vue";
import Weather from "./Weather/Weather.vue";
export default {
    components: {
        Search,
        User,
        Weather,
    },
    data() {
        return {
            alertSideBar: false,
            streamsHistory: [],
            screenWidth: "25%",
            multiLine: false,
            snackbar: false,
        };
    },
    created() {
        this.index();
        this.checkNumberOfPtsProblemStreams();
    },
    methods: {
        index() {
            axios.get("streams/history").then((response) => {
                this.streamsHistory = response.data;
            });
        },

        checkNumberOfPtsProblemStreams() {
            axios.get("streams/pts-problems").then((response) => {
                if (response.data.length > 10) {
                    this.snackbar = true;
                } else {
                    this.snackbar = false;
                }
            });
        },

        websocketData() {
            Echo.channel("StreamHistoryStatuses").listen(
                "BroadcastStreamsHistoryStatusEvent",
                (e) => {
                    console.log(e);
                    this.streamsHistory = e[0];
                }
            );
        },

        returnToHome() {
            if (this.$route.path != "/") {
                this.$router.push("/");
            }
        },

        getAlertColor(status) {
            if (status == "starting") {
                return "#182948";
            }

            if (status == "monitoring") {
                return "#182948";
            }

            if (status == "waiting") {
                return "#182948";
            }

            if (status == "stopped") {
                return "#182948";
            }

            if (status == "can_not_start") {
                return "red";
            }

            if (status == "stop") {
                return "orange";
            }

            if (status == "error") {
                return "red";
            }

            if (status == "issue") {
                return "red";
            }
        },

        getAlertBlur(status) {
            if (status == "starting") {
                return "shadow-blur-warning-blue-alert";
            }

            if (status == "monitoring") {
                return "shadow-blur-warning-blue-alert";
            }

            if (status == "waiting") {
                return "shadow-blur-warning-blue-alert";
            }

            if (status == "stopped") {
                return "shadow-blur-warning-blue-alert";
            }

            if (status == "can_not_start") {
                return "shadow-blur-error-alert";
            }

            if (status == "error") {
                return "shadow-blur-error-alert";
            }

            if (status == "stop") {
                return "shadow-blur-warning";
            }

            if (status == "issue") {
                return "shadow-blur-error-alert";
            }
        },
    },

    mounted() {
        this.websocketData();
        window.addEventListener("resize", () => {
            if (window.innerWidth >= "1024") {
                this.screenWidth = "35%";
            } else {
                this.screenWidth = "100%";
            }
        });

        setInterval(
            function () {
                try {
                    this.checkNumberOfPtsProblemStreams();
                } catch (error) {}
            }.bind(this),
            6000
        );
    },

    watch: {
        screenWidth() {
            console.log(window.screen.width);
            // this.sideBarWidth();
        },
    },
};
</script>
