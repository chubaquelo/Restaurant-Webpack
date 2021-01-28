/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadIndex.js */ \"./src/loadIndex.js\");\n/* harmony import */ var _loadAboutUs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadAboutUs.js */ \"./src/loadAboutUs.js\");\n/* harmony import */ var _loadMeals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMeals */ \"./src/loadMeals.js\");\n/* harmony import */ var _loadContactUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadContactUs */ \"./src/loadContactUs.js\");\n\r\n\r\n\r\n\r\n\r\n// Assigning foreign methods to variables.\r\nconst indexContent = (0,_loadIndex_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\nconst aboutUsContent = (0,_loadAboutUs_js__WEBPACK_IMPORTED_MODULE_1__.default)();\r\nconst mealsContent = (0,_loadMeals__WEBPACK_IMPORTED_MODULE_2__.default)();\r\nconst contactUsContent = (0,_loadContactUs__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n\r\n// Index default load\r\nconst mainDiv = document.querySelector(\"#content\");\r\nmainDiv.appendChild(indexContent);\r\n\r\n// Functions for menus\r\nconst goToHome = () => {\r\n  mainDiv.textContent = \"\";\r\n  mainDiv.appendChild(indexContent);\r\n  addMenuListeners();\r\n}\r\n\r\nconst goToAbout = () => {\r\n  mainDiv.textContent = \"\";\r\n  mainDiv.appendChild(aboutUsContent);\r\n  addMenuListeners();\r\n}\r\n\r\nconst goToMeals = () => {\r\n  mainDiv.textContent = \"\";\r\n  mainDiv.appendChild(mealsContent);\r\n  addMenuListeners();\r\n};\r\n\r\nconst goToContactUs = () => {\r\n  mainDiv.textContent = \"\";\r\n  mainDiv.appendChild(contactUsContent);\r\n  addMenuListeners();\r\n}\r\n\r\n// Event listener for header nav \r\nconst addMenuListeners = () => {\r\n  const btnHome = document.querySelector(\"li:first-of-type\");\r\n  btnHome.addEventListener(\"click\", goToHome);\r\n\r\n  const btnAboutUs = document.querySelector(\"li:nth-of-type(2)\");\r\n  btnAboutUs.addEventListener(\"click\", goToAbout);\r\n\r\n  const btnOurMeals = document.querySelector(\"li:nth-of-type(3)\");\r\n  btnOurMeals.addEventListener(\"click\", goToMeals);\r\n\r\n  const btnContactUs = document.querySelector(\"li:last-of-type\");\r\n  btnContactUs.addEventListener(\"click\", goToContactUs);\r\n}\r\n\r\naddMenuListeners();\n\n//# sourceURL=webpack://restaurant-webpack/./src/index.js?");

/***/ }),

/***/ "./src/loadAboutUs.js":
/*!****************************!*\
  !*** ./src/loadAboutUs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ loadAboutUs\n/* harmony export */ });\nfunction loadAboutUs() {\r\n  const mainDiv = document.querySelector(\"#content\");\r\n  mainDiv.textContent = \"\";\r\n  const content = document.createElement(\"div\");\r\n  const header = document.createElement(\"header\");\r\n  const nav = document.createElement(\"nav\");\r\n  const ul = document.createElement(\"ul\");\r\n  const li1 = document.createElement(\"li\");\r\n  const li2 = document.createElement(\"li\");\r\n  const li3 = document.createElement(\"li\");\r\n  const li4 = document.createElement(\"li\");\r\n  const main = document.createElement(\"main\");\r\n  const welcomeClass = document.createElement(\"div\");\r\n  welcomeClass.className = \"welcome\";\r\n  const h1 = document.createElement(\"h1\");\r\n  const welcomeContentClass = document.createElement(\"div\");\r\n  welcomeContentClass.className = 'welcome-content-second'\r\n  const p = document.createElement(\"p\");\r\n  p.className = \"welcome-text\";\r\n   const img = document.createElement(\"img\");\r\n   img.className = \"about-img\";\r\n   img.src = \"./img/about-us.jpg\";\r\n  const footer = document.createElement(\"footer\");\r\n\r\n  li1.textContent = 'Home';\r\n  li2.textContent = \"About Us\";\r\n  li3.textContent = \"Our Meals\";\r\n  li4.textContent = \"Contact Us\";\r\n  h1.textContent = \"About Us\";\r\n  p.textContent = \"We are the oldest restaurant on earth. We cook from rats to caviar, just ask.\";\r\n  footer.textContent = \"Copyrighted® Meals and Restaurant 2021 - Do not copy our recipes.\";\r\n\r\n  content.append(header, main, footer);\r\n  header.append(nav);\r\n  nav.append(ul);\r\n  ul.append(li1, li2, li3, li4);\r\n  main.append(welcomeClass);\r\n  welcomeClass.append(h1, welcomeContentClass);\r\n  welcomeContentClass.append(p, img);\r\n  \r\n  return content;\r\n};\r\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/loadAboutUs.js?");

/***/ }),

