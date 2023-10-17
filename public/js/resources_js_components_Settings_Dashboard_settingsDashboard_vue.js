"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Settings_Dashboard_settingsDashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settingsDashboardStreamsStatuses_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settingsDashboardStreamsStatuses.vue */ "./resources/js/components/Settings/Dashboard/settingsDashboardStreamsStatuses.vue");
/* harmony import */ var _settingsDashboardNetwork_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settingsDashboardNetwork.vue */ "./resources/js/components/Settings/Dashboard/settingsDashboardNetwork.vue");
/* harmony import */ var _settingsHealthChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settingsHealthChart.vue */ "./resources/js/components/Settings/Dashboard/settingsHealthChart.vue");
/* harmony import */ var _settingsDashboardProblemStreams_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settingsDashboardProblemStreams.vue */ "./resources/js/components/Settings/Dashboard/settingsDashboardProblemStreams.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  metaInfo: {
    title: "IPTV Dohled - Dashboard"
  },
  components: {
    SettingsDashboardStreamsStatuses: _settingsDashboardStreamsStatuses_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SettingsDashboardNetwork: _settingsDashboardNetwork_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    settingsHealthChart: _settingsHealthChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    settingsDashboardProblemStrems: _settingsDashboardProblemStreams_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      items: []
    };
  },
  created: function created() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;

      axios.get("settings/dashboard").then(function (response) {
        _this.items = response.data;
      })["catch"](function (error) {
        if (error.response.status == 403) {
          _this.$router.push("/403");
        }
      });
    },
    translateName: function translateName(name) {
      if (name == "UsedDiskSpace") {
        return "HDD";
      }

      if (name == "DatabaseConnectionCount") {
        return "Vytížení Databáze";
      }

      if (name == "Redis") {
        return "Redis cache";
      }

      if (name == "CpuLoad") {
        return "Zatížení CPU";
      }

      return name;
    },
    textColor: function textColor(result) {
      if (result == "Ok") {
        return "green--text";
      }

      if (result == "Ko") {
        return "red--text";
      }

      return "blue--text";
    },
    pickBgColor: function pickBgColor(value) {
      if (value <= 50) {
        return "green";
      }

      if (value > 50 && value <= 75) {
        return "orange";
      }

      if (value > 75) {
        return "red";
      }
    },
    explodeTextAndTakeFirst: function explodeTextAndTakeFirst(data) {
      if (typeof data == "number") {
        return parseFloat(data).toFixed(1);
      }

      var splitedData = data.split(" ");
      return splitedData[0];
    }
  },
  mounted: function mounted() {
    setInterval(function () {
      try {
        this.index();
      } catch (error) {}
    }.bind(this), 6000);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardNetwork.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardNetwork.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      chartOptions: {
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        chart: {
          toolbar: {
            show: false
          },
          type: "area",
          animations: {
            enabled: false,
            easing: "linear",
            dynamicAnimation: {
              speed: 1000
            }
          }
        },
        xaxis: {
          type: "datetime",
          categories: [],
          convertedCatToNumeric: false,
          tickPlacement: "between"
        },
        // tooltip: {
        //     x: {
        //         format: "dd/MM/yy HH:mm",
        //     },
        // },
        yaxis: {
          show: true
        }
      },
      series: []
    };
  },
  created: function created() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;

      axios.get("settings/dashboard/network-speed").then(function (response) {
        _this.chartOptions.xaxis.categories = response.data.categories;
        _this.series = response.data.series;
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardProblemStreams.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardProblemStreams.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      problemStreams: [],
      headers: [{
        text: "Název",
        align: "start",
        value: "nazev"
      }, {
        text: "Status",
        value: "status"
      }, {
        text: "Počet problémů",
        value: "problems.length"
      }, {
        text: "",
        value: "actions"
      }],
      headersPids: [{
        text: "Pid",
        value: "pid"
      }, {
        text: "Počet chyb",
        value: "errors"
      }, {
        text: "Čas vytvoření chyby",
        value: "created_at"
      }],
      infoDialog: false,
      formData: []
    };
  },
  created: function created() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;

      axios.get("settings/dashboard/streams/with-problem-pids").then(function (response) {
        _this.problemStreams = response.data;
      });
    },
    translateStatus: function translateStatus(streamStatus) {
      if (streamStatus == "waiting") {
        return "Čeká na spuštění";
      }

      if (streamStatus == "monitoring") {
        return "Dohleduje se";
      }

      if (streamStatus == "starting") {
        return "Spouští se dohledování";
      }

      if (streamStatus == "stopped") {
        return "Zastaveno dohledování";
      }

      if (streamStatus == "can_not_start") {
        return "Výpadek";
      }

      if (streamStatus == "issue") {
        return "Problém ve streamu";
      }
    },
    convertIsoDatetime: function convertIsoDatetime(isoDate) {
      var date = new Date(isoDate);
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
    },
    getColor: function getColor(streamStatus) {
      if (streamStatus == "waiting") {
        return "blue";
      }

      if (streamStatus == "monitoring") {
        return "green";
      }

      if (streamStatus == "starting") {
        return "green";
      }

      if (streamStatus == "stopped") {
        return "blue";
      }

      if (streamStatus == "can_not_start") {
        return "red";
      }

      if (streamStatus == "issue") {
        return "orange";
      }
    },
    openInfoDialog: function openInfoDialog(stream) {
      this.formData.stream = stream;
      this.infoDialog = true;
    },
    closeDialog: function closeDialog() {
      this.infoDialog = false;
      this.formData = [];
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardStreamsStatuses.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardStreamsStatuses.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      current: [],
      chartOptions: {
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        chart: {
          toolbar: {
            show: false
          },
          type: "area",
          animations: {
            enabled: false,
            easing: "linear",
            dynamicAnimation: {
              speed: 1000
            }
          }
        },
        xaxis: {
          show: true,
          categories: []
        },
        yaxis: {
          show: true
        }
      },
      series: []
    };
  },
  created: function created() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;

      axios.get("settings/dashboard/streams/status-history").then(function (response) {
        _this.chartOptions.xaxis.categories = response.data.categories;
        _this.series = response.data.series;
        _this.current = response.data.current;
      });
    },
    websocketData: function websocketData() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Echo.channel("StreamsStoredStatuses").listen("BroadcastStoredStreamStatusesEvent", function (e) {
                  _this2.chartOptions.xaxis.categories = e.categories;
                  _this2.series = e.series;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    this.websocketData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsHealthChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsHealthChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["title", "name"],
  data: function data() {
    return {
      chartOptions: {
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        chart: {
          toolbar: {
            show: false
          },
          type: "area",
          animations: {
            enabled: false,
            easing: "linear",
            dynamicAnimation: {
              speed: 1000
            }
          }
        },
        xaxis: {
          categories: [],
          labels: {
            show: true
          }
        },
        yaxis: {
          show: true
        }
      },
      series: []
    };
  },
  created: function created() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;

      axios.get("settings/dashboard/health/" + this.name).then(function (response) {
        _this.chartOptions.xaxis.categories = response.data.categories;
        _this.series = response.data.series;
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./resources/js/components/Settings/Dashboard/settingsDashboard.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Settings/Dashboard/settingsDashboard.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settingsDashboard_vue_vue_type_template_id_30c2d8d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settingsDashboard.vue?vue&type=template&id=30c2d8d5& */ "./resources/js/components/Settings/Dashboard/settingsDashboard.vue?vue&type=template&id=30c2d8d5&");
/* harmony import */ var _settingsDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settingsDashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Settings/Dashboard/settingsDashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settingsDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settingsDashboard_vue_vue_type_template_id_30c2d8d5___WEBPACK_IMPORTED_MODULE_0__.render,
  _settingsDashboard_vue_vue_type_template_id_30c2d8d5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Settings/Dashboard/settingsDashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Settings/Dashboard/settingsDashboardNetwork.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Settings/Dashboard/settingsDashboardNetwork.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settingsDashboardNetwork_vue_vue_type_template_id_12d1b8c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settingsDashboardNetwork.vue?vue&type=template&id=12d1b8c9& */ "./resources/js/components/Settings/Dashboard/settingsDashboardNetwork.vue?vue&type=template&id=12d1b8c9&");
/* harmony import */ var _settingsDashboardNetwork_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settingsDashboardNetwork.vue?vue&type=script&lang=js& */ "./resources/js/components/Settings/Dashboard/settingsDashboardNetwork.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settingsDashboardNetwork_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settingsDashboardNetwork_vue_vue_type_template_id_12d1b8c9___WEBPACK_IMPORTED_MODULE_0__.render,
  _settingsDashboardNetwork_vue_vue_type_template_id_12d1b8c9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Settings/Dashboard/settingsDashboardNetwork.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Settings/Dashboard/settingsDashboardProblemStreams.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Settings/Dashboard/settingsDashboardProblemStreams.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settingsDashboardProblemStreams_vue_vue_type_template_id_e9029cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settingsDashboardProblemStreams.vue?vue&type=template&id=e9029cee& */ "./resources/js/components/Settings/Dashboard/settingsDashboardProblemStreams.vue?vue&type=template&id=e9029cee&");
/* harmony import */ var _settingsDashboardProblemStreams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settingsDashboardProblemStreams.vue?vue&type=script&lang=js& */ "./resources/js/components/Settings/Dashboard/settingsDashboardProblemStreams.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settingsDashboardProblemStreams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settingsDashboardProblemStreams_vue_vue_type_template_id_e9029cee___WEBPACK_IMPORTED_MODULE_0__.render,
  _settingsDashboardProblemStreams_vue_vue_type_template_id_e9029cee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Settings/Dashboard/settingsDashboardProblemStreams.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Settings/Dashboard/settingsDashboardStreamsStatuses.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Settings/Dashboard/settingsDashboardStreamsStatuses.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settingsDashboardStreamsStatuses_vue_vue_type_template_id_16b1a964___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settingsDashboardStreamsStatuses.vue?vue&type=template&id=16b1a964& */ "./resources/js/components/Settings/Dashboard/settingsDashboardStreamsStatuses.vue?vue&type=template&id=16b1a964&");
