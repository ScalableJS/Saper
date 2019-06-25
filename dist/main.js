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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Bomb.js":
/*!*********************!*\
  !*** ./src/Bomb.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bomb; });\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ \"./src/Cell.js\");\n\r\n\r\nclass Bomb extends _Cell__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(x, y, context, sandbox) {\r\n        super(x, y, context);\r\n        this.sandbox = sandbox;\r\n    }\r\n\r\n    click() {\r\n        this.sandbox.showAllBomb();\r\n        this.node.style.background = '#F00';\r\n        this.updateState();\r\n    }\r\n\r\n    updateState() {\r\n        this.state = 1;\r\n    }\r\n\r\n    render() {\r\n        if (this.state !== null) {\r\n            this.node.innerHTML = '*';\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/Bomb.js?");

/***/ }),

/***/ "./src/Cell.js":
/*!*********************!*\
  !*** ./src/Cell.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cell; });\nclass Cell {\r\n    constructor(x, y, context, width = 25, height = 25) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.state = null;\r\n        this.node = document.createElement('div');\r\n        this.node.node = this;\r\n\r\n        context.appendChild(this.node);\r\n        this.node.style.border = '1px solid #333';\r\n        this.node.style.width = width + 'px';\r\n        this.node.style.height = height + 'px';\r\n        this.node.style.position = 'absolute';\r\n        this.node.style.boxSizing = 'border-box';\r\n        this.node.style.background = '#CCC';\r\n\r\n        this.node.style.left = x * width + 'px';\r\n        this.node.style.top = y * height + 'px';\r\n    }\r\n\r\n    updateState() {\r\n\r\n    }\r\n\r\n    click() {\r\n\r\n    }\r\n\r\n    render() {\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/Cell.js?");

/***/ }),

/***/ "./src/EmptyCell.js":
/*!**************************!*\
  !*** ./src/EmptyCell.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EmptyCell; });\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ \"./src/Cell.js\");\n\r\n\r\nclass EmptyCell extends _Cell__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(x, y, context, sandbox) {\r\n        super(x, y, context);\r\n        this.sandbox = sandbox;\r\n    }\r\n\r\n    click() {\r\n        const count = this.sandbox.getCountBomb(this.x, this.y);\r\n        this.node.innerHTML = count || '';\r\n        this.updateState();\r\n    }\r\n\r\n    updateState() {\r\n        this.state = 1;\r\n    }\r\n\r\n    render() {\r\n        if (this.state !== null) {\r\n            this.node.style.background = '#FFF'\r\n        }\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/EmptyCell.js?");

/***/ }),

/***/ "./src/GameField.js":
/*!**************************!*\
  !*** ./src/GameField.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameField; });\n/* harmony import */ var _Bomb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bomb */ \"./src/Bomb.js\");\n/* harmony import */ var _EmptyCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmptyCell */ \"./src/EmptyCell.js\");\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell */ \"./src/Cell.js\");\n\r\n\r\n\r\n\r\nclass GameField {\r\n    constructor(width = 10, height = 10, context = document.body) {\r\n        this.listCell = [];\r\n        for (let y = 0; y < height; y++) {\r\n            for (let x = 0; x < width; x++) {\r\n                const Cell = Math.random() > .8 ? _Bomb__WEBPACK_IMPORTED_MODULE_0__[\"default\"] : _EmptyCell__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n                const sandbox = {\r\n                    getCountBomb: this.getCountBomb.bind(this),\r\n                    showAllBomb: this.showAllBomb.bind(this)\r\n                };\r\n\r\n                this.listCell.push(new Cell(x, y, context, sandbox))\r\n            }\r\n        }\r\n\r\n        document.body.addEventListener('click', (event) => {\r\n            const cell = event.target.node;\r\n\r\n            if (cell instanceof _Cell__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\r\n                cell.click();\r\n                this.render();\r\n            }\r\n\r\n        })\r\n\r\n    }\r\n\r\n    getCellByPosition(x, y) {\r\n        return this.listCell.filter(cell => cell.x === x && cell.y === y)[0];\r\n    }\r\n\r\n    getCountBomb(x, y) {\r\n        return [\r\n            [x - 1, y - 1],\r\n            [x, y - 1],\r\n            [x + 1, y - 1],\r\n\r\n            [x + 1, y],\r\n            [x - 1, y],\r\n\r\n            [x - 1, y + 1],\r\n            [x, y + 1],\r\n            [x + 1, y + 1]\r\n\r\n        ].reduce((acc, currentValue) => {\r\n            if (this.getCellByPosition(...currentValue) instanceof _Bomb__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n                return acc + 1\r\n            }\r\n            return acc\r\n        }, 0);\r\n    }\r\n\r\n    showAllBomb() {\r\n        this.listCell\r\n            .filter(cell => cell instanceof _Bomb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n            .forEach(cell => cell.updateState())\r\n\r\n    }\r\n\r\n    render() {\r\n        this.listCell.forEach((cell) => cell.render())\r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/GameField.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameField */ \"./src/GameField.js\");\n\r\n\r\nconst gameField = new _GameField__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\ngameField.render();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });