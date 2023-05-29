<template>
    <div>
        <v-card
            v-if="errorPids.length != 0"
            class="overflow-hidden rounded-lg blur shadow-blur"
            v-cloak
        >
            <p class="text-center mt-3">
                Historie chyb v pidech
                <span
                    class="font-weight-bold title mx-3"
                    :class="colorOfErrors(errorPids.problem_pids)"
                >
                    {{ countErrors(errorPids.problem_pids) }}
                    <span class="font-weight-bold body-2"> / chyb za 24h</span>
                </span>
            </p>
            <v-card-text>
                <div>
                    <v-simple-table height="250px" dense>
                        <thead color="#1E1E1E">
                            <tr>
                                <th class="text-left">Pid</th>
                                <th class="text-left">Počet chyb</th>
                                <th class="text-left">Vytvořeno</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="errorPid in errorPids.problem_pids"
                                :key="errorPid.id"
                            >
                                <td>
                                    {{ errorPid.pid }}
                                </td>
                                <td>
                                    {{ errorPid.errors }}
                                </td>
                                <td>
                                    {{
                                        convertIsoDatetime(errorPid.created_at)
                                    }}
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
    data() {
        return {
            errorPids: [],
        };
    },
    components: {},

    created() {
        this.index();
    },
    methods: {
        index() {
            axios
                .get("streams/pids/problems/" + this.$route.params.streamId)
                .then((response) => {
                    this.errorPids = response.data;
                });
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
            ); //prints expected format.
        },

        countErrors(errorsArr) {
            let sumErrors = 0;
            for (let error of errorsArr) {
                sumErrors = sumErrors + error.errors;
            }

            return sumErrors;
        },

        colorOfErrors(errors) {
            if (errors.length > 0) {
                return "red--text";
            }

            return "green--text";
        },
    },

    mounted() {},
    watch: {
        $route(to, from) {},
    },
};
</script>
