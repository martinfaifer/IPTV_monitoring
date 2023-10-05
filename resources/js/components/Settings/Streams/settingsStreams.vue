<template>
    <div>
        <v-container fluid>
            <v-row class="mx-auto">
                <v-col cols="12" sm="6" md="2" lg="2">
                    <v-card
                        class="overflow-hidden rounded-lg blur shadow-blur"
                        flat
                    >
                        <v-card-text>
                            <p class="headline text-center">Počet streamů</p>
                            <p class="text-center title">{{ items.stats.sum }}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="2" lg="2">
                    <v-card
                        class="overflow-hidden rounded-lg blur shadow-blur"
                        flat
                    >
                        <v-card-text>
                            <p class="headline text-center">Dohledováno</p>
                            <p class="text-center title">{{ items.stats.monitored }}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="2" lg="2">
                    <v-card
                        class="overflow-hidden rounded-lg blur shadow-blur"
                        flat
                    >
                        <v-card-text>
                            <p class="headline text-center">Výpadek</p>
                            <p class="text-center title font-weight-bold" :class="{'red--text': items.stats.crashed > 0}">{{ items.stats.crashed }}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="2" lg="2">
                    <v-card
                        class="overflow-hidden rounded-lg blur shadow-blur"
                        flat
                    >
                        <v-card-text>
                            <p class="headline text-center">Pozastaveno</p>
                            <p class="text-center title">{{ items.stats.stopped }}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="2" lg="2">
                    <v-card
                        class="overflow-hidden rounded-lg blur shadow-blur"
                        flat
                    >
                        <v-card-text>
                            <p class="headline text-center">Kontrola PTS</p>
                            <p class="text-center title">{{ items.stats.check_pts }}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="2" lg="2">
                    <v-card
                        class="overflow-hidden rounded-lg blur shadow-blur"
                        flat
                    >
                        <v-card-text>
                            <p class="headline text-center">Přehrává video</p>
                            <p class="text-center title">{{ items.stats.play_video }}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                    <v-card
                        class="overflow-hidden rounded-xl blur shadow-blur"
                        flat
                    >
                        <v-card-title>
                            <v-text-field
                                autofocus
                                outlined
                                dense
                                v-model="search"
                                color="#1E293B"
                                prepend-inner-icon="mdi-magnify"
                                label="Hledání ..."
                                single-line
                                hide-details
                                clearable
                            ></v-text-field>
                            <v-spacer></v-spacer>
                            <v-btn
                                plain
                                outlined
                                color="#0277BD"
                                v-shortkey="['n', 'ctrl']"
                                @click="openNewStreamDialog()"
                            >
                                Nový stream
                            </v-btn>
                        </v-card-title>
                        <v-data-table
                            :headers="headers"
                            :items="items.streams"
                            :search="search"
                        >
                            <template v-slot:item.image="{ item }">
                                <v-card
                                    flat
                                    class="rounded-md"
                                    color="transparent"
                                >
                                    <v-img
                                        height="25"
                                        width="45"
                                        cover
                                        :lazy-src="item.image"
                                        :src="item.image"
                                        :aspect-ratio="16 / 9"
                                    >
                                    </v-img>
                                </v-card>
                            </template>
                            <template v-slot:item.check_pts="{ item }">
                                <v-icon
                                    v-if="item.check_pts == true"
                                    color="green"
                                >
                                    mdi-check
                                </v-icon>
                                <v-icon v-else color="red"> mdi-close </v-icon>
                            </template>
                            <template v-slot:item.play_video="{ item }">
                                <v-icon
                                    v-if="item.play_video == true"
                                    color="green"
                                >
                                    mdi-check
                                </v-icon>
                                <v-icon v-else color="red"> mdi-close </v-icon>
                            </template>
                            <template v-slot:item.status="{ item }">
                                <v-chip
                                    v-if="item.status == 'waiting'"
                                    text-color="blue"
                                    color="blue"
                                    class="mx-auto"
                                    small
                                    outlined
                                >
                                    Čeká na spuštění
                                </v-chip>
                                <v-chip
                                    v-if="item.status == 'monitoring'"
                                    text-color="green"
                                    color="green"
                                    class="mx-auto"
                                    small
                                    outlined
                                >
                                    Dohleduje se
                                </v-chip>
                                <v-chip
                                    v-if="item.status == 'starting'"
                                    text-color="teal"
                                    color="teal"
                                    class="mx-auto"
                                    small
                                    outlined
                                >
                                    Spouští se dohledování
                                </v-chip>
                                <v-chip
                                    v-if="item.status == 'stopped'"
                                    text-color="blue"
                                    color="blue"
                                    class="mx-auto"
                                    small
                                    outlined
                                >
                                    Zastaveno dohledování
                                </v-chip>
                                <v-chip
                                    v-if="item.status == 'can_not_start'"
                                    text-color="red"
                                    color="red"
                                    class="mx-auto"
                                    small
                                    outlined
                                >
                                    Výpadek
                                </v-chip>
                                <v-chip
                                    v-if="item.status == 'issue'"
                                    text-color="orange"
                                    color="orange"
                                    class="mx-auto"
                                    small
                                    outlined
                                >
                                    Problém ve streamu
                                </v-chip>
                            </template>
                            <template v-slot:item.actions="{ item }">
                                <v-icon
                                    @click="openEditDialog(item)"
                                    small
                                    color="info"
                                    >mdi-pencil</v-icon
                                >
                                <v-icon
                                    @click="deleteItem(item.id)"
                                    small
                                    color="red"
                                    >mdi-delete</v-icon
                                >
                                <v-icon
                                    color="yellow"
                                    small
                                    class="ml-6"
                                    @click="openSheduleDialog(item.id)"
                                >
                                    mdi-calendar
                                </v-icon>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-dialog
            v-model="warningDialog"
            persistent
            max-width="400px"
            overlay-color="rgb(17, 27, 45)"
        >
            <v-form @submit.prevent="deleteStream()">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-3">
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <p class="mt-6 text-center headline">
                                        Přejete si odebrat kanál?
                                    </p>
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
                            color="red darken-1"
                            type="submit"
                            plain
                            outlined
                        >
                            Odebrat
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-dialog>
        <v-dialog
            v-model="createDialog"
            persistent
            max-width="800px"
            overlay-color="rgb(17, 27, 45)"
        >
            <v-form @submit.prevent="storeStream()">
                <v-card>
                    <p class="pt-3 text-center subtitle-1">
                        Založení nového streamu
                    </p>
                    <v-card-text>
                        <v-container class="pt-3">
                            <v-row>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-text-field
                                        dense
                                        outlined
                                        autofocus
                                        :error-messages="errors.nazev"
                                        v-model="formData.nazev"
                                        label="Název sreamu"
                                        type="text"
                                        color="#0277BD"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-text-field
                                        dense
                                        outlined
                                        :error-messages="errors.stream_url"
                                        v-model="formData.stream_url"
                                        label="dohledová adresa"
                                        type="text"
                                        color="#0277BD"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-checkbox
                                        v-model="formData.check_pts"
                                        label="Kontrolovat PTS"
                                    ></v-checkbox>
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
                            type="submit"
                            plain
                            outlined
                        >
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-dialog>

        <v-dialog
            v-model="editDialog"
            persistent
            max-width="800px"
            overlay-color="rgb(17, 27, 45)"
        >
            <v-form @submit.prevent="editStream()">
                <v-card>
                    <p class="pt-3 text-center subtitle-1">Úprava streamu</p>
                    <v-card-text>
                        <v-container class="pt-3">
                            <v-row>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-text-field
                                        dense
                                        outlined
                                        autofocus
                                        :error-messages="errors.nazev"
                                        v-model="stream.nazev"
                                        label="Název sreamu"
                                        type="text"
                                        color="#0277BD"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-text-field
                                        dense
                                        outlined
                                        readonly
                                        disabled
                                        :error-messages="errors.stream_url"
                                        v-model="stream.stream_url"
                                        label="dohledová adresa"
                                        type="text"
                                        color="#0277BD"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <!-- změna statusu streamu -->
                                    <span v-if="stream.status == 'stopped'">
                                        <v-switch
                                            v-model="changeStreamStatus"
                                            label="Přidání streamu do fronty ke spuštění"
                                        ></v-switch>
                                    </span>
                                    <span v-else>
                                        <v-switch
                                            v-model="changeStreamStatus"
                                            label="Vypnutí dohledování streamu"
                                        ></v-switch>
                                    </span>
                                </v-col>
                                <v-col cols="12">
                                    <v-checkbox
                                        v-model="stream.check_pts"
                                        label="Kontrolovat PTS"
                                    ></v-checkbox>
                                </v-col>
                                <v-col cols="12">
                                    <v-checkbox
                                        v-model="stream.play_video"
                                        label="Přehrávat video"
                                    ></v-checkbox>
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
                            type="submit"
                            plain
                            outlined
                        >
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-dialog>

        <v-dialog
            v-model="sheduleDialog"
            persistent
            max-width="800px"
            overlay-color="rgb(17, 27, 45)"
        >
            <v-card>
                <p class="pt-3 text-center subtitle-1">
                    Automatické nedohledování streamu
                </p>
                <v-card-text>
                    <v-container class="pt-3">
                        <div class="d-flex flex-row-reverse">
                            <v-icon
                                @click="openNewSheduleDialog()"
                                color="green"
                                >mdi-plus</v-icon
                            >
                        </div>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="12">
                                <v-data-table
                                    :headers="headersSheduler"
                                    :items="formData"
                                >
                                    <template v-slot:item.is_daily="{ item }">
                                        <v-icon
                                            v-if="item.is_daily == true"
                                            small
                                            color="green"
                                        >
                                            mdi-check
                                        </v-icon>
                                        <v-icon v-else small color="red">
                                            mdi-close
                                        </v-icon>
                                    </template>
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            color="red"
                                            @click="removeTime(item.id)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>
                                </v-data-table>
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
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog
            v-model="newSheduleDialog"
            persistent
            max-width="1600px"
            overlay-color="rgb(17, 27, 45)"
        >
            <v-card>
                <p class="pt-3 text-center subtitle-1">Nové časové okno</p>
                <v-card-text>
                    <v-container class="pt-3">
                        <v-row>
                            <v-col cols="12">
                                <v-checkbox
                                    v-model="formData.isDaily"
                                    label="Opakovat denně?"
                                ></v-checkbox>
                            </v-col>
                            <v-col cols="12">
                                <p
                                    class="body-2 text-center font-weight-medium"
                                >
                                    Začátek nedohledování streamu
                                </p>
                                <v-row>
                                    <v-col cols="12" sm="12" md="6" lg="6">
                                        <v-time-picker
                                            color="#0b131f"
                                            format="24hr"
                                            v-model="formData.newStartTime"
                                            landscape
                                        ></v-time-picker>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="6" lg="6">
                                        <v-date-picker
                                            v-if="
                                                !formData.isDaily ||
                                                formData.isDaily == false
                                            "
                                            v-model="formData.newStartDate"
                                            landscape
                                        ></v-date-picker>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12">
                                <p
                                    class="body-2 text-center font-weight-medium"
                                >
                                    Konec nedohledování streamu
                                </p>
                                <v-row>
                                    <v-col cols="12" sm="12" md="6" lg="6">
                                        <v-time-picker
                                            color="#0b131f"
                                            format="24hr"
                                            v-model="formData.newEndTime"
                                            landscape
                                        ></v-time-picker>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="6" lg="6">
                                        <v-date-picker
                                            v-if="
                                                !formData.isDaily ||
                                                formData.isDaily == false
                                            "
                                            v-model="formData.newEndDate"
                                            landscape
                                        ></v-date-picker>
                                    </v-col>
                                </v-row>
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
                        @click="storeNewShedule()"
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
    data() {
        return {
            createDialog: false,
            warningDialog: false,
            editDialog: false,
            changeStreamStatus: false,
            sheduleDialog: false,
            newSheduleDialog: false,
            formData: [],
            errors: [],
            search: "",
            items: [],
            stream: [],
            headers: [
                { text: "Náhled", value: "image" },
                { text: "Stream", value: "nazev" },
                { text: "Url", value: "stream_url" },
                { text: "Status", value: "status" },
                { text: "Kontrola PTS", value: "check_pts" },
                { text: "Dohleduje se", value: "monitored_at" },
                { text: "Video v mozaice", value: "play_video" },
                { text: "Akce", value: "actions" },
            ],
            headersSheduler: [
                { text: "Denně", value: "is_daily" },
                { text: "Začátek", value: "start_time" },
                { text: "Konec", value: "end_time" },
                { text: "Akce", value: "actions" },
            ],
        };
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios
                .get("settings/streams")
                .then((response) => {
                    this.items = response.data;
                })
                .catch((error) => {
                    if (error.response.status == 403) {
                        this.$router.push("/403");
                    }
                });
        },

        storeStream() {
            axios
                .post("settings/streams", {
                    nazev: this.formData.nazev,
                    stream_url: this.formData.stream_url,
                    check_pts: this.formData.check_pts,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },
        closeDialog() {
            this.createDialog = false;
            this.warningDialog = false;
            this.editDialog = false;
            this.changeStreamStatus = false;
            this.sheduleDialog = false;
            this.newSheduleDialog = false;
            this.formData = [];
            this.errors = [];
        },

        openSheduleDialog(streamId) {
            this.loadEvents(streamId);
            this.sheduleDialog = true;
        },

        loadEvents(streamId) {
            axios
                .get("settings/streams/shedule/" + streamId)
                .then((response) => {
                    this.formData = response.data;
                    this.formData.streamId = streamId;
                });
        },

        openNewSheduleDialog() {
            this.newSheduleDialog = true;
        },

        storeNewShedule() {
            let streamId = this.formData.streamId;
            axios
                .post("settings/streams/shedule/" + streamId, {
                    start_time: this.formData.newStartTime,
                    start_date: this.formData.newStartDate,
                    end_time: this.formData.newEndTime,
                    end_date: this.formData.newEndDate,
                    is_daily: this.formData.isDaily,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.newSheduleDialog = false;
                    this.formData.newStartTime = "";
                    this.formData.newStartDate = "";
                    this.formData.newEndTime = "";
                    this.formData.newEndDate = "";
                    this.formData.isDaily = "";
                    this.loadEvents(streamId);
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        removeTime(eventId) {
            axios
                .delete("settings/streams/shedule/" + eventId)
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.loadEvents(this.formData.streamId);
                });
        },

        openNewStreamDialog() {
            this.createDialog = true;
        },
        deleteStream() {
            axios
                .delete("settings/streams/" + this.formData)
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                });
        },
        deleteItem(streamId) {
            this.formData = streamId;
            this.warningDialog = true;
        },

        openEditDialog(stream) {
            this.stream = stream;
            this.editDialog = true;
        },
        editStream() {
            axios
                .patch("settings/streams/" + this.stream.id, {
                    nazev: this.stream.nazev,
                    changeStreamStatus: this.changeStreamStatus,
                    check_pts: this.stream.check_pts,
                    play_video: this.stream.play_video,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },
    },
};
</script>
