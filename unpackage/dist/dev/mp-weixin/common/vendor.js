(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  navigateTo: navigateTo,
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
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


/***/ }),

/***/ 11:
/*!**********************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/static/js/api.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _request = _interopRequireDefault(__webpack_require__(/*! ./request */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

{
  login: function login(data) {
    return (0, _request.default)({
      data: data,
      url: "access_token",
      method: "post" });

  },
  // ----首页 start--------------------------------------------------------------
  // 首页banner
  indexBanner: function indexBanner(data) {
    return (0, _request.default)({
      data: data,
      url: "banners",
      method: "get" });

  },
  // radio筛选
  indexFilter: function indexFilter(data) {
    return (0, _request.default)({
      data: data,
      url: "form_filter/filter",
      method: "get" });

  },
  // 列表
  indexList: function indexList(data) {
    return (0, _request.default)({
      data: data,
      url: "information",
      method: "get" });

  },
  // 根据经纬度计算位置
  indexLocation: function indexLocation(data) {
    return (0, _request.default)({
      url: "place/lng/".concat(data.lng, "/lat/").concat(data.lat),
      method: "get" });

  },
  // ----首页 end--------------------------------------------------------------
  // 获取个人信息
  getMyInfo: function getMyInfo(data) {
    return (0, _request.default)({
      url: "user/".concat(data, "/show"),
      method: "get" });

  },
  // 关于我们
  aboutUs: function aboutUs(data) {
    return (0, _request.default)({
      data: data,
      url: "/about",
      method: "get" });

  } };exports.default = _default;

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/static/js/request.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // service.js文件
var baseURL = "https://ccxq.chunchunyoupin.com/";
var service = _axios.default.create({
  withCredentials: true,
  crossDomain: true,
  baseURL: baseURL,
  timeout: 1000 });

var failToast = function failToast(msg) {
  //错误toast
  uni.showToast({
    title: msg || "网络错误",
    duration: 2000,
    icon: "none" });

};
var loginConfirm = function loginConfirm() {
  uni.
  showModal({
    title: "未登录",
    content: "当前未登录，是否授权登录？" }).

  then(function () {
    console.log("登录");
    uni.login({
      provider: "weixin",
      success: function success(loginRes) {
        service.
        post("access_token", {
          openid: loginRes.code }).

        then(function (res) {
          console.log(res);
        });
        // this.$api
        //   .login({
        //     openid: loginRes.code
        //   })
        //   .then(res => {
        //     console.log(res);
        //   });
        // 获取用户信息
        // uni.getUserInfo({
        //   provider: "weixin",
        //   success: function(infoRes) {
        //     console.log(
        //       "用户昵称为：" + infoRes.userInfo.nickName,
        //       infoRes
        //     );
        //   }
        // });
      } });

  });
};
// request拦截器,在请求之前做一些处理
service.interceptors.request.use(
function (config) {
  // if (store.state.token) {
  //     // 给请求头添加user-token
  //     config.headers["user-token"] = store.state.token;
  // }
  console.log("请求拦截成功");
  return config;
},
function (error) {
  failToast(error);
  return Promise.reject(error);
});


//配置成功后的拦截器
service.interceptors.response.use(
function (res) {
  if (res.data && res.data.status == 200) {
    return res.data.data;
  } else {
    if (res.data.status === 700) {
      // 未登录
      loginConfirm();
    } else {
      failToast(res.data.msg);
      return Promise.reject(res.data.msg);
    }
  }
},
function (error) {
  failToast(error);
  return Promise.reject(error);
});


_axios.default.defaults.adapter = function (config) {
  //自定义适配器，用来适配uniapp的语法
  return new Promise(function (resolve, reject) {
    var settle = __webpack_require__(/*! axios/lib/core/settle */ 28);
    var buildURL = __webpack_require__(/*! axios/lib/helpers/buildURL */ 18);
    uni.request({
      method: config.method.toUpperCase(),
      url:
      config.baseURL +
      buildURL(config.url, config.params, config.paramsSerializer),
      header: config.headers,
      data: config.data,
      dataType: config.dataType,
      responseType: config.responseType,
      sslVerify: config.sslVerify,
      complete: function complete(response) {
        response = {
          data: response.data,
          status: response.statusCode,
          errMsg: response.errMsg,
          header: response.header,
          config: config };


        settle(resolve, reject, response);
      } });

  });
};
/**
    *  函数的参数options为axios的配置
    *  method => 方法名 "POST"等
    *  url => 路径,实际调用时传type即可，即为urlDict的key
    *  data => 数据的对象
    *  调用前将type值转为对应的url
    */
var request = function request(options) {
  options.headers = options.headers || {};
  options.method = options.method || "get";
  if (options.method.toUpperCase() === "GET") {
    options.params = options.data;
  }
  return service(options);
};var _default =

request;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 13:
/*!*********************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ 14);

/***/ }),

/***/ 14:
/*!*************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/axios.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 15);
var bind = __webpack_require__(/*! ./helpers/bind */ 16);
var Axios = __webpack_require__(/*! ./core/Axios */ 17);
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ 37);
var defaults = __webpack_require__(/*! ./defaults */ 23);

/**
                                       * Create an instance of Axios
                                       *
                                       * @param {Object} defaultConfig The default config for the instance
                                       * @return {Axios} A new instance of Axios
                                       */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ 38);
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ 39);
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ 22);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ 40);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),

/***/ 15:
/*!*************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/utils.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ 16);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
                                           * Determine if a value is an Array
                                           *
                                           * @param {Object} val The value to test
                                           * @returns {boolean} True if value is an Array, otherwise false
                                           */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
   * Determine if a value is a Buffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Buffer, otherwise false
   */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) &&
  typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */
function isString(val) {
  return typeof val === 'string';
}

/**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */
function isNumber(val) {
  return typeof val === 'number';
}

/**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
   * Determine if a value is a plain Object
   *
   * @param {Object} val The value to test
   * @return {boolean} True if value is a plain Object, otherwise false
   */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
  navigator.product === 'NativeScript' ||
  navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined');

}

/**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
   * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
   *
   * @param {string} content with BOM
   * @return {string} content value without BOM
   */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM };

/***/ }),

/***/ 16:
/*!********************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/helpers/bind.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ 17:
/*!******************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/core/Axios.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 15);
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ 18);
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ 19);
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ 20);
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ 37);

/**
                                             * Create a new instance of Axios
                                             *
                                             * @param {Object} instanceConfig The default config for the instance
                                             */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager() };

}

/**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url }));

  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data }));

  };
});

module.exports = Axios;

/***/ }),

/***/ 18:
/*!************************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/helpers/buildURL.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 15);

function encode(val) {
  return encodeURIComponent(val).
  replace(/%3A/gi, ':').
  replace(/%24/g, '$').
  replace(/%2C/gi, ',').
  replace(/%20/g, '+').
  replace(/%5B/gi, '[').
  replace(/%5D/gi, ']');
}

/**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ 19:
/*!*******************************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/core/InterceptorManager.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 15);

function InterceptorManager() {
  this.handlers = [];
}

/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected });

  return this.handlers.length - 1;
};

/**
    * Remove an interceptor from the stack
    *
    * @param {Number} id The ID that was returned by `use`
    */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
    * Iterate over all the registered interceptors
    *
    * This method is particularly useful for skipping over any
    * interceptors that may have become `null` calling `eject`.
    *
    * @param {Function} fn The function to call for each interceptor
    */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var rawBindings = vm.__secret_vfa_state__ && vm.__secret_vfa_state__.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }
  
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/core/dispatchRequest.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 15);
var transformData = __webpack_require__(/*! ./transformData */ 21);
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ 22);
var defaults = __webpack_require__(/*! ../defaults */ 23);

/**
                                        * Throws a `Cancel` if cancellation has been requested.
                                        */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
  config.data,
  config.headers,
  config.transformRequest);


  // Flatten headers
  config.headers = utils.merge(
  config.headers.common || {},
  config.headers[config.method] || {},
  config.headers);


  utils.forEach(
  ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
  function cleanHeaderConfig(method) {
    delete config.headers[method];
  });


  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
    response.data,
    response.headers,
    config.transformResponse);


    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
        reason.response.data,
        reason.response.headers,
        config.transformResponse);

      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),