/* harmony import */ var _settingsDashboardStreamsStatuses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settingsDashboardStreamsStatuses.vue?vue&type=script&lang=js& */ "./resources/js/components/Settings/Dashboard/settingsDashboardStreamsStatuses.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settingsDashboardStreamsStatuses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settingsDashboardStreamsStatuses_vue_vue_type_template_id_16b1a964___WEBPACK_IMPORTED_MODULE_0__.render,
  _settingsDashboardStreamsStatuses_vue_vue_type_template_id_16b1a964___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Settings/Dashboard/settingsDashboardStreamsStatuses.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Settings/Dashboard/settingsHealthChart.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Settings/Dashboard/settingsHealthChart.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settingsHealthChart_vue_vue_type_template_id_f77d603a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settingsHealthChart.vue?vue&type=template&id=f77d603a& */ "./resources/js/components/Settings/Dashboard/settingsHealthChart.vue?vue&type=template&id=f77d603a&");
/* harmony import */ var _settingsHealthChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settingsHealthChart.vue?vue&type=script&lang=js& */ "./resources/js/components/Settings/Dashboard/settingsHealthChart.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settingsHealthChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settingsHealthChart_vue_vue_type_template_id_f77d603a___WEBPACK_IMPORTED_MODULE_0__.render,
  _settingsHealthChart_vue_vue_type_template_id_f77d603a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Settings/Dashboard/settingsHealthChart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Settings/Dashboard/settingsDashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Settings/Dashboard/settingsDashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settingsDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Settings/Dashboard/settingsDashboardNetwork.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Settings/Dashboard/settingsDashboardNetwork.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboardNetwork_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settingsDashboardNetwork.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardNetwork.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboardNetwork_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Settings/Dashboard/settingsDashboardProblemStreams.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Settings/Dashboard/settingsDashboardProblemStreams.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboardProblemStreams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settingsDashboardProblemStreams.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardProblemStreams.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboardProblemStreams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Settings/Dashboard/settingsDashboardStreamsStatuses.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Settings/Dashboard/settingsDashboardStreamsStatuses.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboardStreamsStatuses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settingsDashboardStreamsStatuses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardStreamsStatuses.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboardStreamsStatuses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Settings/Dashboard/settingsHealthChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Settings/Dashboard/settingsHealthChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsHealthChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settingsHealthChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsHealthChart.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsHealthChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Settings/Dashboard/settingsDashboard.vue?vue&type=template&id=30c2d8d5&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Settings/Dashboard/settingsDashboard.vue?vue&type=template&id=30c2d8d5& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboard_vue_vue_type_template_id_30c2d8d5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboard_vue_vue_type_template_id_30c2d8d5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboard_vue_vue_type_template_id_30c2d8d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settingsDashboard.vue?vue&type=template&id=30c2d8d5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboard.vue?vue&type=template&id=30c2d8d5&");


