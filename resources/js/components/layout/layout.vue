<template>
    <v-app>
        <div>
            <VerticalMenu></VerticalMenu>
            <SnackBarNotification></SnackBarNotification>
            <v-main app>
                <v-container fluid class="mx-auto">
                    <!-- <notification></notification> -->
                    <router-view> </router-view>
                </v-container>
            </v-main>
        </div>
    </v-app>
</template>
<script>
import VerticalMenu from "./navigation/verticalNavigation.vue";
import SnackBarNotification from "./navigation/Notifications/snackbarNotification.vue";

export default {
    computed: {},
    data() {
        return {
            user: [],
        };
    },

    components: {
        VerticalMenu,
        SnackBarNotification,
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios
                .get("users/user")
                .then((response) => {
                    this.user = response.data;
                })
                .catch((error) => {
                    if (error.response.status == "401") {
                        this.$router.push("/login");
                    }
                });
        },
    },

    mounted() {},

    watch: {
        $route(to, from) {},
    },
};
</script>