/***/ 202:
/*!*******************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/static/img/fangdajing.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 203:
/*!*****************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/static/img/location.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 204:
/*!****************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/static/img/trangle.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAARCAYAAADHeGwwAAAB/ElEQVQ4T62UwYvTUBDGv3mJrYr2IogLgtiDJxHaJNQaDwHBew9FkEWR9SKsiqyIf4Igyrp6VFTci/Swd2GhlxpLXlsETx4KHkTxYmkOtjZ5I6/bgru027pmDgnJm/l+efO+DGEryHXdhV6vdw9ACcBxAGK0Nu+NAXwDUEmlUg993/86FNYX27azzPwawPl51Wbk1YjoipSyrQFkWdYdAA8A7EsI8JuI7kspV7X4QQBrAJYSEh/LvBoMBsvked7+MAwfA7iRJICInnU6nbvDFuXz+atE9BTAoSQgRBQCWJZSvhkesuu6h/v9/gYzX0gIsJlOp0u1Wi0cAnRYlrVARO+Y+fT/QIjoEzNfbDQa2rJbNh2H4zjnmPklM5/aC4SIPhPRtSAI3o/rtwE8zzO73e4iET0BkPlHSJeZb2cymfVqtRpNBIxeCtu2HzHzTQDGnJBYm0RKuQJA/V2zbQfjhWKxeCCKoudKqUtzQGIhxFvTNK/7vv9r5wdNBOikXC53wjCMF7OcRUSbcRwvtVqtL5N2OxWgkwuFwtkoijYAHJvSqu+maZbq9fqHaa3cFaCLHMdZVEqtAjiyQ+SnEOJWEATru53TTMDoT78shFhh5jP6mYg+KqXWms2mnsB6TE+NeQAol8tGu90+KoQ4qZTq6bmfzWZ/VCqVeJbL/gApX64cBa3jbQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 207:
/*!***********************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/static/js/area.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  province_list: {
    110000: "北京市",
    120000: "天津市",
    130000: "河北省",
    140000: "山西省",
    150000: "内蒙古自治区",
    210000: "辽宁省",
    220000: "吉林省",
    230000: "黑龙江省",
    310000: "上海市",
    320000: "江苏省",
    330000: "浙江省",
    340000: "安徽省",
    350000: "福建省",
    360000: "江西省",
    370000: "山东省",
    410000: "河南省",
    420000: "湖北省",
    430000: "湖南省",
    440000: "广东省",
    450000: "广西壮族自治区",
    460000: "海南省",
    500000: "重庆市",
    510000: "四川省",
    520000: "贵州省",
    530000: "云南省",
    540000: "西藏自治区",
    610000: "陕西省",
    620000: "甘肃省",
    630000: "青海省",
    640000: "宁夏回族自治区",
    650000: "新疆维吾尔自治区",
    710000: "台湾省",
    810000: "香港特别行政区",
    820000: "澳门特别行政区",
    900000: "海外" },

  city_list: {
    110100: "北京市",
    120100: "天津市",
    130100: "石家庄市",
    130200: "唐山市",
    130300: "秦皇岛市",
    130400: "邯郸市",
    130500: "邢台市",
    130600: "保定市",
    130700: "张家口市",
    130800: "承德市",
    130900: "沧州市",
    131000: "廊坊市",
    131100: "衡水市",
    140100: "太原市",
    140200: "大同市",
    140300: "阳泉市",
    140400: "长治市",
    140500: "晋城市",
    140600: "朔州市",
    140700: "晋中市",
    140800: "运城市",
    140900: "忻州市",
    141000: "临汾市",
    141100: "吕梁市",
    150100: "呼和浩特市",
    150200: "包头市",
    150300: "乌海市",
    150400: "赤峰市",
    150500: "通辽市",
    150600: "鄂尔多斯市",
    150700: "呼伦贝尔市",
    150800: "巴彦淖尔市",
    150900: "乌兰察布市",
    152200: "兴安盟",
    152500: "锡林郭勒盟",
    152900: "阿拉善盟",
    210100: "沈阳市",
    210200: "大连市",
    210300: "鞍山市",
    210400: "抚顺市",
    210500: "本溪市",
    210600: "丹东市",
    210700: "锦州市",
    210800: "营口市",
    210900: "阜新市",
    211000: "辽阳市",
    211100: "盘锦市",
    211200: "铁岭市",
    211300: "朝阳市",
    211400: "葫芦岛市",
    220100: "长春市",
    220200: "吉林市",
    220300: "四平市",
    220400: "辽源市",
    220500: "通化市",
    220600: "白山市",
    220700: "松原市",
    220800: "白城市",
    222400: "延边朝鲜族自治州",
    230100: "哈尔滨市",
    230200: "齐齐哈尔市",
    230300: "鸡西市",
    230400: "鹤岗市",
    230500: "双鸭山市",
    230600: "大庆市",
    230700: "伊春市",
    230800: "佳木斯市",
    230900: "七台河市",
    231000: "牡丹江市",
    231100: "黑河市",
    231200: "绥化市",
    232700: "大兴安岭地区",
    310100: "上海市",
    320100: "南京市",
    320200: "无锡市",
    320300: "徐州市",
    320400: "常州市",
    320500: "苏州市",
    320600: "南通市",
    320700: "连云港市",
    320800: "淮安市",
    320900: "盐城市",
    321000: "扬州市",
    321100: "镇江市",
    321200: "泰州市",
    321300: "宿迁市",
    330100: "杭州市",
    330200: "宁波市",
    330300: "温州市",
    330400: "嘉兴市",
    330500: "湖州市",
    330600: "绍兴市",
    330700: "金华市",
    330800: "衢州市",
    330900: "舟山市",
    331000: "台州市",
    331100: "丽水市",
    340100: "合肥市",
    340200: "芜湖市",
    340300: "蚌埠市",
    340400: "淮南市",
    340500: "马鞍山市",
    340600: "淮北市",
    340700: "铜陵市",
    340800: "安庆市",
    341000: "黄山市",
    341100: "滁州市",
    341200: "阜阳市",
    341300: "宿州市",
    341500: "六安市",
    341600: "亳州市",
    341700: "池州市",
    341800: "宣城市",
    350100: "福州市",
    350200: "厦门市",
    350300: "莆田市",
    350400: "三明市",
    350500: "泉州市",
    350600: "漳州市",
    350700: "南平市",
    350800: "龙岩市",
    350900: "宁德市",
    360100: "南昌市",
    360200: "景德镇市",
    360300: "萍乡市",
    360400: "九江市",
    360500: "新余市",
    360600: "鹰潭市",
    360700: "赣州市",
    360800: "吉安市",
    360900: "宜春市",
    361000: "抚州市",
    361100: "上饶市",
    370100: "济南市",
    370200: "青岛市",
    370300: "淄博市",
    370400: "枣庄市",
    370500: "东营市",
    370600: "烟台市",
    370700: "潍坊市",
    370800: "济宁市",
    370900: "泰安市",
    371000: "威海市",
    371100: "日照市",
    371300: "临沂市",
    371400: "德州市",
    371500: "聊城市",
    371600: "滨州市",
    371700: "菏泽市",
    410100: "郑州市",
    410200: "开封市",
    410300: "洛阳市",
    410400: "平顶山市",
    410500: "安阳市",
    410600: "鹤壁市",
    410700: "新乡市",
    410800: "焦作市",
    410900: "濮阳市",
    411000: "许昌市",
    411100: "漯河市",
    411200: "三门峡市",
    411300: "南阳市",
    411400: "商丘市",
    411500: "信阳市",
    411600: "周口市",
    411700: "驻马店市",
    419000: "省直辖县",
    420100: "武汉市",
    420200: "黄石市",
    420300: "十堰市",
    420500: "宜昌市",
    420600: "襄阳市",
    420700: "鄂州市",
    420800: "荆门市",
    420900: "孝感市",
    421000: "荆州市",
    421100: "黄冈市",
    421200: "咸宁市",
    421300: "随州市",
    422800: "恩施土家族苗族自治州",
    429000: "省直辖县",
    430100: "长沙市",
    430200: "株洲市",
    430300: "湘潭市",
    430400: "衡阳市",
    430500: "邵阳市",
    430600: "岳阳市",
    430700: "常德市",
    430800: "张家界市",
    430900: "益阳市",
    431000: "郴州市",
    431100: "永州市",
    431200: "怀化市",
    431300: "娄底市",
    433100: "湘西土家族苗族自治州",
    440100: "广州市",
    440200: "韶关市",
    440300: "深圳市",
    440400: "珠海市",
    440500: "汕头市",
    440600: "佛山市",
    440700: "江门市",
    440800: "湛江市",
    440900: "茂名市",
    441200: "肇庆市",
    441300: "惠州市",
    441400: "梅州市",
    441500: "汕尾市",
    441600: "河源市",
    441700: "阳江市",
    441800: "清远市",
    441900: "东莞市",
    442000: "中山市",
    445100: "潮州市",
    445200: "揭阳市",
    445300: "云浮市",
    450100: "南宁市",
    450200: "柳州市",
    450300: "桂林市",
    450400: "梧州市",
    450500: "北海市",
    450600: "防城港市",
    450700: "钦州市",
    450800: "贵港市",
    450900: "玉林市",
    451000: "百色市",
    451100: "贺州市",
    451200: "河池市",
    451300: "来宾市",
    451400: "崇左市",
    460100: "海口市",
    460200: "三亚市",
    460300: "三沙市",
    460400: "儋州市",
    469000: "省直辖县",
    500100: "重庆市",
    500200: "县",
    510100: "成都市",
    510300: "自贡市",
    510400: "攀枝花市",
    510500: "泸州市",
    510600: "德阳市",
    510700: "绵阳市",
    510800: "广元市",
    510900: "遂宁市",
    511000: "内江市",
    511100: "乐山市",
    511300: "南充市",
    511400: "眉山市",
    511500: "宜宾市",
    511600: "广安市",
    511700: "达州市",
    511800: "雅安市",
    511900: "巴中市",
    512000: "资阳市",
    513200: "阿坝藏族羌族自治州",
    513300: "甘孜藏族自治州",
    513400: "凉山彝族自治州",
    520100: "贵阳市",
    520200: "六盘水市",
    520300: "遵义市",
    520400: "安顺市",
    520500: "毕节市",
    520600: "铜仁市",
    522300: "黔西南布依族苗族自治州",
    522600: "黔东南苗族侗族自治州",
    522700: "黔南布依族苗族自治州",
    530100: "昆明市",
    530300: "曲靖市",
    530400: "玉溪市",
    530500: "保山市",
    530600: "昭通市",
    530700: "丽江市",
    530800: "普洱市",
    530900: "临沧市",
    532300: "楚雄彝族自治州",
    532500: "红河哈尼族彝族自治州",
    532600: "文山壮族苗族自治州",
    532800: "西双版纳傣族自治州",
    532900: "大理白族自治州",
    533100: "德宏傣族景颇族自治州",
    533300: "怒江傈僳族自治州",
    533400: "迪庆藏族自治州",
    540100: "拉萨市",
    540200: "日喀则市",
    540300: "昌都市",
    540400: "林芝市",
    540500: "山南市",
    540600: "那曲市",
    542500: "阿里地区",
    610100: "西安市",
    610200: "铜川市",
    610300: "宝鸡市",
    610400: "咸阳市",
    610500: "渭南市",
    610600: "延安市",
    610700: "汉中市",
    610800: "榆林市",
    610900: "安康市",
    611000: "商洛市",
    620100: "兰州市",
    620200: "嘉峪关市",
    620300: "金昌市",
    620400: "白银市",
    620500: "天水市",
    620600: "武威市",
    620700: "张掖市",
    620800: "平凉市",
    620900: "酒泉市",
    621000: "庆阳市",
    621100: "定西市",
    621200: "陇南市",
    622900: "临夏回族自治州",
    623000: "甘南藏族自治州",
    630100: "西宁市",
    630200: "海东市",
    632200: "海北藏族自治州",
    632300: "黄南藏族自治州",
    632500: "海南藏族自治州",
    632600: "果洛藏族自治州",
    632700: "玉树藏族自治州",
    632800: "海西蒙古族藏族自治州",
    640100: "银川市",
    640200: "石嘴山市",
    640300: "吴忠市",
    640400: "固原市",
    640500: "中卫市",
    650100: "乌鲁木齐市",
    650200: "克拉玛依市",
    650400: "吐鲁番市",
    650500: "哈密市",
    652300: "昌吉回族自治州",
    652700: "博尔塔拉蒙古自治州",
    652800: "巴音郭楞蒙古自治州",
    652900: "阿克苏地区",
    653000: "克孜勒苏柯尔克孜自治州",
    653100: "喀什地区",
    653200: "和田地区",
    654000: "伊犁哈萨克自治州",
    654200: "塔城地区",
    654300: "阿勒泰地区",
    659000: "自治区直辖县级行政区划",
    710100: "台北市",
    710200: "高雄市",
    710300: "台南市",
    710400: "台中市",
    710500: "金门县",
    710600: "南投县",
    710700: "基隆市",
    710800: "新竹市",
    710900: "嘉义市",
    711100: "新北市",
    711200: "宜兰县",
    711300: "新竹县",
    711400: "桃园县",
    711500: "苗栗县",
    711700: "彰化县",
    711900: "嘉义县",
    712100: "云林县",
    712400: "屏东县",
    712500: "台东县",
    712600: "花莲县",
    712700: "澎湖县",
    712800: "连江县",
    810100: "香港岛",
    810200: "九龙",
    810300: "新界",
    820100: "澳门半岛",
    820200: "离岛",
    900400: "阿富汗",
    900800: "阿尔巴尼亚",
    901000: "南极洲",
    901200: "阿尔及利亚",
    901600: "美属萨摩亚",
    902000: "安道尔",
    902400: "安哥拉",
    902800: "安提瓜和巴布达",
    903100: "阿塞拜疆",
    903200: "阿根廷",
    903600: "澳大利亚",
    904000: "奥地利",
    904400: "巴哈马",
    904800: "巴林",
    905000: "孟加拉",
    905100: "亚美尼亚",
    905200: "巴巴多斯",
    905600: "比利时",
    906000: "百慕大",
    906400: "不丹",
    906800: "玻利维亚",
    907000: "波黑",
    907200: "博茨瓦纳",
    907400: "布韦岛",
    907600: "巴西",
    908400: "伯利兹",
    908600: "英属印度洋领地",
    909000: "所罗门群岛",
    909200: "英属维尔京群岛",
    909600: "文莱",
    910000: "保加利亚",
    910400: "缅甸",
    910800: "布隆迪",
    911200: "白俄罗斯",
    911600: "柬埔寨",
    912000: "喀麦隆",
    912400: "加拿大",
    913200: "佛得角",
    913600: "开曼群岛",
    914000: "中非",
    914400: "斯里兰卡",
    914800: "乍得",
    915200: "智利",
    916200: "圣诞岛",
    916600: "科科斯群岛",
    917000: "哥伦比亚",
    917400: "科摩罗",
    917500: "马约特",
    917800: "刚果（布）",
    918000: "刚果（金）",
    918400: "库克群岛",
    918800: "哥斯达黎加",
    919100: "克罗地亚",
    919200: "古巴",
    919600: "塞浦路斯",
    920300: "捷克",
    920400: "贝宁",
    920800: "丹麦",
    921200: "多米尼克",
    921400: "多米尼加",
    921800: "厄瓜多尔",
    922200: "萨尔瓦多",
    922600: "赤道几内亚",
    923100: "埃塞俄比亚",
    923200: "厄立特里亚",
    923300: "爱沙尼亚",
    923400: "法罗群岛",
    923800: "马尔维纳斯群岛（ 福克兰）",
    923900: "南乔治亚岛和南桑威奇群岛",
    924200: "斐济群岛",
    924600: "芬兰",
    924800: "奥兰群岛",
    925000: "法国",
    925400: "法属圭亚那",
    925800: "法属波利尼西亚",
    926000: "法属南部领地",
    926200: "吉布提",
    926600: "加蓬",
    926800: "格鲁吉亚",
    927000: "冈比亚",
    927500: "巴勒斯坦",
    927600: "德国",
    928800: "加纳",
    929200: "直布罗陀",
    929600: "基里巴斯",
    930000: "希腊",
    930400: "格陵兰",
    930800: "格林纳达",
    931200: "瓜德罗普",
    931600: "关岛",
    932000: "危地马拉",
    932400: "几内亚",
    932800: "圭亚那",
    933200: "海地",
    933400: "赫德岛和麦克唐纳群岛",
    933600: "梵蒂冈",
    934000: "洪都拉斯",
    934800: "匈牙利",
    935200: "冰岛",
    935600: "印度",
    936000: "印尼",
    936400: "伊朗",
    936800: "伊拉克",
    937200: "爱尔兰",
    937600: "以色列",
    938000: "意大利",
    938400: "科特迪瓦",
    938800: "牙买加",
    939200: "日本",
    939800: "哈萨克斯坦",
    940000: "约旦",
    940400: "肯尼亚",
    940800: "朝鲜 北朝鲜",
    941000: "韩国",
    941400: "科威特",
    941700: "吉尔吉斯斯坦",
    941800: "老挝",
    942200: "黎巴嫩",
    942600: "莱索托",
    942800: "拉脱维亚",
    943000: "利比里亚",
    943400: "利比亚",
    943800: "列支敦士登",
    944000: "立陶宛",
    944200: "卢森堡",
    945000: "马达加斯加",
    945400: "马拉维",
    945800: "马来西亚",
    946200: "马尔代夫",
    946600: "马里",
    947000: "马耳他",
    947400: "马提尼克",
    947800: "毛里塔尼亚",
    948000: "毛里求斯",
    948400: "墨西哥",
    949200: "摩纳哥",
    949600: "蒙古国",
    949800: "摩尔多瓦",
    949900: "黑山",
    950000: "蒙塞拉特岛",
    950400: "摩洛哥",
    950800: "莫桑比克",
    951200: "阿曼",
    951600: "纳米比亚",
    952000: "瑙鲁",
    952400: "尼泊尔",
    952800: "荷兰",
    953300: "阿鲁巴",
    953500: "荷兰加勒比区",
    954000: "新喀里多尼亚",
    954800: "瓦努阿图",
    955400: "新西兰",
    955800: "尼加拉瓜",
    956200: "尼日尔",
    956600: "尼日利亚",
    957000: "纽埃",
    957400: "诺福克岛",
    957800: "挪威",
    958000: "北马里亚纳群岛",
    958100: "美国本土外小岛屿",
    958300: "密克罗尼西亚联邦",
    958400: "马绍尔群岛",
    958500: "帕劳",
    958600: "巴基斯坦",
    959100: "巴拿马",
    959800: "巴布亚新几内亚",
    960000: "巴拉圭",
    960400: "秘鲁",
    960800: "菲律宾",
    961200: "皮特凯恩群岛",
    961600: "波兰",
    962000: "葡萄牙",
    962400: "几内亚比绍",
    962600: "东帝汶",
    963000: "波多黎各",
    963400: "卡塔尔",
    963800: "留尼汪",
    964200: "罗马尼亚",
    964300: "俄罗斯",
    964600: "卢旺达",
    965200: "圣巴泰勒米岛",
    965400: "圣赫勒拿",
    965900: "圣基茨和尼维斯",
    966000: "安圭拉",
    966200: "圣卢西亚",
    966300: "法属圣马丁",
    966600: "圣皮埃尔和密克隆",
    967000: "圣文森特和格林纳丁斯",
    967400: "圣马力诺",
    967800: "圣多美和普林西比",
    968200: "沙特阿拉伯",
    968600: "塞内加尔",
    968800: "塞尔维亚",
    969000: "塞舌尔",
    969400: "塞拉利昂",
    970200: "新加坡",
    970300: "斯洛伐克",
    970400: "越南",
    970500: "斯洛文尼亚",
    970600: "索马里",
    971000: "南非",
    971600: "津巴布韦",
    972400: "西班牙",
    972800: "南苏丹",
    972900: "苏丹",
    973200: "西撒哈拉",
    974000: "苏里南",
    974400: "斯瓦尔巴群岛和 扬马延岛",
    974800: "斯威士兰",
    975200: "瑞典",
    975600: "瑞士",
    976000: "叙利亚",
    976200: "塔吉克斯坦",
    976400: "泰国",
    976800: "多哥",
    977200: "托克劳",
    977600: "汤加",
    978000: "特立尼达和多巴哥",
    978400: "阿联酋",
    978800: "突尼斯",
    979200: "土耳其",
    979500: "土库曼斯坦",
    979600: "特克斯和凯科斯群岛",
    979800: "图瓦卢",
    980000: "乌干达",
    980400: "乌克兰",
    980700: "马其顿",
    981800: "埃及",
    982600: "英国",
    983100: "根西岛",
    983200: "泽西岛",
    983300: "马恩岛",
    983400: "坦桑尼亚",
    984000: "美国",
    985000: "美属维尔京群岛",
    985400: "布基纳法索",
    985800: "乌拉圭",
    986000: "乌兹别克斯坦",
    986200: "委内瑞拉",
    987600: "瓦利斯和富图纳",
    988200: "萨摩亚",
    988700: "也门",
    989400: "赞比亚" },

  county_list: {
    110101: "东城区",
    110102: "西城区",
    110105: "朝阳区",
    110106: "丰台区",
    110107: "石景山区",
    110108: "海淀区",
    110109: "门头沟区",
    110111: "房山区",
    110112: "通州区",
    110113: "顺义区",
    110114: "昌平区",
    110115: "大兴区",
    110116: "怀柔区",
    110117: "平谷区",
    110118: "密云区",
    110119: "延庆区",
    120101: "和平区",
    120102: "河东区",
    120103: "河西区",
    120104: "南开区",
    120105: "河北区",
    120106: "红桥区",
    120110: "东丽区",
    120111: "西青区",
    120112: "津南区",
    120113: "北辰区",
    120114: "武清区",
    120115: "宝坻区",
    120116: "滨海新区",
    120117: "宁河区",
    120118: "静海区",
    120119: "蓟州区",
    130102: "长安区",
    130104: "桥西区",
    130105: "新华区",
    130107: "井陉矿区",
    130108: "裕华区",
    130109: "藁城区",
    130110: "鹿泉区",
    130111: "栾城区",
    130121: "井陉县",
    130123: "正定县",
    130125: "行唐县",
    130126: "灵寿县",
    130127: "高邑县",
    130128: "深泽县",
    130129: "赞皇县",
    130130: "无极县",
    130131: "平山县",
    130132: "元氏县",
    130133: "赵县",
    130181: "辛集市",
    130183: "晋州市",
    130184: "新乐市",
    130202: "路南区",
    130203: "路北区",
    130204: "古冶区",
    130205: "开平区",
    130207: "丰南区",
    130208: "丰润区",
    130209: "曹妃甸区",
    130224: "滦南县",
    130225: "乐亭县",
    130227: "迁西县",
    130229: "玉田县",
    130281: "遵化市",
    130283: "迁安市",
    130284: "滦州市",
    130302: "海港区",
    130303: "山海关区",
    130304: "北戴河区",
    130306: "抚宁区",
    130321: "青龙满族自治县",
    130322: "昌黎县",
    130324: "卢龙县",
    130390: "经济技术开发区",
    130402: "邯山区",
    130403: "丛台区",
    130404: "复兴区",
    130406: "峰峰矿区",
    130407: "肥乡区",
    130408: "永年区",
    130423: "临漳县",
    130424: "成安县",
    130425: "大名县",
    130426: "涉县",
    130427: "磁县",
    130430: "邱县",
    130431: "鸡泽县",
    130432: "广平县",
    130433: "馆陶县",
    130434: "魏县",
    130435: "曲周县",
    130481: "武安市",
    130502: "桥东区",
    130503: "桥西区",
    130521: "邢台县",
    130522: "临城县",
    130523: "内丘县",
    130524: "柏乡县",
    130525: "隆尧县",
    130526: "任县",
    130527: "南和县",
    130528: "宁晋县",
    130529: "巨鹿县",
    130530: "新河县",
    130531: "广宗县",
    130532: "平乡县",
    130533: "威县",
    130534: "清河县",
    130535: "临西县",
    130581: "南宫市",
    130582: "沙河市",
    130602: "竞秀区",
    130606: "莲池区",
    130607: "满城区",
    130608: "清苑区",
    130609: "徐水区",
    130623: "涞水县",
    130624: "阜平县",
    130626: "定兴县",
    130627: "唐县",
    130628: "高阳县",
    130629: "容城县",
    130630: "涞源县",
    130631: "望都县",
    130632: "安新县",
    130633: "易县",
    130634: "曲阳县",
    130635: "蠡县",
    130636: "顺平县",
    130637: "博野县",
    130638: "雄县",
    130681: "涿州市",
    130682: "定州市",
    130683: "安国市",
    130684: "高碑店市",
    130702: "桥东区",
    130703: "桥西区",
    130705: "宣化区",
    130706: "下花园区",
    130708: "万全区",
    130709: "崇礼区",
    130722: "张北县",
    130723: "康保县",
    130724: "沽源县",
    130725: "尚义县",
    130726: "蔚县",
    130727: "阳原县",
    130728: "怀安县",
    130730: "怀来县",
    130731: "涿鹿县",
    130732: "赤城县",
    130802: "双桥区",
    130803: "双滦区",
    130804: "鹰手营子矿区",
    130821: "承德县",
    130822: "兴隆县",
    130824: "滦平县",
    130825: "隆化县",
    130826: "丰宁满族自治县",
    130827: "宽城满族自治县",
    130828: "围场满族蒙古族自治县",
    130881: "平泉市",
    130902: "新华区",
    130903: "运河区",
    130921: "沧县",
    130922: "青县",
    130923: "东光县",
    130924: "海兴县",
    130925: "盐山县",
    130926: "肃宁县",
    130927: "南皮县",
    130928: "吴桥县",
    130929: "献县",
    130930: "孟村回族自治县",
    130981: "泊头市",
    130982: "任丘市",
    130983: "黄骅市",
    130984: "河间市",
    131002: "安次区",
    131003: "广阳区",
    131022: "固安县",
    131023: "永清县",
    131024: "香河县",
    131025: "大城县",
    131026: "文安县",
    131028: "大厂回族自治县",
    131081: "霸州市",
    131082: "三河市",
    131090: "开发区",
    131102: "桃城区",
    131103: "冀州区",
    131121: "枣强县",
    131122: "武邑县",
    131123: "武强县",
    131124: "饶阳县",
    131125: "安平县",
    131126: "故城县",
    131127: "景县",
    131128: "阜城县",
    131182: "深州市",
    140105: "小店区",
    140106: "迎泽区",
    140107: "杏花岭区",
    140108: "尖草坪区",
    140109: "万柏林区",
    140110: "晋源区",
    140121: "清徐县",
    140122: "阳曲县",
    140123: "娄烦县",
    140181: "古交市",
    140212: "新荣区",
    140213: "平城区",
    140214: "云冈区",
    140215: "云州区",
    140221: "阳高县",
    140222: "天镇县",
    140223: "广灵县",
    140224: "灵丘县",
    140225: "浑源县",
    140226: "左云县",
    140302: "城区",
    140303: "矿区",
    140311: "郊区",
    140321: "平定县",
    140322: "盂县",
    140403: "潞州区",
    140404: "上党区",
    140405: "屯留区",
    140406: "潞城区",
    140423: "襄垣县",
    140425: "平顺县",
    140426: "黎城县",
    140427: "壶关县",
    140428: "长子县",
    140429: "武乡县",
    140430: "沁县",
    140431: "沁源县",
    140502: "城区",
    140521: "沁水县",
    140522: "阳城县",
    140524: "陵川县",
    140525: "泽州县",
    140581: "高平市",
    140602: "朔城区",
    140603: "平鲁区",
    140621: "山阴县",
    140622: "应县",
    140623: "右玉县",
    140681: "怀仁市",
    140702: "榆次区",
    140721: "榆社县",
    140722: "左权县",
    140723: "和顺县",
    140724: "昔阳县",
    140725: "寿阳县",
    140726: "太谷县",
    140727: "祁县",
    140728: "平遥县",
    140729: "灵石县",
    140781: "介休市",
    140802: "盐湖区",
    140821: "临猗县",
    140822: "万荣县",
    140823: "闻喜县",
    140824: "稷山县",
    140825: "新绛县",
    140826: "绛县",
    140827: "垣曲县",
    140828: "夏县",
    140829: "平陆县",
    140830: "芮城县",
    140881: "永济市",
    140882: "河津市",
    140902: "忻府区",
    140921: "定襄县",
    140922: "五台县",
    140923: "代县",
    140924: "繁峙县",
    140925: "宁武县",
    140926: "静乐县",
    140927: "神池县",
    140928: "五寨县",
    140929: "岢岚县",
    140930: "河曲县",
    140931: "保德县",
    140932: "偏关县",
    140981: "原平市",
    141002: "尧都区",
    141021: "曲沃县",
    141022: "翼城县",
    141023: "襄汾县",
    141024: "洪洞县",
    141025: "古县",
    141026: "安泽县",
    141027: "浮山县",
    141028: "吉县",
    141029: "乡宁县",
    141030: "大宁县",
    141031: "隰县",
    141032: "永和县",
    141033: "蒲县",
    141034: "汾西县",
    141081: "侯马市",
    141082: "霍州市",
    141102: "离石区",
    141121: "文水县",
    141122: "交城县",
    141123: "兴县",
    141124: "临县",
    141125: "柳林县",
    141126: "石楼县",
    141127: "岚县",
    141128: "方山县",
    141129: "中阳县",
    141130: "交口县",
    141181: "孝义市",
    141182: "汾阳市",
    150102: "新城区",
    150103: "回民区",
    150104: "玉泉区",
    150105: "赛罕区",
    150121: "土默特左旗",
    150122: "托克托县",
    150123: "和林格尔县",
    150124: "清水河县",
    150125: "武川县",
    150202: "东河区",
    150203: "昆都仑区",
    150204: "青山区",
    150205: "石拐区",
    150206: "白云鄂博矿区",
    150207: "九原区",
    150221: "土默特右旗",
    150222: "固阳县",
    150223: "达尔罕茂明安联合旗",
    150302: "海勃湾区",
    150303: "海南区",
    150304: "乌达区",
    150402: "红山区",
    150403: "元宝山区",
    150404: "松山区",
    150421: "阿鲁科尔沁旗",
    150422: "巴林左旗",
    150423: "巴林右旗",
    150424: "林西县",
    150425: "克什克腾旗",
    150426: "翁牛特旗",
    150428: "喀喇沁旗",
    150429: "宁城县",
    150430: "敖汉旗",
    150502: "科尔沁区",
    150521: "科尔沁左翼中旗",
    150522: "科尔沁左翼后旗",
    150523: "开鲁县",
    150524: "库伦旗",
    150525: "奈曼旗",
    150526: "扎鲁特旗",
    150581: "霍林郭勒市",
    150602: "东胜区",
    150603: "康巴什区",
    150621: "达拉特旗",
    150622: "准格尔旗",
    150623: "鄂托克前旗",
    150624: "鄂托克旗",
    150625: "杭锦旗",
    150626: "乌审旗",
    150627: "伊金霍洛旗",
    150702: "海拉尔区",
    150703: "扎赉诺尔区",
    150721: "阿荣旗",
    150722: "莫力达瓦达斡尔族自治旗",
    150723: "鄂伦春自治旗",
    150724: "鄂温克族自治旗",
    150725: "陈巴尔虎旗",
    150726: "新巴尔虎左旗",
    150727: "新巴尔虎右旗",
    150781: "满洲里市",
    150782: "牙克石市",
    150783: "扎兰屯市",
    150784: "额尔古纳市",
    150785: "根河市",
    150802: "临河区",
    150821: "五原县",
    150822: "磴口县",
    150823: "乌拉特前旗",
    150824: "乌拉特中旗",
    150825: "乌拉特后旗",
    150826: "杭锦后旗",
    150902: "集宁区",
    150921: "卓资县",
    150922: "化德县",
    150923: "商都县",
    150924: "兴和县",
    150925: "凉城县",
    150926: "察哈尔右翼前旗",
    150927: "察哈尔右翼中旗",
    150928: "察哈尔右翼后旗",
    150929: "四子王旗",
    150981: "丰镇市",
    152201: "乌兰浩特市",
    152202: "阿尔山市",
    152221: "科尔沁右翼前旗",
    152222: "科尔沁右翼中旗",
    152223: "扎赉特旗",
    152224: "突泉县",
    152501: "二连浩特市",
    152502: "锡林浩特市",
    152522: "阿巴嘎旗",
    152523: "苏尼特左旗",
    152524: "苏尼特右旗",
    152525: "东乌珠穆沁旗",
    152526: "西乌珠穆沁旗",
    152527: "太仆寺旗",
    152528: "镶黄旗",
    152529: "正镶白旗",
    152530: "正蓝旗",
    152531: "多伦县",
    152921: "阿拉善左旗",
    152922: "阿拉善右旗",
    152923: "额济纳旗",
    210102: "和平区",
    210103: "沈河区",
    210104: "大东区",
    210105: "皇姑区",
    210106: "铁西区",
    210111: "苏家屯区",
    210112: "浑南区",
    210113: "沈北新区",
    210114: "于洪区",
    210115: "辽中区",
    210123: "康平县",
    210124: "法库县",
    210181: "新民市",
    210190: "经济技术开发区",
    210202: "中山区",
    210203: "西岗区",
    210204: "沙河口区",
    210211: "甘井子区",
    210212: "旅顺口区",
    210213: "金州区",
    210214: "普兰店区",
    210224: "长海县",
    210281: "瓦房店市",
    210283: "庄河市",
    210302: "铁东区",
    210303: "铁西区",
    210304: "立山区",
    210311: "千山区",
    210321: "台安县",
    210323: "岫岩满族自治县",
    210381: "海城市",
    210390: "高新区",
    210402: "新抚区",
    210403: "东洲区",
    210404: "望花区",
    210411: "顺城区",
    210421: "抚顺县",
    210422: "新宾满族自治县",
    210423: "清原满族自治县",
    210502: "平山区",
    210503: "溪湖区",
    210504: "明山区",
    210505: "南芬区",
    210521: "本溪满族自治县",
    210522: "桓仁满族自治县",
    210602: "元宝区",
    210603: "振兴区",
    210604: "振安区",
    210624: "宽甸满族自治县",
    210681: "东港市",
    210682: "凤城市",
    210702: "古塔区",
    210703: "凌河区",
    210711: "太和区",
    210726: "黑山县",
    210727: "义县",
    210781: "凌海市",
    210782: "北镇市",
    210793: "经济技术开发区",
    210802: "站前区",
    210803: "西市区",
    210804: "鲅鱼圈区",
    210811: "老边区",
    210881: "盖州市",
    210882: "大石桥市",
    210902: "海州区",
    210903: "新邱区",
    210904: "太平区",
    210905: "清河门区",
    210911: "细河区",
    210921: "阜新蒙古族自治县",
    210922: "彰武县",
    211002: "白塔区",
    211003: "文圣区",
    211004: "宏伟区",
    211005: "弓长岭区",
    211011: "太子河区",
    211021: "辽阳县",
    211081: "灯塔市",
    211102: "双台子区",
    211103: "兴隆台区",
    211104: "大洼区",
    211122: "盘山县",
    211202: "银州区",
    211204: "清河区",
    211221: "铁岭县",
    211223: "西丰县",
    211224: "昌图县",
    211281: "调兵山市",
    211282: "开原市",
    211302: "双塔区",
    211303: "龙城区",
    211321: "朝阳县",
    211322: "建平县",
    211324: "喀喇沁左翼蒙古族自治县",
    211381: "北票市",
    211382: "凌源市",
    211402: "连山区",
    211403: "龙港区",
    211404: "南票区",
    211421: "绥中县",
    211422: "建昌县",
    211481: "兴城市",
    220102: "南关区",
    220103: "宽城区",
    220104: "朝阳区",
    220105: "二道区",
    220106: "绿园区",
    220112: "双阳区",
    220113: "九台区",
    220122: "农安县",
    220182: "榆树市",
    220183: "德惠市",
    220192: "经济技术开发区",
    220202: "昌邑区",
    220203: "龙潭区",
    220204: "船营区",
    220211: "丰满区",
    220221: "永吉县",
    220281: "蛟河市",
    220282: "桦甸市",
    220283: "舒兰市",
    220284: "磐石市",
    220302: "铁西区",
    220303: "铁东区",
    220322: "梨树县",
    220323: "伊通满族自治县",
    220381: "公主岭市",
    220382: "双辽市",
    220402: "龙山区",
    220403: "西安区",
    220421: "东丰县",
    220422: "东辽县",
    220502: "东昌区",
    220503: "二道江区",
    220521: "通化县",
    220523: "辉南县",
    220524: "柳河县",
    220581: "梅河口市",
    220582: "集安市",
    220602: "浑江区",
    220605: "江源区",
    220621: "抚松县",
    220622: "靖宇县",
    220623: "长白朝鲜族自治县",
    220681: "临江市",
    220702: "宁江区",
    220721: "前郭尔罗斯蒙古族自治县",
    220722: "长岭县",
    220723: "乾安县",
    220781: "扶余市",
    220802: "洮北区",
    220821: "镇赉县",
    220822: "通榆县",
    220881: "洮南市",
    220882: "大安市",
    222401: "延吉市",
    222402: "图们市",
    222403: "敦化市",
    222404: "珲春市",
    222405: "龙井市",
    222406: "和龙市",
    222424: "汪清县",
    222426: "安图县",
    230102: "道里区",
    230103: "南岗区",
    230104: "道外区",
    230108: "平房区",
    230109: "松北区",
    230110: "香坊区",
    230111: "呼兰区",
    230112: "阿城区",
    230113: "双城区",
    230123: "依兰县",
    230124: "方正县",
    230125: "宾县",
    230126: "巴彦县",
    230127: "木兰县",
    230128: "通河县",
    230129: "延寿县",
    230183: "尚志市",
    230184: "五常市",
    230202: "龙沙区",
    230203: "建华区",
    230204: "铁锋区",
    230205: "昂昂溪区",
    230206: "富拉尔基区",
    230207: "碾子山区",
    230208: "梅里斯达斡尔族区",
    230221: "龙江县",
    230223: "依安县",
    230224: "泰来县",
    230225: "甘南县",
    230227: "富裕县",
    230229: "克山县",
    230230: "克东县",
    230231: "拜泉县",
    230281: "讷河市",
    230302: "鸡冠区",
    230303: "恒山区",
    230304: "滴道区",
    230305: "梨树区",
    230306: "城子河区",
    230307: "麻山区",
    230321: "鸡东县",
    230381: "虎林市",
    230382: "密山市",
    230402: "向阳区",
    230403: "工农区",
    230404: "南山区",
    230405: "兴安区",
    230406: "东山区",
    230407: "兴山区",
    230421: "萝北县",
    230422: "绥滨县",
    230502: "尖山区",
    230503: "岭东区",
    230505: "四方台区",
    230506: "宝山区",
    230521: "集贤县",
    230522: "友谊县",
    230523: "宝清县",
    230524: "饶河县",
    230602: "萨尔图区",
    230603: "龙凤区",
    230604: "让胡路区",
    230605: "红岗区",
    230606: "大同区",
    230621: "肇州县",
    230622: "肇源县",
    230623: "林甸县",
    230624: "杜尔伯特蒙古族自治县",
    230702: "伊春区",
    230703: "南岔区",
    230704: "友好区",
    230705: "西林区",
    230706: "翠峦区",
    230707: "新青区",
    230708: "美溪区",
    230709: "金山屯区",
    230710: "五营区",
    230711: "乌马河区",
    230712: "汤旺河区",
    230713: "带岭区",
    230714: "乌伊岭区",
    230715: "红星区",
    230716: "上甘岭区",
    230722: "嘉荫县",
    230781: "铁力市",
    230803: "向阳区",
    230804: "前进区",
    230805: "东风区",
    230811: "郊区",
    230822: "桦南县",
    230826: "桦川县",
    230828: "汤原县",
    230881: "同江市",
    230882: "富锦市",
    230883: "抚远市",
    230902: "新兴区",
    230903: "桃山区",
    230904: "茄子河区",
    230921: "勃利县",
    231002: "东安区",
    231003: "阳明区",
    231004: "爱民区",
    231005: "西安区",
    231025: "林口县",
    231081: "绥芬河市",
    231083: "海林市",
    231084: "宁安市",
    231085: "穆棱市",
    231086: "东宁市",
    231102: "爱辉区",
    231121: "嫩江县",
    231123: "逊克县",
    231124: "孙吴县",
    231181: "北安市",
    231182: "五大连池市",
    231202: "北林区",
    231221: "望奎县",
    231222: "兰西县",
    231223: "青冈县",
    231224: "庆安县",
    231225: "明水县",
    231226: "绥棱县",
    231281: "安达市",
    231282: "肇东市",
    231283: "海伦市",
    232701: "漠河市",
    232721: "呼玛县",
    232722: "塔河县",
    232790: "松岭区",
    232791: "呼中区",
    232792: "加格达奇区",
    232793: "新林区",
    310101: "黄浦区",
    310104: "徐汇区",
    310105: "长宁区",
    310106: "静安区",
    310107: "普陀区",
    310109: "虹口区",
    310110: "杨浦区",
    310112: "闵行区",
    310113: "宝山区",
    310114: "嘉定区",
    310115: "浦东新区",
    310116: "金山区",
    310117: "松江区",
    310118: "青浦区",
    310120: "奉贤区",
    310151: "崇明区",
    320102: "玄武区",
    320104: "秦淮区",
    320105: "建邺区",
    320106: "鼓楼区",
    320111: "浦口区",
    320113: "栖霞区",
    320114: "雨花台区",
    320115: "江宁区",
    320116: "六合区",
    320117: "溧水区",
    320118: "高淳区",
    320205: "锡山区",
    320206: "惠山区",
    320211: "滨湖区",
    320213: "梁溪区",
    320214: "新吴区",
    320281: "江阴市",
    320282: "宜兴市",
    320302: "鼓楼区",
    320303: "云龙区",
    320305: "贾汪区",
    320311: "泉山区",
    320312: "铜山区",
    320321: "丰县",
    320322: "沛县",
    320324: "睢宁县",
    320381: "新沂市",
    320382: "邳州市",
    320391: "工业园区",
    320402: "天宁区",
    320404: "钟楼区",
    320411: "新北区",
    320412: "武进区",
    320413: "金坛区",
    320481: "溧阳市",
    320505: "虎丘区",
    320506: "吴中区",
    320507: "相城区",
    320508: "姑苏区",
    320509: "吴江区",
    320581: "常熟市",
    320582: "张家港市",
    320583: "昆山市",
    320585: "太仓市",
    320590: "工业园区",
    320591: "高新区",
    320602: "崇川区",
    320611: "港闸区",
    320612: "通州区",
    320623: "如东县",
    320681: "启东市",
    320682: "如皋市",
    320684: "海门市",
    320685: "海安市",
    320691: "高新区",
    320703: "连云区",
    320706: "海州区",
    320707: "赣榆区",
    320722: "东海县",
    320723: "灌云县",
    320724: "灌南县",
    320803: "淮安区",
    320804: "淮阴区",
    320812: "清江浦区",
    320813: "洪泽区",
    320826: "涟水县",
    320830: "盱眙县",
    320831: "金湖县",
    320890: "经济开发区",
    320902: "亭湖区",
    320903: "盐都区",
    320904: "大丰区",
    320921: "响水县",
    320922: "滨海县",
    320923: "阜宁县",
    320924: "射阳县",
    320925: "建湖县",
    320981: "东台市",
    321002: "广陵区",
    321003: "邗江区",
    321012: "江都区",
    321023: "宝应县",
    321081: "仪征市",
    321084: "高邮市",
    321090: "经济开发区",
    321102: "京口区",
    321111: "润州区",
    321112: "丹徒区",
    321181: "丹阳市",
    321182: "扬中市",
    321183: "句容市",
    321202: "海陵区",
    321203: "高港区",
    321204: "姜堰区",
    321281: "兴化市",
    321282: "靖江市",
    321283: "泰兴市",
    321302: "宿城区",
    321311: "宿豫区",
    321322: "沭阳县",
    321323: "泗阳县",
    321324: "泗洪县",
    330102: "上城区",
    330103: "下城区",
    330104: "江干区",
    330105: "拱墅区",
    330106: "西湖区",
    330108: "滨江区",
    330109: "萧山区",
    330110: "余杭区",
    330111: "富阳区",
    330112: "临安区",
    330122: "桐庐县",
    330127: "淳安县",
    330182: "建德市",
    330203: "海曙区",
    330205: "江北区",
    330206: "北仑区",
    330211: "镇海区",
    330212: "鄞州区",
    330213: "奉化区",
    330225: "象山县",
    330226: "宁海县",
    330281: "余姚市",
    330282: "慈溪市",
    330302: "鹿城区",
    330303: "龙湾区",
    330304: "瓯海区",
    330305: "洞头区",
    330324: "永嘉县",
    330326: "平阳县",
    330327: "苍南县",
    330328: "文成县",
    330329: "泰顺县",
    330381: "瑞安市",
    330382: "乐清市",
    330402: "南湖区",
    330411: "秀洲区",
    330421: "嘉善县",
    330424: "海盐县",
    330481: "海宁市",
    330482: "平湖市",
    330483: "桐乡市",
    330502: "吴兴区",
    330503: "南浔区",
    330521: "德清县",
    330522: "长兴县",
    330523: "安吉县",
    330602: "越城区",
    330603: "柯桥区",
    330604: "上虞区",
    330624: "新昌县",
    330681: "诸暨市",
    330683: "嵊州市",
    330702: "婺城区",
    330703: "金东区",
    330723: "武义县",
    330726: "浦江县",
    330727: "磐安县",
    330781: "兰溪市",
    330782: "义乌市",
    330783: "东阳市",
    330784: "永康市",
    330802: "柯城区",
    330803: "衢江区",
    330822: "常山县",
    330824: "开化县",
    330825: "龙游县",
    330881: "江山市",
    330902: "定海区",
    330903: "普陀区",
    330921: "岱山县",
    330922: "嵊泗县",
    331002: "椒江区",
    331003: "黄岩区",
    331004: "路桥区",
    331022: "三门县",
    331023: "天台县",
    331024: "仙居县",
    331081: "温岭市",
    331082: "临海市",
    331083: "玉环市",
    331102: "莲都区",
    331121: "青田县",
    331122: "缙云县",
    331123: "遂昌县",
    331124: "松阳县",
    331125: "云和县",
    331126: "庆元县",
    331127: "景宁畲族自治县",
    331181: "龙泉市",
    340102: "瑶海区",
    340103: "庐阳区",
    340104: "蜀山区",
    340111: "包河区",
    340121: "长丰县",
    340122: "肥东县",
    340123: "肥西县",
    340124: "庐江县",
    340181: "巢湖市",
    340190: "高新技术开发区",
    340191: "经济技术开发区",
    340202: "镜湖区",
    340203: "弋江区",
    340207: "鸠江区",
    340208: "三山区",
    340221: "芜湖县",
    340222: "繁昌县",
    340223: "南陵县",
    340225: "无为县",
    340302: "龙子湖区",
    340303: "蚌山区",
    340304: "禹会区",
    340311: "淮上区",
    340321: "怀远县",
    340322: "五河县",
    340323: "固镇县",
    340402: "大通区",
    340403: "田家庵区",
    340404: "谢家集区",
    340405: "八公山区",
    340406: "潘集区",
    340421: "凤台县",
    340422: "寿县",
    340503: "花山区",
    340504: "雨山区",
    340506: "博望区",
    340521: "当涂县",
    340522: "含山县",
    340523: "和县",
    340602: "杜集区",
    340603: "相山区",
    340604: "烈山区",
    340621: "濉溪县",
    340705: "铜官区",
    340706: "义安区",
    340711: "郊区",
    340722: "枞阳县",
    340802: "迎江区",
    340803: "大观区",
    340811: "宜秀区",
    340822: "怀宁县",
    340824: "潜山县",
    340825: "太湖县",
    340826: "宿松县",
    340827: "望江县",
    340828: "岳西县",
    340881: "桐城市",
    341002: "屯溪区",
    341003: "黄山区",
    341004: "徽州区",
    341021: "歙县",
    341022: "休宁县",
    341023: "黟县",
    341024: "祁门县",
    341102: "琅琊区",
    341103: "南谯区",
    341122: "来安县",
    341124: "全椒县",
    341125: "定远县",
    341126: "凤阳县",
    341181: "天长市",
    341182: "明光市",
    341202: "颍州区",
    341203: "颍东区",
    341204: "颍泉区",
    341221: "临泉县",
    341222: "太和县",
    341225: "阜南县",
    341226: "颍上县",
    341282: "界首市",
    341302: "埇桥区",
    341321: "砀山县",
    341322: "萧县",
    341323: "灵璧县",
    341324: "泗县",
    341390: "经济开发区",
    341502: "金安区",
    341503: "裕安区",
    341504: "叶集区",
    341522: "霍邱县",
    341523: "舒城县",
    341524: "金寨县",
    341525: "霍山县",
    341602: "谯城区",
    341621: "涡阳县",
    341622: "蒙城县",
    341623: "利辛县",
    341702: "贵池区",
    341721: "东至县",
    341722: "石台县",
    341723: "青阳县",
    341802: "宣州区",
    341821: "郎溪县",
    341822: "广德县",
    341823: "泾县",
    341824: "绩溪县",
    341825: "旌德县",
    341881: "宁国市",
    350102: "鼓楼区",
    350103: "台江区",
    350104: "仓山区",
    350105: "马尾区",
    350111: "晋安区",
    350112: "长乐区",
    350121: "闽侯县",
    350122: "连江县",
    350123: "罗源县",
    350124: "闽清县",
    350125: "永泰县",
    350128: "平潭县",
    350181: "福清市",
    350203: "思明区",
    350205: "海沧区",
    350206: "湖里区",
    350211: "集美区",
    350212: "同安区",
    350213: "翔安区",
    350302: "城厢区",
    350303: "涵江区",
    350304: "荔城区",
    350305: "秀屿区",
    350322: "仙游县",
    350402: "梅列区",
    350403: "三元区",
    350421: "明溪县",
    350423: "清流县",
    350424: "宁化县",
    350425: "大田县",
    350426: "尤溪县",
    350427: "沙县",
    350428: "将乐县",
    350429: "泰宁县",
    350430: "建宁县",
    350481: "永安市",
    350502: "鲤城区",
    350503: "丰泽区",
    350504: "洛江区",
    350505: "泉港区",
    350521: "惠安县",
    350524: "安溪县",
    350525: "永春县",
    350526: "德化县",
    350527: "金门县",
    350581: "石狮市",
    350582: "晋江市",
    350583: "南安市",
    350602: "芗城区",
    350603: "龙文区",
    350622: "云霄县",
    350623: "漳浦县",
    350624: "诏安县",
    350625: "长泰县",
    350626: "东山县",
    350627: "南靖县",
    350628: "平和县",
    350629: "华安县",
    350681: "龙海市",
    350702: "延平区",
    350703: "建阳区",
    350721: "顺昌县",
    350722: "浦城县",
    350723: "光泽县",
    350724: "松溪县",
    350725: "政和县",
    350781: "邵武市",
    350782: "武夷山市",
    350783: "建瓯市",
    350802: "新罗区",
    350803: "永定区",
    350821: "长汀县",
    350823: "上杭县",
    350824: "武平县",
    350825: "连城县",
    350881: "漳平市",
    350902: "蕉城区",
    350921: "霞浦县",
    350922: "古田县",
    350923: "屏南县",
    350924: "寿宁县",
    350925: "周宁县",
    350926: "柘荣县",
    350981: "福安市",
    350982: "福鼎市",
    360102: "东湖区",
    360103: "西湖区",
    360104: "青云谱区",
    360105: "湾里区",
    360111: "青山湖区",
    360112: "新建区",
    360121: "南昌县",
    360123: "安义县",
    360124: "进贤县",
    360190: "经济技术开发区",
    360192: "高新区",
    360202: "昌江区",
    360203: "珠山区",
    360222: "浮梁县",
    360281: "乐平市",
    360302: "安源区",
    360313: "湘东区",
    360321: "莲花县",
    360322: "上栗县",
    360323: "芦溪县",
    360402: "濂溪区",
    360403: "浔阳区",
    360404: "柴桑区",
    360423: "武宁县",
    360424: "修水县",
    360425: "永修县",
    360426: "德安县",
    360428: "都昌县",
    360429: "湖口县",
    360430: "彭泽县",
    360481: "瑞昌市",
    360482: "共青城市",
    360483: "庐山市",
    360490: "经济技术开发区",
    360502: "渝水区",
    360521: "分宜县",
    360602: "月湖区",
    360603: "余江区",
    360681: "贵溪市",
    360702: "章贡区",
    360703: "南康区",
    360704: "赣县区",
    360722: "信丰县",
    360723: "大余县",
    360724: "上犹县",
    360725: "崇义县",
    360726: "安远县",
    360727: "龙南县",
    360728: "定南县",
    360729: "全南县",
    360730: "宁都县",
    360731: "于都县",
    360732: "兴国县",
    360733: "会昌县",
    360734: "寻乌县",
    360735: "石城县",
    360781: "瑞金市",
    360802: "吉州区",
    360803: "青原区",
    360821: "吉安县",
    360822: "吉水县",
    360823: "峡江县",
    360824: "新干县",
    360825: "永丰县",
    360826: "泰和县",
    360827: "遂川县",
    360828: "万安县",
    360829: "安福县",
    360830: "永新县",
    360881: "井冈山市",
    360902: "袁州区",
    360921: "奉新县",
    360922: "万载县",
    360923: "上高县",
    360924: "宜丰县",
    360925: "靖安县",
    360926: "铜鼓县",
    360981: "丰城市",
    360982: "樟树市",
    360983: "高安市",
    361002: "临川区",
    361003: "东乡区",
    361021: "南城县",
    361022: "黎川县",
    361023: "南丰县",
    361024: "崇仁县",
    361025: "乐安县",
    361026: "宜黄县",
    361027: "金溪县",
    361028: "资溪县",
    361030: "广昌县",
    361102: "信州区",
    361103: "广丰区",
    361121: "上饶县",
    361123: "玉山县",
    361124: "铅山县",
    361125: "横峰县",
    361126: "弋阳县",
    361127: "余干县",
    361128: "鄱阳县",
    361129: "万年县",
    361130: "婺源县",
    361181: "德兴市",
    370102: "历下区",
    370103: "市中区",
    370104: "槐荫区",
    370105: "天桥区",
    370112: "历城区",
    370113: "长清区",
    370114: "章丘区",
    370115: "济阳区",
    370116: "莱芜区",
    370117: "钢城区",
    370124: "平阴县",
    370126: "商河县",
    370190: "高新区",
    370202: "市南区",
    370203: "市北区",
    370211: "黄岛区",
    370212: "崂山区",
    370213: "李沧区",
    370214: "城阳区",
    370215: "即墨区",
    370281: "胶州市",
    370283: "平度市",
    370285: "莱西市",
    370290: "开发区",
    370302: "淄川区",
    370303: "张店区",
    370304: "博山区",
    370305: "临淄区",
    370306: "周村区",
    370321: "桓台县",
    370322: "高青县",
    370323: "沂源县",
    370402: "市中区",
    370403: "薛城区",
    370404: "峄城区",
    370405: "台儿庄区",
    370406: "山亭区",
    370481: "滕州市",
    370502: "东营区",
    370503: "河口区",
    370505: "垦利区",
    370522: "利津县",
    370523: "广饶县",
    370602: "芝罘区",
    370611: "福山区",
    370612: "牟平区",
    370613: "莱山区",
    370634: "长岛县",
    370681: "龙口市",
    370682: "莱阳市",
    370683: "莱州市",
    370684: "蓬莱市",
    370685: "招远市",
    370686: "栖霞市",
    370687: "海阳市",
    370690: "开发区",
    370702: "潍城区",
    370703: "寒亭区",
    370704: "坊子区",
    370705: "奎文区",
    370724: "临朐县",
    370725: "昌乐县",
    370781: "青州市",
    370782: "诸城市",
    370783: "寿光市",
    370784: "安丘市",
    370785: "高密市",
    370786: "昌邑市",
    370790: "开发区",
    370791: "高新区",
    370811: "任城区",
    370812: "兖州区",
    370826: "微山县",
    370827: "鱼台县",
    370828: "金乡县",
    370829: "嘉祥县",
    370830: "汶上县",
    370831: "泗水县",
    370832: "梁山县",
    370881: "曲阜市",
    370883: "邹城市",
    370890: "高新区",
    370902: "泰山区",
    370911: "岱岳区",
    370921: "宁阳县",
    370923: "东平县",
    370982: "新泰市",
    370983: "肥城市",
    371002: "环翠区",
    371003: "文登区",
    371082: "荣成市",
    371083: "乳山市",
    371091: "经济技术开发区",
    371102: "东港区",
    371103: "岚山区",
    371121: "五莲县",
    371122: "莒县",
    371302: "兰山区",
    371311: "罗庄区",
    371312: "河东区",
    371321: "沂南县",
    371322: "郯城县",
    371323: "沂水县",
    371324: "兰陵县",
    371325: "费县",
    371326: "平邑县",
    371327: "莒南县",
    371328: "蒙阴县",
    371329: "临沭县",
    371402: "德城区",
    371403: "陵城区",
    371422: "宁津县",
    371423: "庆云县",
    371424: "临邑县",
    371425: "齐河县",
    371426: "平原县",
    371427: "夏津县",
    371428: "武城县",
    371481: "乐陵市",
    371482: "禹城市",
    371502: "东昌府区",
    371521: "阳谷县",
    371522: "莘县",
    371523: "茌平县",
    371524: "东阿县",
    371525: "冠县",
    371526: "高唐县",
    371581: "临清市",
    371602: "滨城区",
    371603: "沾化区",
    371621: "惠民县",
    371622: "阳信县",
    371623: "无棣县",
    371625: "博兴县",
    371681: "邹平市",
    371702: "牡丹区",
    371703: "定陶区",
    371721: "曹县",
    371722: "单县",
    371723: "成武县",
    371724: "巨野县",
    371725: "郓城县",
    371726: "鄄城县",
    371728: "东明县",
    410102: "中原区",
    410103: "二七区",
    410104: "管城回族区",
    410105: "金水区",
    410106: "上街区",
    410108: "惠济区",
    410122: "中牟县",
    410181: "巩义市",
    410182: "荥阳市",
    410183: "新密市",
    410184: "新郑市",
    410185: "登封市",
    410190: "高新技术开发区",
    410191: "经济技术开发区",
    410202: "龙亭区",
    410203: "顺河回族区",
    410204: "鼓楼区",
    410205: "禹王台区",
    410212: "祥符区",
    410221: "杞县",
    410222: "通许县",
    410223: "尉氏县",
    410225: "兰考县",
    410302: "老城区",
    410303: "西工区",
    410304: "瀍河回族区",
    410305: "涧西区",
    410306: "吉利区",
    410311: "洛龙区",
    410322: "孟津县",
    410323: "新安县",
    410324: "栾川县",
    410325: "嵩县",
    410326: "汝阳县",
    410327: "宜阳县",
    410328: "洛宁县",
    410329: "伊川县",
    410381: "偃师市",
    410402: "新华区",
    410403: "卫东区",
    410404: "石龙区",
    410411: "湛河区",
    410421: "宝丰县",
    410422: "叶县",
    410423: "鲁山县",
    410425: "郏县",
    410481: "舞钢市",
    410482: "汝州市",
    410502: "文峰区",
    410503: "北关区",
    410505: "殷都区",
    410506: "龙安区",
    410522: "安阳县",
    410523: "汤阴县",
    410526: "滑县",
    410527: "内黄县",
    410581: "林州市",
    410590: "开发区",
    410602: "鹤山区",
    410603: "山城区",
    410611: "淇滨区",
    410621: "浚县",
    410622: "淇县",
    410702: "红旗区",
    410703: "卫滨区",
    410704: "凤泉区",
    410711: "牧野区",
    410721: "新乡县",
    410724: "获嘉县",
    410725: "原阳县",
    410726: "延津县",
    410727: "封丘县",
    410728: "长垣县",
    410781: "卫辉市",
    410782: "辉县市",
    410802: "解放区",
    410803: "中站区",
    410804: "马村区",
    410811: "山阳区",
    410821: "修武县",
    410822: "博爱县",
    410823: "武陟县",
    410825: "温县",
    410882: "沁阳市",
    410883: "孟州市",
    410902: "华龙区",
    410922: "清丰县",
    410923: "南乐县",
    410926: "范县",
    410927: "台前县",
    410928: "濮阳县",
    411002: "魏都区",
    411003: "建安区",
    411024: "鄢陵县",
    411025: "襄城县",
    411081: "禹州市",
    411082: "长葛市",
    411102: "源汇区",
    411103: "郾城区",
    411104: "召陵区",
    411121: "舞阳县",
    411122: "临颍县",
    411202: "湖滨区",
    411203: "陕州区",
    411221: "渑池县",
    411224: "卢氏县",
    411281: "义马市",
    411282: "灵宝市",
    411302: "宛城区",
    411303: "卧龙区",
    411321: "南召县",
    411322: "方城县",
    411323: "西峡县",
    411324: "镇平县",
    411325: "内乡县",
    411326: "淅川县",
    411327: "社旗县",
    411328: "唐河县",
    411329: "新野县",
    411330: "桐柏县",
    411381: "邓州市",
    411402: "梁园区",
    411403: "睢阳区",
    411421: "民权县",
    411422: "睢县",
    411423: "宁陵县",
    411424: "柘城县",
    411425: "虞城县",
    411426: "夏邑县",
    411481: "永城市",
    411502: "浉河区",
    411503: "平桥区",
    411521: "罗山县",
    411522: "光山县",
    411523: "新县",
    411524: "商城县",
    411525: "固始县",
    411526: "潢川县",
    411527: "淮滨县",
    411528: "息县",
    411602: "川汇区",
    411621: "扶沟县",
    411622: "西华县",
    411623: "商水县",
    411624: "沈丘县",
    411625: "郸城县",
    411626: "淮阳县",
    411627: "太康县",
    411628: "鹿邑县",
    411681: "项城市",
    411690: "经济开发区",
    411702: "驿城区",
    411721: "西平县",
    411722: "上蔡县",
    411723: "平舆县",
    411724: "正阳县",
    411725: "确山县",
    411726: "泌阳县",
    411727: "汝南县",
    411728: "遂平县",
    411729: "新蔡县",
    419001: "济源市",
    420102: "江岸区",
    420103: "江汉区",
    420104: "硚口区",
    420105: "汉阳区",
    420106: "武昌区",
    420107: "青山区",
    420111: "洪山区",
    420112: "东西湖区",
    420113: "汉南区",
    420114: "蔡甸区",
    420115: "江夏区",
    420116: "黄陂区",
    420117: "新洲区",
    420202: "黄石港区",
    420203: "西塞山区",
    420204: "下陆区",
    420205: "铁山区",
    420222: "阳新县",
    420281: "大冶市",
    420302: "茅箭区",
    420303: "张湾区",
    420304: "郧阳区",
    420322: "郧西县",
    420323: "竹山县",
    420324: "竹溪县",
    420325: "房县",
    420381: "丹江口市",
    420502: "西陵区",
    420503: "伍家岗区",
    420504: "点军区",
    420505: "猇亭区",
    420506: "夷陵区",
    420525: "远安县",
    420526: "兴山县",
    420527: "秭归县",
    420528: "长阳土家族自治县",
    420529: "五峰土家族自治县",
    420581: "宜都市",
    420582: "当阳市",
    420583: "枝江市",
    420590: "经济开发区",
    420602: "襄城区",
    420606: "樊城区",
    420607: "襄州区",
    420624: "南漳县",
    420625: "谷城县",
    420626: "保康县",
    420682: "老河口市",
    420683: "枣阳市",
    420684: "宜城市",
    420702: "梁子湖区",
    420703: "华容区",
    420704: "鄂城区",
    420802: "东宝区",
    420804: "掇刀区",
    420822: "沙洋县",
    420881: "钟祥市",
    420882: "京山市",
    420902: "孝南区",
    420921: "孝昌县",
    420922: "大悟县",
    420923: "云梦县",
    420981: "应城市",
    420982: "安陆市",
    420984: "汉川市",
    421002: "沙市区",
    421003: "荆州区",
    421022: "公安县",
    421023: "监利县",
    421024: "江陵县",
    421081: "石首市",
    421083: "洪湖市",
    421087: "松滋市",
    421102: "黄州区",
    421121: "团风县",
    421122: "红安县",
    421123: "罗田县",
    421124: "英山县",
    421125: "浠水县",
    421126: "蕲春县",
    421127: "黄梅县",
    421181: "麻城市",
    421182: "武穴市",
    421202: "咸安区",
    421221: "嘉鱼县",
    421222: "通城县",
    421223: "崇阳县",
    421224: "通山县",
    421281: "赤壁市",
    421303: "曾都区",
    421321: "随县",
    421381: "广水市",
    422801: "恩施市",
    422802: "利川市",
    422822: "建始县",
    422823: "巴东县",
    422825: "宣恩县",
    422826: "咸丰县",
    422827: "来凤县",
    422828: "鹤峰县",
    429004: "仙桃市",
    429005: "潜江市",
    429006: "天门市",
    429021: "神农架林区",
    430102: "芙蓉区",
    430103: "天心区",
    430104: "岳麓区",
    430105: "开福区",
    430111: "雨花区",
    430112: "望城区",
    430121: "长沙县",
    430181: "浏阳市",
    430182: "宁乡市",
    430202: "荷塘区",
    430203: "芦淞区",
    430204: "石峰区",
    430211: "天元区",
    430212: "渌口区",
    430223: "攸县",
    430224: "茶陵县",
    430225: "炎陵县",
    430281: "醴陵市",
    430302: "雨湖区",
    430304: "岳塘区",
    430321: "湘潭县",
    430381: "湘乡市",
    430382: "韶山市",
    430405: "珠晖区",
    430406: "雁峰区",
    430407: "石鼓区",
    430408: "蒸湘区",
    430412: "南岳区",
    430421: "衡阳县",
    430422: "衡南县",
    430423: "衡山县",
    430424: "衡东县",
    430426: "祁东县",
    430481: "耒阳市",
    430482: "常宁市",
    430502: "双清区",
    430503: "大祥区",
    430511: "北塔区",
    430521: "邵东县",
    430522: "新邵县",
    430523: "邵阳县",
    430524: "隆回县",
    430525: "洞口县",
    430527: "绥宁县",
    430528: "新宁县",
    430529: "城步苗族自治县",
    430581: "武冈市",
    430602: "岳阳楼区",
    430603: "云溪区",
    430611: "君山区",
    430621: "岳阳县",
    430623: "华容县",
    430624: "湘阴县",
    430626: "平江县",
    430681: "汨罗市",
    430682: "临湘市",
    430702: "武陵区",
    430703: "鼎城区",
    430721: "安乡县",
    430722: "汉寿县",
    430723: "澧县",
    430724: "临澧县",
    430725: "桃源县",
    430726: "石门县",
    430781: "津市市",
    430802: "永定区",
    430811: "武陵源区",
    430821: "慈利县",
    430822: "桑植县",
    430902: "资阳区",
    430903: "赫山区",
    430921: "南县",
    430922: "桃江县",
    430923: "安化县",
    430981: "沅江市",
    431002: "北湖区",
    431003: "苏仙区",
    431021: "桂阳县",
    431022: "宜章县",
    431023: "永兴县",
    431024: "嘉禾县",
    431025: "临武县",
    431026: "汝城县",
    431027: "桂东县",
    431028: "安仁县",
    431081: "资兴市",
    431102: "零陵区",
    431103: "冷水滩区",
    431121: "祁阳县",
    431122: "东安县",
    431123: "双牌县",
    431124: "道县",
    431125: "江永县",
    431126: "宁远县",
    431127: "蓝山县",
    431128: "新田县",
    431129: "江华瑶族自治县",
    431202: "鹤城区",
    431221: "中方县",
    431222: "沅陵县",
    431223: "辰溪县",
    431224: "溆浦县",
    431225: "会同县",
    431226: "麻阳苗族自治县",
    431227: "新晃侗族自治县",
    431228: "芷江侗族自治县",
    431229: "靖州苗族侗族自治县",
    431230: "通道侗族自治县",
    431281: "洪江市",
    431302: "娄星区",
    431321: "双峰县",
    431322: "新化县",
    431381: "冷水江市",
    431382: "涟源市",
    433101: "吉首市",
    433122: "泸溪县",
    433123: "凤凰县",
    433124: "花垣县",
    433125: "保靖县",
    433126: "古丈县",
    433127: "永顺县",
    433130: "龙山县",
    440103: "荔湾区",
    440104: "越秀区",
    440105: "海珠区",
    440106: "天河区",
    440111: "白云区",
    440112: "黄埔区",
    440113: "番禺区",
    440114: "花都区",
    440115: "南沙区",
    440117: "从化区",
    440118: "增城区",
    440203: "武江区",
    440204: "浈江区",
    440205: "曲江区",
    440222: "始兴县",
    440224: "仁化县",
    440229: "翁源县",
    440232: "乳源瑶族自治县",
    440233: "新丰县",
    440281: "乐昌市",
    440282: "南雄市",
    440303: "罗湖区",
    440304: "福田区",
    440305: "南山区",
    440306: "宝安区",
    440307: "龙岗区",
    440308: "盐田区",
    440309: "龙华区",
    440310: "坪山区",
    440311: "光明区",
    440402: "香洲区",
    440403: "斗门区",
    440404: "金湾区",
    440507: "龙湖区",
    440511: "金平区",
    440512: "濠江区",
    440513: "潮阳区",
    440514: "潮南区",
    440515: "澄海区",
    440523: "南澳县",
    440604: "禅城区",
    440605: "南海区",
    440606: "顺德区",
    440607: "三水区",
    440608: "高明区",
    440703: "蓬江区",
    440704: "江海区",
    440705: "新会区",
    440781: "台山市",
    440783: "开平市",
    440784: "鹤山市",
    440785: "恩平市",
    440802: "赤坎区",
    440803: "霞山区",
    440804: "坡头区",
    440811: "麻章区",
    440823: "遂溪县",
    440825: "徐闻县",
    440881: "廉江市",
    440882: "雷州市",
    440883: "吴川市",
    440890: "经济技术开发区",
    440902: "茂南区",
    440904: "电白区",
    440981: "高州市",
    440982: "化州市",
    440983: "信宜市",
    441202: "端州区",
    441203: "鼎湖区",
    441204: "高要区",
    441223: "广宁县",
    441224: "怀集县",
    441225: "封开县",
    441226: "德庆县",
    441284: "四会市",
    441302: "惠城区",
    441303: "惠阳区",
    441322: "博罗县",
    441323: "惠东县",
    441324: "龙门县",
    441402: "梅江区",
    441403: "梅县区",
    441422: "大埔县",
    441423: "丰顺县",
    441424: "五华县",
    441426: "平远县",
    441427: "蕉岭县",
    441481: "兴宁市",
    441502: "城区",
    441521: "海丰县",
    441523: "陆河县",
    441581: "陆丰市",
    441602: "源城区",
    441621: "紫金县",
    441622: "龙川县",
    441623: "连平县",
    441624: "和平县",
    441625: "东源县",
    441702: "江城区",
    441704: "阳东区",
    441721: "阳西县",
    441781: "阳春市",
    441802: "清城区",
    441803: "清新区",
    441821: "佛冈县",
    441823: "阳山县",
    441825: "连山壮族瑶族自治县",
    441826: "连南瑶族自治县",
    441881: "英德市",
    441882: "连州市",
    441901: "中堂镇",
    441903: "南城街道办事处",
    441904: "长安镇",
    441905: "东坑镇",
    441906: "樟木头镇",
    441907: "莞城街道办事处",
    441908: "石龙镇",
    441909: "桥头镇",
    441910: "万江街道办事处",
    441911: "麻涌镇",
    441912: "虎门镇",
    441913: "谢岗镇",
    441914: "石碣镇",
    441915: "茶山镇",
    441916: "东城街道办事处",
    441917: "洪梅镇",
    441918: "道滘镇",
    441919: "高埗镇",
    441920: "企石镇",
    441921: "凤岗镇",
    441922: "大岭山镇",
    441923: "松山湖管委会",
    441924: "清溪镇",
    441925: "望牛墩镇",
    441926: "厚街镇",
    441927: "常平镇",
    441928: "寮步镇",
    441929: "石排镇",
    441930: "横沥镇",
    441931: "塘厦镇",
    441932: "黄江镇",
    441933: "大朗镇",
    441934: "东莞港",
    441935: "东莞生态园",
    441990: "沙田镇",
    442001: "南头镇",
    442002: "神湾镇",
    442003: "东凤镇",
    442004: "五桂山街道办事处",
    442005: "黄圃镇",
    442006: "小榄镇",
    442007: "石岐区街道办事处",
    442008: "横栏镇",
    442009: "三角镇",
    442010: "三乡镇",
    442011: "港口镇",
    442012: "沙溪镇",
    442013: "板芙镇",
    442015: "东升镇",
    442016: "阜沙镇",
    442017: "民众镇",
    442018: "东区街道办事处",
    442019: "火炬开发区街道办事处",
    442020: "西区街道办事处",
    442021: "南区街道办事处",
    442022: "古镇镇",
    442023: "坦洲镇",
    442024: "大涌镇",
    442025: "南朗镇",
    445102: "湘桥区",
    445103: "潮安区",
    445122: "饶平县",
    445202: "榕城区",
    445203: "揭东区",
    445222: "揭西县",
    445224: "惠来县",
    445281: "普宁市",
    445302: "云城区",
    445303: "云安区",
    445321: "新兴县",
    445322: "郁南县",
    445381: "罗定市",
    450102: "兴宁区",
    450103: "青秀区",
    450105: "江南区",
    450107: "西乡塘区",
    450108: "良庆区",
    450109: "邕宁区",
    450110: "武鸣区",
    450123: "隆安县",
    450124: "马山县",
    450125: "上林县",
    450126: "宾阳县",
    450127: "横县",
    450202: "城中区",
    450203: "鱼峰区",
    450204: "柳南区",
    450205: "柳北区",
    450206: "柳江区",
    450222: "柳城县",
    450223: "鹿寨县",
    450224: "融安县",
    450225: "融水苗族自治县",
    450226: "三江侗族自治县",
    450302: "秀峰区",
    450303: "叠彩区",
    450304: "象山区",
    450305: "七星区",
    450311: "雁山区",
    450312: "临桂区",
    450321: "阳朔县",
    450323: "灵川县",
    450324: "全州县",
    450325: "兴安县",
    450326: "永福县",
    450327: "灌阳县",
    450328: "龙胜各族自治县",
    450329: "资源县",
    450330: "平乐县",
    450332: "恭城瑶族自治县",
    450381: "荔浦市",
    450403: "万秀区",
    450405: "长洲区",
    450406: "龙圩区",
    450421: "苍梧县",
    450422: "藤县",
    450423: "蒙山县",
    450481: "岑溪市",
    450502: "海城区",
    450503: "银海区",
    450512: "铁山港区",
    450521: "合浦县",
    450602: "港口区",
    450603: "防城区",
    450621: "上思县",
    450681: "东兴市",
    450702: "钦南区",
    450703: "钦北区",
    450721: "灵山县",
    450722: "浦北县",
    450802: "港北区",
    450803: "港南区",
    450804: "覃塘区",
    450821: "平南县",
    450881: "桂平市",
    450902: "玉州区",
    450903: "福绵区",
    450921: "容县",
    450922: "陆川县",
    450923: "博白县",
    450924: "兴业县",
    450981: "北流市",
    451002: "右江区",
    451021: "田阳县",
    451022: "田东县",
    451023: "平果县",
    451024: "德保县",
    451026: "那坡县",
    451027: "凌云县",
    451028: "乐业县",
    451029: "田林县",
    451030: "西林县",
    451031: "隆林各族自治县",
    451081: "靖西市",
    451102: "八步区",
    451103: "平桂区",
    451121: "昭平县",
    451122: "钟山县",
    451123: "富川瑶族自治县",
    451202: "金城江区",
    451203: "宜州区",
    451221: "南丹县",
    451222: "天峨县",
    451223: "凤山县",
    451224: "东兰县",
    451225: "罗城仫佬族自治县",
    451226: "环江毛南族自治县",
    451227: "巴马瑶族自治县",
    451228: "都安瑶族自治县",
    451229: "大化瑶族自治县",
    451302: "兴宾区",
    451321: "忻城县",
    451322: "象州县",
    451323: "武宣县",
    451324: "金秀瑶族自治县",
    451381: "合山市",
    451402: "江州区",
    451421: "扶绥县",
    451422: "宁明县",
    451423: "龙州县",
    451424: "大新县",
    451425: "天等县",
    451481: "凭祥市",
    460105: "秀英区",
    460106: "龙华区",
    460107: "琼山区",
    460108: "美兰区",
    460202: "海棠区",
    460203: "吉阳区",
    460204: "天涯区",
    460205: "崖州区",
    460321: "西沙群岛",
    460322: "南沙群岛",
    460323: "中沙群岛的岛礁及其海域",
    460401: "那大镇",
    460402: "和庆镇",
    460403: "南丰镇",
    460404: "大成镇",
    460405: "雅星镇",
    460406: "兰洋镇",
    460407: "光村镇",
    460408: "木棠镇",
    460409: "海头镇",
    460410: "峨蔓镇",
    460411: "王五镇",
    460412: "白马井镇",
    460413: "中和镇",
    460414: "排浦镇",
    460415: "东成镇",
    460416: "新州镇",
    460417: "洋浦经济开发区",
    460418: "华南热作学院",
    469001: "五指山市",
    469002: "琼海市",
    469005: "文昌市",
    469006: "万宁市",
    469007: "东方市",
    469021: "定安县",
    469022: "屯昌县",
    469023: "澄迈县",
    469024: "临高县",
    469025: "白沙黎族自治县",
    469026: "昌江黎族自治县",
    469027: "乐东黎族自治县",
    469028: "陵水黎族自治县",
    469029: "保亭黎族苗族自治县",
    469030: "琼中黎族苗族自治县",
    500101: "万州区",
    500102: "涪陵区",
    500103: "渝中区",
    500104: "大渡口区",
    500105: "江北区",
    500106: "沙坪坝区",
    500107: "九龙坡区",
    500108: "南岸区",
    500109: "北碚区",
    500110: "綦江区",
    500111: "大足区",
    500112: "渝北区",
    500113: "巴南区",
    500114: "黔江区",
    500115: "长寿区",
    500116: "江津区",
    500117: "合川区",
    500118: "永川区",
    500119: "南川区",
    500120: "璧山区",
    500151: "铜梁区",
    500152: "潼南区",
    500153: "荣昌区",
    500154: "开州区",
    500155: "梁平区",
    500156: "武隆区",
    500229: "城口县",
    500230: "丰都县",
    500231: "垫江县",
    500233: "忠县",
    500235: "云阳县",
    500236: "奉节县",
    500237: "巫山县",
    500238: "巫溪县",
    500240: "石柱土家族自治县",
    500241: "秀山土家族苗族自治县",
    500242: "酉阳土家族苗族自治县",
    500243: "彭水苗族土家族自治县",
    510104: "锦江区",
    510105: "青羊区",
    510106: "金牛区",
    510107: "武侯区",
    510108: "成华区",
    510112: "龙泉驿区",
    510113: "青白江区",
    510114: "新都区",
    510115: "温江区",
    510116: "双流区",
    510117: "郫都区",
    510121: "金堂县",
    510129: "大邑县",
    510131: "蒲江县",
    510132: "新津县",
    510181: "都江堰市",
    510182: "彭州市",
    510183: "邛崃市",
    510184: "崇州市",
    510185: "简阳市",
    510191: "高新区",
    510302: "自流井区",
    510303: "贡井区",
    510304: "大安区",
    510311: "沿滩区",
    510321: "荣县",
    510322: "富顺县",
    510402: "东区",
    510403: "西区",
    510411: "仁和区",
    510421: "米易县",
    510422: "盐边县",
    510502: "江阳区",
    510503: "纳溪区",
    510504: "龙马潭区",
    510521: "泸县",
    510522: "合江县",
    510524: "叙永县",
    510525: "古蔺县",
    510603: "旌阳区",
    510604: "罗江区",
    510623: "中江县",
    510681: "广汉市",
    510682: "什邡市",
    510683: "绵竹市",
    510703: "涪城区",
    510704: "游仙区",
    510705: "安州区",
    510722: "三台县",
    510723: "盐亭县",
    510725: "梓潼县",
    510726: "北川羌族自治县",
    510727: "平武县",
    510781: "江油市",
    510791: "高新区",
    510802: "利州区",
    510811: "昭化区",
    510812: "朝天区",
    510821: "旺苍县",
    510822: "青川县",
    510823: "剑阁县",
    510824: "苍溪县",
    510903: "船山区",
    510904: "安居区",
    510921: "蓬溪县",
    510922: "射洪县",
    510923: "大英县",
    511002: "市中区",
    511011: "东兴区",
    511024: "威远县",
    511025: "资中县",
    511083: "隆昌市",
    511102: "市中区",
    511111: "沙湾区",
    511112: "五通桥区",
    511113: "金口河区",
    511123: "犍为县",
    511124: "井研县",
    511126: "夹江县",
    511129: "沐川县",
    511132: "峨边彝族自治县",
    511133: "马边彝族自治县",
    511181: "峨眉山市",
    511302: "顺庆区",
    511303: "高坪区",
    511304: "嘉陵区",
    511321: "南部县",
    511322: "营山县",
    511323: "蓬安县",
    511324: "仪陇县",
    511325: "西充县",
    511381: "阆中市",
    511402: "东坡区",
    511403: "彭山区",
    511421: "仁寿县",
    511423: "洪雅县",
    511424: "丹棱县",
    511425: "青神县",
    511502: "翠屏区",
    511503: "南溪区",
    511504: "叙州区",
    511523: "江安县",
    511524: "长宁县",
    511525: "高县",
    511526: "珙县",
    511527: "筠连县",
    511528: "兴文县",
    511529: "屏山县",
    511602: "广安区",
    511603: "前锋区",
    511621: "岳池县",
    511622: "武胜县",
    511623: "邻水县",
    511681: "华蓥市",
    511702: "通川区",
    511703: "达川区",
    511722: "宣汉县",
    511723: "开江县",
    511724: "大竹县",
    511725: "渠县",
    511781: "万源市",
    511802: "雨城区",
    511803: "名山区",
    511822: "荥经县",
    511823: "汉源县",
    511824: "石棉县",
    511825: "天全县",
    511826: "芦山县",
    511827: "宝兴县",
    511902: "巴州区",
    511903: "恩阳区",
    511921: "通江县",
    511922: "南江县",
    511923: "平昌县",
    512002: "雁江区",
    512021: "安岳县",
    512022: "乐至县",
    513201: "马尔康市",
    513221: "汶川县",
    513222: "理县",
    513223: "茂县",
    513224: "松潘县",
    513225: "九寨沟县",
    513226: "金川县",
    513227: "小金县",
    513228: "黑水县",
    513230: "壤塘县",
    513231: "阿坝县",
    513232: "若尔盖县",
    513233: "红原县",
    513301: "康定市",
    513322: "泸定县",
    513323: "丹巴县",
    513324: "九龙县",
    513325: "雅江县",
    513326: "道孚县",
    513327: "炉霍县",
    513328: "甘孜县",
    513329: "新龙县",
    513330: "德格县",
    513331: "白玉县",
    513332: "石渠县",
    513333: "色达县",
    513334: "理塘县",
    513335: "巴塘县",
    513336: "乡城县",
    513337: "稻城县",
    513338: "得荣县",
    513401: "西昌市",
    513422: "木里藏族自治县",
    513423: "盐源县",
    513424: "德昌县",
    513425: "会理县",
    513426: "会东县",
    513427: "宁南县",
    513428: "普格县",
    513429: "布拖县",
    513430: "金阳县",
    513431: "昭觉县",
    513432: "喜德县",
    513433: "冕宁县",
    513434: "越西县",
    513435: "甘洛县",
    513436: "美姑县",
    513437: "雷波县",
    520102: "南明区",
    520103: "云岩区",
    520111: "花溪区",
    520112: "乌当区",
    520113: "白云区",
    520115: "观山湖区",
    520121: "开阳县",
    520122: "息烽县",
    520123: "修文县",
    520181: "清镇市",
    520201: "钟山区",
    520203: "六枝特区",
    520221: "水城县",
    520281: "盘州市",
    520302: "红花岗区",
    520303: "汇川区",
    520304: "播州区",
    520322: "桐梓县",
    520323: "绥阳县",
    520324: "正安县",
    520325: "道真仡佬族苗族自治县",
    520326: "务川仡佬族苗族自治县",
    520327: "凤冈县",
    520328: "湄潭县",
    520329: "余庆县",
    520330: "习水县",
    520381: "赤水市",
    520382: "仁怀市",
    520402: "西秀区",
    520403: "平坝区",
    520422: "普定县",
    520423: "镇宁布依族苗族自治县",
    520424: "关岭布依族苗族自治县",
    520425: "紫云苗族布依族自治县",
    520502: "七星关区",
    520521: "大方县",
    520522: "黔西县",
    520523: "金沙县",
    520524: "织金县",
    520525: "纳雍县",
    520526: "威宁彝族回族苗族自治县",
    520527: "赫章县",
    520602: "碧江区",
    520603: "万山区",
    520621: "江口县",
    520622: "玉屏侗族自治县",
    520623: "石阡县",
    520624: "思南县",
    520625: "印江土家族苗族自治县",
    520626: "德江县",
    520627: "沿河土家族自治县",
    520628: "松桃苗族自治县",
    522301: "兴义市",
    522302: "兴仁市",
    522323: "普安县",
    522324: "晴隆县",
    522325: "贞丰县",
    522326: "望谟县",
    522327: "册亨县",
    522328: "安龙县",
    522601: "凯里市",
    522622: "黄平县",
    522623: "施秉县",
    522624: "三穗县",
    522625: "镇远县",
    522626: "岑巩县",
    522627: "天柱县",
    522628: "锦屏县",
    522629: "剑河县",
    522630: "台江县",
    522631: "黎平县",
    522632: "榕江县",
    522633: "从江县",
    522634: "雷山县",
    522635: "麻江县",
    522636: "丹寨县",
    522701: "都匀市",
    522702: "福泉市",
    522722: "荔波县",
    522723: "贵定县",
    522725: "瓮安县",
    522726: "独山县",
    522727: "平塘县",
    522728: "罗甸县",
    522729: "长顺县",
    522730: "龙里县",
    522731: "惠水县",
    522732: "三都水族自治县",
    530102: "五华区",
    530103: "盘龙区",
    530111: "官渡区",
    530112: "西山区",
    530113: "东川区",
    530114: "呈贡区",
    530115: "晋宁区",
    530124: "富民县",
    530125: "宜良县",
    530126: "石林彝族自治县",
    530127: "嵩明县",
    530128: "禄劝彝族苗族自治县",
    530129: "寻甸回族彝族自治县",
    530181: "安宁市",
    530302: "麒麟区",
    530303: "沾益区",
    530304: "马龙区",
    530322: "陆良县",
    530323: "师宗县",
    530324: "罗平县",
    530325: "富源县",
    530326: "会泽县",
    530381: "宣威市",
    530402: "红塔区",
    530403: "江川区",
    530422: "澄江县",
    530423: "通海县",
    530424: "华宁县",
    530425: "易门县",
    530426: "峨山彝族自治县",
    530427: "新平彝族傣族自治县",
    530428: "元江哈尼族彝族傣族自治县",
    530502: "隆阳区",
    530521: "施甸县",
    530523: "龙陵县",
    530524: "昌宁县",
    530581: "腾冲市",
    530602: "昭阳区",
    530621: "鲁甸县",
    530622: "巧家县",
    530623: "盐津县",
    530624: "大关县",
    530625: "永善县",
    530626: "绥江县",
    530627: "镇雄县",
    530628: "彝良县",
    530629: "威信县",
    530681: "水富市",
    530702: "古城区",
    530721: "玉龙纳西族自治县",
    530722: "永胜县",
    530723: "华坪县",
    530724: "宁蒗彝族自治县",
    530802: "思茅区",
    530821: "宁洱哈尼族彝族自治县",
    530822: "墨江哈尼族自治县",
    530823: "景东彝族自治县",
    530824: "景谷傣族彝族自治县",
    530825: "镇沅彝族哈尼族拉祜族自治县",
    530826: "江城哈尼族彝族自治县",
    530827: "孟连傣族拉祜族佤族自治县",
    530828: "澜沧拉祜族自治县",
    530829: "西盟佤族自治县",
    530902: "临翔区",
    530921: "凤庆县",
    530922: "云县",
    530923: "永德县",
    530924: "镇康县",
    530925: "双江拉祜族佤族布朗族傣族自治县",
    530926: "耿马傣族佤族自治县",
    530927: "沧源佤族自治县",
    532301: "楚雄市",
    532322: "双柏县",
    532323: "牟定县",
    532324: "南华县",
    532325: "姚安县",
    532326: "大姚县",
    532327: "永仁县",
    532328: "元谋县",
    532329: "武定县",
    532331: "禄丰县",
    532501: "个旧市",
    532502: "开远市",
    532503: "蒙自市",
    532504: "弥勒市",
    532523: "屏边苗族自治县",
    532524: "建水县",
    532525: "石屏县",
    532527: "泸西县",
    532528: "元阳县",
    532529: "红河县",
    532530: "金平苗族瑶族傣族自治县",
    532531: "绿春县",
    532532: "河口瑶族自治县",
    532601: "文山市",
    532622: "砚山县",
    532623: "西畴县",
    532624: "麻栗坡县",
    532625: "马关县",
    532626: "丘北县",
    532627: "广南县",
    532628: "富宁县",
    532801: "景洪市",
    532822: "勐海县",
    532823: "勐腊县",
    532901: "大理市",
    532922: "漾濞彝族自治县",
    532923: "祥云县",
    532924: "宾川县",
    532925: "弥渡县",
    532926: "南涧彝族自治县",
    532927: "巍山彝族回族自治县",
    532928: "永平县",
    532929: "云龙县",
    532930: "洱源县",
    532931: "剑川县",
    532932: "鹤庆县",
    533102: "瑞丽市",
    533103: "芒市",
    533122: "梁河县",
    533123: "盈江县",
    533124: "陇川县",
    533301: "泸水市",
    533323: "福贡县",
    533324: "贡山独龙族怒族自治县",
    533325: "兰坪白族普米族自治县",
    533401: "香格里拉市",
    533422: "德钦县",
    533423: "维西傈僳族自治县",
    540102: "城关区",
    540103: "堆龙德庆区",
    540104: "达孜区",
    540121: "林周县",
    540122: "当雄县",
    540123: "尼木县",
    540124: "曲水县",
    540127: "墨竹工卡县",
    540202: "桑珠孜区",
    540221: "南木林县",
    540222: "江孜县",
    540223: "定日县",
    540224: "萨迦县",
    540225: "拉孜县",
    540226: "昂仁县",
    540227: "谢通门县",
    540228: "白朗县",
    540229: "仁布县",
    540230: "康马县",
    540231: "定结县",
    540232: "仲巴县",
    540233: "亚东县",
    540234: "吉隆县",
    540235: "聂拉木县",
    540236: "萨嘎县",
    540237: "岗巴县",
    540302: "卡若区",
    540321: "江达县",
    540322: "贡觉县",
    540323: "类乌齐县",
    540324: "丁青县",
    540325: "察雅县",
    540326: "八宿县",
    540327: "左贡县",
    540328: "芒康县",
    540329: "洛隆县",
    540330: "边坝县",
    540402: "巴宜区",
    540421: "工布江达县",
    540422: "米林县",
    540423: "墨脱县",
    540424: "波密县",
    540425: "察隅县",
    540426: "朗县",
    540502: "乃东区",
    540521: "扎囊县",
    540522: "贡嘎县",
    540523: "桑日县",
    540524: "琼结县",
    540525: "曲松县",
    540526: "措美县",
    540527: "洛扎县",
    540528: "加查县",
    540529: "隆子县",
    540530: "错那县",
    540531: "浪卡子县",
    540602: "色尼区",
    540621: "嘉黎县",
    540622: "比如县",
    540623: "聂荣县",
    540624: "安多县",
    540625: "申扎县",
    540626: "索县",
    540627: "班戈县",
    540628: "巴青县",
    540629: "尼玛县",
    540630: "双湖县",
    542521: "普兰县",
    542522: "札达县",
    542523: "噶尔县",
    542524: "日土县",
    542525: "革吉县",
    542526: "改则县",
    542527: "措勤县",
    610102: "新城区",
    610103: "碑林区",
    610104: "莲湖区",
    610111: "灞桥区",
    610112: "未央区",
    610113: "雁塔区",
    610114: "阎良区",
    610115: "临潼区",
    610116: "长安区",
    610117: "高陵区",
    610118: "鄠邑区",
    610122: "蓝田县",
    610124: "周至县",
    610202: "王益区",
    610203: "印台区",
    610204: "耀州区",
    610222: "宜君县",
    610302: "渭滨区",
    610303: "金台区",
    610304: "陈仓区",
    610322: "凤翔县",
    610323: "岐山县",
    610324: "扶风县",
    610326: "眉县",
    610327: "陇县",
    610328: "千阳县",
    610329: "麟游县",
    610330: "凤县",
    610331: "太白县",
    610402: "秦都区",
    610403: "杨陵区",
    610404: "渭城区",
    610422: "三原县",
    610423: "泾阳县",
    610424: "乾县",
    610425: "礼泉县",
    610426: "永寿县",
    610428: "长武县",
    610429: "旬邑县",
    610430: "淳化县",
    610431: "武功县",
    610481: "兴平市",
    610482: "彬州市",
    610502: "临渭区",
    610503: "华州区",
    610522: "潼关县",
    610523: "大荔县",
    610524: "合阳县",
    610525: "澄城县",
    610526: "蒲城县",
    610527: "白水县",
    610528: "富平县",
    610581: "韩城市",
    610582: "华阴市",
    610602: "宝塔区",
    610603: "安塞区",
    610621: "延长县",
    610622: "延川县",
    610623: "子长县",
    610625: "志丹县",
    610626: "吴起县",
    610627: "甘泉县",
    610628: "富县",
    610629: "洛川县",
    610630: "宜川县",
    610631: "黄龙县",
    610632: "黄陵县",
    610702: "汉台区",
    610703: "南郑区",
    610722: "城固县",
    610723: "洋县",
    610724: "西乡县",
    610725: "勉县",
    610726: "宁强县",
    610727: "略阳县",
    610728: "镇巴县",
    610729: "留坝县",
    610730: "佛坪县",
    610802: "榆阳区",
    610803: "横山区",
    610822: "府谷县",
    610824: "靖边县",
    610825: "定边县",
    610826: "绥德县",
    610827: "米脂县",
    610828: "佳县",
    610829: "吴堡县",
    610830: "清涧县",
    610831: "子洲县",
    610881: "神木市",
    610902: "汉滨区",
    610921: "汉阴县",
    610922: "石泉县",
    610923: "宁陕县",
    610924: "紫阳县",
    610925: "岚皋县",
    610926: "平利县",
    610927: "镇坪县",
    610928: "旬阳县",
    610929: "白河县",
    611002: "商州区",
    611021: "洛南县",
    611022: "丹凤县",
    611023: "商南县",
    611024: "山阳县",
    611025: "镇安县",
    611026: "柞水县",
    620102: "城关区",
    620103: "七里河区",
    620104: "西固区",
    620105: "安宁区",
    620111: "红古区",
    620121: "永登县",
    620122: "皋兰县",
    620123: "榆中县",
    620201: "市辖区",
    620290: "雄关区",
    620291: "长城区",
    620292: "镜铁区",
    620293: "新城镇",
    620294: "峪泉镇",
    620295: "文殊镇",
    620302: "金川区",
    620321: "永昌县",
    620402: "白银区",
    620403: "平川区",
    620421: "靖远县",
    620422: "会宁县",
    620423: "景泰县",
    620502: "秦州区",
    620503: "麦积区",
    620521: "清水县",
    620522: "秦安县",
    620523: "甘谷县",
    620524: "武山县",
    620525: "张家川回族自治县",
    620602: "凉州区",
    620621: "民勤县",
    620622: "古浪县",
    620623: "天祝藏族自治县",
    620702: "甘州区",
    620721: "肃南裕固族自治县",
    620722: "民乐县",
    620723: "临泽县",
    620724: "高台县",
    620725: "山丹县",
    620802: "崆峒区",
    620821: "泾川县",
    620822: "灵台县",
    620823: "崇信县",
    620825: "庄浪县",
    620826: "静宁县",
    620881: "华亭市",
    620902: "肃州区",
    620921: "金塔县",
    620922: "瓜州县",
    620923: "肃北蒙古族自治县",
    620924: "阿克塞哈萨克族自治县",
    620981: "玉门市",
    620982: "敦煌市",
    621002: "西峰区",
    621021: "庆城县",
    621022: "环县",
    621023: "华池县",
    621024: "合水县",
    621025: "正宁县",
    621026: "宁县",
    621027: "镇原县",
    621102: "安定区",
    621121: "通渭县",
    621122: "陇西县",
    621123: "渭源县",
    621124: "临洮县",
    621125: "漳县",
    621126: "岷县",
    621202: "武都区",
    621221: "成县",
    621222: "文县",
    621223: "宕昌县",
    621224: "康县",
    621225: "西和县",
    621226: "礼县",
    621227: "徽县",
    621228: "两当县",
    622901: "临夏市",
    622921: "临夏县",
    622922: "康乐县",
    622923: "永靖县",
    622924: "广河县",
    622925: "和政县",
    622926: "东乡族自治县",
    622927: "积石山保安族东乡族撒拉族自治县",
    623001: "合作市",
    623021: "临潭县",
    623022: "卓尼县",
    623023: "舟曲县",
    623024: "迭部县",
    623025: "玛曲县",
    623026: "碌曲县",
    623027: "夏河县",
    630102: "城东区",
    630103: "城中区",
    630104: "城西区",
    630105: "城北区",
    630121: "大通回族土族自治县",
    630122: "湟中县",
    630123: "湟源县",
    630202: "乐都区",
    630203: "平安区",
    630222: "民和回族土族自治县",
    630223: "互助土族自治县",
    630224: "化隆回族自治县",
    630225: "循化撒拉族自治县",
    632221: "门源回族自治县",
    632222: "祁连县",
    632223: "海晏县",
    632224: "刚察县",
    632321: "同仁县",
    632322: "尖扎县",
    632323: "泽库县",
    632324: "河南蒙古族自治县",
    632521: "共和县",
    632522: "同德县",
    632523: "贵德县",
    632524: "兴海县",
    632525: "贵南县",
    632621: "玛沁县",
    632622: "班玛县",
    632623: "甘德县",
    632624: "达日县",
    632625: "久治县",
    632626: "玛多县",
    632701: "玉树市",
    632722: "杂多县",
    632723: "称多县",
    632724: "治多县",
    632725: "囊谦县",
    632726: "曲麻莱县",
    632801: "格尔木市",
    632802: "德令哈市",
    632803: "茫崖市",
    632821: "乌兰县",
    632822: "都兰县",
    632823: "天峻县",
    640104: "兴庆区",
    640105: "西夏区",
    640106: "金凤区",
    640121: "永宁县",
    640122: "贺兰县",
    640181: "灵武市",
    640202: "大武口区",
    640205: "惠农区",
    640221: "平罗县",
    640302: "利通区",
    640303: "红寺堡区",
    640323: "盐池县",
    640324: "同心县",
    640381: "青铜峡市",
    640402: "原州区",
    640422: "西吉县",
    640423: "隆德县",
    640424: "泾源县",
    640425: "彭阳县",
    640502: "沙坡头区",
    640521: "中宁县",
    640522: "海原县",
    650102: "天山区",
    650103: "沙依巴克区",
    650104: "新市区",
    650105: "水磨沟区",
    650106: "头屯河区",
    650107: "达坂城区",
    650109: "米东区",
    650121: "乌鲁木齐县",
    650202: "独山子区",
    650203: "克拉玛依区",
    650204: "白碱滩区",
    650205: "乌尔禾区",
    650402: "高昌区",
    650421: "鄯善县",
    650422: "托克逊县",
    650502: "伊州区",
    650521: "巴里坤哈萨克自治县",
    650522: "伊吾县",
    652301: "昌吉市",
    652302: "阜康市",
    652323: "呼图壁县",
    652324: "玛纳斯县",
    652325: "奇台县",
    652327: "吉木萨尔县",
    652328: "木垒哈萨克自治县",
    652701: "博乐市",
    652702: "阿拉山口市",
    652722: "精河县",
    652723: "温泉县",
    652801: "库尔勒市",
    652822: "轮台县",
    652823: "尉犁县",
    652824: "若羌县",
    652825: "且末县",
    652826: "焉耆回族自治县",
    652827: "和静县",
    652828: "和硕县",
    652829: "博湖县",
    652901: "阿克苏市",
    652922: "温宿县",
    652923: "库车县",
    652924: "沙雅县",
    652925: "新和县",
    652926: "拜城县",
    652927: "乌什县",
    652928: "阿瓦提县",
    652929: "柯坪县",
    653001: "阿图什市",
    653022: "阿克陶县",
    653023: "阿合奇县",
    653024: "乌恰县",
    653101: "喀什市",
    653121: "疏附县",
    653122: "疏勒县",
    653123: "英吉沙县",
    653124: "泽普县",
    653125: "莎车县",
    653126: "叶城县",
    653127: "麦盖提县",
    653128: "岳普湖县",
    653129: "伽师县",
    653130: "巴楚县",
    653131: "塔什库尔干塔吉克自治县",
    653201: "和田市",
    653221: "和田县",
    653222: "墨玉县",
    653223: "皮山县",
    653224: "洛浦县",
    653225: "策勒县",
    653226: "于田县",
    653227: "民丰县",
    654002: "伊宁市",
    654003: "奎屯市",
    654004: "霍尔果斯市",
    654021: "伊宁县",
    654022: "察布查尔锡伯自治县",
    654023: "霍城县",
    654024: "巩留县",
    654025: "新源县",
    654026: "昭苏县",
    654027: "特克斯县",
    654028: "尼勒克县",
    654201: "塔城市",
    654202: "乌苏市",
    654221: "额敏县",
    654223: "沙湾县",
    654224: "托里县",
    654225: "裕民县",
    654226: "和布克赛尔蒙古自治县",
    654301: "阿勒泰市",
    654321: "布尔津县",
    654322: "富蕴县",
    654323: "福海县",
    654324: "哈巴河县",
    654325: "青河县",
    654326: "吉木乃县",
    659001: "石河子市",
    659002: "阿拉尔市",
    659003: "图木舒克市",
    659004: "五家渠市",
    659005: "北屯市",
    659006: "铁门关市",
    659007: "双河市",
    659008: "可克达拉市",
    659009: "昆玉市",
    710101: "中正区",
    710102: "大同区",
    710103: "中山区",
    710104: "松山区",
    710105: "大安区",
    710106: "万华区",
    710107: "信义区",
    710108: "士林区",
    710109: "北投区",
    710110: "内湖区",
    710111: "南港区",
    710112: "文山区",
    710199: "其它区",
    710201: "新兴区",
    710202: "前金区",
    710203: "芩雅区",
    710204: "盐埕区",
    710205: "鼓山区",
    710206: "旗津区",
    710207: "前镇区",
    710208: "三民区",
    710209: "左营区",
    710210: "楠梓区",
    710211: "小港区",
    710241: "苓雅区",
    710242: "仁武区",
    710243: "大社区",
    710244: "冈山区",
    710245: "路竹区",
    710246: "阿莲区",
    710247: "田寮区",
    710248: "燕巢区",
    710249: "桥头区",
    710250: "梓官区",
    710251: "弥陀区",
    710252: "永安区",
    710253: "湖内区",
    710254: "凤山区",
    710255: "大寮区",
    710256: "林园区",
    710257: "鸟松区",
    710258: "大树区",
    710259: "旗山区",
    710260: "美浓区",
    710261: "六龟区",
    710262: "内门区",
    710263: "杉林区",
    710264: "甲仙区",
    710265: "桃源区",
    710266: "那玛夏区",
    710267: "茂林区",
    710268: "茄萣区",
    710299: "其它区",
    710301: "中西区",
    710302: "东区",
    710303: "南区",
    710304: "北区",
    710305: "安平区",
    710306: "安南区",
    710339: "永康区",
    710340: "归仁区",
    710341: "新化区",
    710342: "左镇区",
    710343: "玉井区",
    710344: "楠西区",
    710345: "南化区",
    710346: "仁德区",
    710347: "关庙区",
    710348: "龙崎区",
    710349: "官田区",
    710350: "麻豆区",
    710351: "佳里区",
    710352: "西港区",
    710353: "七股区",
    710354: "将军区",
    710355: "学甲区",
    710356: "北门区",
    710357: "新营区",
    710358: "后壁区",
    710359: "白河区",
    710360: "东山区",
    710361: "六甲区",
    710362: "下营区",
    710363: "柳营区",
    710364: "盐水区",
    710365: "善化区",
    710366: "大内区",
    710367: "山上区",
    710368: "新市区",
    710369: "安定区",
    710399: "其它区",
    710401: "中区",
    710402: "东区",
    710403: "南区",
    710404: "西区",
    710405: "北区",
    710406: "北屯区",
    710407: "西屯区",
    710408: "南屯区",
    710431: "太平区",
    710432: "大里区",
    710433: "雾峰区",
    710434: "乌日区",
    710435: "丰原区",
    710436: "后里区",
    710437: "石冈区",
    710438: "东势区",
    710439: "和平区",
    710440: "新社区",
    710441: "潭子区",
    710442: "大雅区",
    710443: "神冈区",
    710444: "大肚区",
    710445: "沙鹿区",
    710446: "龙井区",
    710447: "梧栖区",
    710448: "清水区",
    710449: "大甲区",
    710450: "外埔区",
    710451: "大安区",
    710499: "其它区",
    710507: "金沙镇",
    710508: "金湖镇",
    710509: "金宁乡",
    710510: "金城镇",
    710511: "烈屿乡",
    710512: "乌坵乡",
    710614: "南投市",
    710615: "中寮乡",
    710616: "草屯镇",
    710617: "国姓乡",
    710618: "埔里镇",
    710619: "仁爱乡",
    710620: "名间乡",
    710621: "集集镇",
    710622: "水里乡",
    710623: "鱼池乡",
    710624: "信义乡",
    710625: "竹山镇",
    710626: "鹿谷乡",
    710701: "仁爱区",
    710702: "信义区",
    710703: "中正区",
    710704: "中山区",
    710705: "安乐区",
    710706: "暖暖区",
    710707: "七堵区",
    710799: "其它区",
    710801: "东区",
    710802: "北区",
    710803: "香山区",
    710899: "其它区",
    710901: "东区",
    710902: "西区",
    710999: "其它区",
    711130: "万里区",
    711132: "板桥区",
    711133: "汐止区",
    711134: "深坑区",
    711135: "石碇区",
    711136: "瑞芳区",
    711137: "平溪区",
    711138: "双溪区",
    711139: "贡寮区",
    711140: "新店区",
    711141: "坪林区",
    711142: "乌来区",
    711143: "永和区",
    711144: "中和区",
    711145: "土城区",
    711146: "三峡区",
    711147: "树林区",
    711148: "莺歌区",
    711149: "三重区",
    711150: "新庄区",
    711151: "泰山区",
    711152: "林口区",
    711153: "芦洲区",
    711154: "五股区",
    711155: "八里区",
    711156: "淡水区",
    711157: "三芝区",
    711158: "石门区",
    711287: "宜兰市",
    711288: "头城镇",
    711289: "礁溪乡",
    711290: "壮围乡",
    711291: "员山乡",
    711292: "罗东镇",
    711293: "三星乡",
    711294: "大同乡",
    711295: "五结乡",
    711296: "冬山乡",
    711297: "苏澳镇",
    711298: "南澳乡",
    711299: "钓鱼台",
    711387: "竹北市",
    711388: "湖口乡",
    711389: "新丰乡",
    711390: "新埔镇",
    711391: "关西镇",
    711392: "芎林乡",
    711393: "宝山乡",
    711394: "竹东镇",
    711395: "五峰乡",
    711396: "横山乡",
    711397: "尖石乡",
    711398: "北埔乡",
    711399: "峨眉乡",
    711414: "中坜区",
    711415: "平镇区",
    711417: "杨梅区",
    711418: "新屋区",
    711419: "观音区",
    711420: "桃园区",
    711421: "龟山区",
    711422: "八德区",
    711423: "大溪区",
    711425: "大园区",
    711426: "芦竹区",
    711487: "中坜市",
    711488: "平镇市",
    711489: "龙潭乡",
    711490: "杨梅市",
    711491: "新屋乡",
    711492: "观音乡",
    711493: "桃园市",
    711494: "龟山乡",
    711495: "八德市",
    711496: "大溪镇",
    711497: "复兴乡",
    711498: "大园乡",
    711499: "芦竹乡",
    711520: "头份市",
    711582: "竹南镇",
    711583: "头份镇",
    711584: "三湾乡",
    711585: "南庄乡",
    711586: "狮潭乡",
    711587: "后龙镇",
    711588: "通霄镇",
    711589: "苑里镇",
    711590: "苗栗市",
    711591: "造桥乡",
    711592: "头屋乡",
    711593: "公馆乡",
    711594: "大湖乡",
    711595: "泰安乡",
    711596: "铜锣乡",
    711597: "三义乡",
    711598: "西湖乡",
    711599: "卓兰镇",
    711736: "员林市",
    711774: "彰化市",
    711775: "芬园乡",
    711776: "花坛乡",
    711777: "秀水乡",
    711778: "鹿港镇",
    711779: "福兴乡",
    711780: "线西乡",
    711781: "和美镇",
    711782: "伸港乡",
    711783: "员林镇",
    711784: "社头乡",
    711785: "永靖乡",
    711786: "埔心乡",
    711787: "溪湖镇",
    711788: "大村乡",
    711789: "埔盐乡",
    711790: "田中镇",
    711791: "北斗镇",
    711792: "田尾乡",
    711793: "埤头乡",
    711794: "溪州乡",
    711795: "竹塘乡",
    711796: "二林镇",
    711797: "大城乡",
    711798: "芳苑乡",
    711799: "二水乡",
    711982: "番路乡",
    711983: "梅山乡",
    711984: "竹崎乡",
    711985: "阿里山乡",
    711986: "中埔乡",
    711987: "大埔乡",
    711988: "水上乡",
    711989: "鹿草乡",
    711990: "太保市",
    711991: "朴子市",
    711992: "东石乡",
    711993: "六脚乡",
    711994: "新港乡",
    711995: "民雄乡",
    711996: "大林镇",
    711997: "溪口乡",
    711998: "义竹乡",
    711999: "布袋镇",
    712180: "斗南镇",
    712181: "大埤乡",
    712182: "虎尾镇",
    712183: "土库镇",
    712184: "褒忠乡",
    712185: "东势乡",
    712186: "台西乡",
    712187: "仑背乡",
    712188: "麦寮乡",
    712189: "斗六市",
    712190: "林内乡",
    712191: "古坑乡",
    712192: "莿桐乡",
    712193: "西螺镇",
    712194: "二仑乡",
    712195: "北港镇",
    712196: "水林乡",
    712197: "口湖乡",
    712198: "四湖乡",
    712199: "元长乡",
    712451: "崁顶乡",
    712467: "屏东市",
    712468: "三地门乡",
    712469: "雾台乡",
    712470: "玛家乡",
    712471: "九如乡",
    712472: "里港乡",
    712473: "高树乡",
    712474: "盐埔乡",
    712475: "长治乡",
    712476: "麟洛乡",
    712477: "竹田乡",
    712478: "内埔乡",
    712479: "万丹乡",
    712480: "潮州镇",
    712481: "泰武乡",
    712482: "来义乡",
    712483: "万峦乡",
    712484: "莰顶乡",
    712485: "新埤乡",
    712486: "南州乡",
    712487: "林边乡",
    712488: "东港镇",
    712489: "琉球乡",
    712490: "佳冬乡",
    712491: "新园乡",
    712492: "枋寮乡",
    712493: "枋山乡",
    712494: "春日乡",
    712495: "狮子乡",
    712496: "车城乡",
    712497: "牡丹乡",
    712498: "恒春镇",
    712499: "满州乡",
    712584: "台东市",
    712585: "绿岛乡",
    712586: "兰屿乡",
    712587: "延平乡",
    712588: "卑南乡",
    712589: "鹿野乡",
    712590: "关山镇",
    712591: "海端乡",
    712592: "池上乡",
    712593: "东河乡",
    712594: "成功镇",
    712595: "长滨乡",
    712596: "金峰乡",
    712597: "大武乡",
    712598: "达仁乡",
    712599: "太麻里乡",
    712686: "花莲市",
    712687: "新城乡",
    712688: "太鲁阁",
    712689: "秀林乡",
    712690: "吉安乡",
    712691: "寿丰乡",
    712692: "凤林镇",
    712693: "光复乡",
    712694: "丰滨乡",
    712695: "瑞穗乡",
    712696: "万荣乡",
    712697: "玉里镇",
    712698: "卓溪乡",
    712699: "富里乡",
    712794: "马公市",
    712795: "西屿乡",
    712796: "望安乡",
    712797: "七美乡",
    712798: "白沙乡",
    712799: "湖西乡",
    712896: "南竿乡",
    712897: "北竿乡",
    712898: "东引乡",
    712899: "莒光乡",
    810101: "中西区",
    810102: "湾仔区",
    810103: "东区",
    810104: "南区",
    810201: "九龙城区",
    810202: "油尖旺区",
    810203: "深水埗区",
    810204: "黄大仙区",
    810205: "观塘区",
    810301: "北区",
    810302: "大埔区",
    810303: "沙田区",
    810304: "西贡区",
    810305: "元朗区",
    810306: "屯门区",
    810307: "荃湾区",
    810308: "葵青区",
    810309: "离岛区",
    820102: "花地玛堂区",
    820103: "花王堂区",
    820104: "望德堂区",
    820105: "大堂区",
    820106: "风顺堂区",
    820202: "嘉模堂区",
    820203: "路氹填海区",
    820204: "圣方济各堂区" } };exports.default = _default;

/***/ }),