/***/ }),

/***/ "./resources/js/components/Settings/Dashboard/settingsDashboardNetwork.vue?vue&type=template&id=12d1b8c9&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Settings/Dashboard/settingsDashboardNetwork.vue?vue&type=template&id=12d1b8c9& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboardNetwork_vue_vue_type_template_id_12d1b8c9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboardNetwork_vue_vue_type_template_id_12d1b8c9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboardNetwork_vue_vue_type_template_id_12d1b8c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settingsDashboardNetwork.vue?vue&type=template&id=12d1b8c9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardNetwork.vue?vue&type=template&id=12d1b8c9&");


/***/ }),

/***/ "./resources/js/components/Settings/Dashboard/settingsDashboardProblemStreams.vue?vue&type=template&id=e9029cee&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/Settings/Dashboard/settingsDashboardProblemStreams.vue?vue&type=template&id=e9029cee& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboardProblemStreams_vue_vue_type_template_id_e9029cee___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboardProblemStreams_vue_vue_type_template_id_e9029cee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboardProblemStreams_vue_vue_type_template_id_e9029cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settingsDashboardProblemStreams.vue?vue&type=template&id=e9029cee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardProblemStreams.vue?vue&type=template&id=e9029cee&");


/***/ }),

/***/ "./resources/js/components/Settings/Dashboard/settingsDashboardStreamsStatuses.vue?vue&type=template&id=16b1a964&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Settings/Dashboard/settingsDashboardStreamsStatuses.vue?vue&type=template&id=16b1a964& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboardStreamsStatuses_vue_vue_type_template_id_16b1a964___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboardStreamsStatuses_vue_vue_type_template_id_16b1a964___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsDashboardStreamsStatuses_vue_vue_type_template_id_16b1a964___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settingsDashboardStreamsStatuses.vue?vue&type=template&id=16b1a964& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardStreamsStatuses.vue?vue&type=template&id=16b1a964&");


