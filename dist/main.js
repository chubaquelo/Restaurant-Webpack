/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_footer.js":
/*!************************!*\
  !*** ./src/_footer.js ***!
  \************************/
/***/ ((module) => {

eval("function footer() {\n  var footer = document.createElement('footer');\n  footer.textContent = 'Copyrighted® Meals and Restaurant 2021 - Do not copy our recipes.';\n  return footer;\n}\n\nmodule.exports = footer();\n\n//# sourceURL=webpack://restaurant-webpack/./src/_footer.js?");

/***/ }),

/***/ "./src/_header.js":
/*!************************!*\
  !*** ./src/_header.js ***!
  \************************/
/***/ ((module) => {

eval("function header() {\n  var header = document.createElement('header');\n  var nav = document.createElement('nav');\n  var ul = document.createElement('ul');\n  var li1 = document.createElement('li');\n  var li2 = document.createElement('li');\n  var li3 = document.createElement('li');\n  var li4 = document.createElement('li');\n  li1.textContent = 'Home';\n  li2.textContent = 'About Us';\n  li3.textContent = 'Our Meals';\n  li4.textContent = 'Contact Us';\n  header.append(nav);\n  nav.append(ul);\n  ul.append(li1, li2, li3, li4);\n  return header;\n}\n\nmodule.exports = header();\n\n//# sourceURL=webpack://restaurant-webpack/./src/_header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadIndex */ \"./src/loadIndex.js\");\n/* harmony import */ var _loadAboutUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadAboutUs */ \"./src/loadAboutUs.js\");\n/* harmony import */ var _loadMeals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMeals */ \"./src/loadMeals.js\");\n/* harmony import */ var _loadContactUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadContactUs */ \"./src/loadContactUs.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_header */ \"./src/_header.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_footer */ \"./src/_footer.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_footer__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n // Index default load\n\nvar body = document.querySelector('body');\nvar mainDiv = document.querySelector('#content');\nbody.prepend((_header__WEBPACK_IMPORTED_MODULE_4___default()));\nmainDiv.appendChild((0,_loadIndex__WEBPACK_IMPORTED_MODULE_0__.default)());\nbody.append((_footer__WEBPACK_IMPORTED_MODULE_5___default())); // Functions for menus\n\nvar goToIndex = function goToIndex() {\n  mainDiv.textContent = '';\n  mainDiv.appendChild((0,_loadIndex__WEBPACK_IMPORTED_MODULE_0__.default)());\n};\n\nvar goToAbout = function goToAbout() {\n  mainDiv.textContent = '';\n  mainDiv.appendChild((0,_loadAboutUs__WEBPACK_IMPORTED_MODULE_1__.default)());\n};\n\nvar goToMeals = function goToMeals() {\n  mainDiv.textContent = '';\n  mainDiv.appendChild((0,_loadMeals__WEBPACK_IMPORTED_MODULE_2__.default)());\n};\n\nvar goToContactUs = function goToContactUs() {\n  mainDiv.textContent = '';\n  mainDiv.appendChild((0,_loadContactUs__WEBPACK_IMPORTED_MODULE_3__.default)());\n}; // Event listener for header nav\n\n\nvar btnHome = document.querySelector('li:first-of-type');\nbtnHome.addEventListener('click', goToIndex);\nvar btnAboutUs = document.querySelector('li:nth-of-type(2)');\nbtnAboutUs.addEventListener('click', goToAbout);\nvar btnOurMeals = document.querySelector('li:nth-of-type(3)');\nbtnOurMeals.addEventListener('click', goToMeals);\nvar btnContactUs = document.querySelector('li:last-of-type');\nbtnContactUs.addEventListener('click', goToContactUs);\n\n//# sourceURL=webpack://restaurant-webpack/./src/index.js?");

/***/ }),

/***/ "./src/loadAboutUs.js":
/*!****************************!*\
  !*** ./src/loadAboutUs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_about_us_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/about-us.jpg */ \"./src/img/about-us.jpg\");\n\n\nvar loadAboutUs = function loadAboutUs() {\n  var mainDiv = document.querySelector('#content');\n  mainDiv.textContent = '';\n  var content = document.createElement('div');\n  var main = document.createElement('main');\n  var welcomeClass = document.createElement('div');\n  welcomeClass.className = 'welcome';\n  var h1 = document.createElement('h1');\n  var welcomeContentClass = document.createElement('div');\n  welcomeContentClass.className = 'welcome-content-second';\n  var p = document.createElement('p');\n  p.className = 'welcome-text';\n  var img = document.createElement('img');\n  img.className = 'about-img';\n  img.src = _img_about_us_jpg__WEBPACK_IMPORTED_MODULE_0__.default;\n  h1.textContent = 'About Us';\n  p.textContent = 'We are the oldest restaurant on earth. We cook from rats to caviar, just ask.';\n  content.append(main);\n  main.append(welcomeClass);\n  welcomeClass.append(h1, welcomeContentClass);\n  welcomeContentClass.append(p, img);\n  return content;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAboutUs);\n\n//# sourceURL=webpack://restaurant-webpack/./src/loadAboutUs.js?");

/***/ }),

