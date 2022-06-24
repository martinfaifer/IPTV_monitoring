<template>
    <v-main class="body-1">
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12">
                    <v-card class="elevation-0" color="transparent">
                        <v-card-text>
                            <v-container fluid>
                                <v-row>
                                    <v-col cols="12">
                                        <p
                                            class="mt-4 mb-4 text-center display-4"
                                            style="color: #1f365d"
                                        >
                                            404 | Stránka nenalezena

                                            <v-btn
                                                color="#1f365d"
                                                class="ml-12"
                                                plain
                                                outlined
                                                link
                                                :to="'/'"
                                            >
                                                <v-icon v-on="on">
                                                    mdi-home
                                                </v-icon>
                                                Zpět domů
                                            </v-btn>
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
