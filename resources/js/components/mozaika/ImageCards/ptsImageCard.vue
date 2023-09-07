<template>
    <v-card
        link
        :to="'stream/' + stream.stream.id"
        class="overflow-hidden rounded-lg blur shadow-blur shadow-blur-warning"
        height="100"
        width="210"
    >
        <v-img
            :aspect-ratio="16 / 9"
            gradient="to top right, rgba(172, 76, 0, 0.9), rgba(172, 76, 0, 0.5)"
        >
            <v-container fluid>
                <p
                    class="text-center text-secondary white--text font-weight-medium"
                    v-html="stream.stream.nazev"
                ></p>
                <p
                    style="background-color: rgba(255, 0, 0, 0.5)"
                    class="text-center caption white--text font-weight-medium"
                >
                    Problém s I frame
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
    methods: {},

    mounted() {},
    watch: {
        $route(to, from) {},
    },
    beforeDestroy: function () {},
};
</script>
