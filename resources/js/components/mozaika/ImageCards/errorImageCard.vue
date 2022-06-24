<template>
    <v-card
        link
        :to="'stream/' + stream.id"
        class="overflow-hidden rounded-lg blur shadow-blur-error"
        height="120"
        width="230"
        color="#EF5350"
    >
        <v-card-text>
            <p class="text-center title white--text" v-html="stream.nazev"></p>
            <v-col cols="12" sm="12" md="12" lg="12">
                <div class="ml-1">
                    <strong class="white--text" v-text="stream.msg"> </strong>
                </div>
            </v-col>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    props: ["stream"],
    data() {
        return {};
    },
    components: {},

    created() {},
    methods: {
        websocketData() {
            Echo.channel("StreamImage" + this.stream.id).listen(
                "StreamImage",
                (e) => {
                    this.stream.image = e[0];
                }
            );
        },
    },

    mounted() {
        this.websocketData();
    },
    watch: {
        $route(to, from) {},
    },
    beforeDestroy: function () {},
};
</script>
