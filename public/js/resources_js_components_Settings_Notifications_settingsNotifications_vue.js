"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Settings_Notifications_settingsNotifications_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Notifications/settingsNotifications.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Notifications/settingsNotifications.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      createDialog: false,
      warningDialog: false,
      formData: [],
      errors: [],
      search: "",
      items: [],
      headers: [{
        text: "Email",
        value: "email"
      }, {
        text: "Uživatel",
        value: "user"
      }, {
        text: "Akce",
        value: "actions"
      }]
    };
  },
  created: function created() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;

      axios.get("settings/notifications").then(function (response) {
        _this.items = response.data;
      })["catch"](function (error) {
        if (error.response.status == 403) {
          _this.$router.push("/403");
        }
      });
    },
    openNewEmailDialog: function openNewEmailDialog() {
      this.createDialog = true;
      this.formData = [];
    },
    storeStream: function storeStream() {
      var _this2 = this;

      axios.post("settings/notifications", {
        email: this.formData.email
      }).then(function (response) {
        _this2.$store.state.alerts = response.data;

        _this2.closeDialog();

        _this2.index();
      })["catch"](function (error) {
        _this2.errors = error.response.data.errors;
      });
    },
    deleteItem: function deleteItem(notificationId) {
      this.formData = notificationId;
      this.warningDialog = true;
    },
    deleteNotification: function deleteNotification() {
      var _this3 = this;

      axios["delete"]("settings/notifications/" + this.formData).then(function (response) {
        _this3.$store.state.alerts = response.data;

        _this3.closeDialog();

        _this3.index();
      })["catch"](function (error) {
        _this3.errors = error.response.data.errors;
      });
    },
    closeDialog: function closeDialog() {
      this.createDialog = false;
      this.warningDialog = false;
      this.formData = [];
      this.errors = [];
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Settings/Notifications/settingsNotifications.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Settings/Notifications/settingsNotifications.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settingsNotifications_vue_vue_type_template_id_9dd3ab06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settingsNotifications.vue?vue&type=template&id=9dd3ab06& */ "./resources/js/components/Settings/Notifications/settingsNotifications.vue?vue&type=template&id=9dd3ab06&");
/* harmony import */ var _settingsNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settingsNotifications.vue?vue&type=script&lang=js& */ "./resources/js/components/Settings/Notifications/settingsNotifications.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settingsNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settingsNotifications_vue_vue_type_template_id_9dd3ab06___WEBPACK_IMPORTED_MODULE_0__.render,
  _settingsNotifications_vue_vue_type_template_id_9dd3ab06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Settings/Notifications/settingsNotifications.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Settings/Notifications/settingsNotifications.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Settings/Notifications/settingsNotifications.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settingsNotifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Notifications/settingsNotifications.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Settings/Notifications/settingsNotifications.vue?vue&type=template&id=9dd3ab06&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Settings/Notifications/settingsNotifications.vue?vue&type=template&id=9dd3ab06& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsNotifications_vue_vue_type_template_id_9dd3ab06___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsNotifications_vue_vue_type_template_id_9dd3ab06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsNotifications_vue_vue_type_template_id_9dd3ab06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settingsNotifications.vue?vue&type=template&id=9dd3ab06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Notifications/settingsNotifications.vue?vue&type=template&id=9dd3ab06&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Notifications/settingsNotifications.vue?vue&type=template&id=9dd3ab06&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Notifications/settingsNotifications.vue?vue&type=template&id=9dd3ab06& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "12", md: "12", lg: "12" } },
                [
                  _c(
                    "v-card",
                    {
                      staticClass:
                        "overflow-hidden rounded-xl blur shadow-blur",
                      attrs: { flat: "" },
                    },
                    [
                      _c(
                        "v-card-title",
                        [
                          _c("v-text-field", {
                            attrs: {
                              autofocus: "",
                              outlined: "",
                              dense: "",
                              color: "#1E293B",
                              "prepend-inner-icon": "mdi-magnify",
                              label: "Hledání ...",
                              "single-line": "",
                              "hide-details": "",
                            },
                            model: {
                              value: _vm.search,
                              callback: function ($$v) {
                                _vm.search = $$v
                              },
                              expression: "search",
                            },
                          }),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                plain: "",
                                outlined: "",
                                color: "#0277BD",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.openNewEmailDialog()
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                            Nový email\n                        "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-data-table", {
                        attrs: {
                          headers: _vm.headers,
                          items: _vm.items,
                          search: _vm.search,
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "item.user",
                            fn: function (ref) {
                              var item = ref.item
                              return [
                                _c("span", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(item.email) +
                                      "\n                            "
                                  ),
                                ]),
                              ]
                            },
                          },
                          {
                            key: "item.actions",
                            fn: function (ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "v-icon",
                                  {
                                    attrs: { small: "", color: "red" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.deleteItem(item.id)
                                      },
                                    },
                                  },
                                  [_vm._v("mdi-delete")]
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            persistent: "",
            "max-width": "400px",
            "overlay-color": "rgb(17, 27, 45)",
          },
          model: {
            value: _vm.warningDialog,
            callback: function ($$v) {
              _vm.warningDialog = $$v
            },
            expression: "warningDialog",
          },
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    { staticClass: "pt-3" },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              attrs: {
                                cols: "12",
                                sm: "12",
                                md: "12",
                                lg: "12",
                              },
                            },
                            [
                              _c(
                                "p",
                                { staticClass: "mt-6 text-center headline" },
                                [
                                  _vm._v(
                                    "\n                                Přejete si odebrat email?\n                            "
                                  ),
                                ]
                              ),
                            ]
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
              _vm._v(" "),
              _c(
                "v-card-actions",
                { attrs: { color: "#101B1D" } },
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "blue darken-1",
                        plain: "",
                        outlined: "",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.closeDialog()
                        },
                      },
                    },
                    [_vm._v("\n                    Zavřít\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "red darken-1", plain: "", outlined: "" },
                      on: {
                        click: function ($event) {
                          return _vm.deleteNotification()
                        },
                      },
                    },
                    [_vm._v("\n                    Odebrat\n                ")]
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
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            persistent: "",
            "max-width": "800px",
            "overlay-color": "rgb(17, 27, 45)",
          },
          model: {
            value: _vm.createDialog,
            callback: function ($$v) {
              _vm.createDialog = $$v
            },
            expression: "createDialog",
          },
        },
        [
          _c(
            "v-card",
            [
              _c("p", { staticClass: "pt-3 text-center subtitle-1" }, [
                _vm._v("Přidání nového emailu"),
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    { staticClass: "pt-3" },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              attrs: {
                                cols: "12",
                                sm: "12",
                                md: "12",
                                lg: "12",
                              },
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  dense: "",
                                  outlined: "",
                                  autofocus: "",
                                  "error-messages": _vm.errors.email,
                                  label:
                                    "Email na který se budou dorucovat notifikace",
                                  type: "text",
                                  color: "#0277BD",
                                },
                                model: {
                                  value: _vm.formData.email,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "email", $$v)
                                  },
                                  expression: "formData.email",
                                },
                              }),
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
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                { attrs: { color: "#101B1D" } },
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "blue darken-1",
                        plain: "",
                        outlined: "",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.closeDialog()
                        },
                      },
                    },
                    [_vm._v("\n                    Zavřít\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "green darken-1",
                        plain: "",
                        outlined: "",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.storeStream()
                        },
                      },
                    },
                    [_vm._v("\n                    Uložit\n                ")]
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