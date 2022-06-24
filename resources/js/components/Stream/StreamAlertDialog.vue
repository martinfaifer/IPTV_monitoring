<template>
    <v-dialog v-model="isActiveDialog" persistent max-width="450">
        <v-card>
            <v-card-text>
                <v-container class="pt-3" fluid>
                    <p class="mt-10 text-center title">
                        <v-icon large color="red" class="mr-6"> mdi-alert </v-icon>
                        {{ dialogText }}
                    </p>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="info darken-1"
                    text
                    outlined
                    @click="isActiveDialog = false"
                >
                    Ok
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    props: ["isActiveDialog", "dialogText"],
    data() {
        return {};
    },
};
</script>
