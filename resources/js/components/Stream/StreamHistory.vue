<template>
    <div>
        <v-card class="overflow-hidden rounded-lg blur shadow-blur" v-cloak>
            <p class="text-center mt-3">Historie streamu</p>
            <v-card-text>
                <div>
                    <v-simple-table height="250px" dense>
                        <thead color="#1E1E1E">
                            <tr>
                                <th class="text-left">Stav</th>
                                <th class="text-left">Vytvořeno</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="status in history"
                                :key="status.id"
                                :style="putBackgroundColorByStatus(status.status)"
                            >
                                <td
                                    v-text="convertStatus(status.status)"
                                    color="red"
                                ></td>
                                <td>
                                    {{ status.created_at }}
                                </td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    props: ["history"],
    data() {
        return {};
    },
    components: {},

    created() {},
    methods: {
        convertStatus(status) {
            if (status == "stopped") {
                return "Dohledování zastaveno";
            }

            if (status == "starting") {
                return "Spouštění dohledování";
            }

            if (status == "monitoring") {
                return "Dohleduje se";
            }

            if (status == "waiting") {
                return "Čeká na zařazení do fronty";
            }

            if (status == "can_not_start") {
                return "Výpadek - nepodařilo se stream spustit";
            }

            if (status == "crash") {
                return "Výpadek - stream nefunguje";
            }

            if (status == "issue") {
                return "Ve streamu jsou chyby";
            }

            if (status == "deleted") {
                return "Smazán";
            }
        },

        putBackgroundColorByStatus(status) {
            if(status == 'can_not_start') {
                return "background-color: rgba(239, 82, 80, 0.9)";
            }

             if (status == "crash") {
                return "background-color: rgba(239, 82, 80, 0.9)";
            }

             if (status == "stopped") {
                 return "background-color: rgba(251, 140, 0, 0.9)";
            }

            return "";
        }
    },

    mounted() {},
    watch: {
        $route(to, from) {},
    },
};
</script>
