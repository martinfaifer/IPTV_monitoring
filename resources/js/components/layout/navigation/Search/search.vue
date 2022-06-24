<template>
    <div class="mx-1">
        <v-tooltip bottom color="#192B4B">
            <template v-slot:activator="{ on }">
                <v-btn
                    v-on="on"
                    icon
                    v-shortkey="['ctrl', 'space']"
                    @shortkey="openSearchDialog()"
                    @click="openSearchDialog()"
                >
                    <v-icon> mdi-magnify </v-icon>
                </v-btn>
            </template>
            <span>
                <v-container>
                    <v-row> Vyhledávání </v-row>
                </v-container>
            </span>
        </v-tooltip>
        <v-dialog
            v-model="searchDialog"
            width="800"
            overlay-color="rgb(17, 27, 45)"
        >
            <v-card height="400">
                <v-card-text class="pt-2">
                    <v-col cols="12" sm="12" md="12" lg="12">
                        <v-text-field
                            prepend-inner-icon="mdi-magnify"
                            autofocus
                            :loading="loading"
                            v-model.lazy="searchData"
                            color="#328AF1"
                            placeholder="Pro otevření vyhledávání stiskněte crtl + mezerník"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="12"
                        md="12"
                        lg="12"
                        v-if="results.length > 0"
                    >
                        <v-virtual-scroll
                            :bench="0"
                            :items="results"
                            height="250"
                            item-height="64"
                        >
                            <template v-slot:default="{ item }">
                                <v-list-item
                                    :key="item.id"
                                    link
                                    :to="item.url"
                                    @click="closeDialog()"
                                >
                                    <v-list-item-avatar>
                                        <v-img :src="item.logo"></v-img>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title v-html="item.nazev">
                                        </v-list-item-title>
                                        <v-list-item-subtitle
                                            v-html="item.description"
                                        ></v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                            </template>
                        </v-virtual-scroll>
                    </v-col>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            searchDialog: false,
            searchData: null,
            loading: false,
            results: [],
        };
    },

    created() {},
    methods: {
        search() {
            this.loading = true;
            axios
                .post("search", {
                    search: this.searchData,
                })
                .then((response) => {
                    this.loading = false;
                    this.results = response.data;
                });
        },
        openSearchDialog() {
            this.results = [];
            this.searchDialog = true;
        },

        closeDialog() {
            this.results = [];
            this.searchData = null;
            this.searchDialog = false;
        },
    },

    watch: {
        searchData(after, before) {
            this.search();
        },
    },
};
</script>
