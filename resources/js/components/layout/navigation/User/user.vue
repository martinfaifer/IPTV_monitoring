<template>
    <div class="mx-1">

        <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on }">
                <v-btn v-on="on" icon>
                    <v-icon> mdi-account </v-icon>
                </v-btn>
            </template>
            <v-list width="200px" color="#192B4B" class="text-center caption">
                <v-list-item link to="/user/prehled">
                    Uživatelský účet
                    <v-spacer></v-spacer
                    ><v-icon color="blue" right x-small
                        >mdi-account-cog-outline</v-icon
                    >
                </v-list-item>
                <v-list-item link to="/settings/dashboard">
                    Nastavení<v-spacer></v-spacer
                    ><v-icon color="green" right x-small>mdi-settings</v-icon>
                </v-list-item>
                <v-divider class="ml-2 mr-2"></v-divider>
                <v-list-item @click="logOut()">
                    Odhlásit se
                    <v-spacer></v-spacer
                    ><v-icon color="red" right x-small>mdi-lock</v-icon>
                </v-list-item>
                <v-divider class="ml-2 mr-2"></v-divider>
                <v-list-item class="caption">
                    <small class="indigo--text">
                        Verze {{ systemVersion }}
                    </small>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {};
    },

    created() {},
    methods: {},

    watch: {},
};
</script>
