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

eval("function footer() {\r\n  const footer = document.createElement(\"footer\");\r\n  footer.textContent = \"Copyrighted® Meals and Restaurant 2021 - Do not copy our recipes.\";\r\n  content.append(footer);\r\n  return footer;\r\n};\r\n\r\nmodule.exports = footer();\r\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/_footer.js?");

/***/ }),

/***/ "./src/_header.js":
/*!************************!*\
  !*** ./src/_header.js ***!
  \************************/
/***/ ((module) => {

eval("function header() {\r\n  const header = document.createElement(\"header\");\r\n  const nav = document.createElement(\"nav\");\r\n  const ul = document.createElement(\"ul\");\r\n  const li1 = document.createElement(\"li\");\r\n  const li2 = document.createElement(\"li\");\r\n  const li3 = document.createElement(\"li\");\r\n  const li4 = document.createElement(\"li\");\r\n\r\n  li1.textContent = 'Home';\r\n  li2.textContent = \"About Us\";\r\n  li3.textContent = \"Our Meals\";\r\n  li4.textContent = \"Contact Us\";\r\n\r\n  header.append(nav);\r\n  nav.append(ul);\r\n  ul.append(li1, li2, li3, li4);\r\n  \r\n  return header;\r\n};\r\n\r\nmodule.exports = header();\n\n//# sourceURL=webpack://restaurant-webpack/./src/_header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadIndex.js */ \"./src/loadIndex.js\");\n/* harmony import */ var _loadIndex_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadIndex_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loadAboutUs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadAboutUs.js */ \"./src/loadAboutUs.js\");\n/* harmony import */ var _loadAboutUs_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loadAboutUs_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loadMeals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMeals */ \"./src/loadMeals.js\");\n/* harmony import */ var _loadMeals__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadMeals__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _loadContactUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadContactUs */ \"./src/loadContactUs.js\");\n/* harmony import */ var _loadContactUs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loadContactUs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_header */ \"./src/_header.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_footer */ \"./src/_footer.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_footer__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Index default load\r\nconst body = document.querySelector(\"body\");\r\nconst mainDiv = document.querySelector(\"#content\");\r\nbody.prepend((_header__WEBPACK_IMPORTED_MODULE_4___default()));\r\nmainDiv.appendChild((_loadIndex_js__WEBPACK_IMPORTED_MODULE_0___default()));\r\nbody.append((_footer__WEBPACK_IMPORTED_MODULE_5___default()));\r\n\r\n// Functions for menus\r\nconst goToIndex = () => {\r\n  mainDiv.textContent = \"\";\r\n  mainDiv.appendChild((_loadIndex_js__WEBPACK_IMPORTED_MODULE_0___default()));\r\n};\r\n\r\nconst goToAbout = () => {\r\n  mainDiv.textContent = \"\";\r\n  mainDiv.appendChild((_loadAboutUs_js__WEBPACK_IMPORTED_MODULE_1___default()));\r\n}\r\n\r\nconst goToMeals = () => {\r\n  mainDiv.textContent = \"\";\r\n  mainDiv.appendChild((_loadMeals__WEBPACK_IMPORTED_MODULE_2___default()));\r\n};\r\n\r\nconst goToContactUs = () => {\r\n  mainDiv.textContent = \"\";\r\n  mainDiv.appendChild((_loadContactUs__WEBPACK_IMPORTED_MODULE_3___default()));\r\n}\r\n\r\n// Event listener for header nav\r\n  const btnHome = document.querySelector(\"li:first-of-type\");\r\n  btnHome.addEventListener(\"click\", goToIndex);\r\n\r\n  const btnAboutUs = document.querySelector(\"li:nth-of-type(2)\");\r\n  btnAboutUs.addEventListener(\"click\", goToAbout);\r\n\r\n  const btnOurMeals = document.querySelector(\"li:nth-of-type(3)\");\r\n  btnOurMeals.addEventListener(\"click\", goToMeals);\r\n\r\n  const btnContactUs = document.querySelector(\"li:last-of-type\");\r\n  btnContactUs.addEventListener(\"click\", goToContactUs);\r\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/index.js?");

/***/ }),

/***/ "./src/loadAboutUs.js":
/*!****************************!*\
  !*** ./src/loadAboutUs.js ***!
  \****************************/
/***/ ((module) => {

eval("function loadAboutUs() {\r\n  const mainDiv = document.querySelector(\"#content\");\r\n  mainDiv.textContent = \"\";\r\n  const content = document.createElement(\"div\");\r\n  const main = document.createElement(\"main\");\r\n  const welcomeClass = document.createElement(\"div\");\r\n  welcomeClass.className = \"welcome\";\r\n  const h1 = document.createElement(\"h1\");\r\n  const welcomeContentClass = document.createElement(\"div\");\r\n  welcomeContentClass.className = 'welcome-content-second'\r\n  const p = document.createElement(\"p\");\r\n  p.className = \"welcome-text\";\r\n   const img = document.createElement(\"img\");\r\n   img.className = \"about-img\";\r\n   img.src = \"./img/about-us.jpg\";\r\n\r\n  h1.textContent = \"About Us\";\r\n  p.textContent = \"We are the oldest restaurant on earth. We cook from rats to caviar, just ask.\";\r\n\r\n  content.append(main);\r\n  main.append(welcomeClass);\r\n  welcomeClass.append(h1, welcomeContentClass);\r\n  welcomeContentClass.append(p, img);\r\n  \r\n  return content;\r\n};\r\n\r\nmodule.exports = loadAboutUs();\r\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/loadAboutUs.js?");

/***/ }),

