"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_layout_layout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/layout.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/layout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navigation_verticalNavigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation/verticalNavigation.vue */ "./resources/js/components/layout/navigation/verticalNavigation.vue");
/* harmony import */ var _navigation_Notifications_snackbarNotification_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/Notifications/snackbarNotification.vue */ "./resources/js/components/layout/navigation/Notifications/snackbarNotification.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {},
  data: function data() {
    return {
      user: []
    };
  },
  components: {
    VerticalMenu: _navigation_verticalNavigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SnackBarNotification: _navigation_Notifications_snackbarNotification_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;

      axios.get("users/user").then(function (response) {
        _this.user = response.data;
      })["catch"](function (error) {
        if (error.response.status == "401") {
          _this.$router.push("/login");
        }
      });
    }
  },
  mounted: function mounted() {},
  watch: {
    $route: function $route(to, from) {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/Notifications/snackbarNotification.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/Notifications/snackbarNotification.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    alert: function alert() {
      return this.$store.state.alerts;
    }
  },
  data: function data() {
    return {};
  },
  created: function created() {},
  methods: {
    iconFunction: function iconFunction(status) {
      if (status == "success") {
        return "mdi-check";
      }

      if (status == "info") {
        return "mdi-information";
      }

      if (status == "error") {
        return "mdi-close";
      }
    },
    getAlertColor: function getAlertColor(status) {
      if (status == "info") {
        return "blue";
      }

      if (status == "error") {
        return "red";
      }

      if (status == "success") {
        return "green";
      }
    }
  },
  watch: {
    alert: function alert() {
      if (this.alert.length != 0) {
        setTimeout(function () {
          this.$store.state.alerts = [];
        }.bind(this), 5000);
      } else {
        return;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/Search/search.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/Search/search.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      searchDialog: false,
      searchData: null,
      loading: false,
      results: []
    };
  },
  created: function created() {},
  methods: {
    search: function search() {
      var _this = this;

      this.loading = true;
      axios.post("search", {
        search: this.searchData
      }).then(function (response) {
        _this.loading = false;
        _this.results = response.data;
      });
    },
    openSearchDialog: function openSearchDialog() {
      this.results = [];
      this.searchDialog = true;
    },
    closeDialog: function closeDialog() {
      this.results = [];
      this.searchData = null;
      this.searchDialog = false;
    }
  },
  watch: {
    searchData: function searchData(after, before) {
      this.search();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/User/user.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/User/user.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {};
  },
  created: function created() {},
  methods: {
    logout: function logout() {
      var _this = this;

      axios.post("auth/logout").then(function (response) {
        _this.$router.push("/login");
      });
    }
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/verticalNavigation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/verticalNavigation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Search_search_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search/search.vue */ "./resources/js/components/layout/navigation/Search/search.vue");
/* harmony import */ var _User_user_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User/user.vue */ "./resources/js/components/layout/navigation/User/user.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Search: _Search_search_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    User: _User_user_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      alertSideBar: false,
      streamsHistory: []
    };
  },
  created: function created() {
    this.getHistory();
  },
  methods: {
    returnToHome: function returnToHome() {
      if (this.$route.path != "/") {
        this.$router.push("/");
      }
    },
    getHistory: function getHistory() {
      var _this = this;

      axios.get("streams/history").then(function (response) {
        _this.streamsHistory = response.data;
      });
    },
    getAlertColor: function getAlertColor(status) {
      if (status == "starting") {
        return "#182948";
      }

      if (status == "monitoring") {
        return "#182948";
      }

      if (status == "waiting") {
        return "#182948";
      }

      if (status == "stopped") {
        return "#182948";
      }

      if (status == "can_not_start") {
        return "red";
      }

      if (status == "stop") {
        return "orange";
      }

      if (status == "error") {
        return "red";
      }

      if (status == "issue") {
        return "red";
      }
    },
    getAlertBlur: function getAlertBlur(status) {
      if (status == "starting") {
        return "shadow-blur-warning-blue-alert";
      }

      if (status == "monitoring") {
        return "shadow-blur-warning-blue-alert";
      }

      if (status == "waiting") {
        return "shadow-blur-warning-blue-alert";
      }

      if (status == "stopped") {
        return "shadow-blur-warning-blue-alert";
      }

      if (status == "can_not_start") {
        return "shadow-blur-error-alert";
      }

      if (status == "error") {
        return "shadow-blur-error-alert";
      }

      if (status == "stop") {
        return "shadow-blur-warning";
      }

      if (status == "issue") {
        return "shadow-blur-error-alert";
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/layout/layout.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/layout/layout.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout_vue_vue_type_template_id_53216c18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.vue?vue&type=template&id=53216c18& */ "./resources/js/components/layout/layout.vue?vue&type=template&id=53216c18&");
/* harmony import */ var _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/layout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _layout_vue_vue_type_template_id_53216c18___WEBPACK_IMPORTED_MODULE_0__.render,
  _layout_vue_vue_type_template_id_53216c18___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/layout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/navigation/Notifications/snackbarNotification.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/layout/navigation/Notifications/snackbarNotification.vue ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _snackbarNotification_vue_vue_type_template_id_67089110___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snackbarNotification.vue?vue&type=template&id=67089110& */ "./resources/js/components/layout/navigation/Notifications/snackbarNotification.vue?vue&type=template&id=67089110&");
/* harmony import */ var _snackbarNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snackbarNotification.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/navigation/Notifications/snackbarNotification.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _snackbarNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _snackbarNotification_vue_vue_type_template_id_67089110___WEBPACK_IMPORTED_MODULE_0__.render,
  _snackbarNotification_vue_vue_type_template_id_67089110___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/navigation/Notifications/snackbarNotification.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/navigation/Search/search.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/layout/navigation/Search/search.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _search_vue_vue_type_template_id_25dbe05e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=25dbe05e& */ "./resources/js/components/layout/navigation/Search/search.vue?vue&type=template&id=25dbe05e&");
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/navigation/Search/search.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_25dbe05e___WEBPACK_IMPORTED_MODULE_0__.render,
  _search_vue_vue_type_template_id_25dbe05e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/navigation/Search/search.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/navigation/User/user.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/layout/navigation/User/user.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _user_vue_vue_type_template_id_1d1b977e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.vue?vue&type=template&id=1d1b977e& */ "./resources/js/components/layout/navigation/User/user.vue?vue&type=template&id=1d1b977e&");
