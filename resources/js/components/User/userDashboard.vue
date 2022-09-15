<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                    <v-card
                        class="overflow-hidden rounded-xl blur shadow-blur"
                        flat
                    >
                        <v-card-text>
                            <v-container fluid>
                                <v-row>
                                    <v-col cols="12">
                                        <small
                                            ><b> Přehled o uživateli</b></small
                                        >
                                        <v-divider></v-divider>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="3" lg="3">
                                        <p>
                                            <span> Jméno: </span>
                                            <span class="mx-3">
                                                {{ user.name }}
                                            </span>
                                        </p>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="3" lg="3">
                                        <p>
                                            <span> Email: </span>
                                            <span class="mx-3">
                                                {{ user.email }}
                                            </span>
                                        </p>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="3" lg="3">
                                        <p>
                                            <span> Oprávnění: </span>
                                            <span class="mx-3">
                                                {{ user.role }}
                                            </span>
                                        </p>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="3" lg="3">
                                        <p>
                                            <span> Vytvořen: </span>
                                            <span class="mx-3">
                                                <span
                                                    v-if="
                                                        user.created_at == null
                                                    "
                                                >
                                                    Od počátku věků
                                                </span>
                                                <span v-else>
                                                    {{ user.created_at }}
                                                </span>
                                            </span>
                                        </p>
                                    </v-col>
                                    <v-col cols="12">
                                        <small><b> Nastavení mozaiky</b></small>
                                        <v-divider></v-divider>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="3" lg="3">
                                        <p>
                                            <span>
                                                Počet streamů na stránce:
                                            </span>
                                            <span class="mx-3">
                                                {{ user.pagination }}
                                            </span>
                                        </p>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="9" lg="9">
                                        <p>
                                            <span>
                                                Statické streamy v mozaice:
                                            </span>
                                            <span class="mx-3">
                                                <span
                                                    v-if="
                                                        user.customData == null
                                                    "
                                                >
                                                    Nemáte nastavené žádné
                                                    streamy
                                                </span>
                                                <span v-else>
                                                    <span v-for="stream in user.customData" :key="stream.id" class="mx-3">
                                                        {{ stream.nazev }} ,
                                                    </span>
                                                    <!-- {{ user.customData }} -->
                                                </span>
                                            </span>
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: [],
        };
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios.get("users/user").then((response) => {
                this.user = response.data;
            });
        },
    },
};
</script>
