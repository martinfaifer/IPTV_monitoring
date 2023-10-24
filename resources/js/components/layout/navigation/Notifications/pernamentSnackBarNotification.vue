<template>
    <div>
        <v-snackbar
            v-if="showSnackBar == true"
            :timeout="-1"
            :value="true"
            top
            centered
            color="red"
            elevation="24"
            class="my-3"
        >
            <v-row class="d-flex justify-space-between ml-3 mr-6">
                <v-icon>mdi-information</v-icon>
                <span class="body-1 font-weight-medium"
                    >Nefunkční nvidi-smi</span
                >
            </v-row>
        </v-snackbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            description: "",
            showSnackBar: false,
        };
    },

    created() {
        this.index();
    },

    methods: {
        index() {
            axios.get("gpu-notification").then((response) => {
                if (response.data.status == "success") {
                    this.showSnackBar = true;
                    this.description = response.data.message;
                } else {
                    this.showSnackBar = false;
                    this.description = "";
                }
            });
        },
    },

    mounted() {
        this.interval = setInterval(
            function () {
                this.index();
            }.bind(this),
            60000
        );
    },
    watch: {
        //
    },
};
</script>
