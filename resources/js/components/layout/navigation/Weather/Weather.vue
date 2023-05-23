<template>
    <div class="mx-1">
        <v-menu
            v-if="weathers.length != 0"
            transition="scroll-y-transition"
            rounded="lg"
        >
            <template v-slot:activator="{ on }">
                <v-btn v-on="on" icon :loading="loading">
                    <div v-if="weathers[0].weather.isAlert == true">
                        <v-badge color="error" bottom overlap>
                            <v-icon>
                                {{ getIcon(weathers[0].weather.main) }}
                            </v-icon>
                        </v-badge>
                    </div>
                    <div v-else>
                        <v-icon>
                            {{ getIcon(weathers[0].weather.main) }}
                        </v-icon>
                    </div>
                </v-btn>
            </template>

            <v-list
                max-width="500px"
                min-width="350px"
                min-height="250px"
                max-height="800px"
                color="#192B4B"
            >
                <div v-for="weather in weathers" :key="weather">
                    <v-col cols="12" class="mx-4 my-4">
                        <v-row>
                            <v-col cols="12" sm="12" md="8" lg="8">
                                <p class="display-1">{{ weather.city }}</p>
                            </v-col>
                            <v-col cols="12" sm="12" md="4" lg="4">
                                <v-row>
                                    <v-col cols="12">
                                        <v-icon x-large>{{
                                            getIcon(weather.weather.main)
                                        }}</v-icon>
                                    </v-col>
                                    <v-col cols="12">
                                        <p class="text--center mt-n3 ml-n3">
                                            {{ weather.weather.description_cs }}
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col>
                                <v-alert
                                    v-if="weather.weather.isAlert == false"
                                    color="#182948"
                                    class="shadow-blur-warning-blue-alert overflow-hidden rounded-lg blur text-center my-3"
                                >
                                    Nehrozí rozlazení satelitů
                                </v-alert>
                                <v-alert
                                    v-if="weather.weather.isAlert == true"
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
