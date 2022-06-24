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
        return {};
    },

    components: {
        VerticalMenu,
        SnackBarNotification,
    },

    created() {},
    methods: {},

    mounted() {},

    watch: {
        $route(to, from) {},
    },
};
</script>
