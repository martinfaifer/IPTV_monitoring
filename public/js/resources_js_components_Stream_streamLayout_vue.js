"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Stream_streamLayout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/Charts/AreaChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/Charts/AreaChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["pidsData"],
  data: function data() {
    return {
      chartOptions: {
        dataLabels: {
          enabled: false
        },
        grid: {
          show: true
        },
        noData: {
          text: "Načítání dat..."
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.1,
            opacityTo: 0.4,
            stops: [0, 90, 100]
          }
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
          show: false,
          categories: [],
          labels: {
            show: false
          }
        },
        yaxis: {
          show: true,
          labels: {
            show: true
          }
        }
      },
      series: []
    };
  },
  components: {},
  created: function created() {},
  methods: {
    index: function index() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.pidsData != undefined)) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return axios.get("streams/charts/" + _this.$route.params.streamId + "/" + _this.pidsData).then(function (response) {
                  _this.chartOptions.xaxis.categories = response.xaxis;
                  _this.series = response.data.seriesData;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  computed: {},
  mounted: function mounted() {
    var _this2 = this;

    this.$root.$on("update_pid_bitrate_charts", function (update) {
      if (_this2.$route.params.streamId) {
        _this2.index();
      }
    });
    this.$nextTick(function () {
      window.dispatchEvent(new Event("resize"));
    });
  },
  watch: {
    $route: function $route(to, from) {
      this.index();
    }
  },
  beforeDestroy: function beforeDestroy() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamAlertDialog.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamAlertDialog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  props: ["isActiveDialog", "dialogText"],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamAudiVideoPidDetail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamAudiVideoPidDetail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Charts_AreaChart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Charts/AreaChart.vue */ "./resources/js/components/Stream/Charts/AreaChart.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var StreamAllDiscontinutiesErrors = function StreamAllDiscontinutiesErrors() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Stream_streamAllDiscontinutiesErrors_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./streamAllDiscontinutiesErrors.vue */ "./resources/js/components/Stream/streamAllDiscontinutiesErrors.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      showFfmpegDetail: false,
      audioPids: [],
      videoPids: [],
      listAudioPids: [],
      lisFfprobeAudioPids: [],
      listVideoPids: [],
      lisFfprobeVideoPids: []
    };
  },
  components: {
    AreaChart: _Charts_AreaChart_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    StreamAllDiscontinutiesErrors: StreamAllDiscontinutiesErrors
  },
  created: function created() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;

      axios.get("streams/pids/audio/" + this.$route.params.streamId).then(function (response) {
        _this.audioPids = response.data;

        for (var audioPid in _this.audioPids) {
          if (Object.hasOwnProperty.call(_this.audioPids, audioPid)) {
            _this.listAudioPids.push(_this.audioPids[audioPid]["pid"]);
          }
        }
      });
      axios.get("streams/pids/video/" + this.$route.params.streamId).then(function (response) {
        _this.videoPids = response.data;

        for (var videoPid in _this.videoPids) {
          if (Object.hasOwnProperty.call(_this.videoPids, videoPid)) {
            _this.listVideoPids.push(_this.videoPids[videoPid]["pid"]);
          }
        }
      });
    },
    countGrid: function countGrid(pidsArray) {
      if (Object.keys(pidsArray).length == 1) {
        return 12;
      }

      return 6;
    },
    websocketPidsData: function websocketPidsData() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Echo.channel("StreamAudioVideoPids" + _this2.$route.params.streamId).listen("BroadcastAudioVideoStreamPidsEvent", function (e) {
                  _this2.$root.$emit("update_pid_bitrate_charts", "update");

                  _this2.videoPids = e.videoPids;
                  _this2.lisFfprobeAudioPids = e.audioFfmpegPids;
                  _this2.audioPids = e.audioPids;
                  _this2.lisFfprobeVidoPids = e.videoFfmpegPids;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    checkIfIsProblem: function checkIfIsProblem(value, key) {
      if (key == "access") {
        if (value == "clear") {
          return "green--text";
        }

        if (value == "scrambled") {
          return "red--text";
        }
      }

      if (key == "scrambled") {
        if (value == 0) {
          return "green--text";
        }

        return "red--text";
      }

      if (key == "discontinuities") {
        if (value == 0) {
          return "green--text";
        }

        return "red--text";
      }

      if (key == "pid") {
        return "font-weight-bold";
      }
    }
  },
  computed: {},
  mounted: function mounted() {
    this.websocketPidsData();
  },
  watch: {
    $route: function $route(to, from) {
      this.index();
      window.Echo.leave("StreamAudioVideoPids" + this.$route.params.streamId);
      this.websocketPidsData();
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.Echo.leave("StreamAudioVideoPids" + this.$route.params.streamId);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamFfrobe.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamFfrobe.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      ffprobe: []
    };
  },
  components: {},
  created: function created() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;

      if (this.$route.params.streamId) {
        axios.get("streams/pids/ffprobe/" + this.$route.params.streamId).then(function (response) {
          _this.ffprobe = response.data;
        });
      }
    }
  },
  mounted: function mounted() {},
  watch: {
    $route: function $route(to, from) {
      this.index();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.index();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamHistory.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamHistory.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["history"],
  data: function data() {
    return {};
  },
  components: {},
  created: function created() {},
  methods: {
    convertStatus: function convertStatus(status) {
      if (status == "stopped") {
        return "Dohledování zastaveno";
      }

      if (status == "starting") {
        return "Spouštění dohledování";
      }

      if (status == "monitoring") {
        return "Dohleduje se";
      }

      if (status == "waiting") {
        return "Čeká na zařazení do fronty";
      }

      if (status == "can_not_start") {
        return "Výpadek - nepodařilo se stream spustit";
      }

      if (status == "crash") {
        return "Výpadek - stream nefunguje";
      }

      if (status == "issue") {
        return "Ve streamu jsou chyby";
      }

      if (status == "deleted") {
        return "Smazán";
      }
    },
    putBackgroundColorByStatus: function putBackgroundColorByStatus(status) {
      if (status == 'can_not_start') {
        return "background-color: rgba(239, 82, 80, 0.9)";
      }

      if (status == "crash") {
        return "background-color: rgba(239, 82, 80, 0.9)";
      }

      if (status == "stopped") {
        return "background-color: rgba(251, 140, 0, 0.9)";
      }

      return "";
    }
  },
  mounted: function mounted() {},
  watch: {
    $route: function $route(to, from) {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamIptvDoku.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamIptvDoku.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      iptvDokuData: []
    };
  },
  components: {},
  created: function created() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;

      if (this.$route.params.streamId) {
        axios.get("streams/iptvdoku/" + this.$route.params.streamId).then(function (response) {
          _this.iptvDokuData = response.data.data;
        });
      }
    }
  },
  mounted: function mounted() {},
  watch: {
    $route: function $route(to, from) {
      this.index();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.index();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamNameAndStatus.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamNameAndStatus.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["stream", "channel"],
  data: function data() {
    return {
      streamStatusArray: [],
      streamEditDialog: false,
      formData: [],
      error: []
    };
  },
  components: {},
  created: function created() {},
  methods: {
    openStreamEditDialog: function openStreamEditDialog() {
      var _this = this;

      axios.get("streams/settings/" + this.$route.params.streamId).then(function (response) {
        _this.formData = response.data;
        _this.streamEditDialog = true;
      });
    },
    updateStream: function updateStream() {
      var _this2 = this;

      axios.patch("streams/settings/" + this.$route.params.streamId, {
        invalidSync: this.formData.invalidSync,
        transportErrors: this.formData.transportErrors,
        audioAccess: this.formData.audioAccess,
        videoAccess: this.formData.videoAccess,
        audioVideoOutOfSync: this.formData.audioVideoOutOfSync,
        discontinuites: this.formData.discontinuites
      }).then(function (response) {
        _this2.$store.state.alerts = response.data;

        _this2.closeDialog();
      })["catch"](function (error) {
        _this2.errors = error.response.data.errors;
      });
    },
    closeDialog: function closeDialog() {
      this.streamEditDialog = false;
    }
  },
  mounted: function mounted() {},
  watch: {
    $route: function $route(to, from) {}
  },
  beforeDestroy: function beforeDestroy() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamPids.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamPids.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      streamPids: []
    };
  },
  components: {},
  created: function created() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;

      axios.get("streams/pids/" + this.$route.params.streamId).then(function (response) {
        _this.streamPids = response.data;
      });
    },
    websocketData: function websocketData() {
      var _this2 = this;

      Echo.channel("StreamAllPids" + this.$route.params.streamId).listen("BroadcastAllPidsStreamsEvent", function (e) {
        _this2.streamPids = e[0];
      });
    }
  },
  mounted: function mounted() {
    this.websocketData();
  },
  watch: {
    $route: function $route(to, from) {
      this.index();
      this.websocketData();
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.Echo.leave("StreamAllPids" + this.$route.params.streamId);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamPidsErrors.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamPidsErrors.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      errorPids: []
    };
  },
  components: {},
  created: function created() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;

      axios.get("streams/pids/problems/" + this.$route.params.streamId).then(function (response) {
        _this.errorPids = response.data;
      });
    },
    convertIsoDatetime: function convertIsoDatetime(isoDate) {
      var date = new Date(isoDate);
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
    },
    countErrors: function countErrors(errorsArr) {
      var sumErrors = 0;

      var _iterator = _createForOfIteratorHelper(errorsArr),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var error = _step.value;
          sumErrors = sumErrors + error.errors;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return sumErrors;
    },
    colorOfErrors: function colorOfErrors(errors) {
      if (errors.length > 0) {
        return "red--text";
      }

      return "green--text";
    }
  },
  mounted: function mounted() {},
  watch: {
    $route: function $route(to, from) {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamServices.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamServices.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      streamPids: []
    };
  },
  components: {},
  created: function created() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;

      if (this.$route.params.streamId) {
        axios.get("streams/pids/service/" + this.$route.params.streamId).then(function (response) {
          _this.streamPids = response.data;
        });
      }
    }
  },
  mounted: function mounted() {},
  watch: {
    $route: function $route(to, from) {
      this.index();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.index();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/devicetemplate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/devicetemplate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {//
  },
  props: ["deviceTemplate"],
  data: function data() {
    return {//
    };
  },
  created: function created() {},
  methods: {
    checkIfInterfaceIsUp: function checkIfInterfaceIsUp(interfaceKey, interfaceValue) {
      console.log(interfaceKey);

      if (interfaceKey == "speed") {
        return interfaceValue == 0 ? "red--text" : "green--text";
      }

      return "";
    },
    chooseColor: function chooseColor(vazba, interfaceBound) {
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
    fontNotificationFunction: function fontNotificationFunction(stringValue) {
      if (stringValue == "LOCKED") {
        return "green--text font-weight-bold";
      }

      if (stringValue == "OK") {
        return "green--text font-weight-bold";
      }

      if (stringValue == "UNLOCKED") {
        return "red--text font-weight-bold";
      }
    }
  },
  watch: {
    $route: function $route(to, from) {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamImage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamImage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["streamImageUrl"],
  data: function data() {
    return {};
  },
  components: {},
  created: function created() {},
  methods: {
    websocketData: function websocketData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Echo.channel("StreamImage" + _this.$route.params.streamId).listen("BroadcastStreamImageEvent", function (e) {
                  _this.streamImageUrl = null;
                  setTimeout(function () {
                    _this.streamImageUrl = e[0];
                  }, 1000);
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
  },
  watch: {
    $route: function $route(to, from) {
      this.websocketData();
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.Echo.leave("StreamImage" + this.$route.params.streamId);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamLayout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamLayout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StreamNameAndStatus_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StreamNameAndStatus.vue */ "./resources/js/components/Stream/StreamNameAndStatus.vue");
/* harmony import */ var _streamImage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./streamImage.vue */ "./resources/js/components/Stream/streamImage.vue");
/* harmony import */ var _StreamHistory_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StreamHistory.vue */ "./resources/js/components/Stream/StreamHistory.vue");
/* harmony import */ var _StreamAudiVideoPidDetail_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StreamAudiVideoPidDetail.vue */ "./resources/js/components/Stream/StreamAudiVideoPidDetail.vue");
/* harmony import */ var _StreamPids_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StreamPids.vue */ "./resources/js/components/Stream/StreamPids.vue");
/* harmony import */ var _StreamServices_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StreamServices.vue */ "./resources/js/components/Stream/StreamServices.vue");
/* harmony import */ var _StreamAlertDialog_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StreamAlertDialog.vue */ "./resources/js/components/Stream/StreamAlertDialog.vue");
/* harmony import */ var _StreamFfrobe_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StreamFfrobe.vue */ "./resources/js/components/Stream/StreamFfrobe.vue");
/* harmony import */ var _StreamIptvDoku_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StreamIptvDoku.vue */ "./resources/js/components/Stream/StreamIptvDoku.vue");
/* harmony import */ var _devicetemplate_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./devicetemplate.vue */ "./resources/js/components/Stream/devicetemplate.vue");
/* harmony import */ var _StreamPidsErrors_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StreamPidsErrors.vue */ "./resources/js/components/Stream/StreamPidsErrors.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "IPTV Dohled - informace o streamu"
  },
  data: function data() {
    return {
      stream: [],
      isActiveDialog: false,
      iptvDokuDialog: false,
      iptvDokuData: [],
      loading: false
    };
  },
  components: {
    StreamImage: _streamImage_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    StreamNameAndStatus: _StreamNameAndStatus_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    StreamHistory: _StreamHistory_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    StreamAlertDialog: _StreamAlertDialog_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    StreamPids: _StreamPids_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    StreamAudioVideoPidDetail: _StreamAudiVideoPidDetail_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    StreamService: _StreamServices_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    FfprobeStream: _StreamFfrobe_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    StreamIptvDoku: _StreamIptvDoku_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    DeviceTemplate: _devicetemplate_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    StreamPidsErrors: _StreamPidsErrors_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  created: function created() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("streams/" + _this.$route.params.streamId).then(function (response) {
                  _this.stream = response.data;
                  _this.stream.status != "monitoring" ? _this.isActiveDialog = true : _this.isActiveDialog = false;
                })["catch"](function (error) {
                  if (error.response.status == 403) {
                    _this.$router.push("/403");
                  }
                });

              case 2:
                _context.next = 4;
                return _this.openIptvDokuDialog();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    openIptvDokuDialog: function openIptvDokuDialog() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("streams/iptvdoku/" + _this2.$route.params.streamId).then(function (response) {
                  // this.loading = false;
                  _this2.iptvDokuData = response.data.data; // this.iptvDokuDialog = true;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    closeDialog: function closeDialog() {
      this.iptvDokuDialog = false;
    },
    checkStreamStatus: function checkStreamStatus(streamStatus) {
      if (streamStatus == "waiting") {
        return "Stream čeká na spuštění";
      }

      if (streamStatus == "monitoring") {
        return "Stream se dohleduje od " + this.stream.monitored_at;
      }

      if (streamStatus == "starting") {
        return "Stream se zařazuje do fronty ke spuštění";
      }

      if (streamStatus == "stopped") {
        return "Stream má pozastavené dohledování";
      }

      if (streamStatus == "can_not_start") {
        return "Stream ve výpadku";
      }

      if (streamStatus == "issue") {
        return "Stream je dohledován, ale je v něm chybovost";
      }
    }
  },
  mounted: function mounted() {},
  watch: {
    $route: function $route(to, from) {
      this.index();
    }
  },
  beforeDestroy: function beforeDestroy() {}
});

