<template>
    <div>
        <v-container fluid v-if="customStreams.length != 0">
            <p class="text-left caption text--disabled font-weight-medium">
                Uživatelem nadefinované kanály
            </p>
            <v-row class="mx-auto mt-1">
                <v-col
                    v-for="stream in customStreams"
                    :key="stream.id"
                    class="my-2"
                >
                    <ImageCard :stream="stream"></ImageCard>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import ImageCard from "./ImageCards/ImageCard.vue";
export default {
    data() {
        return {
            customStreams: null,
        };
    },

    created() {
        this.index();
    },

    components: {
        ImageCard,
    },

    methods: {
        index() {
            axios.get("streams/custom").then((response) => {
                if (response.data.length > 0) {
                    this.customStreams = response.data;
                } else {
                    this.customStreams = null;
                }
            });
        },
    },

    mounted() {
        setInterval(
            function () {
                try {
                    this.index();
                } catch (error) {}
            }.bind(this),
            5000
        );
    },
};
</script>