/***/ "./src/loadContactUs.js":
/*!******************************!*\
  !*** ./src/loadContactUs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ loadContactUs\n/* harmony export */ });\nfunction loadContactUs() {\r\n  const mainDiv = document.querySelector(\"#content\");\r\n  mainDiv.textContent = \"\";\r\n  const content = document.createElement(\"div\");\r\n  const header = document.createElement(\"header\");\r\n  const nav = document.createElement(\"nav\");\r\n  const ul = document.createElement(\"ul\");\r\n  const li1 = document.createElement(\"li\");\r\n  const li2 = document.createElement(\"li\");\r\n  const li3 = document.createElement(\"li\");\r\n  const li4 = document.createElement(\"li\");\r\n  const main = document.createElement(\"main\");\r\n  const welcomeClass = document.createElement(\"div\");\r\n  welcomeClass.className = \"welcome\";\r\n  const h1 = document.createElement(\"h1\");\r\n  const welcomeContentClass = document.createElement(\"div\");\r\n  welcomeContentClass.className = \"welcome-content-second\";\r\n  const p = document.createElement(\"p\");\r\n  p.className = \"welcome-text\";\r\n  const img = document.createElement(\"img\");\r\n  img.className = \"contact-img\";\r\n  img.src = \"./img/pidgeon.jpg\";\r\n  const footer = document.createElement(\"footer\");\r\n\r\n  li1.textContent = 'Home';\r\n  li2.textContent = \"About Us\";\r\n  li3.textContent = \"Our Meals\";\r\n  li4.textContent = \"Contact Us\";\r\n  h1.textContent = \"Contact Us\";\r\n  p.textContent = \"You can scream out loud with our name, phone us or send a pidgeon with your order.\";\r\n  footer.textContent = \"Copyrighted® Meals and Restaurant 2021 - Do not copy our recipes.\";\r\n\r\n  content.append(header, main, footer);\r\n  header.append(nav);\r\n  nav.append(ul);\r\n  ul.append(li1, li2, li3, li4);\r\n  main.append(welcomeClass);\r\n  welcomeClass.append(h1, welcomeContentClass);\r\n  welcomeContentClass.append(p, img);\r\n  \r\n  return content;\r\n};\r\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/loadContactUs.js?");

/***/ }),