/* harmony import */ var _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/navigation/User/user.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_vue_vue_type_template_id_1d1b977e___WEBPACK_IMPORTED_MODULE_0__.render,
  _user_vue_vue_type_template_id_1d1b977e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/navigation/User/user.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/navigation/verticalNavigation.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/layout/navigation/verticalNavigation.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _verticalNavigation_vue_vue_type_template_id_41bbeeaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verticalNavigation.vue?vue&type=template&id=41bbeeaa& */ "./resources/js/components/layout/navigation/verticalNavigation.vue?vue&type=template&id=41bbeeaa&");
/* harmony import */ var _verticalNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verticalNavigation.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/navigation/verticalNavigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _verticalNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _verticalNavigation_vue_vue_type_template_id_41bbeeaa___WEBPACK_IMPORTED_MODULE_0__.render,
  _verticalNavigation_vue_vue_type_template_id_41bbeeaa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/navigation/verticalNavigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/layout.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/layout/layout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/layout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layout/navigation/Notifications/snackbarNotification.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/layout/navigation/Notifications/snackbarNotification.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_snackbarNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./snackbarNotification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/Notifications/snackbarNotification.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_snackbarNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layout/navigation/Search/search.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/layout/navigation/Search/search.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/Search/search.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layout/navigation/User/user.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/layout/navigation/User/user.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./user.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/User/user.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layout/navigation/verticalNavigation.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/layout/navigation/verticalNavigation.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verticalNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./verticalNavigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/verticalNavigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verticalNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layout/layout.vue?vue&type=template&id=53216c18&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/layout/layout.vue?vue&type=template&id=53216c18& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_53216c18___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_53216c18___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_53216c18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./layout.vue?vue&type=template&id=53216c18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/layout.vue?vue&type=template&id=53216c18&");


/***/ }),