/***/ }),

/***/ "./resources/js/components/Stream/Charts/AreaChart.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Stream/Charts/AreaChart.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AreaChart_vue_vue_type_template_id_32ad8d2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AreaChart.vue?vue&type=template&id=32ad8d2b& */ "./resources/js/components/Stream/Charts/AreaChart.vue?vue&type=template&id=32ad8d2b&");
/* harmony import */ var _AreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AreaChart.vue?vue&type=script&lang=js& */ "./resources/js/components/Stream/Charts/AreaChart.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AreaChart_vue_vue_type_template_id_32ad8d2b___WEBPACK_IMPORTED_MODULE_0__.render,
  _AreaChart_vue_vue_type_template_id_32ad8d2b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Stream/Charts/AreaChart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Stream/StreamAlertDialog.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Stream/StreamAlertDialog.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StreamAlertDialog_vue_vue_type_template_id_0ab34620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StreamAlertDialog.vue?vue&type=template&id=0ab34620& */ "./resources/js/components/Stream/StreamAlertDialog.vue?vue&type=template&id=0ab34620&");
/* harmony import */ var _StreamAlertDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StreamAlertDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/Stream/StreamAlertDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StreamAlertDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StreamAlertDialog_vue_vue_type_template_id_0ab34620___WEBPACK_IMPORTED_MODULE_0__.render,
  _StreamAlertDialog_vue_vue_type_template_id_0ab34620___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Stream/StreamAlertDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Stream/StreamAudiVideoPidDetail.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Stream/StreamAudiVideoPidDetail.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StreamAudiVideoPidDetail_vue_vue_type_template_id_a4fa1e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StreamAudiVideoPidDetail.vue?vue&type=template&id=a4fa1e24& */ "./resources/js/components/Stream/StreamAudiVideoPidDetail.vue?vue&type=template&id=a4fa1e24&");
/* harmony import */ var _StreamAudiVideoPidDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StreamAudiVideoPidDetail.vue?vue&type=script&lang=js& */ "./resources/js/components/Stream/StreamAudiVideoPidDetail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StreamAudiVideoPidDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StreamAudiVideoPidDetail_vue_vue_type_template_id_a4fa1e24___WEBPACK_IMPORTED_MODULE_0__.render,
  _StreamAudiVideoPidDetail_vue_vue_type_template_id_a4fa1e24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Stream/StreamAudiVideoPidDetail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Stream/StreamFfrobe.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Stream/StreamFfrobe.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StreamFfrobe_vue_vue_type_template_id_b9460758___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StreamFfrobe.vue?vue&type=template&id=b9460758& */ "./resources/js/components/Stream/StreamFfrobe.vue?vue&type=template&id=b9460758&");
