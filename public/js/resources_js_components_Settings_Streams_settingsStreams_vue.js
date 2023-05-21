"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Settings_Streams_settingsStreams_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Streams/settingsStreams.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Streams/settingsStreams.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      editDialog: false,
      changeStreamStatus: false,
      formData: [],
      errors: [],
      search: "",
      items: [],
      stream: [],
      headers: [{
        text: "Náhled",
        value: "image"
      }, {
        text: "Stream",
        value: "nazev"
      }, {
        text: "Url",
        value: "stream_url"
      }, {
        text: "Status",
        value: "status"
      }, {
        text: "Dohleduje se",
        value: "monitored_at"
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

      axios.get("settings/streams").then(function (response) {
        _this.items = response.data;
      })["catch"](function (error) {
        if (error.response.status == 403) {
          _this.$router.push("/403");
        }
      });
    },
    storeStream: function storeStream() {
      var _this2 = this;

      axios.post("settings/streams", {
        nazev: this.formData.nazev,
        stream_url: this.formData.stream_url
      }).then(function (response) {
        _this2.$store.state.alerts = response.data;

        _this2.closeDialog();

        _this2.index();
      })["catch"](function (error) {
        _this2.errors = error.response.data.errors;
      });
    },
    closeDialog: function closeDialog() {
      this.createDialog = false;
      this.warningDialog = false;
      this.editDialog = false;
      this.changeStreamStatus = false;
      this.formData = [];
      this.errors = [];
    },
    openNewStreamDialog: function openNewStreamDialog() {
      this.createDialog = true;
    },
    deleteStream: function deleteStream() {
      var _this3 = this;

      axios["delete"]("settings/streams/" + this.formData).then(function (response) {
        _this3.$store.state.alerts = response.data;

        _this3.closeDialog();

        _this3.index();
      });
    },
    deleteItem: function deleteItem(streamId) {
      this.formData = streamId;
      this.warningDialog = true;
    },
    openEditDialog: function openEditDialog(stream) {
      this.stream = stream;
      this.editDialog = true;
    },
    editStream: function editStream() {
      var _this4 = this;

      axios.patch("settings/streams/" + this.stream.id, {
        nazev: this.stream.nazev,
        changeStreamStatus: this.changeStreamStatus
      }).then(function (response) {
        _this4.$store.state.alerts = response.data;

        _this4.closeDialog();

        _this4.index();
      })["catch"](function (error) {
        _this4.errors = error.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Settings/Streams/settingsStreams.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Settings/Streams/settingsStreams.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settingsStreams_vue_vue_type_template_id_488fc493___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settingsStreams.vue?vue&type=template&id=488fc493& */ "./resources/js/components/Settings/Streams/settingsStreams.vue?vue&type=template&id=488fc493&");
/* harmony import */ var _settingsStreams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settingsStreams.vue?vue&type=script&lang=js& */ "./resources/js/components/Settings/Streams/settingsStreams.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settingsStreams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settingsStreams_vue_vue_type_template_id_488fc493___WEBPACK_IMPORTED_MODULE_0__.render,
  _settingsStreams_vue_vue_type_template_id_488fc493___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Settings/Streams/settingsStreams.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Settings/Streams/settingsStreams.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Settings/Streams/settingsStreams.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsStreams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settingsStreams.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Streams/settingsStreams.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsStreams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Settings/Streams/settingsStreams.vue?vue&type=template&id=488fc493&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Settings/Streams/settingsStreams.vue?vue&type=template&id=488fc493& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsStreams_vue_vue_type_template_id_488fc493___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsStreams_vue_vue_type_template_id_488fc493___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsStreams_vue_vue_type_template_id_488fc493___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settingsStreams.vue?vue&type=template&id=488fc493& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Streams/settingsStreams.vue?vue&type=template&id=488fc493&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Streams/settingsStreams.vue?vue&type=template&id=488fc493&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Streams/settingsStreams.vue?vue&type=template&id=488fc493& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
                              clearable: "",
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
                              directives: [
                                {
                                  name: "shortkey",
                                  rawName: "v-shortkey",
                                  value: ["n", "ctrl"],
                                  expression: "['n', 'ctrl']",
                                },
                              ],
                              attrs: {
                                plain: "",
                                outlined: "",
                                color: "#0277BD",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.openNewStreamDialog()
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                            Nový stream\n                        "
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
                            key: "item.image",
                            fn: function (ref) {
                              var item = ref.item
                              return [
                                _c("v-img", {
                                  attrs: {
                                    height: "25",
                                    width: "45",
                                    "lazy-src": item.image,
                                    src: item.image,
                                    "aspect-ratio": 16 / 9,
                                  },
                                }),
                              ]
                            },
                          },
                          {
                            key: "item.status",
                            fn: function (ref) {
                              var item = ref.item
                              return [
                                item.status == "waiting"
                                  ? _c("span", { staticClass: "blue--text" }, [
                                      _vm._v(
                                        "\n                                Čeká na spuštění\n                            "
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.status == "monitoring"
                                  ? _c("span", { staticClass: "green--text" }, [
                                      _vm._v(
                                        "\n                                Dohleduje se\n                            "
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.status == "starting"
                                  ? _c("span", { staticClass: "teal--text" }, [
                                      _vm._v(
                                        "\n                                Spouští se dohledování\n                            "
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.status == "stopped"
                                  ? _c("span", { staticClass: "blue--text" }, [
                                      _vm._v(
                                        "\n                                Zastaveno dohledování\n                            "
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.status == "can_not_start"
                                  ? _c("span", { staticClass: "red--text" }, [
                                      _vm._v(
                                        "\n                                Výpadek\n                            "
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.status == "issue"
                                  ? _c(
                                      "span",
                                      { staticClass: "orange--text" },
                                      [
                                        _vm._v(
                                          "\n                                Problém ve streamu\n                            "
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
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
                                    attrs: { small: "", color: "info" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.openEditDialog(item)
                                      },
                                    },
                                  },
                                  [_vm._v("mdi-pencil")]
                                ),
                                _vm._v(" "),
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
            "v-form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.deleteStream()
                },
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
                                    {
                                      staticClass: "mt-6 text-center headline",
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Přejete si odebrat kanál?\n                                "
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
                        [
                          _vm._v(
                            "\n                        Zavřít\n                    "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "red darken-1",
                            type: "submit",
                            plain: "",
                            outlined: "",
                          },
                        },
                        [
                          _vm._v(
                            "\n                        Odebrat\n                    "
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
            "v-form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.storeStream()
                },
              },
            },
            [
              _c(
                "v-card",
                [
                  _c("p", { staticClass: "pt-3 text-center subtitle-1" }, [
                    _vm._v(
                      "\n                    Založení nového streamu\n                "
                    ),
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
                                    md: "6",
                                    lg: "6",
                                  },
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      dense: "",
                                      outlined: "",
                                      autofocus: "",
                                      "error-messages": _vm.errors.nazev,
                                      label: "Název sreamu",
                                      type: "text",
                                      color: "#0277BD",
                                    },
                                    model: {
                                      value: _vm.formData.nazev,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.formData, "nazev", $$v)
                                      },
                                      expression: "formData.nazev",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6",
                                  },
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      dense: "",
                                      outlined: "",
                                      "error-messages": _vm.errors.stream_url,
                                      label: "dohledová adresa",
                                      type: "text",
                                      color: "#0277BD",
                                    },
                                    model: {
                                      value: _vm.formData.stream_url,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "stream_url",
                                          $$v
                                        )
                                      },
                                      expression: "formData.stream_url",
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
                        [
                          _vm._v(
                            "\n                        Zavřít\n                    "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "green darken-1",
                            type: "submit",
                            plain: "",
                            outlined: "",
                          },
                        },
                        [
                          _vm._v(
                            "\n                        Uložit\n                    "
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
            value: _vm.editDialog,
            callback: function ($$v) {
              _vm.editDialog = $$v
            },
            expression: "editDialog",
          },
        },
        [
          _c(
            "v-form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.editStream()
                },
              },
            },
            [
              _c(
                "v-card",
                [
                  _c("p", { staticClass: "pt-3 text-center subtitle-1" }, [
                    _vm._v("Úprava streamu"),
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
                                    md: "6",
                                    lg: "6",
                                  },
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      dense: "",
                                      outlined: "",
                                      autofocus: "",
                                      "error-messages": _vm.errors.nazev,
                                      label: "Název sreamu",
                                      type: "text",
                                      color: "#0277BD",
                                    },
                                    model: {
                                      value: _vm.stream.nazev,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.stream, "nazev", $$v)
                                      },
                                      expression: "stream.nazev",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6",
                                  },
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      dense: "",
                                      outlined: "",
                                      readonly: "",
                                      disabled: "",
                                      "error-messages": _vm.errors.stream_url,
                                      label: "dohledová adresa",
                                      type: "text",
                                      color: "#0277BD",
                                    },
                                    model: {
                                      value: _vm.stream.stream_url,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.stream, "stream_url", $$v)
                                      },
                                      expression: "stream.stream_url",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6",
                                  },
                                },
                                [
                                  _vm.stream.status == "stopped"
                                    ? _c(
                                        "span",
                                        [
                                          _c("v-switch", {
                                            attrs: {
                                              label:
                                                "Přidání streamu do fronty ke spuštění",
                                            },
                                            model: {
                                              value: _vm.changeStreamStatus,
                                              callback: function ($$v) {
                                                _vm.changeStreamStatus = $$v
                                              },
                                              expression: "changeStreamStatus",
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : _c(
                                        "span",
                                        [
                                          _c("v-switch", {
                                            attrs: {
                                              label:
                                                "Vypnutí dohledování streamu",
                                            },
                                            model: {
                                              value: _vm.changeStreamStatus,
                                              callback: function ($$v) {
                                                _vm.changeStreamStatus = $$v
                                              },
                                              expression: "changeStreamStatus",
                                            },
                                          }),
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
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    { attrs: { color: "#101B1D" } },
                    [
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
                        [
                          _vm._v(
                            "\n                        Zavřít\n                    "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "green darken-1",
                            type: "submit",
                            plain: "",
                            outlined: "",
                          },
                        },
                        [
                          _vm._v(
                            "\n                        Uložit\n                    "
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