<template>
    <v-card class="overflow-hidden rounded-lg blur shadow-blur">
        <p class="text-center mt-3">Informace z IPTV Dokumentace</p>
        <v-card-text>
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <v-img
                            :lazy-src="iptvDokuData.logo"
                            :src="iptvDokuData.logo"
                            :aspect-ratio="16 / 9"
                            width="120"
                        >
                        </v-img>
                    </v-col>
                    <v-col cols="12">
                        <span> Žánr: {{ iptvDokuData.kategorie }} </span>
                    </v-col>
                    <v-divider></v-divider>
                    <v-col v-if="iptvDokuData.devices.source != null" cols="">
                        <p class="text-center caption">Přijímač</p>
                        {{ iptvDokuData.devices.source }}
                    </v-col>
                    <v-col v-if="iptvDokuData.devices.multiplexor != null">
                        <p class="text-center caption">Multiplexor</p>
                        {{ iptvDokuData.devices.multiplexor }}
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            iptvDokuData: [],
        };
    },
    components: {},

    created() {
        this.index();
    },
    methods: {
        index() {
            if (this.$route.params.streamId) {
                axios
                    .get("streams/iptvdoku/" + this.$route.params.streamId)
                    .then((response) => {
                        this.iptvDokuData = response.data.data;
                    });
            }
        },
    },

    mounted() {},
    watch: {
        $route(to, from) {
            this.index();
        },
    },
    beforeDestroy: function () {
        this.index();
    },
};
</script>
