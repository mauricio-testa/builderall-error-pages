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

/***/ "./src/components/404.js":
/*!*******************************!*\
  !*** ./src/components/404.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst template = document.createElement('template');\r\ntemplate.innerHTML = `\r\n\t<div>\r\n\t\t<div class=\"builderall-error-404\">\r\n\t\t\t<div>\r\n\t\t\t\t<h1 class=\"pre\">Oopss!</h1>\r\n\t\t\t\t<h1 class=\"title\">SOMETHING WENT WRONG</h1>\r\n\t\t\t\t<h2 class=\"text\">Could not find the page you are looking for</h2>\r\n\t\t\t\t<a class=\"button\" href=\"/\">Back to home</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<style>\r\n\t.builderall-error-404 {\r\n\t\tbackground-repeat: no-repeat;\r\n\t\ttext-align: center;\r\n\t\theight: calc(100vh);\r\n\t\tposition: relative;\r\n\t\tdisplay: block;\r\n\t\tfont-family: Muli;\r\n\t\tbackground:\r\n\t\t\turl(./assets/img/404.png) top left/contain no-repeat,\r\n\t\t\turl(./assets/img/404-note-green.png) 90% 25%/105px no-repeat,\r\n\t\t\turl(./assets/img/404-note-pink.png) 80% 80%/105px no-repeat,\r\n\t\t\t#e5e9f0;\r\n\t}\r\n\t.builderall-error-404 div {\r\n\t\tpadding: 12%;\r\n\t}\r\n\t@media screen and (max-width: 768px) {\r\n\t\t.builderall-error-404 {\r\n\t\t\tbackground: url(./assets/img/404.png) 25%/cover no-repeat;\r\n\t\t}\r\n\t}\r\n\t\r\n\t.builderall-error-404 div h1 {\r\n\t\tfont-size: 2.3rem;\r\n\t\tline-height: 38px;\r\n\t\tfont-weight: 800;\r\n\t\tcolor: #373F4E;\r\n\t\ttext-transform: uppercase;\r\n\t\tmargin-bottom: 1rem;\r\n\t\tmargin-top: 0;\r\n\t}\r\n\t.builderall-error-404 div h2 {\r\n\t\tfont-size: 1.2rem;\r\n\t\tline-height: 30px;\r\n\t\tfont-weight: normal;\r\n\t\tcolor: #373F4E;\r\n\t\ttext-align: center;\r\n\t\tdisplay: block;\r\n\t\tmargin-bottom: 1rem;\r\n\t}\r\n\t.builderall-error-404 a {\r\n\t\tmargin-top: 1.5rem;\r\n\t\tfont-size: .9rem;\r\n\t\tfont-weight: 800;\r\n\t\tpadding: 15px 30px;\r\n\t\tcolor: #fff;\r\n\t\tbackground-color: #0080fc;\r\n\t\tdisplay: inline-block;\r\n\t\tcolor: #212529;\r\n\t\ttext-align: center;\r\n\t\tvertical-align: middle;\r\n\t\tuser-select: none;\r\n\t\tborder-radius: 0.25rem;\r\n\t\tcolor: #fff;\r\n\t\ttext-decoration: none;\r\n\t}\r\n\t</style>\r\n`;\r\n\r\nclass BuilderallError404 extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n\t\t\r\n\r\n\t\tdocument.body.style.margin = 0;\r\n\t\tdocument.body.style.backgroundColor = '#e9edf2';\r\n\r\n\t\tthis.attachShadow({ mode: 'open'});\r\n\t\tthis.shadowRoot.appendChild(template.content.cloneNode(true));\r\n\r\n    }\r\n\r\n\tconnectedCallback() {\r\n\t\tconst props = [\r\n\t\t\t{ name: 'pre', selector: '.pre', attr: 'innerHTML'},\r\n\t\t\t{ name: 'title', selector: '.title', attr: 'innerHTML'},\r\n\t\t\t{ name: 'text', selector: '.text', attr: 'innerHTML'},\r\n\t\t\t{ name: 'button-text', selector: '.button', attr: 'innerHTML'},\r\n\t\t\t{ name: 'button-href', selector: '.button', attr: 'href'},\r\n\t\t]\r\n\t\tconst shadow = this.shadowRoot;\r\n\r\n\t\tprops.forEach(prop => {\r\n\t\t\tif (this.attributes[prop.name]) {\r\n\t\t\t\tshadow.querySelector(prop.selector)[prop.attr] = this.attributes[prop.name].value\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuilderallError404);\n\n//# sourceURL=webpack://builderall-error-pages/./src/components/404.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_404_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/404.js */ \"./src/components/404.js\");\n\r\n\r\nwindow.customElements.define('builderall-error-404', _components_404_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://builderall-error-pages/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;