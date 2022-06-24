<template>
    <v-card class="overflow-hidden rounded-lg blur shadow-blur">
        <v-img
            :lazy-src="streamImageUrl"
            :src="streamImageUrl"
            :aspect-ratio="16 / 9"
        >
        </v-img>
    </v-card>
</template>
<script>
export default {
    props: ["streamImageUrl"],
    data() {
        return {};
    },
    components: {},

    created() {},
    methods: {
        async websocketData() {
            await Echo.channel(
                "StreamImage" + this.$route.params.streamId
            ).listen("BroadcastStreamImageEvent", (e) => {
                this.streamImageUrl = null;
                setTimeout(() => {
                    this.streamImageUrl = e[0];
                }, 1000);
            });
        },
    },

    mounted() {
        this.websocketData();
    },
    watch: {
        $route(to, from) {
            this.websocketData();
        },
    },
    beforeDestroy: function () {
        window.Echo.leave("StreamImage" + this.$route.params.streamId);
    },
};
</script>