/***/ 21:
/*!**************************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/core/transformData.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 15);

/**
                                    * Transform the data for a request or a response
                                    *
                                    * @param {Object|String} data The data to be transformed
                                    * @param {Array} headers The headers for the request or response
                                    * @param {Array|Function} fns A single function or Array of functions
                                    * @returns {*} The resulting transformed data
                                    */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),

/***/ 22:
/*!***********************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/cancel/isCancel.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ 227:
/*!**************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/static/img/lybtn.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 228:
/*!**************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/static/img/zsbtn.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 229:
/*!**************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/static/img/close.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 23:
/*!****************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/defaults.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ 15);
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ 26);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded' };


function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ 27);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ 27);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
    utils.isArrayBuffer(data) ||
    utils.isBuffer(data) ||
    utils.isStream(data) ||
    utils.isFile(data) ||
    utils.isBlob(data))
    {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  } };


defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*' } };



utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 24)))

/***/ }),

/***/ 24:
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 25);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ 25:
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 24)))

/***/ }),

/***/ 26:
/*!***********************************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ 15);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ 263:
/*!***************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/static/img/filter.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAFFElEQVRYR+2YbYhUVRjH/8+9M+u4u7NJSdmLkC9UWB+WuXdmGD9dgwT9YH1oDayULLHcxcAtNCmRMswsCfOljJIiCdsPYmFCBU6QbHPnHvsgLEiLCcVuK7ZuTTu583KfeIY7ch1dd2Z9mSX2fDz3nPP87v95znOecwgAJRKJu/L5/BpmXgLgfgBB1LflAJwioq+CweDe7u7uPopGozOZeT8zWwD0+vJdZr1IRMeIaCUZhvEegI4JCFmmFtj3yTTNP5j5Dq+3T9O0D13XHa6nskTUzMyrAdwpHEQ0IIr2+TpsXdeXpFKpgXqCRqPRGcz8NTObHke/gB4EsNTryBPRvmw2u6Gnp+efesBaltWcyWS2AVjl29RfiusfYuZvAMz0wFwAWwBsU0plbyasYRiNAF4BsBGA5rn9NwCLRdGgpmlPMvO7zHyr97HIzO8A2KqU+utmwLa2tk4LBAIC2cnM5exzXtO0Ttd1PyeBmDdvXkMoFFpGRB+X/wTAvwC2h8Phrclk8sKNhLUsK5TJZDYS0cvMHPJsMRE9NzQ0dKC3t3ekBFpuhmE8D+BtAGGvb4SIOrPZ7Ec9PT2ShK97E5EaGxtXiUcBTPE8miGi9el0em/Z4CWgiURiai6XWwvgVQDN3qALRLQpGAzu6u7uFpWvWxN7+Xy+g5lfB1BWUjbxloaGhp1+e5eACoEX0J0AZHKpEZH84WtNTU27k8lk4XqQWpYVGB4ebmfmN5i57EGxtZmZt1du5MtAfWGwFcCLAKZ6sH8DWD1r1qyurq6u4rXAtrW16WfOnHmcmfcxc4u3lnhrp1Jqw5XWHhXUy2ebAbT73DJERC8x82dKqfx4YCXLENFyL6tMK4cXgD2hUGjz8ePHMzWByuB4PN5SLBZ3MPOzvsnniGid4zgHAEjOraVppmlKKtwBYLovtD5h5nVXS4WjKlpeRNx0+vTpTwG0AWjw+gcCgcDyVCr1HQCukpTi8fgjhUJB1prhzZFM0jV79uwVY4XTmKCyYCwWu61YLEr6WOY71vqYuePEiROHq1CWIpHIY1IFAbjbg5TQ+ULX9XW2bf851s9WBSqLzJ8///aRkZH9cpz5XPa7pmkv2LZ95CrKUiwWW+y67gfMfI9v7lFd15+ptgCqGlQMLFy4sGlwcPBwRZHdC+AppVTqSqqYphljZonnud53yRg/hMPhR5PJZNWFT02gYsi7EexmZlG2dCYT0SlmXqCU6vfDSrnmuu4xAA/4II9qmrYmnU5LsVF1qxlUuGKx2L2FQuEgEUV9row7jmNXgEZd173YR0QOgCccx/m1hk1YWnI8oKWJpmnKqbKrDBYIBBKpVOonP6jn9oshQUQdjuPsrlpG38AbChqNRisVnQQd1UvVuH5S0VqC/H+laCwWM4vFYtqXwm7+ZopEIqvkau2DiDiO87PfKxMFdC4RCZhcWX4B0FpZlU8IUFHOMIw5UrYC+FYpda4yxicM6FibbxJ0LIVq/T6paK2K+cdbljU9m82ybduD5RJuwilqGMYKAJJTpXrfJFdfSVUTDtQ0zSNexS8iy0vKTtd139J1/T5m/tGnfLtSas94PDfuerSiQF7JzPISWG45Ivree5l72Ne/VCnVVTdQMRyJRNqJ6E0At4wC0p/L5R48efLk+bqCLlq0aMrZs2ef9mK0/HpdYiIiuVavtW370HggS2uMd+KV5slbZ0tLy5x8Pr+eiBZ4j8ISo7uam5tT1/IS+B+9Ip7cZSn9rgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 27:
/*!********************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/adapters/xhr.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 15);
var settle = __webpack_require__(/*! ./../core/settle */ 28);
var cookies = __webpack_require__(/*! ./../helpers/cookies */ 31);
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ 18);
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ 32);
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ 35);
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ 36);
var createError = __webpack_require__(/*! ../core/createError */ 29);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    if (
    (utils.isBlob(requestData) || utils.isFile(requestData)) &&
    requestData.type)
    {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = unescape(encodeURIComponent(config.auth.password)) || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request };


      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
      request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
      cookies.read(config.xsrfCookieName) :
      undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/***/ }),

