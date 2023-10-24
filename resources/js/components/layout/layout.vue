<template>
    <v-app>
        <div>
            <VerticalMenu></VerticalMenu>
            <!-- notifikace pro uzivatele z rozhraní o provedení akcí -->
            <pernamentSnackBarNotification></pernamentSnackBarNotification>
            <SnackBarNotification></SnackBarNotification>
            <v-main>
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
import pernamentSnackBarNotification from "./navigation/Notifications/pernamentSnackBarNotification.vue";

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
        pernamentSnackBarNotification
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
