<template>
    <div>
        <v-card class="overflow-hidden rounded-xl" flat>
            <v-card-subtitle>
                <v-row class="justify-center">
                    <p class="mt-3 text-center overline font-weight-bold">
                        Šablona zařízení
                    </p>
                </v-row>
            </v-card-subtitle>
            <v-card-text class="px-2 text--center">
                <v-container fluid>
                    <v-row v-if="deviceTemplate != null">
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <v-row>
                                <v-col cols="12">
                                    <span v-if="deviceTemplate.input">
                                        <p class="text-center font-weight-bold">
                                            Vstupy
                                        </p>
                                        <v-row class="justify-center mt-6">
                                            <v-col
                                                v-for="input in deviceTemplate
                                                    .input.input"
                                                :key="input.id"
                                            >
                                                <v-card
                                                    class="justify-center rounded-lg d-flex"
                                                    min-height="75"
                                                    min-width="75"
                                                    max-width="350"
                                                    outlined
                                                    flat
                                                    :color="
                                                        chooseColor(
                                                            input.vazba,
                                                            input.interface
                                                        )
                                                    "
                                                >
                                                    <v-container fluid>
                                                        <p
                                                            class="caption"
                                                            v-html="input.name"
                                                        ></p>
                                                        <v-row
                                                            v-if="
                                                                input.snmp_settings
                                                            "
                                                            class="px-3"
                                                        >
                                                            <v-col
                                                                cols="12"
                                                                class="d-flex justify-space-between"
                                                                v-for="(
                                                                    inputSnmp,
                                                                    inputSnmpIndex
                                                                ) in input.snmp_settings"
                                                                :key="
                                                                    inputSnmp.id
                                                                "
                                                            >
                                                                <span
                                                                    class="font-weight-bold"
                                                                    v-html="
                                                                        inputSnmp
                                                                            .data
                                                                            .name +
                                                                        ':'
                                                                    "
                                                                ></span>
                                                                <span
                                                                    class="px-2"
                                                                    :class="
                                                                        fontNotificationFunction(
                                                                            inputSnmp
                                                                                .data
                                                                                .value
                                                                        )
                                                                    "
                                                                    v-html="
                                                                        inputSnmp
                                                                            .data
                                                                            .value
                                                                    "
                                                                >
                                                                </span>
                                                            </v-col>
                                                        </v-row>
                                                        <v-row
                                                            v-if="
                                                                input.settings
                                                            "
                                                            class="px-3"
                                                        >
                                                            <v-col
                                                                cols="12"
                                                                class="d-flex justify-space-between"
                                                                v-for="(
                                                                    inputItem,
                                                                    index
                                                                ) in input.settings"
                                                                :key="
                                                                    inputItem.id
                                                                "
                                                            >
                                                                <span
                                                                    class="font-weight-bold"
                                                                    v-html="
                                                                        inputItem.name +
                                                                        ':'
                                                                    "
                                                                ></span>
                                                                <span
                                                                    class="px-2"
                                                                    v-html="
                                                                        inputItem.value
                                                                    "
                                                                ></span>
                                                            </v-col>
                                                        </v-row>
                                                    </v-container>
                                                </v-card>
                                            </v-col>
                                        </v-row>
                                    </span>
                                    <span v-if="deviceTemplate.output">
                                        <p
                                            class="pt-6 text-center font-weight-bold"
                                        >
                                            Výstupy
                                        </p>
                                        <v-row class="mt-6">
                                            <v-col
                                                v-for="output in deviceTemplate
                                                    .output.output"
                                                :key="output.id"
                                            >
                                                <v-card
                                                    outlined
                                                    class="rounded-lg"
                                                    :color="
                                                        chooseColor(
                                                            output.vazba,
                                                            output.interface
                                                        )
                                                    "
                                                    min-height="75"
                                                    min-width="75"
                                                    max-width="350"
                                                >
                                                    <v-container>
                                                        <p
                                                            class="caption"
                                                            v-html="output.name"
                                                        ></p>
                                                        <v-row
                                                            v-if="
                                                                output.snmp_settings
                                                            "
                                                            class="px-3"
                                                        >
                                                            <v-col
                                                                cols="12"
                                                                class="d-flex justify-space-between"
                                                                v-for="(
                                                                    outputSnmp,
                                                                    outputSnmpIndex
                                                                ) in output.snmp_settings"
                                                                :key="
                                                                    outputSnmp.id
                                                                "
                                                            >
                                                                <span
                                                                    class="font-weight-bold"
                                                                    v-html="
                                                                        outputSnmp
                                                                            .data
                                                                            .name +
                                                                        ':'
                                                                    "
                                                                ></span>
                                                                <span
                                                                    class="px-2"
                                                                    :class="
                                                                        fontNotificationFunction(
                                                                            outputSnmp
                                                                                .data
                                                                                .value
                                                                        )
                                                                    "
                                                                    v-html="
                                                                        outputSnmp
                                                                            .data
                                                                            .value
                                                                    "
                                                                >
                                                                </span>
                                                            </v-col>
                                                        </v-row>
                                                        <v-row
                                                            v-if="
                                                                output.settings
                                                            "
                                                            class="px-3"
                                                        >
                                                            <v-col
                                                                cols="12"
                                                                class="d-flex justify-space-between"
                                                                v-for="(
                                                                    outputItem,
                                                                    outputIndex
                                                                ) in output.settings"
                                                                :key="
                                                                    outputItem.id
                                                                "
                                                            >
                                                                <span
                                                                    class="font-weight-bold"
                                                                    v-html="
                                                                        outputItem.name +
                                                                        ':'
                                                                    "
                                                                ></span>
                                                                <span
                                                                    class="px-2"
                                                                    v-html="
                                                                        outputItem.value
                                                                    "
                                                                ></span>
                                                            </v-col>
                                                        </v-row>
                                                    </v-container>
                                                </v-card>
                                            </v-col>
                                        </v-row>
                                    </span>
                                    <span v-if="deviceTemplate.modules">
                                        <p
                                            class="mt-3 text-center font-weight-bold"
                                        >
                                            Moduly
                                        </p>
                                        <v-row class="justify-center mt-6">
                                            <v-col
                                                v-for="module in deviceTemplate
                                                    .modules.modules"
                                                :key="module.id"
                                            >
                                                <v-card
                                                    class="justify-center rounded-lg d-flex"
                                                    min-height="75"
                                                    min-width="75"
                                                    max-width="350"
                                                    outlined
                                                    flat
                                                    :color="
                                                        chooseColor(
                                                            module.vazba,
                                                            module.interface
                                                        )
                                                    "
                                                >
                                                    <v-container fluid>
                                                        <p
                                                            class="caption"
                                                            v-html="
                                                                module.human_name
                                                            "
                                                        ></p>
                                                        <v-row
                                                            v-if="
                                                                module.snmp_settings
                                                            "
                                                            class="px-3"
                                                        >
                                                        </v-row>
                                                        <v-row
                                                            v-if="
                                                                module.settings
                                                            "
                                                            class="px-3"
                                                        >
                                                            <v-col
                                                                cols="12"
                                                                v-for="(
                                                                    moduleItem,
                                                                    index
                                                                ) in module.settings"
                                                                :key="
                                                                    moduleItem.id
                                                                "
                                                            >
                                                                <span
                                                                    class="font-weight-bold"
                                                                    v-html="
                                                                        moduleItem.name +
                                                                        ':'
                                                                    "
                                                                ></span>
                                                                <span
                                                                    class="px-2"
                                                                    v-html="
                                                                        moduleItem.value
                                                                    "
                                                                ></span>
                                                            </v-col>
                                                        </v-row>
                                                    </v-container>
                                                </v-card>
                                            </v-col>
                                        </v-row>
                                    </span>
                                </v-col>
                            </v-row>
                            <v-row class="justify-end pl-3 mt-3">
                                <v-col cols="12">
                                    <v-row>
                                        <v-sheet
                                            width="15"
                                            height="15"
                                            color="#5D6269"
                                            class="mt-1"
                                        ></v-sheet>
                                        <small class="pl-6">Neaktivní</small>
                                    </v-row>
                                </v-col>
                                <v-col cols="12">
                                    <v-row>
                                        <v-sheet
                                            width="15"
                                            height="15"
                                            color="rgb(60, 179, 113, 0.3)"
                                            class="mt-1"
                                        ></v-sheet>
                                        <small class="pl-6">Využitý</small>
                                    </v-row>
                                </v-col>
                                <v-col cols="12">
                                    <v-row>
                                        <v-sheet
                                            width="15"
                                            height="15"
                                            color="rgb(0, 191, 255, 0.3)"
                                            class="mt-1"
                                        ></v-sheet>
                                        <small class="pl-6"
                                            >Vazba na kanál</small
                                        >
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    components: {
        //
    },
    props: ["deviceTemplate"],
    data() {
        return {
            //
        };
    },

    created() {},
    methods: {
        checkIfInterfaceIsUp(interfaceKey, interfaceValue) {
            console.log(interfaceKey);
            if (interfaceKey == "speed") {
                return interfaceValue == 0 ? "red--text" : "green--text";
            }

            return "";
        },

        chooseColor(vazba, interfaceBound) {
            if (vazba != null) {
                if (vazba != "") {
                    return "rgb(0, 191, 255, 0.3)";
                }
            }

            if (interfaceBound.length != 0 || interfaceBound != "") {
                return "rgb(60, 179, 113, 0.3)";
            }

            return "#5D6269";
        },
        fontNotificationFunction(stringValue) {
            if (stringValue == "LOCKED") {
                return "green--text font-weight-bold";
            }

            if (stringValue == "OK") {
                return "green--text font-weight-bold";
            }

            if (stringValue == "UNLOCKED") {
                return "red--text font-weight-bold";
            }
        },
    },

    watch: {
        $route(to, from) {},
    },
};
</script>