/***/ "./src/loadContactUs.js":
/*!******************************!*\
  !*** ./src/loadContactUs.js ***!
  \******************************/
/***/ ((module) => {

eval("function loadContactUs() {\r\n  const mainDiv = document.querySelector(\"#content\");\r\n  mainDiv.textContent = \"\";\r\n  const content = document.createElement(\"div\");\r\n  const main = document.createElement(\"main\");\r\n  const welcomeClass = document.createElement(\"div\");\r\n  welcomeClass.className = \"welcome\";\r\n  const h1 = document.createElement(\"h1\");\r\n  const welcomeContentClass = document.createElement(\"div\");\r\n  welcomeContentClass.className = \"welcome-content-second\";\r\n  const p = document.createElement(\"p\");\r\n  p.className = \"welcome-text\";\r\n  const img = document.createElement(\"img\");\r\n  img.className = \"contact-img\";\r\n  img.src = \"./img/pidgeon.jpg\";\r\n\r\n  h1.textContent = \"Contact Us\";\r\n  p.textContent = \"You can scream out loud with our name, phone us or send a pidgeon with your order.\";\r\n\r\n  content.append(main);\r\n  main.append(welcomeClass);\r\n  welcomeClass.append(h1, welcomeContentClass);\r\n  welcomeContentClass.append(p, img);\r\n  \r\n  return content;\r\n};\r\n\r\nmodule.exports = loadContactUs();\n\n//# sourceURL=webpack://restaurant-webpack/./src/loadContactUs.js?");

/***/ }),

/***/ "./src/loadIndex.js":
/*!**************************!*\
  !*** ./src/loadIndex.js ***!
  \**************************/
/***/ ((module) => {

eval("function loadIndex() {\r\n  const content = document.createElement(\"div\");\r\n  const main = document.createElement(\"main\");\r\n  const welcomeClass = document.createElement(\"div\");\r\n  welcomeClass.className = \"welcome\";\r\n  const h1 = document.createElement(\"h1\");\r\n  const welcomeContentClass = document.createElement(\"div\");\r\n  welcomeContentClass.className = 'welcome-content'\r\n  const img = document.createElement(\"img\");\r\n  img.src = \"./img/restaurant.jpg\";\r\n  const p = document.createElement(\"p\");\r\n  p.className = \"welcome-text\";\r\n\r\n  h1.textContent = \"Welcome to Microrestaurant!\";\r\n  p.textContent = \"Welcome to our restaurant. We are pleased to receive you and we are commited to treat you as our most important friend in here. Our meals will deloit you.\";\r\n\r\n  content.append(main);\r\n  main.append(welcomeClass);\r\n  welcomeClass.append(h1, welcomeContentClass);\r\n  welcomeContentClass.append(img, p);\r\n  \r\n  return content;\r\n};\r\n\r\nmodule.exports = loadIndex();\r\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/loadIndex.js?");

/***/ }),

/***/ "./src/loadMeals.js":
/*!**************************!*\
  !*** ./src/loadMeals.js ***!
  \**************************/
/***/ ((module) => {

eval("function loadMeals() {\r\n  const mainDiv = document.querySelector(\"#content\");\r\n  mainDiv.textContent = \"\";\r\n  const content = document.createElement(\"div\");\r\n  const main = document.createElement(\"main\");\r\n  const welcomeClass = document.createElement(\"div\");\r\n  welcomeClass.className = \"welcome\";\r\n  const h1 = document.createElement(\"h1\");\r\n  const welcomeContentClass = document.createElement(\"div\");\r\n  welcomeContentClass.className = \"welcome-content-second\";\r\n  const p = document.createElement(\"p\");\r\n  const img = document.createElement(\"img\");\r\n  img.className = \"meals-img\";\r\n  img.src = \"./img/meals.jpg\";\r\n  p.className = \"welcome-text\";\r\n\r\n  h1.textContent = \"Our Meals\";\r\n  p.textContent = \"We have all kind of meals. Pizza, sandwiches, pasta, ice cream, and tomato flowers.\";\r\n\r\n  content.append(main);\r\n  main.append(welcomeClass);\r\n  welcomeClass.append(h1, welcomeContentClass);\r\n  welcomeContentClass.append(p, img);\r\n  \r\n  return content;\r\n};\r\n\r\nmodule.exports = loadMeals();\n\n//# sourceURL=webpack://restaurant-webpack/./src/loadMeals.js?");

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
/******/ 			// no module.id needed
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;