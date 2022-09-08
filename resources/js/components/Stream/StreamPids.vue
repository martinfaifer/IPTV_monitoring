<template>
    <div>
        <v-card class="overflow-hidden rounded-lg blur shadow-blur">
            <p class="text-center mt-3">Informace o Pidech ve streamu</p>
            <v-card-text>
                <span v-for="(pidValues, pidName) in streamPids" :key="pidName">
                    <p class="subtitle-1 my-1 text-center" v-html="pidName"></p>
                    <div v-if="pidValues.length != 0">
                        <v-simple-table height="250px" dense>
                            <template v-slot:default>
                                <tbody>
                                    <tr
                                        v-for="(
                                            pidValue, pidKey
                                        ) in pidValues[0]"
                                        :key="pidKey"
                                    >
                                        <td class="caption">
                                            <span
                                                class="font-weight-bold d-flex justify-start"
                                                >{{ pidKey }}:</span
                                            >
                                            <span
                                                v-if="
                                                    typeof pidValue == 'object'
                                                "
                                            >
                                                <span
                                                    v-for="(
                                                        value, key
                                                    ) in pidValue"
                                                    :key="key"
                                                    class="d-flex justify-end"
                                                >
                                                    {{ key }}: {{ value }}
                                                    <br />
                                                </span>
                                            </span>
                                            <span
                                                v-else
                                                class="d-flex justify-end"
                                            >
                                                {{ pidValue }}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </div>
                    <div v-else>
                        <v-alert
                            type="info"
                            color="#182948"
                            class="shadow-blur-warning-blue-alert"
                            dense
                        >
                            Neexistují informace o Pidu
                        </v-alert>
                    </div>
                </span>
            </v-card-text>
        </v-card>
    </div>
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
            axios
                .get("streams/pids/" + this.$route.params.streamId)
                .then((response) => {
                    this.streamPids = response.data;
                });
        },

        websocketData() {
            Echo.channel("StreamAllPids" + this.$route.params.streamId).listen(
                "BroadcastAllPidsStreamsEvent",
                (e) => {
                    this.streamPids = e[0];
                }
            );
        },
    },

    mounted() {
        this.websocketData();
    },
    watch: {
        $route(to, from) {
            this.index();
            this.websocketData();
        },
    },
    beforeDestroy: function () {
        window.Echo.leave("StreamAllPids" + this.$route.params.streamId);
    },
};
</script>