/***/ 28:
/*!*******************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/core/settle.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ 29);

/**
                                             * Resolve or reject a Promise based on response status.
                                             *
                                             * @param {Function} resolve A function that resolves the promise.
                                             * @param {Function} reject A function that rejects the promise.
                                             * @param {object} response The response.
                                             */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
    'Request failed with status code ' + response.status,
    response.config,
    null,
    response.request,
    response));

  }
};

/***/ }),

/***/ 29:
/*!************************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/core/createError.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ 30);

/**
                                               * Create an Error with the specified message, config, error code, request and response.
                                               *
                                               * @param {string} message The error message.
                                               * @param {Object} config The config.
                                               * @param {string} [code] The error code (for example, 'ECONNABORTED').
                                               * @param {Object} [request] The request.
                                               * @param {Object} [response] The response.
                                               * @returns {Error} The created error.
                                               */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!*************************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/core/enhanceError.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Update an Error with the specified config, error code, and response.
               *
               * @param {Error} error The error to update.
               * @param {Object} config The config.
               * @param {string} [code] The error code (for example, 'ECONNABORTED').
               * @param {Object} [request] The request.
               * @param {Object} [response] The response.
               * @returns {Error} The error.
               */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code };

  };
  return error;
};

/***/ }),

/***/ 31:
/*!***********************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/helpers/cookies.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 15);

module.exports =
utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    } };

}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {return null;},
    remove: function remove() {} };

}();

/***/ }),

