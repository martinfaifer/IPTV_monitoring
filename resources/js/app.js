require("./bootstrap");

window.Vue = require("vue");
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import cs from "vuetify/lib/locale/cs";
import { store } from "./store/store";
import VueMeta from "vue-meta";
import VueApexCharts from "vue-apexcharts";

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueMeta);
Vue.use(require("vue-shortkey"));
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

Vue.config.silent = true;

let Layout = () => import("./components/layout/layout.vue");
let Mozaika = () => import("./components/mozaika/mozaika.vue");
let streamLayout = () => import("./components/Stream/streamLayout.vue");
let userLayout = () => import("./components/User/UserLayout.vue");
let userDashboard = () => import("./components/User/userDashboard.vue");
let userMozaika = () => import("./components/User/userMozaika.vue");
let userEdit = () => import("./components/User/userEdit.vue");
let userNotification = () => import("./components/User/userNotification.vue");
let userSlack = () => import("./components/User/userSlack.vue");
let SettingsLayout = () => import("./components/Settings/settingsLayout.vue");
let SettingsDashboard = () =>
    import("./components/Settings/Dashboard/settingsDashboard.vue");
let SettingsStreams = () =>
    import("./components/Settings/Streams/settingsStreams.vue");
let SettingsUser = () =>
    import("./components/Settings/Users/settingsUsers.vue");
let SettingsNotifications = () =>
    import("./components/Settings/Notifications/settingsNotifications.vue");
let Login = () => import("./components/Auth/Login.vue");
let PageNotFound = () => import("./components/PageNotFound/PageNotFound.vue");

let routes = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "",
                component: Mozaika,
            },
            {
                path: "stream/:streamId",
                component: streamLayout,
            },
            {
                path: "user",
                component: userLayout,
                children: [
                    {
                        path: "/user/dashboard",
                        component: userDashboard,
                    },
                    {
                        path: "/user/mozaika",
                        component: userMozaika,
                    },
                    {
                        path: "/user/edit",
                        component: userEdit,
                    },
                    {
                        path: "/user/notifications",
                        component: userNotification,
                    },
                    {
                        path: "/user/slack",
                        component: userSlack,
                    },
                ],
            },
            {
                path: "/settings",
                component: SettingsLayout,
                children: [
                    {
                        component: SettingsDashboard,
                        path: "/settings/dashboard",
                    },
                    {
                        path: "/settings/streams",
                        component: SettingsStreams,
                    },
                    {
                        path: "/settings/users",
                        component: SettingsUser,
                    },
                    {
                        path: "/settings/notifications",
                        component: SettingsNotifications,
                    },
                    {
                        path: "/settings/webhook",
                    },
                ],
            },
        ],
    },
    {
        path: "/login",
        component: Login,
    },
    // {
    //     path: "/403",
    //     component: NotAuthorized,
    // },
    {
        path: "*",
        component: PageNotFound,
    },
];

const router = new VueRouter({
    routes,
});

const opts = {};

const app = new Vue({
    el: "#app",
    store,
    router,
    vuetify: new Vuetify({
        theme: {
            dark: true,
        },
        opts,
        lang: {
            locales: { cs },
            current: "cs",
        },
    }),
});