/* harmony import */ var _StreamFfrobe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StreamFfrobe.vue?vue&type=script&lang=js& */ "./resources/js/components/Stream/StreamFfrobe.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StreamFfrobe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StreamFfrobe_vue_vue_type_template_id_b9460758___WEBPACK_IMPORTED_MODULE_0__.render,
  _StreamFfrobe_vue_vue_type_template_id_b9460758___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Stream/StreamFfrobe.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Stream/StreamHistory.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Stream/StreamHistory.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StreamHistory_vue_vue_type_template_id_3472c6f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StreamHistory.vue?vue&type=template&id=3472c6f0& */ "./resources/js/components/Stream/StreamHistory.vue?vue&type=template&id=3472c6f0&");
/* harmony import */ var _StreamHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StreamHistory.vue?vue&type=script&lang=js& */ "./resources/js/components/Stream/StreamHistory.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StreamHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StreamHistory_vue_vue_type_template_id_3472c6f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _StreamHistory_vue_vue_type_template_id_3472c6f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Stream/StreamHistory.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Stream/StreamIptvDoku.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Stream/StreamIptvDoku.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StreamIptvDoku_vue_vue_type_template_id_6b09ab12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StreamIptvDoku.vue?vue&type=template&id=6b09ab12& */ "./resources/js/components/Stream/StreamIptvDoku.vue?vue&type=template&id=6b09ab12&");
/* harmony import */ var _StreamIptvDoku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StreamIptvDoku.vue?vue&type=script&lang=js& */ "./resources/js/components/Stream/StreamIptvDoku.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StreamIptvDoku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StreamIptvDoku_vue_vue_type_template_id_6b09ab12___WEBPACK_IMPORTED_MODULE_0__.render,
  _StreamIptvDoku_vue_vue_type_template_id_6b09ab12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Stream/StreamIptvDoku.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Stream/StreamNameAndStatus.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Stream/StreamNameAndStatus.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StreamNameAndStatus_vue_vue_type_template_id_7fdf14ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StreamNameAndStatus.vue?vue&type=template&id=7fdf14ba& */ "./resources/js/components/Stream/StreamNameAndStatus.vue?vue&type=template&id=7fdf14ba&");
/* harmony import */ var _StreamNameAndStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StreamNameAndStatus.vue?vue&type=script&lang=js& */ "./resources/js/components/Stream/StreamNameAndStatus.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StreamNameAndStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StreamNameAndStatus_vue_vue_type_template_id_7fdf14ba___WEBPACK_IMPORTED_MODULE_0__.render,
  _StreamNameAndStatus_vue_vue_type_template_id_7fdf14ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Stream/StreamNameAndStatus.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Stream/StreamPids.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Stream/StreamPids.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StreamPids_vue_vue_type_template_id_777da8c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StreamPids.vue?vue&type=template&id=777da8c8& */ "./resources/js/components/Stream/StreamPids.vue?vue&type=template&id=777da8c8&");
/* harmony import */ var _StreamPids_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StreamPids.vue?vue&type=script&lang=js& */ "./resources/js/components/Stream/StreamPids.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StreamPids_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StreamPids_vue_vue_type_template_id_777da8c8___WEBPACK_IMPORTED_MODULE_0__.render,
  _StreamPids_vue_vue_type_template_id_777da8c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Stream/StreamPids.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Stream/StreamPidsErrors.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Stream/StreamPidsErrors.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StreamPidsErrors_vue_vue_type_template_id_08d212b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StreamPidsErrors.vue?vue&type=template&id=08d212b2& */ "./resources/js/components/Stream/StreamPidsErrors.vue?vue&type=template&id=08d212b2&");
/* harmony import */ var _StreamPidsErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StreamPidsErrors.vue?vue&type=script&lang=js& */ "./resources/js/components/Stream/StreamPidsErrors.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StreamPidsErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StreamPidsErrors_vue_vue_type_template_id_08d212b2___WEBPACK_IMPORTED_MODULE_0__.render,
  _StreamPidsErrors_vue_vue_type_template_id_08d212b2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Stream/StreamPidsErrors.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Stream/StreamServices.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Stream/StreamServices.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StreamServices_vue_vue_type_template_id_3009fa9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StreamServices.vue?vue&type=template&id=3009fa9c& */ "./resources/js/components/Stream/StreamServices.vue?vue&type=template&id=3009fa9c&");
/* harmony import */ var _StreamServices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StreamServices.vue?vue&type=script&lang=js& */ "./resources/js/components/Stream/StreamServices.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StreamServices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StreamServices_vue_vue_type_template_id_3009fa9c___WEBPACK_IMPORTED_MODULE_0__.render,
  _StreamServices_vue_vue_type_template_id_3009fa9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Stream/StreamServices.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Stream/devicetemplate.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Stream/devicetemplate.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _devicetemplate_vue_vue_type_template_id_1e967e64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devicetemplate.vue?vue&type=template&id=1e967e64& */ "./resources/js/components/Stream/devicetemplate.vue?vue&type=template&id=1e967e64&");
/* harmony import */ var _devicetemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devicetemplate.vue?vue&type=script&lang=js& */ "./resources/js/components/Stream/devicetemplate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _devicetemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _devicetemplate_vue_vue_type_template_id_1e967e64___WEBPACK_IMPORTED_MODULE_0__.render,
  _devicetemplate_vue_vue_type_template_id_1e967e64___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Stream/devicetemplate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Stream/streamImage.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Stream/streamImage.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _streamImage_vue_vue_type_template_id_3e9e8d52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./streamImage.vue?vue&type=template&id=3e9e8d52& */ "./resources/js/components/Stream/streamImage.vue?vue&type=template&id=3e9e8d52&");
/* harmony import */ var _streamImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./streamImage.vue?vue&type=script&lang=js& */ "./resources/js/components/Stream/streamImage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _streamImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _streamImage_vue_vue_type_template_id_3e9e8d52___WEBPACK_IMPORTED_MODULE_0__.render,
  _streamImage_vue_vue_type_template_id_3e9e8d52___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Stream/streamImage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Stream/streamLayout.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Stream/streamLayout.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _streamLayout_vue_vue_type_template_id_bb3a3b44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./streamLayout.vue?vue&type=template&id=bb3a3b44& */ "./resources/js/components/Stream/streamLayout.vue?vue&type=template&id=bb3a3b44&");
/* harmony import */ var _streamLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./streamLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/Stream/streamLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _streamLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _streamLayout_vue_vue_type_template_id_bb3a3b44___WEBPACK_IMPORTED_MODULE_0__.render,
  _streamLayout_vue_vue_type_template_id_bb3a3b44___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Stream/streamLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Stream/Charts/AreaChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Stream/Charts/AreaChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AreaChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/Charts/AreaChart.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Stream/StreamAlertDialog.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamAlertDialog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamAlertDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamAlertDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamAlertDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamAlertDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Stream/StreamAudiVideoPidDetail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamAudiVideoPidDetail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamAudiVideoPidDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamAudiVideoPidDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamAudiVideoPidDetail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamAudiVideoPidDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Stream/StreamFfrobe.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamFfrobe.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamFfrobe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamFfrobe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamFfrobe.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamFfrobe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Stream/StreamHistory.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamHistory.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamHistory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamHistory.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Stream/StreamIptvDoku.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamIptvDoku.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamIptvDoku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamIptvDoku.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamIptvDoku.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamIptvDoku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Stream/StreamNameAndStatus.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamNameAndStatus.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamNameAndStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamNameAndStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamNameAndStatus.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamNameAndStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Stream/StreamPids.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamPids.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamPids_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamPids.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamPids.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamPids_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Stream/StreamPidsErrors.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamPidsErrors.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamPidsErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamPidsErrors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamPidsErrors.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamPidsErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Stream/StreamServices.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamServices.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamServices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamServices.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamServices.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamServices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Stream/devicetemplate.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Stream/devicetemplate.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_devicetemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./devicetemplate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/devicetemplate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_devicetemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Stream/streamImage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Stream/streamImage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_streamImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./streamImage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamImage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_streamImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Stream/streamLayout.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Stream/streamLayout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_streamLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./streamLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_streamLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Stream/Charts/AreaChart.vue?vue&type=template&id=32ad8d2b&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Stream/Charts/AreaChart.vue?vue&type=template&id=32ad8d2b& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaChart_vue_vue_type_template_id_32ad8d2b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaChart_vue_vue_type_template_id_32ad8d2b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaChart_vue_vue_type_template_id_32ad8d2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AreaChart.vue?vue&type=template&id=32ad8d2b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/Charts/AreaChart.vue?vue&type=template&id=32ad8d2b&");


/***/ }),

