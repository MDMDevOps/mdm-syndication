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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/frame.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/frame.js":
/*!******************************!*\
  !*** ./src/scripts/frame.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("jQuery(function ($) {\n  'use strict';\n\n  var resizeTimeout;\n  var instance = false;\n  /**\n   * Ignore resize events as long as an actualResizeHandler execution is in the queue\n   * Used to boost performance of resize events\n   * The actualResizeHandler will execute at a rate of 15fps\n   */\n\n  var _resize = function _resize() {\n    if (!resizeTimeout) {\n      resizeTimeout = setTimeout(function () {\n        resizeTimeout = null;\n\n        _report();\n      }, 66);\n    }\n  };\n  /**\n   * Report resize to top window\n   */\n\n\n  var _report = function _report() {\n    top.postMessage({\n      height: $('body').height(),\n      trigger: '_resize',\n      reporter: 'd054e23c06f84723f8e5bbc8eccb308b',\n      instance: instance\n    }, '*');\n  };\n  /**\n   * If this is embedded content\n   */\n\n\n  if (top !== window) {\n    /**\n     * get the instance\n     */\n    instance = $('body').data('instance');\n    /**\n     * Set links to open in new tab\n     */\n\n    $('a').attr('target', '_blank');\n    /**\n     * Bind resize events\n     */\n\n    $(window).on('resize', _resize);\n    /**\n     * Do initial resize\n     */\n\n    _report();\n    /**\n     * set a timeout to run in case events don't happen as expected\n     */\n\n\n    setTimeout(function () {\n      _report();\n    }, 1000);\n  }\n});\n\n//# sourceURL=webpack:///./src/scripts/frame.js?");

/***/ })

/******/ });