/***/ "./src/loadContactUs.js":
/*!******************************!*\
  !*** ./src/loadContactUs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_pidgeon_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/pidgeon.jpg */ \"./src/img/pidgeon.jpg\");\n\n\nvar loadContactUs = function loadContactUs() {\n  var mainDiv = document.querySelector('#content');\n  mainDiv.textContent = '';\n  var content = document.createElement('div');\n  var main = document.createElement('main');\n  var welcomeClass = document.createElement('div');\n  welcomeClass.className = 'welcome';\n  var h1 = document.createElement('h1');\n  var welcomeContentClass = document.createElement('div');\n  welcomeContentClass.className = 'welcome-content-second';\n  var p = document.createElement('p');\n  p.className = 'welcome-text';\n  var img = document.createElement('img');\n  img.className = 'contact-img';\n  img.src = _img_pidgeon_jpg__WEBPACK_IMPORTED_MODULE_0__.default;\n  h1.textContent = 'Contact Us';\n  p.textContent = 'You can scream out loud with our name, phone us or send a pidgeon with your order.';\n  content.append(main);\n  main.append(welcomeClass);\n  welcomeClass.append(h1, welcomeContentClass);\n  welcomeContentClass.append(p, img);\n  return content;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactUs);\n\n//# sourceURL=webpack://restaurant-webpack/./src/loadContactUs.js?");

/***/ }),

/***/ "./src/loadIndex.js":
/*!**************************!*\
  !*** ./src/loadIndex.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/restaurant.jpg */ \"./src/img/restaurant.jpg\");\n\n\nvar loadIndex = function loadIndex() {\n  var content = document.createElement('div');\n  var main = document.createElement('main');\n  var welcomeClass = document.createElement('div');\n  welcomeClass.className = 'welcome';\n  var h1 = document.createElement('h1');\n  var welcomeContentClass = document.createElement('div');\n  welcomeContentClass.className = 'welcome-content';\n  var img = document.createElement('img');\n  img.src = _img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__.default;\n  var p = document.createElement('p');\n  p.className = 'welcome-text';\n  h1.textContent = 'Welcome to Microrestaurant!';\n  p.textContent = 'Welcome to our restaurant. We are pleased to receive you and we are commited to treat you as our most important friend in here. Our meals will deloit you.';\n  content.append(main);\n  main.append(welcomeClass);\n  welcomeClass.append(h1, welcomeContentClass);\n  welcomeContentClass.append(img, p);\n  return content;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadIndex);\n\n//# sourceURL=webpack://restaurant-webpack/./src/loadIndex.js?");

/***/ }),

/***/ "./src/loadMeals.js":
/*!**************************!*\
  !*** ./src/loadMeals.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_meals_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/meals.jpg */ \"./src/img/meals.jpg\");\n\n\nvar loadMeals = function loadMeals() {\n  var mainDiv = document.querySelector('#content');\n  mainDiv.textContent = '';\n  var content = document.createElement('div');\n  var main = document.createElement('main');\n  var welcomeClass = document.createElement('div');\n  welcomeClass.className = 'welcome';\n  var h1 = document.createElement('h1');\n  var welcomeContentClass = document.createElement('div');\n  welcomeContentClass.className = 'welcome-content-second';\n  var p = document.createElement('p');\n  var img = document.createElement('img');\n  img.className = 'meals-img';\n  img.src = _img_meals_jpg__WEBPACK_IMPORTED_MODULE_0__.default;\n  p.className = 'welcome-text';\n  h1.textContent = 'Our Meals';\n  p.textContent = 'We have all kind of meals. Pizza, sandwiches, pasta, ice cream, and tomato flowers.';\n  content.append(main);\n  main.append(welcomeClass);\n  welcomeClass.append(h1, welcomeContentClass);\n  welcomeContentClass.append(p, img);\n  return content;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMeals);\n\n//# sourceURL=webpack://restaurant-webpack/./src/loadMeals.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: center;\\r\\n  position: sticky;\\r\\n}\\r\\n\\r\\nli {\\r\\n  display: inline-block;\\r\\n  margin: 0 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  width: 100vw;\\r\\n  min-height: 80vh;\\r\\n  margin: 15px;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.welcome {\\r\\n  width: 75%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.welcome-content {\\r\\n  display: flex;\\r\\n  margin-top: 5%;\\r\\n}\\r\\n.welcome-content-second {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n.meals-img, .about-img, .contact-img {\\r\\n  margin: 20px auto;\\r\\n}\\r\\n.welcome-text {\\r\\n  padding-left: 15px;\\r\\n  font-size: 1.3em;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  \\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/img/about-us.jpg":
/*!******************************!*\
  !*** ./src/img/about-us.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/about-us.jpg\");\n\n//# sourceURL=webpack://restaurant-webpack/./src/img/about-us.jpg?");

/***/ }),

/***/ "./src/img/meals.jpg":
/*!***************************!*\
  !*** ./src/img/meals.jpg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/meals.jpg\");\n\n//# sourceURL=webpack://restaurant-webpack/./src/img/meals.jpg?");

/***/ }),

/***/ "./src/img/pidgeon.jpg":
/*!*****************************!*\
  !*** ./src/img/pidgeon.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/pidgeon.jpg\");\n\n//# sourceURL=webpack://restaurant-webpack/./src/img/pidgeon.jpg?");

/***/ }),

/***/ "./src/img/restaurant.jpg":
/*!********************************!*\
  !*** ./src/img/restaurant.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/restaurant.jpg\");\n\n//# sourceURL=webpack://restaurant-webpack/./src/img/restaurant.jpg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurant-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;