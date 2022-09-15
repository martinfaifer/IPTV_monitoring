<template>
    <div>
        <!-- sidebar -->
        <v-navigation-drawer
            style="background: linear-gradient(#192b4b, #000000)"
            v-model="drawer"
            fixed
            app
            class="mt-8"
        >
            <v-list nav dense>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    class="flex fill-height d-flex justify-items-center"
                    :to="item.route"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-container fluid class="mt-3">
            <router-view> </router-view>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            drawer: true,
            items: [
                {
                    title: "Přehled",
                    icon: "mdi-view-dashboard",
                    route: "/user/dashboard",
                },
                {
                    title: "Nastavení mozaiky",
                    icon: "mdi-television-guide",
                    route: "/user/mozaika",
                },
                {
                    title: "Editace",
                    icon: "mdi-pencil",
                    route: "/user/edit",
                },
                {
                    title: "Upozornění",
                    icon: "mdi-bell-ring",
                    route: "/user/notifications",
                },
            ],
        };
    },
    components: {},

    mounted() {},
};
</script>
