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
                            ></v-text-field>
                            <v-spacer></v-spacer>
                            <v-btn
                                plain
                                outlined
                                color="#0277BD"
                                @click="openNewNotificationDialog()"
                            >
                                Nové upozornění
                            </v-btn>
                        </v-card-title>
                        <v-data-table
                            :headers="headers"
                            :items="items"
                            :search="search"
                        >
                            <template v-slot:item.description="{ item }">
                                {{ item.webhooks[0].description }}
                            </template>
                            <template v-slot:item.uri="{ item }">
                                {{ item.webhooks[0].uri }}
                            </template>
                            <template v-slot:item.secret="{ item }">
                                {{ item.webhooks[0].secret }}
                            </template>
                            <template v-slot:item.webhook_send_option="{ item }">
                                {{ item.webhooks[0].webhook_send_option.type }}
                            </template>
                        </v-data-table>
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
            formData: [],
            errors: [],
            items: [],
            headers: [
                { text: "Popis", value: "description" },
                { text: "URL", value: "uri" },
                { text: "Heslo", value: "secret" },
                { text: "Typ", value: "webhook_send_option" },
                { text: "Akce", value: "actions" },
            ],
        };
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios.get("users/webhooks").then((response) => {
                this.items = response.data;
            });
        },
        resetForm() {
            this.formData = [];
        },
    },
};
</script>