/***/ 32:
/*!**************************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/core/buildFullPath.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ 33);
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ 34);

/**
                                                      * Creates a new URL by combining the baseURL with the requestedURL,
                                                      * only when the requestedURL is not already an absolute URL.
                                                      * If the requestURL is absolute, this function returns the requestedURL untouched.
                                                      *
                                                      * @param {string} baseURL The base URL
                                                      * @param {string} requestedURL Absolute or relative URL to combine
                                                      * @returns {string} The combined full path
                                                      */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

/***/ }),

/***/ 33:
/*!*****************************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Determines whether the specified URL is absolute
               *
               * @param {string} url The URL to test
               * @returns {boolean} True if the specified URL is absolute, otherwise false
               */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ 34:
/*!***************************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/helpers/combineURLs.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Creates a new URL by combining the specified URLs
               *
               * @param {string} baseURL The base URL
               * @param {string} relativeURL The relative URL
               * @returns {string} The combined URL
               */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ?
  baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') :
  baseURL;
};

/***/ }),

/***/ 35:
/*!****************************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 15);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
'age', 'authorization', 'content-length', 'content-type', 'etag',
'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
'last-modified', 'location', 'max-forwards', 'proxy-authorization',
'referer', 'retry-after', 'user-agent'];


/**
                                          * Parse headers into an object
                                          *
                                          * ```
                                          * Date: Wed, 27 Aug 2014 08:58:49 GMT
                                          * Content-Type: application/json
                                          * Connection: keep-alive
                                          * Transfer-Encoding: chunked
                                          * ```
                                          *
                                          * @param {String} headers Headers needing to be parsed
                                          * @returns {Object} Headers parsed into an object
                                          */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {return parsed;}

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