/***/ "./resources/js/components/layout/navigation/Notifications/snackbarNotification.vue?vue&type=template&id=67089110&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/layout/navigation/Notifications/snackbarNotification.vue?vue&type=template&id=67089110& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_snackbarNotification_vue_vue_type_template_id_67089110___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_snackbarNotification_vue_vue_type_template_id_67089110___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_snackbarNotification_vue_vue_type_template_id_67089110___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./snackbarNotification.vue?vue&type=template&id=67089110& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/Notifications/snackbarNotification.vue?vue&type=template&id=67089110&");


/***/ }),

/***/ "./resources/js/components/layout/navigation/Search/search.vue?vue&type=template&id=25dbe05e&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/layout/navigation/Search/search.vue?vue&type=template&id=25dbe05e& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_25dbe05e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_25dbe05e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_25dbe05e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./search.vue?vue&type=template&id=25dbe05e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/Search/search.vue?vue&type=template&id=25dbe05e&");


/***/ }),

/***/ "./resources/js/components/layout/navigation/User/user.vue?vue&type=template&id=1d1b977e&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/layout/navigation/User/user.vue?vue&type=template&id=1d1b977e& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_1d1b977e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_1d1b977e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_1d1b977e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./user.vue?vue&type=template&id=1d1b977e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/User/user.vue?vue&type=template&id=1d1b977e&");


/***/ }),

