/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/embed.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/embed.js":
/*!******************************!*\
  !*** ./src/scripts/embed.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _includes_embed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./includes/embed.js */ \"./src/scripts/includes/embed.js\");\n\n/**\n * Script to query and embed content\n */\n\nvar _initEmbeds = function _initEmbeds() {\n  /**\n   * divs that need content embedded\n   */\n  var embeddable = document.getElementsByClassName('mdm-syndicated-embed');\n  /**\n   * Init each\n   */\n\n  for (var i = 0; i < embeddable.length; i++) {\n    new _includes_embed_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](embeddable[i]);\n  }\n};\n\ndocument.addEventListener('DOMContentLoaded', _initEmbeds, false);\n\n//# sourceURL=webpack:///./src/scripts/embed.js?");

/***/ }),

/***/ "./src/scripts/includes/embed.js":
/*!***************************************!*\
  !*** ./src/scripts/includes/embed.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (element) {\n  var xhr,\n      embed,\n      instance = 0;\n\n  var requestListener = function requestListener(event) {\n    try {\n      var response = JSON.parse(xhr.responseText);\n      window.addEventListener('message', _receive, false);\n      instance = response.instance;\n      element.innerHTML = response.content;\n      embed = getElementsByTagName('embed');\n    } catch (error) {// nothing to do here right now\n    }\n  };\n\n  var _receive = function _receive(message) {\n    /**\n     * If it doesn't come from our plugin, we can bail\n     */\n    if (message.data.reporter !== 'd054e23c06f84723f8e5bbc8eccb308b') {\n      return false;\n    }\n    /**\n     * if it's not this exact instance, we can bail\n     */\n\n\n    if (instance !== message.data.instance) {\n      return false;\n    }\n    /**\n     * If we don't have a height, we can bail\n     */\n\n\n    if (message.data.height === undefined) {\n      return false;\n    }\n    /**\n     * Get the frame height reported by source\n     */\n\n\n    var frameHeight = parseInt(message.data.height);\n    /**\n     * If we have a number, do the resize\n     */\n\n    if (!isNaN(frameHeight)) {\n      element.style.height = frameHeight + 'px';\n    }\n  };\n\n  var _init = function _init() {\n    /**\n     * Get the source url\n     */\n    var src = element.dataset.src;\n    /**\n     * Get the id\n     */\n\n    var id = element.dataset.id;\n    /**\n     * Make sure we have both\n     */\n\n    if (src === undefined || id === undefined) {\n      return false;\n    }\n    /**\n     * Create a new request object\n     */\n\n\n    xhr = new XMLHttpRequest();\n    /**\n     * Add request listener\n     */\n\n    xhr.addEventListener('load', requestListener);\n    /**\n     * Open the request\n     */\n\n    xhr.open('GET', src + '/wp-json/syndication/v2/embed/' + id);\n    /**\n     * Send the request\n     */\n\n    xhr.send();\n  };\n\n  return _init();\n});\n\n//# sourceURL=webpack:///./src/scripts/includes/embed.js?");

/***/ })

/******/ });