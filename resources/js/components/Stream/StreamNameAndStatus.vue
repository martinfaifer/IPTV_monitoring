<template>
    <div>
        <div class="d-flex justify-space-between mt-3">
            <p class="headline">Přehled streamu {{ stream.nazev }}</p>
            <p
                v-if="stream.status == 'monitoring'"
                class="mx-12 body-1 info--text font-weight-bold"
            >
                Stream se začal dohledovat {{ stream.monitored_at }}
            </p>
            <span>
                <v-btn
                    @click="getInformationAboutStreamFromIptvDoku()"
                    small
                    text
                    plain
                    outlined
                    >Informace o streamu z dokumentace</v-btn
                >
                <v-tooltip bottom color="#192B4B">
                    <template v-slot:activator="{ on }">
                        <v-btn
                            @click="openStreamEditDialog()"
                            v-on="on"
                            class="ml-3"
                            x-small
                            icon
                            color="green"
                        >
                            <v-icon small> mdi-pencil </v-icon>
                        </v-btn>
                    </template>
                    <v-container>
                        <v-row> Upravení zobrazovaných informací </v-row>
                    </v-container>
                </v-tooltip>
            </span>
        </div>

        <v-dialog
            v-model="streamInformationDialog"
            persistent
            max-width="800px"
            overlay-color="rgb(17, 27, 45)"
        >
            <v-card>
                <p class="pt-3 text-center subtitle-1">
                    Informace o streamu z IPTV Dokumentace
                </p>
                <v-card-text>
                    <v-container
                        class="pt-3"
                        v-if="streamInformation.length != 0"
                    >
                        <v-row class="d-flex">
                            <v-img
                                class="px-3"
                                :lazy-src="streamInformation.channel.logo"
                                max-height="64"
                                max-width="64"
                                :src="streamInformation.channel.logo"
                            ></v-img>
                            <h2 class="py-3 px-6">
                                {{ streamInformation.channel.nazev }}
                                <v-chip
                                    v-if="
                                        streamInformation.channel.is_radio ==
                                        true
                                    "
                                    class="mx-6 white--text"
                                    small
                                    label
                                    color="indigo lighten-1"
                                >
                                    Rádio
                                </v-chip>
                            </h2>
                        </v-row>
                        <v-divider class="my-3"> </v-divider>
                        <v-row>
                            <v-col
                                v-if="streamInformation.channel != null"
                                cols="12"
                                sm="12"
                                md="12"
                                lg="12"
                            >
                                <p class="d-flex justify-space-between">
                                    Kvalita ve které se kanál vysílá:
                                    <span class="font-weight-bold">
                                        {{ streamInformation.channel.kvalita }}
                                    </span>
                                </p>
                                <p class="d-flex justify-space-between">
                                    Kategorie do které kanál spadá:
                                    <span class="font-weight-bold">
                                        {{
                                            streamInformation.channel.kategorie
                                        }}
                                    </span>
                                </p>
                                <a
                                    class="d-flex justify-center"
                                    :href="
                                        streamInformation.iptvdokumentace_uri
                                    "
                                    target="_blank"
                                    >Odkaz do dokumentace</a
                                >
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container v-else>
                        <v-alert
                            color="red"
                            class="overflow-hidden rounded-lg blur text-center my-3 shadow-blur-error-alert"
                        >
                            Nepodařilo se vyhledat v dokumentaci
                        </v-alert>
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

        <v-dialog
            v-model="streamEditDialog"
            persistent
            max-width="800px"
            overlay-color="rgb(17, 27, 45)"
        >
            <v-card>
                <p class="pt-3 text-center subtitle-1">
                    Změna dohledovaných informací u streamu
                </p>
                <v-card-text>
                    <v-container class="pt-3">
                        <v-row>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-switch
                                    v-model="formData.invalidSync"
                                    :error-messages="error.invalidSync"
                                    label="Zobrazovat InvalidSync chyby"
                                ></v-switch>
                            </v-col>

                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-switch
                                    v-model="formData.transportErrors"
                                    :error-messages="error.invalidSync"
                                    label="Zobrazovat Transport Stream chyby"
                                ></v-switch>
                            </v-col>

                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-switch
                                    v-model="formData.audioAccess"
                                    :error-messages="error.audioAccess"
                                    label="Zobrazovat chybu v Audio dekryptaci"
                                ></v-switch>
                            </v-col>

                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-switch
                                    v-model="formData.videoAccess"
                                    :error-messages="error.videoAccess"
                                    label="Zobrazovat chybu ve Video dekryptaci"
                                ></v-switch>
                            </v-col>

                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-switch
                                    v-model="formData.audioVideoOutOfSync"
                                    :error-messages="error.audioVideoOutOfSync"
                                    label="Zobrazovat resynchronizaci Audio / Videa"
                                ></v-switch>
                            </v-col>

                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-switch
                                    v-model="formData.discontinuites"
                                    :error-messages="error.discontinuites"
                                    label="Zobrazovat discontinuity chyby"
                                ></v-switch>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions color="#101B1D">
                    <v-btn
                        color="blue darken-1"
                        @click="closeDialog()"
                        plain
                        outlined
                    >
                        Zavřít
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        @click="updateStream()"
                        plain
                        outlined
                    >
                        Uložit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    props: ["stream"],
    data() {
        return {
            streamStatusArray: [],
            streamInformationDialog: false,
            streamInformation: [],
            streamEditDialog: false,
            formData: [],
            error: [],
        };
    },
    components: {},

    created() {},
    methods: {
        getInformationAboutStreamFromIptvDoku() {
            axios
                .get("streams/iptvdokumentace/" + this.$route.params.streamId)
                .then((response) => {
                    this.streamInformation = response.data;
                    this.streamInformationDialog = true;
                })
                .catch((error) => {
                    if (error.response.status == 404) {
                        this.streamInformation = [];
                        this.streamInformationDialog = true;
                    }
                });
        },

        openStreamEditDialog() {
            axios
                .get("streams/settings/" + this.$route.params.streamId)
                .then((response) => {
                    this.formData = response.data;
                    this.streamEditDialog = true;
                });
        },

        updateStream() {
            axios
                .patch("streams/settings/" + this.$route.params.streamId, {
                    invalidSync: this.formData.invalidSync,
                    transportErrors: this.formData.transportErrors,
                    audioAccess: this.formData.audioAccess,
                    videoAccess: this.formData.videoAccess,
                    audioVideoOutOfSync: this.formData.audioVideoOutOfSync,
                    discontinuites: this.formData.discontinuites,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        closeDialog() {
            this.streamInformationDialog = false;
            this.streamEditDialog = false;
        },
    },

    mounted() {},
    watch: {
        $route(to, from) {},
    },
    beforeDestroy: function () {},
};
</script>
