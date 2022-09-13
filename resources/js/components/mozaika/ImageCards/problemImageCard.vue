<template>
    <v-card
        link
        :to="'stream/' + stream.stream.id"
        class="overflow-hidden rounded-lg blur shadow-blur shadow-blur-warning"
        height="100"
        width="210"
    >
        <v-img
            :lazy-src="stream.image"
            :src="stream.image"
            :aspect-ratio="16 / 9"
            gradient="to top right, rgba(251, 140, 0, 0.9), rgba(251, 140, 0, 0.5)"
        >
            <v-container fluid>
                <p
                    class="text-center text-secondary white--text font-weight-medium"
                    v-html="stream.stream.nazev"
                ></p>
                <p
                    style="background-color: rgba(255, 0, 0, 0.5)"
                    class="text-center caption white--text font-weight-medium"
                    v-for="error in stream.errors"
                    :key="error"
                >
                    {{ error.message }}
                </p>
            </v-container>
        </v-img>
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
            Echo.channel("StreamImage" + this.stream.stream.id).listen(
                "BroadcastStreamImageEvent",
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
