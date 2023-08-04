<template>
    <div class="mx-1">
        <v-menu
            v-if="weathers.length != 0"
            transition="scroll-y-transition"
            rounded="lg"
        >
            <template v-slot:activator="{ on }">
                <v-btn v-on="on" icon :loading="loading">
                    <div v-if="weathers.weather[0].isAlert == true">
                        <v-badge color="error" bottom overlap>
                            <v-icon>
                                {{ getIcon(weathers.weather[0].main) }}
                            </v-icon>
                        </v-badge>
                    </div>
                    <div v-else>
                        <v-icon>
                            {{ getIcon(weathers.weather[0].main) }}
                        </v-icon>
                    </div>
                    {{ weathers.main.temp }} °C
                </v-btn>
            </template>

            <v-list
                max-width="500px"
                min-width="350px"
                min-height="250px"
                max-height="800px"
                color="#192B4B"
            >
                <div>
                    <v-col cols="12" class="mx-4 my-4">
                        <v-row>
                            <v-col cols="12" sm="12" md="8" lg="8">
                                <p class="headline">{{ weathers.name }} <span class="font-weight-bold">{{ weathers.main.temp }} °C</span></p>
                            </v-col>
                            <v-col cols="12" sm="12" md="4" lg="4">
                                <v-row>
                                    <v-col cols="12">
                                        <v-icon x-large>{{
                                            getIcon(weathers.weather[0].main)
                                        }}</v-icon>
                                    </v-col>
                                    <v-col cols="12">
                                        <p class="text--center mt-n3 ml-n3">
                                            {{
                                                weathers.weather[0]
                                                    .description_cs
                                            }}
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="6">
                                <p>Minimální teplota: {{ weathers.main.temp_min }}°C</p>
                            </v-col>
                            <v-col cols="6">
                                <p>Maximální teplota: {{ weathers.main.temp_max }}°C</p>
                            </v-col>
                            <v-col cols="6">
                                <p>Vlhkost vzduchu: {{ weathers.main.humidity }}%</p>
                            </v-col>
                            <v-col cols="6">
                                <p>Tlak: {{ weathers.main.pressure }} hPa</p>
                            </v-col>
                            <v-col>
                                <v-alert
                                    v-if="weathers.weather.isAlert == false"
                                    color="#182948"
                                    class="shadow-blur-warning-blue-alert overflow-hidden rounded-lg blur text-center my-3"
                                >
                                    Nehrozí rozlazení satelitů
                                </v-alert>
                                <v-alert
                                    v-if="weathers.weather.isAlert == true"
                                    color="orange"
                                    class="shadow-blur-error-alertoverflow-hidden rounded-lg blur text-center my-3"
                                >
                                    Hrozí rozlazení satelitů
                                </v-alert>
                            </v-col>
                        </v-row>
                    </v-col>
                </div>
            </v-list>
        </v-menu>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            weathers: [],
            loading: true,
        };
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios.get("weather").then((response) => {
                this.weathers = response.data;
                this.loading = false;
            });
        },

        getIcon(weather) {
            if (weather == "Thunderstorm") {
                return "mdi-weather-lightning";
            }

            if (weather == "Drizzle") {
                return "mdi-weather-rainy";
            }

            if (weather == "Rain") {
                return "mdi-weather-rainy";
            }

            if (weather == "Snow") {
                return "mdi-weather-snowy";
            }

            if (weather == "Mist") {
                return "mdi-weather-fog";
            }

            if (weather == "Smoke") {
                return "mdi-weather-fog";
            }

            if (weather == "Haze") {
                return "mdi-weather-fog";
            }

            if (weather == "Dust") {
                return "mdi-weather-fog";
            }

            if (weather == "Squall") {
                return "mdi-weather-windy";
            }

            if (weather == "Clear") {
                return "mdi-weather-sunny";
            }

            if (weather == "Clouds") {
                return "mdi-weather-cloudy";
            }
        },

        websocketData() {
            Echo.channel("WeatherAlert").listen(
                "BroadcastWweatherAlertEvent",
                (e) => {
                    console.log(e);
                    this.weathers = e;
                }
            );
        },
    },

    mounted() {
        this.websocketData();
    },
    watch: {},
};
</script>