/***/ }),

/***/ "./resources/js/components/Settings/Dashboard/settingsHealthChart.vue?vue&type=template&id=f77d603a&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Settings/Dashboard/settingsHealthChart.vue?vue&type=template&id=f77d603a& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsHealthChart_vue_vue_type_template_id_f77d603a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsHealthChart_vue_vue_type_template_id_f77d603a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsHealthChart_vue_vue_type_template_id_f77d603a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settingsHealthChart.vue?vue&type=template&id=f77d603a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsHealthChart.vue?vue&type=template&id=f77d603a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboard.vue?vue&type=template&id=30c2d8d5&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboard.vue?vue&type=template&id=30c2d8d5& ***!
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
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            { staticClass: "mx-auto" },
            _vm._l(_vm.items.checkResults, function (item) {
              return _c(
                "v-col",
                { key: item.id },
                [
                  item.label != "network"
                    ? _c(
                        "v-card",
                        {
                          staticClass:
                            "overflow-hidden rounded-lg blur shadow-blur",
                          attrs: { flat: "" },
                        },
                        [
                          _c(
                            "v-card-text",
                            [
                              _c("p", { staticClass: "headline text-center" }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.translateName(item.name)) +
                                    "\n                        "
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { staticClass: "justify-center my-2" },
                                [
                                  _c(
                                    "v-progress-circular",
                                    {
                                      attrs: {
                                        rotate: 360,
                                        size: 140,
                                        width: 10,
                                        value: _vm.explodeTextAndTakeFirst(
                                          item.value
                                        ),
                                        color: _vm.pickBgColor(item.value),
                                      },
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "font-weight-bold" },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                _vm.explodeTextAndTakeFirst(
                                                  item.value
                                                )
                                              ) +
                                              "\n                                    %\n                                "
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
                      )
                    : _c(
                        "v-card",
                        {
                          staticClass:
                            "overflow-hidden rounded-lg blur shadow-blur",
                          attrs: { flat: "" },
                        },
                        [
                          _c(
                            "v-card-text",
                            [
                              _c("p", { staticClass: "headline text-center" }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(item.name) +
                                    "\n                        "
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { staticClass: "justify-center my-2" },
                                _vm._l(
                                  item.shortSummary,
                                  function (item, index) {
                                    return _c(
                                      "div",
                                      { key: item, staticClass: "mx-auto" },
                                      [
                                        _c(
                                          "v-progress-circular",
                                          {
                                            attrs: {
                                              rotate: 360,
                                              size: 140,
                                              width: 10,
                                              value: (item / 10000) * 100,
                                              color: _vm.pickBgColor(
                                                (item / 10000) * 100
                                              ),
                                            },
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex flex-column",
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "font-weight-bold",
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(index) +
                                                        "\n                                        "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(
                                                  "\n                                        " +
                                                    _vm._s(item) +
                                                    " Mbps\n                                    "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  }
                                ),
                                0
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
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "mx-auto my-auto" },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "12", md: "4", lg: "4" } },
                [_c("SettingsDashboardNetwork")],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "12", md: "4", lg: "4" } },
                [
                  _c("settingsHealthChart", {
                    attrs: {
                      title: "Počet spojení do DB",
                      name: "DatabaseConnectionCount",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "12", md: "4", lg: "4" } },
                [
                  _c("settingsHealthChart", {
                    attrs: { title: "Vytížení CPU", name: "CpuLoad" },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "mx-auto my-auto" },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "12", md: "8", lg: "8" } },
                [_c("SettingsDashboardStreamsStatuses")],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "12", md: "4", lg: "4" } },
                [_c("settingsDashboardProblemStrems")],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardNetwork.vue?vue&type=template&id=12d1b8c9&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardNetwork.vue?vue&type=template&id=12d1b8c9& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
        "v-card",
        {
          staticClass: "overflow-hidden rounded-lg blur shadow-blur",
          attrs: { flat: "" },
        },
        [
          _c("v-card-subtitle", [
            _c(
              "p",
              { staticClass: "mt-3 text-center body-1 font-weight-bold" },
              [_vm._v("\n                Vytížení sítě\n            ")]
            ),
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                { attrs: { fluid: "" } },
                [
                  _c("apexchart", {
                    ref: "chart",
                    staticClass: "info--text",
                    attrs: {
                      dark: "",
                      height: "200",
                      type: "area",
                      options: _vm.chartOptions,
                      series: _vm.series,
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardProblemStreams.vue?vue&type=template&id=e9029cee&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardProblemStreams.vue?vue&type=template&id=e9029cee& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
        "v-card",
        {
          staticClass: "overflow-hidden rounded-lg blur shadow-blur",
          attrs: { flat: "" },
        },
        [
          _c("v-card-subtitle", [
            _c(
              "p",
              { staticClass: "mt-3 text-center body-1 font-weight-bold" },
              [_vm._v("\n                Problémové streamy\n            ")]
            ),
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                { attrs: { fluid: "" } },
                [
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.problemStreams,
                      "items-per-page": 5,
                      loading: _vm.problemStreams.length == 0,
                      "sort-by": ["problems.length"],
                      "sort-desc": [true],
                    },
                    scopedSlots: _vm._u([
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
                                    return _vm.openInfoDialog(item)
                                  },
                                },
                              },
                              [_vm._v("mdi-magnify")]
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
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            persistent: "",
            scrollable: "",
            "max-width": "800px",
            "overlay-color": "rgb(17, 27, 45)",
          },
          model: {
            value: _vm.infoDialog,
            callback: function ($$v) {
              _vm.infoDialog = $$v
            },
            expression: "infoDialog",
          },
        },
        [
          _vm.formData.stream
            ? _c(
                "v-card",
                [
                  _c("p", { staticClass: "pt-3 text-center subtitle-1" }, [
                    _vm._v(
                      "\n                Informace o problémovém streamu\n                "
                    ),
                    _c("span", { staticClass: "font-weight-bold" }, [
                      _vm._v(_vm._s(_vm.formData.stream.nazev)),
                    ]),
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
                                  _c(
                                    "p",
                                    [
                                      _vm._v(
                                        "\n                                Status streamu:\n\n                                "
                                      ),
                                      _c(
                                        "v-chip",
                                        {
                                          staticClass:
                                            "mx-3 font-weight-medium",
                                          attrs: {
                                            label: "",
                                            color: _vm.getColor(
                                              _vm.formData.stream.status
                                            ),
                                            dark: "",
                                            small: "",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                _vm.translateStatus(
                                                  _vm.formData.stream.status
                                                )
                                              ) +
                                              "\n                                "
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                              _vm._v(" "),
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
                                  _c("v-data-table", {
                                    attrs: {
                                      headers: _vm.headersPids,
                                      items: _vm.formData.stream.problems,
                                      "items-per-page": 5,
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "item.created_at",
                                          fn: function (ref) {
                                            var item = ref.item
                                            return [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.convertIsoDatetime(
                                                      item.created_at
                                                    )
                                                  )
                                                ),
                                              ]),
                                            ]
                                          },
                                        },
                                      ],
                                      null,
                                      false,
                                      339275158
                                    ),
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
                        [
                          _vm._v(
                            "\n                    Zavřít\n                "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardStreamsStatuses.vue?vue&type=template&id=16b1a964&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsDashboardStreamsStatuses.vue?vue&type=template&id=16b1a964& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
        "v-card",
        {
          staticClass: "overflow-hidden rounded-lg blur shadow-blur",
          attrs: { flat: "" },
        },
        [
          _c("v-card-subtitle", [
            _c(
              "p",
              { staticClass: "mt-3 text-center body-1 font-weight-bold" },
              [
                _vm._v(
                  "\n                Historie počtu dohledovaných streamů\n            "
                ),
              ]
            ),
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                { attrs: { fluid: "" } },
                [
                  _c("apexchart", {
                    ref: "chart",
                    staticClass: "info--text",
                    attrs: {
                      dark: "",
                      height: "333",
                      type: "area",
                      options: _vm.chartOptions,
                      series: _vm.series,
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsHealthChart.vue?vue&type=template&id=f77d603a&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Dashboard/settingsHealthChart.vue?vue&type=template&id=f77d603a& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
        "v-card",
        {
          staticClass: "overflow-hidden rounded-lg blur shadow-blur",
          attrs: { flat: "" },
        },
        [
          _c("v-card-subtitle", [
            _c(
              "p",
              { staticClass: "mt-3 text-center body-1 font-weight-bold" },
              [
                _vm._v(
                  "\n                " + _vm._s(_vm.title) + "\n            "
                ),
              ]
            ),
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                { attrs: { fluid: "" } },
                [
                  _c("apexchart", {
                    ref: "chart",
                    staticClass: "info--text",
                    attrs: {
                      dark: "",
                      height: "200",
                      type: "area",
                      options: _vm.chartOptions,
                      series: _vm.series,
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