/***/ "./resources/js/components/layout/navigation/verticalNavigation.vue?vue&type=template&id=41bbeeaa&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/layout/navigation/verticalNavigation.vue?vue&type=template&id=41bbeeaa& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verticalNavigation_vue_vue_type_template_id_41bbeeaa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verticalNavigation_vue_vue_type_template_id_41bbeeaa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verticalNavigation_vue_vue_type_template_id_41bbeeaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./verticalNavigation.vue?vue&type=template&id=41bbeeaa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/verticalNavigation.vue?vue&type=template&id=41bbeeaa&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/layout.vue?vue&type=template&id=53216c18&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/layout.vue?vue&type=template&id=53216c18& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-app", [
    _c(
      "div",
      [
        _c("VerticalMenu"),
        _vm._v(" "),
        _c("SnackBarNotification"),
        _vm._v(" "),
        _c(
          "v-main",
          { attrs: { app: "" } },
          [
            _c(
              "v-container",
              { staticClass: "mx-auto", attrs: { fluid: "" } },
              [_c("router-view")],
              1
            ),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/Notifications/snackbarNotification.vue?vue&type=template&id=67089110&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/Notifications/snackbarNotification.vue?vue&type=template&id=67089110& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.alert.length != 0
        ? _c(
            "v-snackbar",
            {
              staticClass: "my-3",
              attrs: {
                timeout: -1,
                value: true,
                bottom: "",
                right: "",
                color: _vm.getAlertColor(_vm.alert.status),
                elevation: "24",
              },
            },
            [
              _c(
                "v-row",
                { staticClass: "d-flex justify-space-between ml-3 mr-6" },
                [
                  _c("v-icon", [
                    _vm._v(_vm._s(_vm.iconFunction(_vm.alert.status))),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "body-1" }, [
                    _vm._v(_vm._s(_vm.alert.message)),
                  ]),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/Search/search.vue?vue&type=template&id=25dbe05e&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/Search/search.vue?vue&type=template&id=25dbe05e& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "mx-1" },
    [
      _c(
        "v-tooltip",
        {
          attrs: { bottom: "", color: "#192B4B" },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function (ref) {
                var on = ref.on
                return [
                  _c(
                    "v-btn",
                    _vm._g(
                      {
                        directives: [
                          {
                            name: "shortkey",
                            rawName: "v-shortkey",
                            value: ["ctrl", "space"],
                            expression: "['ctrl', 'space']",
                          },
                        ],
                        attrs: { icon: "" },
                        on: {
                          shortkey: function ($event) {
                            return _vm.openSearchDialog()
                          },
                          click: function ($event) {
                            return _vm.openSearchDialog()
                          },
                        },
                      },
                      on
                    ),
                    [_c("v-icon", [_vm._v(" mdi-magnify ")])],
                    1
                  ),
                ]
              },
            },
          ]),
        },
        [
          _vm._v(" "),
          _c(
            "span",
            [_c("v-container", [_c("v-row", [_vm._v(" Vyhledávání ")])], 1)],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "800", "overlay-color": "rgb(17, 27, 45)" },
          model: {
            value: _vm.searchDialog,
            callback: function ($$v) {
              _vm.searchDialog = $$v
            },
            expression: "searchDialog",
          },
        },
        [
          _c(
            "v-card",
            { attrs: { height: "400" } },
            [
              _c(
                "v-card-text",
                { staticClass: "pt-2" },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "12", md: "12", lg: "12" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          "prepend-inner-icon": "mdi-magnify",
                          autofocus: "",
                          loading: _vm.loading,
                          color: "#328AF1",
                          placeholder:
                            "Pro otevření vyhledávání stiskněte crtl + mezerník",
                        },
                        model: {
                          value: _vm.searchData,
                          callback: function ($$v) {
                            _vm.searchData = $$v
                          },
                          expression: "searchData",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.results.length > 0
                    ? _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "12", md: "12", lg: "12" } },
                        [
                          _c("v-virtual-scroll", {
                            attrs: {
                              bench: 0,
                              items: _vm.results,
                              height: "250",
                              "item-height": "64",
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var item = ref.item
                                    return [
                                      _c(
                                        "v-list-item",
                                        {
                                          key: item.id,
                                          attrs: { link: "", to: item.url },
                                          on: {
                                            click: function ($event) {
                                              return _vm.closeDialog()
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "v-list-item-avatar",
                                            [
                                              _c("v-img", {
                                                attrs: { src: item.logo },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-item-content",
                                            [
                                              _c("v-list-item-title", {
                                                domProps: {
                                                  innerHTML: _vm._s(item.nazev),
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("v-list-item-subtitle", {
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    item.description
                                                  ),
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-divider"),
                                    ]
                                  },
                                },
                              ],
                              null,
                              false,
                              622892697
                            ),
                          }),
                        ],
                        1
                      )
                    : _vm._e(),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/User/user.vue?vue&type=template&id=1d1b977e&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/User/user.vue?vue&type=template&id=1d1b977e& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "mx-1" },
    [
      _c(
        "v-menu",
        {
          attrs: { transition: "scroll-y-transition" },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function (ref) {
                var on = ref.on
                return [
                  _c(
                    "v-btn",
                    _vm._g({ attrs: { icon: "" } }, on),
                    [_c("v-icon", [_vm._v(" mdi-account ")])],
                    1
                  ),
                ]
              },
            },
          ]),
        },
        [
          _vm._v(" "),
          _c(
            "v-list",
            {
              staticClass: "text-center caption",
              attrs: { width: "200px", color: "#192B4B" },
            },
            [
              _c(
                "v-list-item",
                { attrs: { link: "", to: "/user/dashboard" } },
                [
                  _vm._v(
                    "\n                Uživatelský účet\n                "
                  ),
                  _c("v-spacer"),
                  _c(
                    "v-icon",
                    { attrs: { color: "blue", right: "", "x-small": "" } },
                    [_vm._v("mdi-account-cog-outline")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                { attrs: { link: "", to: "/settings/dashboard" } },
                [
                  _vm._v("\n                Nastavení"),
                  _c("v-spacer"),
                  _c(
                    "v-icon",
                    { attrs: { color: "green", right: "", "x-small": "" } },
                    [_vm._v("mdi-settings")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "ml-2 mr-2" }),
              _vm._v(" "),
              _c(
                "v-list-item",
                {
                  on: {
                    click: function ($event) {
                      return _vm.logout()
                    },
                  },
                },
                [
                  _vm._v("\n                Odhlásit se\n                "),
                  _c("v-spacer"),
                  _c(
                    "v-icon",
                    { attrs: { color: "red", right: "", "x-small": "" } },
                    [_vm._v("mdi-lock")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "ml-2 mr-2" }),
              _vm._v(" "),
              _c("v-list-item", { staticClass: "caption" }, [
                _c("small", { staticClass: "indigo--text" }, [
                  _vm._v(
                    "\n                    Verze " +
                      _vm._s(_vm.systemVersion) +
                      "\n                "
                  ),
                ]),
              ]),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/verticalNavigation.vue?vue&type=template&id=41bbeeaa&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/verticalNavigation.vue?vue&type=template&id=41bbeeaa& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        {
          staticClass: "justify-start d-flex",
          staticStyle: { position: "fixed", "z-index": "1" },
        },
        [
          _c("v-img", {
            staticClass: "ml-6",
            staticStyle: { cursor: "pointer" },
            attrs: {
              height: "30",
              width: "130",
              link: "",
              src: "http://93.91.154.55/storage//logos/png",
              "lazy-src": "http://93.91.154.55/storage//logos/png",
            },
            on: {
              click: function ($event) {
                return _vm.returnToHome()
              },
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "justify-end mr-3 d-flex",
          staticStyle: { position: "relative", "z-index": "1" },
        },
        [
          _c(
            "div",
            {
              staticClass: "justify-end mr-3 d-flex",
              staticStyle: { position: "fixed" },
            },
            [
              _c("Search"),
              _vm._v(" "),
              _c("User"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mx-1" },
                [
                  _c(
                    "v-tooltip",
                    {
                      attrs: { bottom: "", color: "#192B4B" },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function (ref) {
                            var on = ref.on
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  {
                                    attrs: { icon: "" },
                                    on: {
                                      click: function ($event) {
                                        $event.stopPropagation()
                                        _vm.alertSideBar = !_vm.alertSideBar
                                      },
                                    },
                                  },
                                  on
                                ),
                                [_c("v-icon", [_vm._v(" mdi-bell ")])],
                                1
                              ),
                            ]
                          },
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "span",
                        [
                          _c(
                            "v-container",
                            [_c("v-row", [_vm._v(" Notifikace ")])],
                            1
                          ),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "v-navigation-drawer",
        {
          staticStyle: { "z-index": "100" },
          attrs: {
            "overlay-color": "rgb(17, 27, 45)",
            absolute: "",
            temporary: "",
            right: "",
            color: "#101B2D",
            width: "25%",
          },
          model: {
            value: _vm.alertSideBar,
            callback: function ($$v) {
              _vm.alertSideBar = $$v
            },
            expression: "alertSideBar",
          },
        },
        [
          _c(
            "p",
            {
              staticClass:
                "mt-2 ml-3 text-left caption text--disabled font-weight-medium",
              attrs: { fixed: "" },
            },
            [_vm._v("\n            Historie událostí\n        ")]
          ),
          _vm._v(" "),
          _vm.streamsHistory.length != 0
            ? _c(
                "v-timeline",
                { staticClass: "ml-n6 mr-3", attrs: { dense: "" } },
                _vm._l(_vm.streamsHistory, function (streamHistory) {
                  return _c(
                    "v-timeline-item",
                    {
                      key: streamHistory.id,
                      staticClass: "overflow-hidden rounded-lg blur",
                      attrs: {
                        small: "",
                        color: _vm.getAlertColor(streamHistory.status),
                      },
                    },
                    [
                      _c(
                        "v-alert",
                        {
                          staticClass:
                            "overflow-hidden rounded-lg blur text-center my-3",
                          class: _vm.getAlertBlur(streamHistory.status),
                          attrs: {
                            color: _vm.getAlertColor(streamHistory.status),
                          },
                        },
                        [
                          _c("v-col", { attrs: { cols: "12" } }, [
                            _c("strong", [
                              _vm._v(_vm._s(streamHistory.stream)),
                            ]),
                            _vm._v(
                              " -\n                        " +
                                _vm._s(streamHistory.msg) +
                                "\n                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "12" } }, [
                            _c("small", { staticClass: "caption" }, [
                              _vm._v(
                                _vm._s(new Date(streamHistory.created_at))
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                }),
                1
              )
            : _c(
                "v-timeline",
                { staticClass: "mr-3", attrs: { dense: "" } },
                [
                  _c(
                    "v-timeline-item",
                    { attrs: { small: "", color: "#182948" } },
                    [
                      _c(
                        "v-alert",
                        {
                          staticClass:
                            "overflow-hidden rounded-lg blur shadow-blur-warning-blue-alert text-center my-3",
                          attrs: { color: "#182948" },
                        },
                        [_c("strong", [_vm._v("Není zde žádná nová událost")])]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);