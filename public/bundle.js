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

/***/ "./src/typescript/main.ts":
/*!********************************!*\
  !*** ./src/typescript/main.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/audio */ \"./src/typescript/modules/audio.ts\");\n\nvar icones_som = [document.querySelector(\".volume_icon\"), document.querySelector(\".volume_icon_mobile\")];\nvar tocando_musica = true;\nicones_som.forEach(function (iconeDeSom, index) {\n  iconeDeSom.addEventListener(\"click\", function () {\n    if (tocando_musica) {\n      (0,_modules_audio__WEBPACK_IMPORTED_MODULE_0__.para_musicas)();\n      tocando_musica = false;\n      iconeDeSom.src = \"./images/volumeOff_icon.png\";\n      iconeDeSom.textContent = \"Música: Off\";\n    } else {\n      (0,_modules_audio__WEBPACK_IMPORTED_MODULE_0__.retoma_musicas)();\n      tocando_musica = true;\n      iconeDeSom.src = \"./images/volumeOn_icon.png\";\n      iconeDeSom.textContent = \"Música: On\";\n    }\n  });\n});\n(0,_modules_audio__WEBPACK_IMPORTED_MODULE_0__.autoplay_musicas)();\n\n//# sourceURL=webpack://jogo_da_forca/./src/typescript/main.ts?");

/***/ }),

/***/ "./src/typescript/modules/audio.ts":
/*!*****************************************!*\
  !*** ./src/typescript/modules/audio.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   autoplay_musicas: () => (/* binding */ autoplay_musicas),\n/* harmony export */   para_musicas: () => (/* binding */ para_musicas),\n/* harmony export */   retoma_musicas: () => (/* binding */ retoma_musicas)\n/* harmony export */ });\n/* harmony import */ var _embaralhaArrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./embaralhaArrays */ \"./src/typescript/modules/embaralhaArrays.ts\");\n\n\nvar index = 0;\nvar musicas_game = (0,_embaralhaArrays__WEBPACK_IMPORTED_MODULE_0__.shuffleArray)([new Audio('./music/game_music1.mp3'), new Audio('./music/game_music2.mp3'), new Audio('./music/game_music3.mp3')]);\nvar autoplay_musicas = function autoplay_musicas() {\n  if (index >= musicas_game.length) {\n    index = 0;\n  }\n  musicas_game[index].play();\n  musicas_game[index].addEventListener(\"ended\", function () {\n    index += 1;\n    autoplay_musicas();\n  });\n};\nvar para_musicas = function para_musicas() {\n  musicas_game[index].pause();\n};\nvar retoma_musicas = function retoma_musicas() {\n  musicas_game[index].play();\n};\n\n//# sourceURL=webpack://jogo_da_forca/./src/typescript/modules/audio.ts?");

/***/ }),

/***/ "./src/typescript/modules/embaralhaArrays.ts":
/*!***************************************************!*\
  !*** ./src/typescript/modules/embaralhaArrays.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shuffleArray: () => (/* binding */ shuffleArray)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nfunction shuffleArray(array) {\n  var newArray = _toConsumableArray(array);\n  for (var i = newArray.length - 1; i > 0; i--) {\n    var j = Math.floor(Math.random() * (i + 1));\n    var _ref = [newArray[j], newArray[i]];\n    newArray[i] = _ref[0];\n    newArray[j] = _ref[1];\n  }\n  return newArray;\n}\n\n//# sourceURL=webpack://jogo_da_forca/./src/typescript/modules/embaralhaArrays.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/typescript/main.ts");
/******/ 	
/******/ })()
;