/***/ "./resources/js/components/Stream/StreamAlertDialog.vue?vue&type=template&id=0ab34620&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamAlertDialog.vue?vue&type=template&id=0ab34620& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamAlertDialog_vue_vue_type_template_id_0ab34620___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamAlertDialog_vue_vue_type_template_id_0ab34620___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamAlertDialog_vue_vue_type_template_id_0ab34620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamAlertDialog.vue?vue&type=template&id=0ab34620& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamAlertDialog.vue?vue&type=template&id=0ab34620&");


/***/ }),

/***/ "./resources/js/components/Stream/StreamAudiVideoPidDetail.vue?vue&type=template&id=a4fa1e24&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamAudiVideoPidDetail.vue?vue&type=template&id=a4fa1e24& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamAudiVideoPidDetail_vue_vue_type_template_id_a4fa1e24___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamAudiVideoPidDetail_vue_vue_type_template_id_a4fa1e24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamAudiVideoPidDetail_vue_vue_type_template_id_a4fa1e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamAudiVideoPidDetail.vue?vue&type=template&id=a4fa1e24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamAudiVideoPidDetail.vue?vue&type=template&id=a4fa1e24&");


/***/ }),

/***/ "./resources/js/components/Stream/StreamFfrobe.vue?vue&type=template&id=b9460758&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamFfrobe.vue?vue&type=template&id=b9460758& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamFfrobe_vue_vue_type_template_id_b9460758___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamFfrobe_vue_vue_type_template_id_b9460758___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamFfrobe_vue_vue_type_template_id_b9460758___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamFfrobe.vue?vue&type=template&id=b9460758& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamFfrobe.vue?vue&type=template&id=b9460758&");


/***/ }),

/***/ "./resources/js/components/Stream/StreamHistory.vue?vue&type=template&id=3472c6f0&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamHistory.vue?vue&type=template&id=3472c6f0& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamHistory_vue_vue_type_template_id_3472c6f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamHistory_vue_vue_type_template_id_3472c6f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamHistory_vue_vue_type_template_id_3472c6f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamHistory.vue?vue&type=template&id=3472c6f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamHistory.vue?vue&type=template&id=3472c6f0&");


/***/ }),

/***/ "./resources/js/components/Stream/StreamIptvDoku.vue?vue&type=template&id=6b09ab12&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamIptvDoku.vue?vue&type=template&id=6b09ab12& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamIptvDoku_vue_vue_type_template_id_6b09ab12___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamIptvDoku_vue_vue_type_template_id_6b09ab12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamIptvDoku_vue_vue_type_template_id_6b09ab12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamIptvDoku.vue?vue&type=template&id=6b09ab12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamIptvDoku.vue?vue&type=template&id=6b09ab12&");


/***/ }),

/***/ "./resources/js/components/Stream/StreamNameAndStatus.vue?vue&type=template&id=7fdf14ba&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamNameAndStatus.vue?vue&type=template&id=7fdf14ba& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamNameAndStatus_vue_vue_type_template_id_7fdf14ba___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamNameAndStatus_vue_vue_type_template_id_7fdf14ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamNameAndStatus_vue_vue_type_template_id_7fdf14ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamNameAndStatus.vue?vue&type=template&id=7fdf14ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamNameAndStatus.vue?vue&type=template&id=7fdf14ba&");


/***/ }),

/***/ "./resources/js/components/Stream/StreamPids.vue?vue&type=template&id=777da8c8&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamPids.vue?vue&type=template&id=777da8c8& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamPids_vue_vue_type_template_id_777da8c8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamPids_vue_vue_type_template_id_777da8c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamPids_vue_vue_type_template_id_777da8c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamPids.vue?vue&type=template&id=777da8c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamPids.vue?vue&type=template&id=777da8c8&");


/***/ }),

/***/ "./resources/js/components/Stream/StreamPidsErrors.vue?vue&type=template&id=08d212b2&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamPidsErrors.vue?vue&type=template&id=08d212b2& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamPidsErrors_vue_vue_type_template_id_08d212b2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamPidsErrors_vue_vue_type_template_id_08d212b2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamPidsErrors_vue_vue_type_template_id_08d212b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamPidsErrors.vue?vue&type=template&id=08d212b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamPidsErrors.vue?vue&type=template&id=08d212b2&");


/***/ }),

/***/ "./resources/js/components/Stream/StreamServices.vue?vue&type=template&id=3009fa9c&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Stream/StreamServices.vue?vue&type=template&id=3009fa9c& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamServices_vue_vue_type_template_id_3009fa9c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamServices_vue_vue_type_template_id_3009fa9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StreamServices_vue_vue_type_template_id_3009fa9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StreamServices.vue?vue&type=template&id=3009fa9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamServices.vue?vue&type=template&id=3009fa9c&");


/***/ }),

/***/ "./resources/js/components/Stream/devicetemplate.vue?vue&type=template&id=1e967e64&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Stream/devicetemplate.vue?vue&type=template&id=1e967e64& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_devicetemplate_vue_vue_type_template_id_1e967e64___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_devicetemplate_vue_vue_type_template_id_1e967e64___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_devicetemplate_vue_vue_type_template_id_1e967e64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./devicetemplate.vue?vue&type=template&id=1e967e64& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/devicetemplate.vue?vue&type=template&id=1e967e64&");


/***/ }),

/***/ "./resources/js/components/Stream/streamImage.vue?vue&type=template&id=3e9e8d52&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Stream/streamImage.vue?vue&type=template&id=3e9e8d52& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_streamImage_vue_vue_type_template_id_3e9e8d52___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_streamImage_vue_vue_type_template_id_3e9e8d52___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_streamImage_vue_vue_type_template_id_3e9e8d52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./streamImage.vue?vue&type=template&id=3e9e8d52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamImage.vue?vue&type=template&id=3e9e8d52&");


/***/ }),

