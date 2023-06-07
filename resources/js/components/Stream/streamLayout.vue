<template>
    <v-container fluid>
        <v-col cols="12" sm="12" md="12" lg="12">
            <StreamNameAndStatus :stream="stream"></StreamNameAndStatus>
        </v-col>

        <v-row>
            <v-col class="mt-n3" cols="12" sm="12" md="3" lg="3">
                <StreamImage
                    class="mb-3"
                    :streamImageUrl="stream.image"
                ></StreamImage>
                <!-- stream history -->
                <StreamHistory
                    class="mb-3"
                    :history="stream.history"
                ></StreamHistory>
                <StreamPidsErrors class="mb-3"></StreamPidsErrors>
                <!-- <StreamPids></StreamPids> -->
                <!-- <FfprobeStream></FfprobeStream> -->
            </v-col>
            <v-col class="mt-n3" cols="12" sm="12" md="9" lg="9">
                <StreamService class="mb-3"></StreamService>

                <StreamAudioVideoPidDetail></StreamAudioVideoPidDetail>
            </v-col>
            <!-- <v-col class="mt-n3" cols="12" sm="12" md="3" lg="3">
                <StreamIptvDoku></StreamIptvDoku>
            </v-col> -->
            <v-tooltip bottom color="#0E5089">
                <template v-slot:activator="{ on }">
                    <v-btn
                        :loading="loading"
                        color="#0E5089"
                        fab
                        small
                        dark
                        class="mr-3 mt-12"
                        style="position: fixed; right: 0"
                        @click="openIptvDokuDialog()"
                        v-on="on"
                    >
                        <v-icon small>mdi-television-play</v-icon>
                    </v-btn>
                </template>
                <v-container>
                    <v-row> Zobrazení informací z IPTV dokumentace </v-row>
                </v-container>
            </v-tooltip>
        </v-row>
        <v-dialog
            v-model="iptvDokuDialog"
            scrollable
            persistent
            max-width="100%"
            overlay-color="rgb(17, 27, 45)"
        >
            <v-card>
                <p class="pt-3 text-center subtitle-1">
                    Informace o streamu z IPTV dokumentace
                </p>
                <v-card-text>
                    <v-container class="pt-3" v-if="iptvDokuData.length != 0">
                        <v-row>
                            <v-col cols="12">
                                <v-img
                                    :lazy-src="iptvDokuData.logo"
                                    :src="iptvDokuData.logo"
                                    :aspect-ratio="16 / 9"
                                    width="240"
                                >
                                </v-img>
                            </v-col>
                            <v-col cols="12">
                                <span class="subtitle-2">
                                    Žánr: {{ iptvDokuData.kategorie }}
                                </span>
                                <span
                                    v-if="iptvDokuData.tags.length != 0"
                                    class="subtitle-2 mx-3"
                                >
                                    Štítky:
                                    <span
                                        v-for="tag in iptvDokuData.tags"
                                        :key="tag.id"
                                    >
                                        <span class="mx-auto">
                                            {{ tag.tagName }} ,
                                        </span>
                                    </span>
                                </span>
                            </v-col>
                            <v-col cols="12">
                                <span
                                    v-if="
                                        iptvDokuData.channel_packages.length !=
                                        0
                                    "
                                    class="subtitle-2"
                                >
                                    Programové balíčky:
                                    <span
                                        v-for="channelPackage in iptvDokuData.channel_packages"
                                        :key="channelPackage.id"
                                    >
                                        <span class="mx-auto">
                                            {{ channelPackage.channel_package }}
                                            ,
                                        </span>
                                    </span>
                                </span>
                            </v-col>
                            <v-col cols="12">
                                <v-row>
                                    <v-col
                                        v-if="iptvDokuData.chunkStoreId"
                                        cols="12"
                                        sm="12"
                                        md="6"
                                        lg="6"
                                    >
                                        <span class="subtitle-2">
                                            Nangu chunkStoreId:
                                            {{ iptvDokuData.chunkStoreId }}
                                        </span>
                                    </v-col>
                                    <v-col
                                        v-if="iptvDokuData.nanguChannel"
                                        cols="12"
                                        sm="12"
                                        md="6"
                                        lg="6"
                                    >
                                        <span class="subtitle-2 mx-auto">
                                            Nangu channelName:
                                            {{ iptvDokuData.nanguChannel }}
                                        </span>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12">
                                <v-divider dark></v-divider>
                            </v-col>
                            <v-col
                                v-if="iptvDokuData.devices.source != null"
                                cols="12"
                                sm="12"
                                md="7"
                                lg="7"
                            >
                                <p class="text-center subtitle-1">Přijímač</p>
                                <v-row>
                                    <v-col cols="12">
                                        <span class="subtitle-2">
                                            Název:
                                            {{
                                                iptvDokuData.devices.source.name
                                            }}
                                        </span>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        v-if="
                                            iptvDokuData.devices.source.ip !=
                                            null
                                        "
                                    >
                                        <span class="subtitle-2">
                                            IP:
                                            {{ iptvDokuData.devices.source.ip }}
                                        </span>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        v-if="
                                            iptvDokuData.devices.source
                                                .status != null
                                        "
                                    >
                                        <span class="subtitle-2">
                                            Status ze zbx:
                                            <v-icon
                                                v-if="
                                                    iptvDokuData.devices.source
                                                        .status == 'success'
                                                "
                                                color="green"
                                                small
                                                class="mx-3"
                                                >mdi-check</v-icon
                                            >

                                            <v-icon
                                                v-else
                                                color="red"
                                                small
                                                class="mx-3"
                                                >mdi-close</v-icon
                                            >
                                        </span>
                                    </v-col>
                                    <v-col cols="12">
                                        <a
                                            :href="
                                                iptvDokuData.devices.source.url
                                            "
                                            target="_blank"
                                        >
                                            Proklik na do IPTV dokumentace:
                                        </a>
                                    </v-col>
                                    <v-col cols="12">
                                        <DeviceTemplate
                                            v-if="
                                                iptvDokuData.devices.source
                                                    .template != null
                                            "
                                            :deviceTemplate="
                                                JSON.parse(
                                                    iptvDokuData.devices.source
                                                        .template
                                                )
                                            "
                                        ></DeviceTemplate>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col v-if="iptvDokuData.devices.multiplexor">
                                <div
                                    v-if="
                                        iptvDokuData.devices.multiplexor.name !=
                                        null
                                    "
                                >
                                    <p class="text-center subtitle-1">
                                        Multiplexor
                                    </p>
                                    <v-row>
                                        <v-col cols="12">
                                            <span class="subtitle-2">
                                                Název:
                                                {{
                                                    iptvDokuData.devices
                                                        .multiplexor.name
                                                }}
                                            </span>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            v-if="
                                                iptvDokuData.devices.multiplexor
                                                    .ip != null
                                            "
                                        >
                                            <span class="subtitle-2">
                                                IP:
                                                {{
                                                    iptvDokuData.devices
                                                        .multiplexor.ip
                                                }}
                                            </span>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            v-if="
                                                iptvDokuData.devices.multiplexor
                                                    .status != null
                                            "
                                        >
                                            <span class="subtitle-2">
                                                Status ze zbx:
                                                <v-icon
                                                    v-if="
                                                        iptvDokuData.devices
                                                            .multiplexor
                                                            .status == 'success'
                                                    "
                                                    color="green"
                                                    small
                                                    class="mx-3"
                                                    >mdi-check</v-icon
                                                >

                                                <v-icon
                                                    v-else
                                                    color="red"
                                                    small
                                                    class="mx-3"
                                                    >mdi-close</v-icon
                                                >
                                            </span>
                                        </v-col>
                                        <v-col cols="12">
                                            <a
                                                :href="
                                                    iptvDokuData.devices
                                                        .multiplexor.url
                                                "
                                                target="_blank"
                                            >
                                                Proklik na do IPTV dokumentace:
                                            </a>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions color="#101B1D">
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        @click="closeDialog()"
                        plain
                        outlined
                    >
                        Zavřít
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <StreamAlertDialog
            :isActiveDialog="isActiveDialog"
            :dialogText="checkStreamStatus(stream.status)"
        ></StreamAlertDialog>
    </v-container>
