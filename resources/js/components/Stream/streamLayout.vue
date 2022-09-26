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
                <StreamPids></StreamPids>
            </v-col>
            <v-col class="mt-n3" cols="12" sm="12" md="9" lg="9">
                <StreamService class="mb-3"></StreamService>
                <StreamAudioVideoPidDetail></StreamAudioVideoPidDetail>
            </v-col>
        </v-row>

        <StreamAlertDialog
            :isActiveDialog="isActiveDialog"
            :dialogText="checkStreamStatus(stream.status)"
        ></StreamAlertDialog>
    </v-container>
</template>
<script>
import StreamNameAndStatus from "./StreamNameAndStatus.vue";
import StreamImage from "./streamImage.vue";
import StreamAudioVideoPidDetail from "./StreamAudiVideoPidDetail.vue";
import StreamPids from "./StreamPids.vue";
import StreamService from "./StreamServices.vue";
import StreamAlertDialog from "./StreamAlertDialog.vue";
export default {
    metaInfo: {
        title: "IPTV Dohled - informace o streamu",
    },

    data() {
        return {
            stream: [],
            isActiveDialog: false,
        };
    },
    components: {
        StreamImage,
        StreamNameAndStatus,
        StreamAlertDialog,
        StreamPids,
        StreamAudioVideoPidDetail,
        StreamService,
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