/***/ "./resources/js/components/Stream/streamLayout.vue?vue&type=template&id=bb3a3b44&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Stream/streamLayout.vue?vue&type=template&id=bb3a3b44& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_streamLayout_vue_vue_type_template_id_bb3a3b44___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_streamLayout_vue_vue_type_template_id_bb3a3b44___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_streamLayout_vue_vue_type_template_id_bb3a3b44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./streamLayout.vue?vue&type=template&id=bb3a3b44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamLayout.vue?vue&type=template&id=bb3a3b44&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/Charts/AreaChart.vue?vue&type=template&id=32ad8d2b&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/Charts/AreaChart.vue?vue&type=template&id=32ad8d2b& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _c("apexchart", {
        ref: "chart",
        staticClass: "info--text",
        attrs: {
          dark: "",
          type: "area",
          options: _vm.chartOptions,
          series: _vm.series,
          height: "180",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamAlertDialog.vue?vue&type=template&id=0ab34620&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamAlertDialog.vue?vue&type=template&id=0ab34620& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { persistent: "", "max-width": "450" },
      model: {
        value: _vm.isActiveDialog,
        callback: function ($$v) {
          _vm.isActiveDialog = $$v
        },
        expression: "isActiveDialog",
      },
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-text",
            [
              _c("v-container", { staticClass: "pt-3", attrs: { fluid: "" } }, [
                _c(
                  "p",
                  { staticClass: "mt-10 text-center title" },
                  [
                    _c(
                      "v-icon",
                      {
                        staticClass: "mr-6",
                        attrs: { large: "", color: "red" },
                      },
                      [_vm._v(" mdi-alert ")]
                    ),
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.dialogText) +
                        "\n                "
                    ),
                  ],
                  1
                ),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "info darken-1", text: "", outlined: "" },
                  on: {
                    click: function ($event) {
                      _vm.isActiveDialog = false
                    },
                  },
                },
                [_vm._v("\n                Ok\n            ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamAudiVideoPidDetail.vue?vue&type=template&id=a4fa1e24&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamAudiVideoPidDetail.vue?vue&type=template&id=a4fa1e24& ***!
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
    [
      _c(
        "v-card",
        { staticClass: "overflow-hidden rounded-lg blur shadow-blur" },
        [
          _c("p", { staticClass: "text-center mt-3" }, [
            _vm._v("Informace o audio / video pidech"),
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                { attrs: { fluid: "" } },
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "12" } }, [
                        _c(
                          "p",
                          { staticClass: "subtitle-1 font-weight-bold" },
                          [
                            _vm._v(
                              "\n                            Audio pidy\n                        "
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.audioPids, function (audioPid) {
                        return _c(
                          "v-col",
                          {
                            key: audioPid.pid,
                            attrs: { cols: "12", sm: "12", md: "12", lg: "12" },
                          },
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
                                      md: "3",
                                      lg: "3",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                Pid:\n                                "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-bold mx-2" },
                                      [_vm._v(_vm._s(audioPid.pid))]
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
                                      md: "3",
                                      lg: "3",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                Jazyková stopa:\n                                "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-bold mx-2" },
                                      [_vm._v(_vm._s(audioPid.language))]
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
                                      md: "4",
                                      lg: "6",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                Popis:\n                                "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-bold mx-2" },
                                      [_vm._v(_vm._s(audioPid.description))]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticClass: "d-inline-flex",
                                    attrs: {
                                      cols: "12",
                                      sm: "12",
                                      md: "5",
                                      lg: "5",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                Chyby:\n                                "
                                    ),
                                    _c("StreamAllDiscontinutiesErrors", {
                                      staticClass: "mx-3",
                                      attrs: { pid: audioPid.pid },
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
                                      md: "12",
                                      lg: "12",
                                    },
                                  },
                                  [
                                    _c("AreaChart", {
                                      attrs: { pidsData: audioPid.pid },
                                    }),
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
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "12" } }, [
                        _c(
                          "p",
                          { staticClass: "subtitle-1 font-weight-bold" },
                          [
                            _vm._v(
                              "\n                            Video pidy\n                        "
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.videoPids, function (videoPid) {
                        return _c(
                          "v-col",
                          {
                            key: videoPid.pid,
                            attrs: { cols: "12", sm: "12", md: "12", lg: "12" },
                          },
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
                                      md: "3",
                                      lg: "3",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                Pid:\n                                "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-bold mx-2" },
                                      [_vm._v(_vm._s(videoPid.pid))]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticClass: "d-inline-flex",
                                    attrs: {
                                      cols: "12",
                                      sm: "12",
                                      md: "3",
                                      lg: "3",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                Chyby:\n                                "
                                    ),
                                    _c("StreamAllDiscontinutiesErrors", {
                                      staticClass: "mx-3",
                                      attrs: { pid: videoPid.pid },
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
                                      md: "4",
                                      lg: "6",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                Popis:\n                                "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-bold mx-2" },
                                      [_vm._v(_vm._s(videoPid.description))]
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
                                    _c("AreaChart", {
                                      attrs: { pidsData: videoPid.pid },
                                    }),
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
                    ],
                    2
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamFfrobe.vue?vue&type=template&id=b9460758&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamFfrobe.vue?vue&type=template&id=b9460758& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    { staticClass: "overflow-hidden rounded-lg blur shadow-blur" },
    [
      _c("p", { staticClass: "text-center mt-3" }, [
        _vm._v("Detail streamu ( ffprobe )"),
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-treeview", {
            attrs: {
              "open-all": "",
              "open-on-click": "",
              dense: "",
              hoverable: "",
              items: _vm.ffprobe,
            },
            scopedSlots: _vm._u([
              {
                key: "prepend",
                fn: function (ref) {
                  var item = ref.item
                  var open = ref.open
                  return [
                    _c("v-icon", { attrs: { small: "" } }, [
                      _vm._v(_vm._s(item.file)),
                    ]),
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamHistory.vue?vue&type=template&id=3472c6f0&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamHistory.vue?vue&type=template&id=3472c6f0& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "overflow-hidden rounded-lg blur shadow-blur" },
        [
          _c("p", { staticClass: "text-center mt-3" }, [
            _vm._v("Historie streamu"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c(
              "div",
              [
                _c(
                  "v-simple-table",
                  { attrs: { height: "250px", dense: "" } },
                  [
                    _c("thead", { attrs: { color: "#1E1E1E" } }, [
                      _c("tr", [
                        _c("th", { staticClass: "text-left" }, [
                          _vm._v("Stav"),
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-left" }, [
                          _vm._v("Vytvořeno"),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.history, function (status) {
                        return _c(
                          "tr",
                          {
                            key: status.id,
                            style: _vm.putBackgroundColorByStatus(
                              status.status
                            ),
                          },
                          [
                            _c("td", {
                              attrs: { color: "red" },
                              domProps: {
                                textContent: _vm._s(
                                  _vm.convertStatus(status.status)
                                ),
                              },
                            }),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(status.created_at) +
                                  "\n                            "
                              ),
                            ]),
                          ]
                        )
                      }),
                      0
                    ),
                  ]
                ),
              ],
              1
            ),
          ]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamIptvDoku.vue?vue&type=template&id=6b09ab12&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamIptvDoku.vue?vue&type=template&id=6b09ab12& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    { staticClass: "overflow-hidden rounded-lg blur shadow-blur" },
    [
      _c("p", { staticClass: "text-center mt-3" }, [
        _vm._v("Informace z IPTV Dokumentace"),
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
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
                    { attrs: { cols: "12" } },
                    [
                      _c("v-img", {
                        attrs: {
                          "lazy-src": _vm.iptvDokuData.logo,
                          src: _vm.iptvDokuData.logo,
                          "aspect-ratio": 16 / 9,
                          width: "120",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "12" } }, [
                    _c("span", [
                      _vm._v(
                        " Žánr: " + _vm._s(_vm.iptvDokuData.kategorie) + " "
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _vm.iptvDokuData.devices.source != null
                    ? _c("v-col", { attrs: { cols: "" } }, [
                        _c("p", { staticClass: "text-center caption" }, [
                          _vm._v("Přijímač"),
                        ]),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.iptvDokuData.devices.source) +
                            "\n                "
                        ),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.iptvDokuData.devices.multiplexor != null
                    ? _c("v-col", [
                        _c("p", { staticClass: "text-center caption" }, [
                          _vm._v("Multiplexor"),
                        ]),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.iptvDokuData.devices.multiplexor) +
                            "\n                "
                        ),
                      ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamNameAndStatus.vue?vue&type=template&id=7fdf14ba&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamNameAndStatus.vue?vue&type=template&id=7fdf14ba& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "d-flex justify-space-between mt-3" }, [
        _c(
          "p",
          { staticClass: "headline" },
          [
            _vm._v(
              "\n            Přehled streamu " + _vm._s(_vm.stream.nazev) + " "
            ),
            _c("span", { staticClass: "subtitle-1 grey--text" }, [
              _vm._v(" " + _vm._s(_vm.stream.stream_url)),
            ]),
            _vm._v(" "),
            _c("v-img", {
              staticClass: "px-3",
              attrs: {
                "lazy-src": _vm.channel.logo,
                "max-height": "96",
                "max-width": "96",
                contain: "",
                src: _vm.channel.logo,
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _vm.stream.status == "monitoring"
          ? _c(
              "p",
              { staticClass: "mx-12 body-1 info--text font-weight-bold" },
              [
                _vm._v(
                  "\n            Stream se začal dohledovat " +
                    _vm._s(_vm.stream.monitored_at) +
                    "\n        "
                ),
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "span",
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
                              staticClass: "ml-3",
                              attrs: {
                                "x-small": "",
                                icon: "",
                                color: "green",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.openStreamEditDialog()
                                },
                              },
                            },
                            on
                          ),
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v(" mdi-pencil "),
                            ]),
                          ],
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
                  "v-container",
                  [_c("v-row", [_vm._v(" Upravení zobrazovaných informací ")])],
                  1
                ),
              ],
              1
            ),
          ],
          1
        ),
      ]),
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
            value: _vm.streamEditDialog,
            callback: function ($$v) {
              _vm.streamEditDialog = $$v
            },
            expression: "streamEditDialog",
          },
        },
        [
          _c(
            "v-card",
            [
              _c("p", { staticClass: "pt-3 text-center subtitle-1" }, [
                _vm._v(
                  "\n                Změna dohledovaných informací u streamu\n            "
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
                              attrs: { cols: "12", sm: "12", md: "6", lg: "6" },
                            },
                            [
                              _c("v-switch", {
                                attrs: {
                                  "error-messages": _vm.error.invalidSync,
                                  label: "Zobrazovat InvalidSync chyby",
                                },
                                model: {
                                  value: _vm.formData.invalidSync,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "invalidSync", $$v)
                                  },
                                  expression: "formData.invalidSync",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              attrs: { cols: "12", sm: "12", md: "6", lg: "6" },
                            },
                            [
                              _c("v-switch", {
                                attrs: {
                                  "error-messages": _vm.error.invalidSync,
                                  label: "Zobrazovat Transport Stream chyby",
                                },
                                model: {
                                  value: _vm.formData.transportErrors,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.formData,
                                      "transportErrors",
                                      $$v
                                    )
                                  },
                                  expression: "formData.transportErrors",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              attrs: { cols: "12", sm: "12", md: "6", lg: "6" },
                            },
                            [
                              _c("v-switch", {
                                attrs: {
                                  "error-messages": _vm.error.audioAccess,
                                  label: "Zobrazovat chybu v Audio dekryptaci",
                                },
                                model: {
                                  value: _vm.formData.audioAccess,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "audioAccess", $$v)
                                  },
                                  expression: "formData.audioAccess",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              attrs: { cols: "12", sm: "12", md: "6", lg: "6" },
                            },
                            [
                              _c("v-switch", {
                                attrs: {
                                  "error-messages": _vm.error.videoAccess,
                                  label: "Zobrazovat chybu ve Video dekryptaci",
                                },
                                model: {
                                  value: _vm.formData.videoAccess,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "videoAccess", $$v)
                                  },
                                  expression: "formData.videoAccess",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              attrs: { cols: "12", sm: "12", md: "6", lg: "6" },
                            },
                            [
                              _c("v-switch", {
                                attrs: {
                                  "error-messages":
                                    _vm.error.audioVideoOutOfSync,
                                  label:
                                    "Zobrazovat resynchronizaci Audio / Videa",
                                },
                                model: {
                                  value: _vm.formData.audioVideoOutOfSync,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.formData,
                                      "audioVideoOutOfSync",
                                      $$v
                                    )
                                  },
                                  expression: "formData.audioVideoOutOfSync",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              attrs: { cols: "12", sm: "12", md: "6", lg: "6" },
                            },
                            [
                              _c("v-switch", {
                                attrs: {
                                  "error-messages": _vm.error.discontinuites,
                                  label: "Zobrazovat discontinuity chyby",
                                },
                                model: {
                                  value: _vm.formData.discontinuites,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.formData,
                                      "discontinuites",
                                      $$v
                                    )
                                  },
                                  expression: "formData.discontinuites",
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
                    [_vm._v("\n                    Zavřít\n                ")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
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
                          return _vm.updateStream()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamPids.vue?vue&type=template&id=777da8c8&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamPids.vue?vue&type=template&id=777da8c8& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "overflow-hidden rounded-lg blur shadow-blur" },
        [
          _c("p", { staticClass: "text-center mt-3" }, [
            _vm._v("Informace o Pidech ve streamu"),
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            _vm._l(_vm.streamPids, function (pidValues, pidName) {
              return _c("span", { key: pidName }, [
                _c("p", {
                  staticClass: "subtitle-1 my-1 text-center",
                  domProps: { innerHTML: _vm._s(pidName) },
                }),
                _vm._v(" "),
                pidValues.length != 0
                  ? _c(
                      "div",
                      [
                        _c("v-simple-table", {
                          attrs: { height: "250px", dense: "" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function () {
                                  return [
                                    _c(
                                      "tbody",
                                      _vm._l(
                                        pidValues[0],
                                        function (pidValue, pidKey) {
                                          return _c("tr", { key: pidKey }, [
                                            _c(
                                              "td",
                                              { staticClass: "caption" },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "font-weight-bold d-flex justify-start",
                                                  },
                                                  [_vm._v(_vm._s(pidKey) + ":")]
                                                ),
                                                _vm._v(" "),
                                                typeof pidValue == "object"
                                                  ? _c(
                                                      "span",
                                                      _vm._l(
                                                        pidValue,
                                                        function (value, key) {
                                                          return _c(
                                                            "span",
                                                            {
                                                              key: key,
                                                              staticClass:
                                                                "d-flex justify-end",
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                " +
                                                                  _vm._s(key) +
                                                                  ": " +
                                                                  _vm._s(
                                                                    value
                                                                  ) +
                                                                  "\n                                                "
                                                              ),
                                                              _c("br"),
                                                            ]
                                                          )
                                                        }
                                                      ),
                                                      0
                                                    )
                                                  : _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "d-flex justify-end",
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                            " +
                                                            _vm._s(pidValue) +
                                                            "\n                                        "
                                                        ),
                                                      ]
                                                    ),
                                              ]
                                            ),
                                          ])
                                        }
                                      ),
                                      0
                                    ),
                                  ]
                                },
                                proxy: true,
                              },
                            ],
                            null,
                            true
                          ),
                        }),
                      ],
                      1
                    )
                  : _c(
                      "div",
                      [
                        _c(
                          "v-alert",
                          {
                            staticClass: "shadow-blur-warning-blue-alert",
                            attrs: {
                              type: "info",
                              color: "#182948",
                              dense: "",
                            },
                          },
                          [
                            _vm._v(
                              "\n                        Neexistují informace o Pidu\n                    "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
              ])
            }),
            0
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamPidsErrors.vue?vue&type=template&id=08d212b2&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamPidsErrors.vue?vue&type=template&id=08d212b2& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _vm.errorPids.length != 0
        ? _c(
            "v-card",
            { staticClass: "overflow-hidden rounded-lg blur shadow-blur" },
            [
              _c("p", { staticClass: "text-center mt-3" }, [
                _vm._v("\n            Historie chyb v pidech\n            "),
                _c(
                  "span",
                  {
                    staticClass: "font-weight-bold title mx-3",
                    class: _vm.colorOfErrors(_vm.errorPids.problem_pids),
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.countErrors(_vm.errorPids.problem_pids)) +
                        "\n                "
                    ),
                    _c("span", { staticClass: "font-weight-bold body-2" }, [
                      _vm._v(" chyb za 24h"),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _c(
                  "div",
                  [
                    _c(
                      "v-simple-table",
                      { attrs: { height: "250px", dense: "" } },
                      [
                        _c("thead", { attrs: { color: "#1E1E1E" } }, [
                          _c("tr", [
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("Pid"),
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("Počet chyb"),
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("Vytvořeno"),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(
                            _vm.errorPids.problem_pids,
                            function (errorPid) {
                              return _c("tr", { key: errorPid.id }, [
                                _c("td", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(errorPid.pid) +
                                      "\n                            "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(errorPid.errors) +
                                      "\n                            "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        _vm.convertIsoDatetime(
                                          errorPid.created_at
                                        )
                                      ) +
                                      "\n                            "
                                  ),
                                ]),
                              ])
                            }
                          ),
                          0
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamServices.vue?vue&type=template&id=3009fa9c&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/StreamServices.vue?vue&type=template&id=3009fa9c& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    { staticClass: "overflow-hidden rounded-lg blur shadow-blur" },
    [
      _c("p", { staticClass: "text-center mt-3" }, [
        _vm._v("Informace o servisách ve streamu"),
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-container",
            { attrs: { fluid: "" } },
            [
              _c(
                "v-row",
                _vm._l(_vm.streamPids, function (service, serviceKey) {
                  return _c(
                    "v-col",
                    {
                      key: serviceKey,
                      staticClass: "mt-n5 d-flex justify-space-between",
                      attrs: { cols: "12", sm: "12", md: "6", lg: "6" },
                    },
                    [
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: serviceKey != "components",
                              expression: "serviceKey != 'components'",
                            },
                          ],
                          staticClass: "my-3",
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(serviceKey) +
                              ":\n                        "
                          ),
                          _c("span", { staticClass: "font-weight-bold mx-2" }, [
                            _vm._v(_vm._s(service)),
                          ]),
                        ]
                      ),
                    ]
                  )
                }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/devicetemplate.vue?vue&type=template&id=1e967e64&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/devicetemplate.vue?vue&type=template&id=1e967e64& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "overflow-hidden rounded-xl", attrs: { flat: "" } },
        [
          _c(
            "v-card-subtitle",
            [
              _c("v-row", { staticClass: "justify-center" }, [
                _c(
                  "p",
                  { staticClass: "mt-3 text-center overline font-weight-bold" },
                  [
                    _vm._v(
                      "\n                    Šablona zařízení\n                "
                    ),
                  ]
                ),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "px-2 text--center" },
            [
              _c(
                "v-container",
                { attrs: { fluid: "" } },
                [
                  _vm.deviceTemplate != null
                    ? _c(
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
                                "v-row",
                                [
                                  _c("v-col", { attrs: { cols: "12" } }, [
                                    _vm.deviceTemplate.input
                                      ? _c(
                                          "span",
                                          [
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "text-center font-weight-bold",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                        Vstupy\n                                    "
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-row",
                                              {
                                                staticClass:
                                                  "justify-center mt-6",
                                              },
                                              _vm._l(
                                                _vm.deviceTemplate.input.input,
                                                function (input) {
                                                  return _c(
                                                    "v-col",
                                                    { key: input.id },
                                                    [
                                                      _c(
                                                        "v-card",
                                                        {
                                                          staticClass:
                                                            "justify-center rounded-lg d-flex",
                                                          attrs: {
                                                            "min-height": "75",
                                                            "min-width": "75",
                                                            "max-width": "350",
                                                            outlined: "",
                                                            flat: "",
                                                            color:
                                                              _vm.chooseColor(
                                                                input.vazba,
                                                                input.interface
                                                              ),
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "v-container",
                                                            {
                                                              attrs: {
                                                                fluid: "",
                                                              },
                                                            },
                                                            [
                                                              _c("p", {
                                                                staticClass:
                                                                  "caption",
                                                                domProps: {
                                                                  innerHTML:
                                                                    _vm._s(
                                                                      input.name
                                                                    ),
                                                                },
                                                              }),
                                                              _vm._v(" "),
                                                              input.snmp_settings
                                                                ? _c(
                                                                    "v-row",
                                                                    {
                                                                      staticClass:
                                                                        "px-3",
                                                                    },
                                                                    _vm._l(
                                                                      input.snmp_settings,
                                                                      function (
                                                                        inputSnmp,
                                                                        inputSnmpIndex
                                                                      ) {
                                                                        return _c(
                                                                          "v-col",
                                                                          {
                                                                            key: inputSnmp.id,
                                                                            staticClass:
                                                                              "d-flex justify-space-between",
                                                                            attrs:
                                                                              {
                                                                                cols: "12",
                                                                              },
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "font-weight-bold",
                                                                                domProps:
                                                                                  {
                                                                                    innerHTML:
                                                                                      _vm._s(
                                                                                        inputSnmp
                                                                                          .data
                                                                                          .name +
                                                                                          ":"
                                                                                      ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "px-2",
                                                                                class:
                                                                                  _vm.fontNotificationFunction(
                                                                                    inputSnmp
                                                                                      .data
                                                                                      .value
                                                                                  ),
                                                                                domProps:
                                                                                  {
                                                                                    innerHTML:
                                                                                      _vm._s(
                                                                                        inputSnmp
                                                                                          .data
                                                                                          .value
                                                                                      ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                          ]
                                                                        )
                                                                      }
                                                                    ),
                                                                    1
                                                                  )
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              input.settings
                                                                ? _c(
                                                                    "v-row",
                                                                    {
                                                                      staticClass:
                                                                        "px-3",
                                                                    },
                                                                    _vm._l(
                                                                      input.settings,
                                                                      function (
                                                                        inputItem,
                                                                        index
                                                                      ) {
                                                                        return _c(
                                                                          "v-col",
                                                                          {
                                                                            key: inputItem.id,
                                                                            staticClass:
                                                                              "d-flex justify-space-between",
                                                                            attrs:
                                                                              {
                                                                                cols: "12",
                                                                              },
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "font-weight-bold",
                                                                                domProps:
                                                                                  {
                                                                                    innerHTML:
                                                                                      _vm._s(
                                                                                        inputItem.name +
                                                                                          ":"
                                                                                      ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "px-2",
                                                                                domProps:
                                                                                  {
                                                                                    innerHTML:
                                                                                      _vm._s(
                                                                                        inputItem.value
                                                                                      ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                          ]
                                                                        )
                                                                      }
                                                                    ),
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
                                                  )
                                                }
                                              ),
                                              1
                                            ),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.deviceTemplate.output
                                      ? _c(
                                          "span",
                                          [
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "pt-6 text-center font-weight-bold",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                        Výstupy\n                                    "
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-row",
                                              { staticClass: "mt-6" },
                                              _vm._l(
                                                _vm.deviceTemplate.output
                                                  .output,
                                                function (output) {
                                                  return _c(
                                                    "v-col",
                                                    { key: output.id },
                                                    [
                                                      _c(
                                                        "v-card",
                                                        {
                                                          staticClass:
                                                            "rounded-lg",
                                                          attrs: {
                                                            outlined: "",
                                                            color:
                                                              _vm.chooseColor(
                                                                output.vazba,
                                                                output.interface
                                                              ),
                                                            "min-height": "75",
                                                            "min-width": "75",
                                                            "max-width": "350",
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "v-container",
                                                            [
                                                              _c("p", {
                                                                staticClass:
                                                                  "caption",
                                                                domProps: {
                                                                  innerHTML:
                                                                    _vm._s(
                                                                      output.name
                                                                    ),
                                                                },
                                                              }),
                                                              _vm._v(" "),
                                                              output.snmp_settings
                                                                ? _c(
                                                                    "v-row",
                                                                    {
                                                                      staticClass:
                                                                        "px-3",
                                                                    },
                                                                    _vm._l(
                                                                      output.snmp_settings,
                                                                      function (
                                                                        outputSnmp,
                                                                        outputSnmpIndex
                                                                      ) {
                                                                        return _c(
                                                                          "v-col",
                                                                          {
                                                                            key: outputSnmp.id,
                                                                            staticClass:
                                                                              "d-flex justify-space-between",
                                                                            attrs:
                                                                              {
                                                                                cols: "12",
                                                                              },
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "font-weight-bold",
                                                                                domProps:
                                                                                  {
                                                                                    innerHTML:
                                                                                      _vm._s(
                                                                                        outputSnmp
                                                                                          .data
                                                                                          .name +
                                                                                          ":"
                                                                                      ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "px-2",
                                                                                class:
                                                                                  _vm.fontNotificationFunction(
                                                                                    outputSnmp
                                                                                      .data
                                                                                      .value
                                                                                  ),
                                                                                domProps:
                                                                                  {
                                                                                    innerHTML:
                                                                                      _vm._s(
                                                                                        outputSnmp
                                                                                          .data
                                                                                          .value
                                                                                      ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                          ]
                                                                        )
                                                                      }
                                                                    ),
                                                                    1
                                                                  )
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              output.settings
                                                                ? _c(
                                                                    "v-row",
                                                                    {
                                                                      staticClass:
                                                                        "px-3",
                                                                    },
                                                                    _vm._l(
                                                                      output.settings,
                                                                      function (
                                                                        outputItem,
                                                                        outputIndex
                                                                      ) {
                                                                        return _c(
                                                                          "v-col",
                                                                          {
                                                                            key: outputItem.id,
                                                                            staticClass:
                                                                              "d-flex justify-space-between",
                                                                            attrs:
                                                                              {
                                                                                cols: "12",
                                                                              },
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "font-weight-bold",
                                                                                domProps:
                                                                                  {
                                                                                    innerHTML:
                                                                                      _vm._s(
                                                                                        outputItem.name +
                                                                                          ":"
                                                                                      ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "px-2",
                                                                                domProps:
                                                                                  {
                                                                                    innerHTML:
                                                                                      _vm._s(
                                                                                        outputItem.value
                                                                                      ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                          ]
                                                                        )
                                                                      }
                                                                    ),
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
                                                  )
                                                }
                                              ),
                                              1
                                            ),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.deviceTemplate.modules
                                      ? _c(
                                          "span",
                                          [
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "mt-3 text-center font-weight-bold",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                        Moduly\n                                    "
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-row",
                                              {
                                                staticClass:
                                                  "justify-center mt-6",
                                              },
                                              _vm._l(
                                                _vm.deviceTemplate.modules
                                                  .modules,
                                                function (module) {
                                                  return _c(
                                                    "v-col",
                                                    { key: module.id },
                                                    [
                                                      _c(
                                                        "v-card",
                                                        {
                                                          staticClass:
                                                            "justify-center rounded-lg d-flex",
                                                          attrs: {
                                                            "min-height": "75",
                                                            "min-width": "75",
                                                            "max-width": "350",
                                                            outlined: "",
                                                            flat: "",
                                                            color:
                                                              _vm.chooseColor(
                                                                module.vazba,
                                                                module.interface
                                                              ),
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "v-container",
                                                            {
                                                              attrs: {
                                                                fluid: "",
                                                              },
                                                            },
                                                            [
                                                              _c("p", {
                                                                staticClass:
                                                                  "caption",
                                                                domProps: {
                                                                  innerHTML:
                                                                    _vm._s(
                                                                      module.human_name
                                                                    ),
                                                                },
                                                              }),
                                                              _vm._v(" "),
                                                              module.snmp_settings
                                                                ? _c("v-row", {
                                                                    staticClass:
                                                                      "px-3",
                                                                  })
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              module.settings
                                                                ? _c(
                                                                    "v-row",
                                                                    {
                                                                      staticClass:
                                                                        "px-3",
                                                                    },
                                                                    _vm._l(
                                                                      module.settings,
                                                                      function (
                                                                        moduleItem,
                                                                        index
                                                                      ) {
                                                                        return _c(
                                                                          "v-col",
                                                                          {
                                                                            key: moduleItem.id,
                                                                            attrs:
                                                                              {
                                                                                cols: "12",
                                                                              },
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "font-weight-bold",
                                                                                domProps:
                                                                                  {
                                                                                    innerHTML:
                                                                                      _vm._s(
                                                                                        moduleItem.name +
                                                                                          ":"
                                                                                      ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "px-2",
                                                                                domProps:
                                                                                  {
                                                                                    innerHTML:
                                                                                      _vm._s(
                                                                                        moduleItem.value
                                                                                      ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                          ]
                                                                        )
                                                                      }
                                                                    ),
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
                                                  )
                                                }
                                              ),
                                              1
                                            ),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                  ]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { staticClass: "justify-end pl-3 mt-3" },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c("v-sheet", {
                                            staticClass: "mt-1",
                                            attrs: {
                                              width: "15",
                                              height: "15",
                                              color: "#5D6269",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("small", { staticClass: "pl-6" }, [
                                            _vm._v("Neaktivní"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c("v-sheet", {
                                            staticClass: "mt-1",
                                            attrs: {
                                              width: "15",
                                              height: "15",
                                              color: "rgb(60, 179, 113, 0.3)",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("small", { staticClass: "pl-6" }, [
                                            _vm._v("Využitý"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c("v-sheet", {
                                            staticClass: "mt-1",
                                            attrs: {
                                              width: "15",
                                              height: "15",
                                              color: "rgb(0, 191, 255, 0.3)",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("small", { staticClass: "pl-6" }, [
                                            _vm._v("Vazba na kanál"),
                                          ]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamImage.vue?vue&type=template&id=3e9e8d52&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamImage.vue?vue&type=template&id=3e9e8d52& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    { staticClass: "overflow-hidden rounded-lg blur shadow-blur" },
    [
      _c("v-img", {
        attrs: {
          "lazy-src": _vm.streamImageUrl,
          src: _vm.streamImageUrl,
          "aspect-ratio": 16 / 9,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamLayout.vue?vue&type=template&id=bb3a3b44&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Stream/streamLayout.vue?vue&type=template&id=bb3a3b44& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    { attrs: { fluid: "" } },
    [
      _c(
        "v-col",
        { attrs: { cols: "12", sm: "12", md: "12", lg: "12" } },
        [
          _c("StreamNameAndStatus", {
            attrs: { stream: _vm.stream, channel: _vm.iptvDokuData },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            {
              staticClass: "mt-n3",
              attrs: { cols: "12", sm: "12", md: "3", lg: "3" },
            },
            [
              _c("StreamImage", {
                staticClass: "mb-3",
                attrs: { streamImageUrl: _vm.stream.image },
              }),
              _vm._v(" "),
              _c("StreamHistory", {
                staticClass: "mb-3",
                attrs: { history: _vm.stream.history },
              }),
              _vm._v(" "),
              _c("StreamPidsErrors", { staticClass: "mb-3" }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass: "mt-n3",
              attrs: { cols: "12", sm: "12", md: "9", lg: "9" },
            },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "12", md: "4", lg: "4" } },
                    [_c("StreamService", { staticClass: "mb-3" })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "12", md: "8", lg: "8" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass:
                            "overflow-hidden rounded-lg blur shadow-blur mb-6",
                        },
                        [
                          _c("p", { staticClass: "text-center mt-3" }, [
                            _vm._v(
                              "\n                            Informace o streamu z IPTV dokumentace\n                        "
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _vm.iptvDokuData.length != 0
                                ? _c(
                                    "v-container",
                                    { attrs: { fluid: "" } },
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
                                                md: "4",
                                                lg: "4",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        Žánr: " +
                                                  _vm._s(
                                                    _vm.iptvDokuData.kategorie
                                                  ) +
                                                  "\n                                    "
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
                                                md: "8",
                                                lg: "8",
                                              },
                                            },
                                            [
                                              _vm.iptvDokuData.channel_packages
                                                .length != 0
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "subtitle-2 mx-3",
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                            Programové balíčky:\n                                            "
                                                      ),
                                                      _vm._l(
                                                        _vm.iptvDokuData
                                                          .channel_packages,
                                                        function (
                                                          channelPackage
                                                        ) {
                                                          return _c(
                                                            "span",
                                                            {
                                                              key: channelPackage.id,
                                                            },
                                                            [
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "mx-auto",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                    " +
                                                                      _vm._s(
                                                                        channelPackage.channel_package
                                                                      ) +
                                                                      "\n                                                    ,\n                                                "
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          )
                                                        }
                                                      ),
                                                    ],
                                                    2
                                                  )
                                                : _vm._e(),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.iptvDokuData.devices.source !=
                                          null
                                            ? _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "12",
                                                    md: "7",
                                                    lg: "7",
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-center subtitle-1",
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                            Přijímač\n                                        "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-row",
                                                    [
                                                      _c(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "5",
                                                            lg: "5",
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "subtitle-2",
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                    Název:\n                                                    " +
                                                                  _vm._s(
                                                                    _vm
                                                                      .iptvDokuData
                                                                      .devices
                                                                      .source
                                                                      .name
                                                                  ) +
                                                                  "\n                                                "
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _vm.iptvDokuData.devices
                                                        .source.ip != null
                                                        ? _c(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                                sm: "12",
                                                                md: "5",
                                                                lg: "5",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "subtitle-2",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                    IP:\n                                                    " +
                                                                      _vm._s(
                                                                        _vm
                                                                          .iptvDokuData
                                                                          .devices
                                                                          .source
                                                                          .ip
                                                                      ) +
                                                                      "\n                                                "
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _vm.iptvDokuData.devices
                                                        .source.status != null
                                                        ? _c(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                                sm: "12",
                                                                md: "5",
                                                                lg: "5",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "subtitle-2",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                    Status ze zbx:\n                                                    "
                                                                  ),
                                                                  _vm
                                                                    .iptvDokuData
                                                                    .devices
                                                                    .source
                                                                    .status ==
                                                                  "success"
                                                                    ? _c(
                                                                        "v-icon",
                                                                        {
                                                                          staticClass:
                                                                            "mx-3",
                                                                          attrs:
                                                                            {
                                                                              color:
                                                                                "green",
                                                                              small:
                                                                                "",
                                                                            },
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "mdi-check"
                                                                          ),
                                                                        ]
                                                                      )
                                                                    : _c(
                                                                        "v-icon",
                                                                        {
                                                                          staticClass:
                                                                            "mx-3",
                                                                          attrs:
                                                                            {
                                                                              color:
                                                                                "red",
                                                                              small:
                                                                                "",
                                                                            },
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "mdi-close"
                                                                          ),
                                                                        ]
                                                                      ),
                                                                ],
                                                                1
                                                              ),
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "5",
                                                            lg: "5",
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "a",
                                                            {
                                                              attrs: {
                                                                href: _vm
                                                                  .iptvDokuData
                                                                  .devices
                                                                  .source.url,
                                                                target:
                                                                  "_blank",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                    Proklik na do IPTV\n                                                    dokumentace:\n                                                "
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("v-col", {
                                                        attrs: { cols: "12" },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.iptvDokuData.devices.multiplexor
                                            ? _c("v-col", [
                                                _vm.iptvDokuData.devices
                                                  .multiplexor.name != null
                                                  ? _c(
                                                      "div",
                                                      [
                                                        _c(
                                                          "p",
                                                          {
                                                            staticClass:
                                                              "text-center subtitle-1",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                Multiplexor\n                                            "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-row",
                                                          [
                                                            _c(
                                                              "v-col",
                                                              {
                                                                attrs: {
                                                                  cols: "12",
                                                                  sm: "12",
                                                                  md: "5",
                                                                  lg: "5",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "subtitle-2",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                        Název:\n                                                        " +
                                                                        _vm._s(
                                                                          _vm
                                                                            .iptvDokuData
                                                                            .devices
                                                                            .multiplexor
                                                                            .name
                                                                        ) +
                                                                        "\n                                                    "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _vm.iptvDokuData
                                                              .devices
                                                              .multiplexor.ip !=
                                                            null
                                                              ? _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols: "12",
                                                                      sm: "12",
                                                                      md: "5",
                                                                      lg: "5",
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "span",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2",
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\n                                                        IP:\n                                                        " +
                                                                            _vm._s(
                                                                              _vm
                                                                                .iptvDokuData
                                                                                .devices
                                                                                .multiplexor
                                                                                .ip
                                                                            ) +
                                                                            "\n                                                    "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                )
                                                              : _vm._e(),
                                                            _vm._v(" "),
                                                            _vm.iptvDokuData
                                                              .devices
                                                              .multiplexor
                                                              .status != null
                                                              ? _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols: "12",
                                                                      sm: "12",
                                                                      md: "5",
                                                                      lg: "5",
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "span",
                                                                      {
                                                                        staticClass:
                                                                          "subtitle-2",
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\n                                                        Status ze zbx:\n                                                        "
                                                                        ),
                                                                        _vm
                                                                          .iptvDokuData
                                                                          .devices
                                                                          .multiplexor
                                                                          .status ==
                                                                        "success"
                                                                          ? _c(
                                                                              "v-icon",
                                                                              {
                                                                                staticClass:
                                                                                  "mx-3",
                                                                                attrs:
                                                                                  {
                                                                                    color:
                                                                                      "green",
                                                                                    small:
                                                                                      "",
                                                                                  },
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "mdi-check"
                                                                                ),
                                                                              ]
                                                                            )
                                                                          : _c(
                                                                              "v-icon",
                                                                              {
                                                                                staticClass:
                                                                                  "mx-3",
                                                                                attrs:
                                                                                  {
                                                                                    color:
                                                                                      "red",
                                                                                    small:
                                                                                      "",
                                                                                  },
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "mdi-close"
                                                                                ),
                                                                              ]
                                                                            ),
                                                                      ],
                                                                      1
                                                                    ),
                                                                  ]
                                                                )
                                                              : _vm._e(),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-col",
                                                              {
                                                                attrs: {
                                                                  cols: "12",
                                                                  sm: "12",
                                                                  md: "5",
                                                                  lg: "5",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "a",
                                                                  {
                                                                    attrs: {
                                                                      href: _vm
                                                                        .iptvDokuData
                                                                        .devices
                                                                        .multiplexor
                                                                        .url,
                                                                      target:
                                                                        "_blank",
                                                                    },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                        Proklik na do IPTV\n                                                        dokumentace:\n                                                    "
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
                                                    )
                                                  : _vm._e(),
                                              ])
                                            : _vm._e(),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  )
                                : _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c(
                                                "v-alert",
                                                {
                                                  staticClass:
                                                    "overflow-hidden rounded-lg blur shadow-blur-warning-blue-alert text-center my-3",
                                                  attrs: { color: "#182948" },
                                                },
                                                [
                                                  _c("strong", [
                                                    _vm._v(
                                                      "Stream nenalezen v IPTV\n                                                Dokumentaci"
                                                    ),
                                                  ]),
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
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("StreamAudioVideoPidDetail"),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("StreamAlertDialog", {
        attrs: {
          isActiveDialog: _vm.isActiveDialog,
          dialogText: _vm.checkStreamStatus(_vm.stream.status),
        },
      }),
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