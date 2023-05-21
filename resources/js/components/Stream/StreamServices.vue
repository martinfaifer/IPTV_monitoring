<template>
    <v-card class="overflow-hidden rounded-lg blur shadow-blur">
        <p class="text-center mt-3">Informace o servisách ve streamu</p>
        <v-card-text>
            <v-container fluid>
                <v-row>
                    <v-col
                        cols="12"
                        sm="12"
                        md="4"
                        lg="4"
                        class="mt-n5 d-flex justify-space-between"
                        v-for="(service, serviceKey) in streamPids"
                        :key="serviceKey"
                    >
                        <span>
                            {{ serviceKey }}:
                            <span
                                v-if="serviceKey != 'components'"
                                class="font-weight-bold mx-2"
                                >{{ service }}</span
                            >
                            <span v-else class="font-weight-bold ml-6">
                                <div
                                    v-for="(
                                        serviceItem, serviceItemKey
                                    ) in service"
                                    :key="serviceItemKey"
                                >
                                    {{ serviceItemKey }}:
                                    <span class="font-weight-bold mx-2">
                                        {{ serviceItem }}</span
                                    >
                                </div>
                            </span>
                        </span>
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
            streamPids: [],
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
                    .get("streams/pids/service/" + this.$route.params.streamId)
                    .then((response) => {
                        this.streamPids = response.data;
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
