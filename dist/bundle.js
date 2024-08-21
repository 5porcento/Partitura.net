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

/***/ "./src/drawClef.ts":
/*!*************************!*\
  !*** ./src/drawClef.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawClef: () => (/* binding */ drawClef)\n/* harmony export */ });\nfunction drawClef(context, x, y) {\n    context.font = '48px serif';\n    context.fillText('𝄞', x, y);\n}\n\n\n//# sourceURL=webpack://type-nw/./src/drawClef.ts?");

/***/ }),

/***/ "./src/drawNotes.ts":
/*!**************************!*\
  !*** ./src/drawNotes.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawNotes: () => (/* binding */ drawNotes)\n/* harmony export */ });\nfunction drawNotes(context, notes) {\n    context.fillStyle = 'black';\n    notes.forEach(note => {\n        context.beginPath();\n        context.arc(note.x, note.y, 5, 0, 2 * Math.PI);\n        context.fill();\n        if (note.type !== 'whole') {\n            context.beginPath();\n            context.moveTo(note.x + 5, note.y);\n            context.lineTo(note.x + 5, note.y - 30);\n            context.stroke();\n        }\n    });\n}\n\n\n//# sourceURL=webpack://type-nw/./src/drawNotes.ts?");

/***/ }),

/***/ "./src/drawStaff.ts":
/*!**************************!*\
  !*** ./src/drawStaff.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawStaff: () => (/* binding */ drawStaff)\n/* harmony export */ });\nfunction drawStaff(context) {\n    const staffLines = 5;\n    const lineSpacing = 20;\n    const margin = 50;\n    context.strokeStyle = 'black';\n    context.lineWidth = 2;\n    for (let i = 0; i < staffLines; i++) {\n        const y = margin + i * lineSpacing;\n        context.beginPath();\n        context.moveTo(margin, y);\n        context.lineTo(context.canvas.width - margin, y);\n        context.stroke();\n    }\n}\n\n\n//# sourceURL=webpack://type-nw/./src/drawStaff.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drawStaff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawStaff */ \"./src/drawStaff.ts\");\n/* harmony import */ var _drawClef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawClef */ \"./src/drawClef.ts\");\n/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive */ \"./src/interactive.ts\");\n\n\n\nwindow.onload = () => {\n    const canvas = document.getElementById('sheetMusic');\n    const context = canvas.getContext('2d');\n    if (context) {\n        (0,_drawStaff__WEBPACK_IMPORTED_MODULE_0__.drawStaff)(context);\n        (0,_drawClef__WEBPACK_IMPORTED_MODULE_1__.drawClef)(context, 50, 120); // Desenha a clave de sol na posição inicial\n        (0,_interactive__WEBPACK_IMPORTED_MODULE_2__.setupInteractivity)(canvas, context); // Configura a interatividade do usuário\n    }\n};\n\n\n//# sourceURL=webpack://type-nw/./src/index.ts?");

/***/ }),

/***/ "./src/interactive.ts":
/*!****************************!*\
  !*** ./src/interactive.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupInteractivity: () => (/* binding */ setupInteractivity)\n/* harmony export */ });\n/* harmony import */ var _drawNotes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawNotes */ \"./src/drawNotes.ts\");\n/* harmony import */ var _drawStaff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawStaff */ \"./src/drawStaff.ts\");\n/* harmony import */ var _drawClef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawClef */ \"./src/drawClef.ts\");\n\n\n\nlet notes = [];\nfunction setupInteractivity(canvas, context) {\n    canvas.addEventListener('click', (event) => {\n        const rect = canvas.getBoundingClientRect();\n        const x = event.clientX - rect.left;\n        const y = event.clientY - rect.top;\n        // Adiciona uma nota na posição clicada\n        const note = { x, y, type: 'quarter' };\n        notes.push(note);\n        // Redesenha a partitura com as novas notas\n        context.clearRect(0, 0, canvas.width, canvas.height);\n        (0,_drawStaff__WEBPACK_IMPORTED_MODULE_1__.drawStaff)(context);\n        (0,_drawClef__WEBPACK_IMPORTED_MODULE_2__.drawClef)(context, 50, 120);\n        (0,_drawNotes__WEBPACK_IMPORTED_MODULE_0__.drawNotes)(context, notes);\n    });\n}\n\n\n//# sourceURL=webpack://type-nw/./src/interactive.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;