/***/ }),

/***/ 36:
/*!*******************************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 15);

module.exports =
utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
                 * Parse a URL to discover it's components
                 *
                 * @param {String} url The URL to be parsed
                 * @returns {Object}
                 */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ?
      urlParsingNode.pathname :
      '/' + urlParsingNode.pathname };

  }

  originURL = resolveURL(window.location.href);

  /**
                                                * Determine if a URL shares the same origin as the current location
                                                *
                                                * @param {String} requestURL The URL to test
                                                * @returns {boolean} True if URL shares the same origin, otherwise false
                                                */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol &&
    parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),

/***/ 37:
/*!************************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/core/mergeConfig.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ 15);

/**
                                  * Config-specific merge-function which creates a new config-object
                                  * by merging two configuration objects together.
                                  *
                                  * @param {Object} config1
                                  * @param {Object} config2
                                  * @returns {Object} New object resulting from merging config2 to config1
                                  */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
  'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
  'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
  'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
  'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
  'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'];

  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys.
  concat(mergeDeepPropertiesKeys).
  concat(defaultToConfig2Keys).
  concat(directMergeKeys);

  var otherKeys = Object.
  keys(config1).
  concat(Object.keys(config2)).
  filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};

/***/ }),

/***/ 38:
/*!*********************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/cancel/Cancel.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * A `Cancel` is an object that is thrown when an operation is canceled.
               *
               * @class
               * @param {string=} message The message.
               */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),

