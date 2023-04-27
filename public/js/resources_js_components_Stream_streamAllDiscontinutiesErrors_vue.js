"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Stream_streamAllDiscontinutiesErrors_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamAllDiscontinutiesErrors.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamAllDiscontinutiesErrors.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["pid"],
  data: function data() {
    return {
      discontinuityErros: ""
    };
  },
  components: {},
  created: function created() {
    this.getDiscontinuity();
  },
  methods: {
    resetErrors: function resetErrors() {
      var _this = this;

      axios.post("streams/pids/discontinuity/" + this.$route.params.streamId + "/" + this.pid).then(function (response) {
        _this.discontinuityErros = response.data;
      });
    },
    websocketData: function websocketData() {
      var _this2 = this;

      Echo.channel("streamDiscontinuityPidErrors_" + this.pid + "_" + this.$route.params.streamId).listen("StreamDiscontinuityPidErrorsEvent", function (e) {
        _this2.discontinuityErros = e[0];
      });
    },
    checkNumberOfDiscontinuites: function checkNumberOfDiscontinuites() {
      if (this.discontinuityErros == 0) {
        return "green--text";
      }

      return "red--text font-weight-bold";
    },
    getDiscontinuity: function getDiscontinuity() {
      var _this3 = this;

      axios.get("streams/pids/discontinuity/" + this.$route.params.streamId + "/" + this.pid).then(function (response) {
        _this3.discontinuityErros = response.data;
      });
    }
  },
  computed: {},
  mounted: function mounted() {
    this.websocketData();
    this.checkNumberOfDiscontinuites();
  },
  watch: {
    $route: function $route(to, from) {
      this.websocketData();
    }
  },
  beforeDestroy: function beforeDestroy() {}
});

/***/ }),

/***/ "./resources/js/components/Stream/streamAllDiscontinutiesErrors.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Stream/streamAllDiscontinutiesErrors.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _streamAllDiscontinutiesErrors_vue_vue_type_template_id_310462ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./streamAllDiscontinutiesErrors.vue?vue&type=template&id=310462ca& */ "./resources/js/components/Stream/streamAllDiscontinutiesErrors.vue?vue&type=template&id=310462ca&");
/* harmony import */ var _streamAllDiscontinutiesErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./streamAllDiscontinutiesErrors.vue?vue&type=script&lang=js& */ "./resources/js/components/Stream/streamAllDiscontinutiesErrors.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _streamAllDiscontinutiesErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _streamAllDiscontinutiesErrors_vue_vue_type_template_id_310462ca___WEBPACK_IMPORTED_MODULE_0__.render,
  _streamAllDiscontinutiesErrors_vue_vue_type_template_id_310462ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Stream/streamAllDiscontinutiesErrors.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Stream/streamAllDiscontinutiesErrors.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Stream/streamAllDiscontinutiesErrors.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_streamAllDiscontinutiesErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./streamAllDiscontinutiesErrors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamAllDiscontinutiesErrors.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_streamAllDiscontinutiesErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Stream/streamAllDiscontinutiesErrors.vue?vue&type=template&id=310462ca&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Stream/streamAllDiscontinutiesErrors.vue?vue&type=template&id=310462ca& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_streamAllDiscontinutiesErrors_vue_vue_type_template_id_310462ca___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_streamAllDiscontinutiesErrors_vue_vue_type_template_id_310462ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_streamAllDiscontinutiesErrors_vue_vue_type_template_id_310462ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./streamAllDiscontinutiesErrors.vue?vue&type=template&id=310462ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamAllDiscontinutiesErrors.vue?vue&type=template&id=310462ca&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamAllDiscontinutiesErrors.vue?vue&type=template&id=310462ca&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamAllDiscontinutiesErrors.vue?vue&type=template&id=310462ca& ***!
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
    { class: _vm.checkNumberOfDiscontinuites() },
    [
      _vm._v("\n    " + _vm._s(_vm.discontinuityErros) + "\n    "),
      _c(
        "v-btn",
        {
          attrs: { "x-small": "", icon: "", color: "#328AF1" },
          on: {
            click: function ($event) {
              return _vm.resetErrors()
            },
          },
        },
        [_c("v-icon", { attrs: { "x-small": "" } }, [_vm._v(" mdi-restore ")])],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);