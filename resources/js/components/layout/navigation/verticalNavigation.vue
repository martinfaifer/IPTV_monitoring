<template>
    <div>
        <div class="justify-start d-flex" style="position: fixed; z-index: 1">
            <v-img
                class="ml-6"
                height="30"
                width="130"
                link
                @click="returnToHome()"
                src="http://93.91.154.55/storage//logos/png"
                lazy-src="http://93.91.154.55/storage//logos/png"
                style="cursor: pointer"
            >
            </v-img>
        </div>
        <div
            class="justify-end mr-3 d-flex"
            style="position: relative; z-index: 1"
        >
            <div class="justify-end mr-3 d-flex" style="position: fixed">
                <Search></Search>
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
            </div>
        </div>
        <v-navigation-drawer
            style="z-index: 100"
            overlay-color="rgb(17, 27, 45)"
            v-model="alertSideBar"
            absolute
            temporary
            right
            color="#101B2D"
            width="25%"
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
export default {
    components: {
        Search,
        User,
    },
    data() {
        return {
            alertSideBar: false,
            streamsHistory: [],
        };
    },
    created() {
        this.getHistory();
    },
    methods: {
        returnToHome() {
            if (this.$route.path != "/") {
                this.$router.push("/");
            }
        },
        getHistory() {
            axios.get("streams/history").then((response) => {
                this.streamsHistory = response.data;
            });
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
};
</script>