/***/ 39:
/*!**************************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/cancel/CancelToken.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ 38);

/**
                                   * A `CancelToken` is an object that can be used to request cancellation of an operation.
                                   *
                                   * @class
                                   * @param {Function} executor The executor function.
                                   */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
   * Throws a `Cancel` if cancellation has been requested.
   */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
    * Returns an object that contains a new `CancelToken` and a function that, when called,
    * cancels the `CancelToken`.
    */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel };

};

module.exports = CancelToken;

/***/ }),

/***/ 4:
/*!****************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/pages.json ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 40:
/*!**********************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/axios/lib/helpers/spread.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Syntactic sugar for invoking a function and expanding an array for arguments.
               *
               * Common use case would be to use `Function.prototype.apply`.
               *
               *  ```js
               *  function f(x, y, z) {}
               *  var args = [1, 2, 3];
               *  f.apply(null, args);
               *  ```
               *
               * With `spread` this example can be re-written.
               *
               *  ```js
               *  spread(function(x, y, z) {})([1, 2, 3]);
               *  ```
               *
               * @param {Function} callback
               * @returns {Function}
               */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ 41:
/*!********************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/store/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 42));
var _vuexPersistedstate = _interopRequireDefault(__webpack_require__(/*! vuex-persistedstate */ 43));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_vue.default.use(_vuex.default);
var initData = {
  username: "",
  favorites: "" };

