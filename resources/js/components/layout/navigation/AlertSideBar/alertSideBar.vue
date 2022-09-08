<template>
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

        <v-navigation-drawer
            v-model="alertSideBar"
            absolute
            temporary
        >
            <v-list-item>
                <v-list-item-avatar>
                    <v-img
                        src="https://randomuser.me/api/portraits/men/78.jpg"
                    ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>John Leider</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            alertSideBar: false,
        };
    },

    created() {},
    methods: {},

    watch: {},
};
</script>
