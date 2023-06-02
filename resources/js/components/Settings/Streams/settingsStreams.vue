<template>
    <div>
        <v-container fluid>
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
                            :items="items"
                            :search="search"
                        >
                            <template v-slot:item.image="{ item }">
                                <v-card flat class="rounded-md">
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
                            <template v-slot:item.status="{ item }">
                                <span
                                    v-if="item.status == 'waiting'"
                                    class="blue--text"
                                >
                                    Čeká na spuštění
                                </span>
                                <span
                                    v-if="item.status == 'monitoring'"
                                    class="green--text"
                                >
                                    Dohleduje se
                                </span>
                                <span
                                    v-if="item.status == 'starting'"
                                    class="teal--text"
                                >
                                    Spouští se dohledování
                                </span>
                                <span
                                    v-if="item.status == 'stopped'"
                                    class="blue--text"
                                >
                                    Zastaveno dohledování
                                </span>
                                <span
                                    v-if="item.status == 'can_not_start'"
                                    class="red--text"
                                >
                                    Výpadek
                                </span>
                                <span
                                    v-if="item.status == 'issue'"
                                    class="orange--text"
                                >
                                    Problém ve streamu
                                </span>
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
                { text: "Dohleduje se", value: "monitored_at" },
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
            this.formData = [];
            this.errors = [];
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