var state = {};
var mutations = {};var _loop = function _loop(
key) {
  state[key] = initData[key];
  mutations[key] = function (storeState, obj) {
    storeState[key] = obj;
  };};for (var key in initData) {_loop(key);
}
var store = new _vuex.default.Store({
  state: state,
  mutations: mutations,
  plugins: [
  // 可以有多个持久化实例
  (0, _vuexPersistedstate.default)({
    // key: 'app_config_data',  // 状态保存到本地的 key
    // paths: ['favorites', 'username'],  // 要持久化的状态，在state里面取，如果有嵌套，可以  a.b.c
    storage: {
      // 存储方式定义
      getItem: function getItem(key) {return uni.getStorageSync(key);}, // 获取
      setItem: function setItem(key, value) {return uni.setStorageSync(key, value);}, // 存储
      removeItem: function removeItem(key) {return uni.removeStorageSync(key);} // 删除
    } })] });var _default =



store;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 42:
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 43:
/*!*********************************************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = _default;var r = function r(_r) {return function (r) {return !!r && "object" == typeof r;}(_r) && !function (r) {var t = Object.prototype.toString.call(r);return "[object RegExp]" === t || "[object Date]" === t || function (r) {return r.$$typeof === e;}(r);}(_r);},e = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;function t(r, e) {return !1 !== e.clone && e.isMergeableObject(r) ? u(Array.isArray(r) ? [] : {}, r, e) : r;}function n(r, e, n) {return r.concat(e).map(function (r) {return t(r, n);});}function o(r) {return Object.keys(r).concat(function (r) {return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(r).filter(function (e) {return r.propertyIsEnumerable(e);}) : [];}(r));}function c(r, e) {try {return e in r;} catch (r) {return !1;}}function u(e, i, a) {(a = a || {}).arrayMerge = a.arrayMerge || n, a.isMergeableObject = a.isMergeableObject || r, a.cloneUnlessOtherwiseSpecified = t;var f = Array.isArray(i);return f === Array.isArray(e) ? f ? a.arrayMerge(e, i, a) : function (r, e, n) {var i = {};return n.isMergeableObject(r) && o(r).forEach(function (e) {i[e] = t(r[e], n);}), o(e).forEach(function (o) {(function (r, e) {return c(r, e) && !(Object.hasOwnProperty.call(r, e) && Object.propertyIsEnumerable.call(r, e));})(r, o) || (i[o] = c(r, o) && n.isMergeableObject(e[o]) ? function (r, e) {if (!e.customMerge) return u;var t = e.customMerge(r);return "function" == typeof t ? t : u;}(o, n)(r[o], e[o], n) : t(e[o], n));}), i;}(e, i, a) : t(i, a);}u.all = function (r, e) {if (!Array.isArray(r)) throw new Error("first argument should be an array");return r.reduce(function (r, t) {return u(r, t, e);}, {});};var i = u;function _default(r) {var e = (r = r || {}).storage || window && window.localStorage,t = r.key || "vuex";function n(r, e) {var t = e.getItem(r);try {return void 0 !== t ? JSON.parse(t) : void 0;} catch (r) {}}function o() {return !0;}function c(r, e, t) {return t.setItem(r, JSON.stringify(e));}function u(r, e) {return Array.isArray(e) ? e.reduce(function (e, t) {return function (r, e, t, n) {return (e = e.split ? e.split(".") : e.slice(0)).slice(0, -1).reduce(function (r, e) {return r[e] = r[e] || {};}, r)[e.pop()] = t, r;}(e, t, (n = r, void 0 === (n = ((o = t).split ? o.split(".") : o).reduce(function (r, e) {return r && r[e];}, n)) ? void 0 : n));var n, o;}, {}) : r;}function a(r) {return function (e) {return r.subscribe(e);};}(r.assertStorage || function () {e.setItem("@@", 1), e.removeItem("@@");})(e);var f,s = function s() {return (r.getState || n)(t, e);};return r.fetchBeforeUse && (f = s()), function (n) {r.fetchBeforeUse || (f = s()), "object" == typeof f && null !== f && (n.replaceState(r.overwrite ? f : i(n.state, f, { arrayMerge: r.arrayMerger || function (r, e) {return e;}, clone: !1 })), (r.rehydrated || function () {})(n)), (r.subscriber || a)(n)(function (n, i) {(r.filter || o)(n) && (r.setState || c)(t, (r.reducer || u)(i, r.paths), e);});};}

/***/ }),

/***/ 50:
/*!*********************************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/wxcomponents/vant/dist/dialog/dialog.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var queue = [];
function getContext() {
  var pages = getCurrentPages();
  return pages[pages.length - 1];
}
var Dialog = function Dialog(options) {
  options = Object.assign(Object.assign({}, Dialog.currentOptions), options);
  return new Promise(function (resolve, reject) {
    var context = options.context || getContext();
    var dialog = context.selectComponent(options.selector);
    delete options.context;
    delete options.selector;
    if (dialog) {
      dialog.setData(
      Object.assign({ onCancel: reject, onConfirm: resolve }, options));

      wx.nextTick(function () {
        dialog.setData({ show: true });
      });
      queue.push(dialog);
    } else {
      console.warn(
      '未找到 van-dialog 节点，请确认 selector 及 context 是否正确');

    }
  });
};
Dialog.defaultOptions = {
  show: false,
  title: '',
  width: null,
  theme: 'default',
  message: '',
  zIndex: 100,
  overlay: true,
  selector: '#van-dialog',
  className: '',
  asyncClose: false,
  transition: 'scale',
  customStyle: '',
  messageAlign: '',
  overlayStyle: '',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: '' };

Dialog.alert = Dialog;
Dialog.confirm = function (options) {return (
    Dialog(Object.assign({ showCancelButton: true }, options)));};
Dialog.close = function () {
  queue.forEach(function (dialog) {
    dialog.close();
  });
  queue = [];
};
Dialog.stopLoading = function () {
  queue.forEach(function (dialog) {
    dialog.stopLoading();
  });
};
Dialog.setDefaultOptions = function (options) {
  Object.assign(Dialog.currentOptions, options);
};
Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = Object.assign({}, Dialog.defaultOptions);
};
Dialog.resetDefaultOptions();var _default =
Dialog;exports.default = _default;

/***/ }),

/***/ 57:
/*!************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/static/img/vip.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 58:
/*!*************************************************************!*\
  !*** /Users/lijiacheng/代码库/test/uniapp/static/img/heat.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAADpUlEQVRYR8WYXWgcVRTHf2cmidjGiEiECn2wfmCWiqBSSnwJfpAXIxI62bVNoGgNFiyKIG0fSimo0DzWIlawtCmt2Z2KWIMPQjFPfVAQBJtSSosKSiGtqbVCPmbnlDOdDbtxd2c/9T4Nd875n//cc+69/zNCmaGedy+O8xj5/AjwAvAIoIhcAc7iujk6O3+WEyf+Kes/NraW5eWNBEEaeB6RDbHd5cgfssBF8f2/VvtL8YR6novIZsLwLeAloLtcQGAe+BLXPSTZ7E8lGOn0k+TzbwOvAPdV8L8FfAMcRuSc+H6+YFdKaGRkkDA8AqwHnApghWkFZunoGJepqXM2qZlMP0HwKZACSrD/hSUSAr8j8qbkckYuGpGT7t/vMDs7gOo0cHcCkdLXIj8ClhobWVSfqtN/AXiZVOqsHDgQ3iHkeU/EYH11ga18lnyBqmENN+QPF3HdtKVfdNeuu7h69UNULe9ug4CFGmjU39J3mO7u3aLDwxtw3W9RfbhBMq1xE/kFeFHU88ZQPZ5YhK0JWw3FjpXXjNBJVLe2P15NEXKiW7Zcig++mjzaaiRy2QjdBO5pa6BawUVuGaG/q5zItUK1xk7kphG6ADzeGsQmUUQuWFGfQXWoSahWuX9lhHai+nGrEJvCcZxx0XTaZIZdjvc3Bda88zW6uvpFt23rYXHxEyDzPx6OphxOsbS0U9RufM8bQvVYFf3S/PdXR/gTx9lOLjdduO27EDlGGL7a7shl8R3nc1S3i+8vrYgoHR1dx8LCGeCZ/5SU6SnXHZKpqT8s7moJ+zSqOaCggdvN7Vdc15Ns9ocVaVUcMa6nEVQ/AnrbzOY6jvMOfX2nTCmWJWSTOj7eyY0bWwnDCeCBNpGyIt5jssfqpjhGWSEeaezz5weBz4B1LSZ1Dcd5A9Wvi7uNiitUeBGnbxDVQ8CjLSElYn3Zu6RS08VpSlyhkrryvE3AB8BzqCa1RpV4mxr8DtV9cvp01DJVGtV7p9hLM5n1BMFBwDrZeoW8NQA5RPaI7/+WtNI1EYqK3a6Y5eUJwnAUWJsEHL83rTVJT89eOXrUnhNHzYRWduD8/A5U3wMeSkC/hMhB5uaOy8xMkMgkNqiLUERqYKCD3t5nox1YqXUSMdH3OvB9uZ3UdA2VA9BM5kGC4CTQD3TFNouIzABj4vtzta5KXbusGqh6Xq/tHGBHbHeENWvel8nJ642QMZ+6U7Y6kHpeNyK7o/9HqhPi+/arpeFxG5vkMj+jUNyjAAAAAElFTkSuQmCC"

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map