/***/ "./src/loadIndex.js":
/*!**************************!*\
  !*** ./src/loadIndex.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ loadIndex\n/* harmony export */ });\nfunction loadIndex() {\r\n  const content = document.createElement(\"div\");\r\n  const header = document.createElement(\"header\");\r\n  const nav = document.createElement(\"nav\");\r\n  const ul = document.createElement(\"ul\");\r\n  const li1 = document.createElement(\"li\");\r\n  const li2 = document.createElement(\"li\");\r\n  const li3 = document.createElement(\"li\");\r\n  const li4 = document.createElement(\"li\");\r\n  const main = document.createElement(\"main\");\r\n  const welcomeClass = document.createElement(\"div\");\r\n  welcomeClass.className = \"welcome\";\r\n  const h1 = document.createElement(\"h1\");\r\n  const welcomeContentClass = document.createElement(\"div\");\r\n  welcomeContentClass.className = 'welcome-content'\r\n  const img = document.createElement(\"img\");\r\n  img.src = \"./img/restaurant.jpg\";\r\n  const p = document.createElement(\"p\");\r\n  p.className = \"welcome-text\";\r\n  const footer = document.createElement(\"footer\");\r\n\r\n  li1.textContent = 'Home';\r\n  li2.textContent = \"About Us\";\r\n  li3.textContent = \"Our Meals\";\r\n  li4.textContent = \"Contact Us\";\r\n  h1.textContent = \"Welcome to Microrestaurant!\";\r\n  p.textContent = \"Welcome to our restaurant. We are pleased to receive you and we are commited to treat you as our most important friend in here. Our meals will deloit you.\";\r\n  footer.textContent = \"Copyrighted® Meals and Restaurant 2021 - Do not copy our recipes.\";\r\n\r\n  content.append(header, main, footer);\r\n  header.append(nav);\r\n  nav.append(ul);\r\n  ul.append(li1, li2, li3, li4);\r\n  main.append(welcomeClass);\r\n  welcomeClass.append(h1, welcomeContentClass);\r\n  welcomeContentClass.append(img, p);\r\n  \r\n  return content;\r\n};\r\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/loadIndex.js?");

/***/ }),

/***/ "./src/loadMeals.js":
/*!**************************!*\
  !*** ./src/loadMeals.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ loadMeals\n/* harmony export */ });\nfunction loadMeals() {\r\n  const mainDiv = document.querySelector(\"#content\");\r\n  mainDiv.textContent = \"\";\r\n  const content = document.createElement(\"div\");\r\n  const header = document.createElement(\"header\");\r\n  const nav = document.createElement(\"nav\");\r\n  const ul = document.createElement(\"ul\");\r\n  const li1 = document.createElement(\"li\");\r\n  const li2 = document.createElement(\"li\");\r\n  const li3 = document.createElement(\"li\");\r\n  const li4 = document.createElement(\"li\");\r\n  const main = document.createElement(\"main\");\r\n  const welcomeClass = document.createElement(\"div\");\r\n  welcomeClass.className = \"welcome\";\r\n  const h1 = document.createElement(\"h1\");\r\n  const welcomeContentClass = document.createElement(\"div\");\r\n  welcomeContentClass.className = \"welcome-content-second\";\r\n  const p = document.createElement(\"p\");\r\n  const img = document.createElement(\"img\");\r\n  img.className = \"meals-img\";\r\n  img.src = \"./img/meals.jpg\";\r\n  p.className = \"welcome-text\";\r\n  const footer = document.createElement(\"footer\");\r\n\r\n  li1.textContent = 'Home';\r\n  li2.textContent = \"About Us\";\r\n  li3.textContent = \"Our Meals\";\r\n  li4.textContent = \"Contact Us\";\r\n  h1.textContent = \"Our Meals\";\r\n  p.textContent = \"We have all kind of meals. Pizza, sandwiches, pasta, ice cream, and tomato flowers.\";\r\n  footer.textContent = \"Copyrighted® Meals and Restaurant 2021 - Do not copy our recipes.\";\r\n\r\n  content.append(header, main, footer);\r\n  header.append(nav);\r\n  nav.append(ul);\r\n  ul.append(li1, li2, li3, li4);\r\n  main.append(welcomeClass);\r\n  welcomeClass.append(h1, welcomeContentClass);\r\n  welcomeContentClass.append(p, img);\r\n  \r\n  return content;\r\n};\r\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/loadMeals.js?");

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