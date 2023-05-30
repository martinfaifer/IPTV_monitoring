<template>
    <div>
        <v-card class="overflow-hidden rounded-lg blur shadow-blur" flat>
            <v-card-subtitle>
                <p class="mt-3 text-center body-1 font-weight-bold">
                    Problémové streamy
                </p>
            </v-card-subtitle>
            <v-card-text>
                <v-container fluid>
                    <v-data-table
                        :headers="headers"
                        :items="problemStreams"
                        :items-per-page="5"
                        :loading="problemStreams.length == 0"
                    >
                        <template v-slot:item.actions="{ item }">
                            <v-icon
                                @click="openInfoDialog(item)"
                                small
                                color="info"
                                >mdi-magnify</v-icon
                            >
                        </template>
                    </v-data-table>
                </v-container>
            </v-card-text>
        </v-card>

        <v-dialog
            v-model="infoDialog"
            persistent
            scrollable
            max-width="800px"
            overlay-color="rgb(17, 27, 45)"
        >
            <v-card v-if="formData.stream">
                <p class="pt-3 text-center subtitle-1">
                    Informace o problémovém streamu
                    <span class="font-weight-bold">{{
                        formData.stream.nazev
                    }}</span>
                </p>
                <v-card-text>
                    <v-container class="pt-3">
                        <v-row>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <p>
                                    Status streamu:

                                    <v-chip
                                        label
                                        class="mx-3 font-weight-medium"
                                        :color="
                                            getColor(formData.stream.status)
                                        "
                                        dark
                                        small
                                    >
                                        {{
                                            translateStatus(
                                                formData.stream.status
                                            )
                                        }}
                                    </v-chip>
                                </p>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="12">
                                <!-- detailed table with problems in pids -->
                                <v-data-table
                                    :headers="headersPids"
                                    :items="formData.stream.problems"
                                    :items-per-page="5"
                                >
                                    <template v-slot:item.created_at="{ item }">
                                        <span>{{
                                            convertIsoDatetime(item.created_at)
                                        }}</span>
                                    </template>
                                </v-data-table>
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
    </div>
</template>
<script>
export default {
    data() {
        return {
            problemStreams: [],
            headers: [
                {
                    text: "Název",
                    align: "start",
                    value: "nazev",
                },
                { text: "Status", value: "status" },
                { text: "Počet problémů", value: "problems.length" },

                { text: "", value: "actions" },
            ],

            headersPids: [
                {
                    text: "Pid",
                    value: "pid",
                },
                {
                    text: "Počet chyb",
                    value: "errors",
                },
                {
                    text: "Čas vytvoření chyby",
                    value: "created_at",
                },
            ],
            infoDialog: false,
            formData: [],
        };
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios
                .get("settings/dashboard/streams/with-problem-pids")
                .then((response) => {
                    this.problemStreams = response.data;
                });
        },

        translateStatus(streamStatus) {
            if (streamStatus == "waiting") {
                return "Čeká na spuštění";
            }

            if (streamStatus == "monitoring") {
                return "Dohleduje se";
            }

            if (streamStatus == "starting") {
                return "Spouští se dohledování";
            }

            if (streamStatus == "stopped") {
                return "Zastaveno dohledování";
            }

            if (streamStatus == "can_not_start") {
                return "Výpadek";
            }

            if (streamStatus == "issue") {
                return "Problém ve streamu";
            }
        },

        convertIsoDatetime(isoDate) {
            let date = new Date(isoDate);
            return (
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate() +
                " " +
                date.getHours() +
                ":" +
                date.getMinutes()
            );
        },

        getColor(streamStatus) {
            if (streamStatus == "waiting") {
                return "blue";
            }

            if (streamStatus == "monitoring") {
                return "green";
            }

            if (streamStatus == "starting") {
                return "green";
            }

            if (streamStatus == "stopped") {
                return "blue";
            }

            if (streamStatus == "can_not_start") {
                return "red";
            }

            if (streamStatus == "issue") {
                return "orange";
            }
        },

        openInfoDialog(stream) {
            this.formData.stream = stream;
            this.infoDialog = true;
        },

        closeDialog() {
            this.infoDialog = false;
            this.formData = [];
        },
    },

    mounted() {},
};
</script>
