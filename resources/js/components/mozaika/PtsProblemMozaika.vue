<template>
    <div>
        <v-container fluid v-if="count != 0">
            <p
                class="text-left subtitle-2 text--disabled font-weight-medium ml-3"
            >
                Kanály s I frame problémem
                <span class="orange--text subtitle-1 font-weight-black mx-3">{{
                    count
                }}</span>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            @click="changeVisibility()"
                            bottom
                            right
                            fab
                            x-small
                            color="#0D1423"
                            v-on="on"
                        >
                            <v-icon v-if="hideCards == false">mdi-eye</v-icon>
                            <v-icon v-else>mdi-eye-off</v-icon>
                        </v-btn>
                    </template>
                    <span>Schovat nebo zviditelnit padlé streamy</span>
                </v-tooltip>
            </p>
            <v-row class="mx-auto mt-1">
                <v-col
                    v-for="stream in problemStreams"
                    :key="stream.id"
                    class="my-2"
                >
                    <PtsImageCard
                        v-if="hideCards == false"
                        :stream="stream"
                    ></PtsImageCard>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import PtsImageCard from "./ImageCards/ptsImageCard.vue";
export default {
    data() {
        return {
            count: 0,
            problemStreams: null,
            hideCards: true,
        };
    },

    created() {
        this.index();
    },

    components: {
        PtsImageCard,
    },

    methods: {
        index() {
            axios.get("streams/pts-problems").then((response) => {
                if (response.data.length > 0) {
                    this.problemStreams = response.data;
                    this.count = response.data.length;
                } else {
                    this.problemStreams = null;
                    this.count = 0;
                }
            });
        },

        changeVisibility() {
            this.hideCards = !this.hideCards;
        },
    },

    mounted() {
        setInterval(
            function () {
                try {
                    this.index();
                } catch (error) {}
            }.bind(this),
            6000
        );
    },
};
</script>
