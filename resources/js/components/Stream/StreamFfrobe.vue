<template>
    <v-card class="overflow-hidden rounded-lg blur shadow-blur">
        <p class="text-center mt-3">Detail streamu ( ffprobe )</p>
        <v-card-text>
            <v-treeview open-all open-on-click dense hoverable :items="ffprobe">
                <template v-slot:prepend="{ item, open }">
                    <v-icon small>{{ item.file }}</v-icon>
                </template>
            </v-treeview>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            ffprobe: [],
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
                    .get("streams/pids/ffprobe/" + this.$route.params.streamId)
                    .then((response) => {
                        this.ffprobe = response.data;
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