</template>
<script>
import StreamNameAndStatus from "./StreamNameAndStatus.vue";
import StreamImage from "./streamImage.vue";
import StreamHistory from "./StreamHistory.vue";
import StreamAudioVideoPidDetail from "./StreamAudiVideoPidDetail.vue";
import StreamPids from "./StreamPids.vue";
import StreamService from "./StreamServices.vue";
import StreamAlertDialog from "./StreamAlertDialog.vue";
import FfprobeStream from "./StreamFfrobe.vue";
import StreamIptvDoku from "./StreamIptvDoku.vue";
import DeviceTemplate from "./devicetemplate.vue";
import StreamPidsErrors from "./StreamPidsErrors.vue";
export default {
    metaInfo: {
        title: "IPTV Dohled - informace o streamu",
    },

    data() {
        return {
            stream: [],
            isActiveDialog: false,
            iptvDokuDialog: false,
            iptvDokuData: [],
            loading: false,
        };
    },
    components: {
        StreamImage,
        StreamNameAndStatus,
        StreamHistory,
        StreamAlertDialog,
        StreamPids,
        StreamAudioVideoPidDetail,
        StreamService,
        FfprobeStream,
        StreamIptvDoku,
        DeviceTemplate,
        StreamPidsErrors,
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios
                .get("streams/" + this.$route.params.streamId)
                .then((response) => {
                    this.stream = response.data;
                    this.stream.status != "monitoring"
                        ? (this.isActiveDialog = true)
                        : (this.isActiveDialog = false);
                })
                .catch((error) => {
                    if (error.response.status == 403) {
                        this.$router.push("/403");
                    }
                });
        },

        openIptvDokuDialog() {
            this.loading = true;
            axios
                .get("streams/iptvdoku/" + this.$route.params.streamId)
                .then((response) => {
                    this.loading = false;
                    this.iptvDokuData = response.data.data;
                    this.iptvDokuDialog = true;
                });
        },

        closeDialog() {
            this.iptvDokuDialog = false;
        },

        checkStreamStatus(streamStatus) {
            if (streamStatus == "waiting") {
                return "Stream čeká na spuštění";
            }

            if (streamStatus == "monitoring") {
                return "Stream se dohleduje od " + this.stream.monitored_at;
            }

            if (streamStatus == "starting") {
                return "Stream se zařazuje do fronty ke spuštění";
            }

            if (streamStatus == "stopped") {
                return "Stream má pozastavené dohledování";
            }

            if (streamStatus == "can_not_start") {
                return "Stream ve výpadku";
            }

            if (streamStatus == "issue") {
                return "Stream je dohledován, ale je v něm chybovost";
            }
        },
    },

    mounted() {},
    watch: {
        $route(to, from) {
            this.index();
        },
    },
    beforeDestroy: function () {},
};
</script>
