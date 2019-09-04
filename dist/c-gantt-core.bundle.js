var C_Gantt =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return C_Gantt; });\n/* harmony import */ var classlist_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classlist-polyfill */ \"./node_modules/classlist-polyfill/src/index.js\");\n/* harmony import */ var classlist_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classlist_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var element_remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-remove */ \"./node_modules/element-remove/index.js\");\n/* harmony import */ var element_remove__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_remove__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var array_findindex_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! array-findindex-polyfill */ \"./node_modules/array-findindex-polyfill/index.js\");\n/* harmony import */ var array_findindex_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(array_findindex_polyfill__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.scss */ \"./main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_3__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar C_Gantt =\n/*#__PURE__*/\nfunction () {\n  function C_Gantt(preSetup) {\n    _classCallCheck(this, C_Gantt);\n\n    _defineProperty(this, \"svg_spec\", \"http://www.w3.org/2000/svg\");\n\n    this.tasks = preSetup.items;\n    this.dayOffs = preSetup.dayOffs || [0];\n    this.statuses = preSetup.statuses;\n    this.CELL_HEIGHT = preSetup.cellHeight || 30;\n    this.CELL_WIDTH = preSetup.cellWidth || 90;\n    this.HEADER_COLUMN_WIDTH = preSetup.headerWidth || 400;\n    this.HEADER_ROW_HEIGHT = preSetup.headerHeight || 50;\n    this.container = preSetup.container || document.body;\n    this.selectTask = preSetup.selectTask;\n  }\n\n  _createClass(C_Gantt, [{\n    key: \"draw\",\n\n    /**\r\n     * Draw the Gantt chart\r\n     */\n    value: function draw() {\n      this.dates = this.getDates(this.tasks);\n      this.n_days = this.dates.length;\n      this.firstDayOffs = this.getFirstDayOffs();\n      this.n_tasks = this.tasks.length;\n      this.createSVGContainer();\n      this.drawTopLeftCorner();\n      this.drawHeaderRow();\n      this.drawHeaderColumn();\n      this.drawCells();\n      this.addColumnLabels();\n      this.addRowLabels();\n      this.drawTasks();\n      this.addSelectTaskHandler();\n      this.container.appendChild(this.main);\n    }\n    /**\r\n     * Create SVG container\r\n     */\n\n  }, {\n    key: \"createSVGContainer\",\n    value: function createSVGContainer() {\n      this.main = document.createElementNS(this.svg_spec, \"svg\");\n      this.main.setAttribute(\"viewBox\", \"0 0 \".concat(this.CELL_WIDTH * this.n_days + this.HEADER_COLUMN_WIDTH, \" \").concat(this.CELL_HEIGHT * this.n_tasks + this.HEADER_ROW_HEIGHT));\n      this.main.setAttribute(\"preserveAsvg_spectRatio\", \"none\");\n      this.main.classList.add(\"c-gantt\");\n    }\n    /**\r\n     * Draw top-left empty cell \r\n     */\n\n  }, {\n    key: \"drawTopLeftCorner\",\n    value: function drawTopLeftCorner() {\n      var corner = document.createElementNS(this.svg_spec, \"rect\");\n      corner.setAttribute(\"width\", \"\".concat(this.HEADER_COLUMN_WIDTH));\n      corner.setAttribute(\"height\", \"\".concat(this.HEADER_ROW_HEIGHT));\n      corner.classList.add(\"c-gantt__top-left\");\n      this.main.appendChild(corner);\n    }\n    /**\r\n     * Draw header column\r\n     */\n\n  }, {\n    key: \"drawHeaderColumn\",\n    value: function drawHeaderColumn() {\n      for (var i = 0; i < this.n_tasks; i++) {\n        var header_cell = document.createElementNS(this.svg_spec, \"rect\");\n        header_cell.setAttribute(\"width\", \"\".concat(this.HEADER_COLUMN_WIDTH));\n        header_cell.setAttribute(\"height\", \"\".concat(this.CELL_HEIGHT));\n        header_cell.setAttribute(\"x\", \"0\");\n        header_cell.setAttribute(\"y\", \"\".concat(this.HEADER_ROW_HEIGHT + this.CELL_HEIGHT * i));\n        header_cell.classList.add(\"c-gantt__task-header\");\n        this.main.appendChild(header_cell);\n      }\n    }\n    /**\r\n     * Draw header row\r\n     */\n\n  }, {\n    key: \"drawHeaderRow\",\n    value: function drawHeaderRow() {\n      for (var i = 0; i < this.n_days; i++) {\n        var header_cell = document.createElementNS(this.svg_spec, \"rect\");\n        header_cell.setAttribute(\"width\", \"\".concat(this.CELL_WIDTH));\n        header_cell.setAttribute(\"height\", \"\".concat(this.HEADER_ROW_HEIGHT));\n        header_cell.setAttribute(\"x\", \"\".concat(this.HEADER_COLUMN_WIDTH + this.CELL_WIDTH * i));\n        header_cell.setAttribute(\"y\", \"0\");\n        header_cell.classList.add(\"c-gantt__date-header\");\n        this.main.appendChild(header_cell);\n      }\n    }\n    /**\r\n     * Draw cells of the chart\r\n     */\n\n  }, {\n    key: \"drawCells\",\n    value: function drawCells() {\n      for (var row = 0; row < this.n_tasks; row++) {\n        for (var col = 0; col < this.n_days; col++) {\n          var cell = document.createElementNS(this.svg_spec, \"rect\");\n          cell.col = col;\n          cell.row = row;\n          cell.setAttribute(\"width\", \"\".concat(this.CELL_WIDTH));\n          cell.setAttribute(\"height\", \"\".concat(this.CELL_HEIGHT));\n          cell.setAttribute(\"x\", \"\".concat(this.HEADER_COLUMN_WIDTH + this.CELL_WIDTH * col));\n          cell.setAttribute(\"y\", \"\".concat(this.HEADER_ROW_HEIGHT + this.CELL_HEIGHT * row));\n          cell.classList.add(\"c-gantt__cell\"); // Check day-offs\n\n          for (var i = 0; i < this.dayOffs.length; i++) {\n            if (col % 7 == this.firstDayOffs[i]) {\n              cell.classList.add(\"c-gantt__cell__day-off\");\n            }\n          }\n\n          this.main.appendChild(cell);\n        }\n      }\n    }\n    /**\r\n     * Add labels to the columns\r\n     */\n\n  }, {\n    key: \"addColumnLabels\",\n    value: function addColumnLabels() {\n      var formatter = new Intl.DateTimeFormat(\"en-US\");\n\n      for (var i = 0; i < this.n_days; i++) {\n        var label = document.createElementNS(this.svg_spec, \"text\");\n        var cur_date = this.dates[i];\n        var text = document.createTextNode(formatter.format(cur_date));\n        label.appendChild(text);\n        label.setAttribute(\"x\", \"\".concat(this.HEADER_COLUMN_WIDTH + this.CELL_WIDTH * 0.5 + this.CELL_WIDTH * i));\n        label.setAttribute(\"y\", \"\".concat(this.HEADER_ROW_HEIGHT * 0.6));\n        label.setAttribute(\"text-anchor\", \"middle\");\n        label.classList.add(\"c-gantt__dates\");\n        this.main.appendChild(label);\n      }\n    }\n    /**\r\n     * Add labels to the rows\r\n     */\n\n  }, {\n    key: \"addRowLabels\",\n    value: function addRowLabels() {\n      for (var i = 0; i < this.n_tasks; i++) {\n        var label = document.createElementNS(this.svg_spec, \"text\");\n        var text = document.createTextNode(this.tasks[i].name);\n        label.appendChild(text);\n        label.setAttribute(\"x\", \"\".concat(this.HEADER_COLUMN_WIDTH * 0.5));\n        label.setAttribute(\"y\", \"\".concat(this.HEADER_ROW_HEIGHT + this.CELL_HEIGHT * 0.6 + this.CELL_HEIGHT * i));\n        label.setAttribute(\"text-anchor\", \"middle\");\n        label.classList.add(\"c-gantt__tasks\");\n        this.main.appendChild(label);\n      }\n    }\n    /**\r\n     * Draw tasks with different status\r\n     */\n\n  }, {\n    key: \"drawTasks\",\n    value: function drawTasks() {\n      var min_date = this.getMinimumDate(this.tasks);\n\n      for (var i = 0; i < this.n_tasks; i++) {\n        var task = this.tasks[i];\n        var start_date = new Date(task.start_date);\n        var end_date = new Date(task.end_date);\n        var duration = (end_date - start_date) / 1000 / 60 / 60 / 24 + 1;\n        var column = (start_date - min_date) / 1000 / 60 / 60 / 24;\n        var row = i;\n        this.newTask(column, row, duration, task.status);\n      }\n    }\n    /**\r\n     * Create new task\r\n     * @param {number} column The number of a column where the task starts\r\n     * @param {number} row The number of a row of the task\r\n     * @param {number} duration The number of days the task lasts for\r\n     * @param {number} status Status of the task\r\n     */\n\n  }, {\n    key: \"newTask\",\n    value: function newTask(column, row, duration, status) {\n      var y = row * this.CELL_HEIGHT + this.HEADER_ROW_HEIGHT;\n      var x = column * this.CELL_WIDTH + this.HEADER_COLUMN_WIDTH;\n      var i = 0;\n\n      while (i < duration) {\n        if (this.firstDayOffs.indexOf((column + i) % 7) == -1) {\n          var new_task = document.createElementNS(this.svg_spec, \"rect\");\n          new_task.col = column + i;\n          new_task.row = row;\n          new_task.setAttribute(\"x\", \"\".concat(x));\n          new_task.setAttribute(\"y\", \"\".concat(y));\n          new_task.setAttribute(\"width\", \"\".concat(this.CELL_WIDTH));\n          new_task.setAttribute(\"height\", \"\".concat(this.CELL_HEIGHT));\n          new_task.classList.add(\"c-gantt__task\");\n          new_task.classList.add(\"c-gantt__task__\".concat(this.statuses[status]));\n          this.main.appendChild(new_task);\n        }\n\n        x += this.CELL_WIDTH;\n        i++;\n      }\n    }\n  }, {\n    key: \"addSelectTaskHandler\",\n    value: function addSelectTaskHandler(func) {\n      var _this = this;\n\n      this.main.addEventListener('click', function (event) {\n        return _this.selectTask(event, _this);\n      });\n    }\n  }, {\n    key: \"updateTask\",\n    value: function updateTask(task) {\n      var cur_task_index = this.tasks.findIndex(function (elem, i) {\n        return elem.id === task.id;\n      });\n\n      if (cur_task_index === -1) {\n        this.tasks.push(task);\n      } else {\n        this.tasks[cur_task_index] = task;\n      }\n    }\n    /**\r\n     * Get list of days of the tasks\r\n     */\n\n  }, {\n    key: \"getDates\",\n    value: function getDates() {\n      var dates = [];\n      var cur_date = this.getMinimumDate();\n      var max_date = this.getMaximumDate();\n\n      while (cur_date <= max_date) {\n        dates.push(cur_date);\n        cur_date = this.getNextDay(cur_date);\n      }\n\n      return dates;\n    }\n    /**\r\n     * Get the first day of the tasks\r\n     */\n\n  }, {\n    key: \"getMaximumDate\",\n    value: function getMaximumDate() {\n      var maximum_date = new Date(this.tasks[0].end_date);\n\n      for (var i = 1; i < this.tasks.length; i++) {\n        var cur_date = new Date(this.tasks[i].end_date);\n\n        if (cur_date > maximum_date) {\n          maximum_date = cur_date;\n        }\n      }\n\n      return maximum_date;\n    }\n    /**\r\n     * Get the last day of the tasks\r\n     */\n\n  }, {\n    key: \"getMinimumDate\",\n    value: function getMinimumDate() {\n      var minimum_date = new Date(this.tasks[0].start_date);\n\n      for (var i = 1; i < this.tasks.length; i++) {\n        var cur_date = new Date(this.tasks[i].start_date);\n\n        if (cur_date < minimum_date) {\n          minimum_date = cur_date;\n        }\n      }\n\n      return minimum_date;\n    }\n    /**\r\n     * Get the day-offs of the first week\r\n     */\n\n  }, {\n    key: \"getFirstDayOffs\",\n    value: function getFirstDayOffs() {\n      var firstDayOffs = [];\n\n      for (var j = 0; j < this.dayOffs.length; j++) {\n        if (!this.dates.length) break;\n        var cur_date = this.dates[0];\n        var i = 0;\n\n        while (cur_date.getDay() != this.dayOffs[j]) {\n          cur_date = this.getNextDay(cur_date);\n          i++;\n        }\n\n        firstDayOffs.push(i);\n      }\n\n      return firstDayOffs;\n    }\n    /**\r\n     * Get the next day of a given day\r\n     * @param {date} day A day to get the next day \r\n     */\n\n  }, {\n    key: \"getNextDay\",\n    value: function getNextDay(day) {\n      var next_day = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1);\n      return next_day;\n    }\n  }]);\n\n  return C_Gantt;\n}();\n\n\n;\n\n//# sourceURL=webpack://C_Gantt/./index.js?");

/***/ }),

/***/ "./main.scss":
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://C_Gantt/./main.scss?");

/***/ }),

/***/ "./node_modules/array-findindex-polyfill/index.js":
/*!********************************************************!*\
  !*** ./node_modules/array-findindex-polyfill/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Array.prototype.findIndex\n *\n * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex\n */\nmodule.exports = function () {\n  if (!Array.prototype.findIndex) {\n    Array.prototype.findIndex = function (predicate) {\n      if (this === null) {\n        throw new TypeError('Array.prototype.findIndex called on null or undefined');\n      }\n\n      if (typeof predicate !== 'function') {\n        throw new TypeError('predicate must be a function');\n      }\n\n      var list = Object(this);\n      var length = list.length >>> 0;\n      var thisArg = arguments[1];\n      var value;\n\n      for (var i = 0; i < length; i++) {\n        value = list[i];\n\n        if (predicate.call(thisArg, value, i, list)) {\n          return i;\n        }\n      }\n\n      return -1;\n    };\n  }\n}();\n\n//# sourceURL=webpack://C_Gantt/./node_modules/array-findindex-polyfill/index.js?");

/***/ }),

/***/ "./node_modules/classlist-polyfill/src/index.js":
/*!******************************************************!*\
  !*** ./node_modules/classlist-polyfill/src/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n * classList.js: Cross-browser full element.classList implementation.\n * 1.1.20170427\n *\n * By Eli Grey, http://eligrey.com\n * License: Dedicated to the public domain.\n *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md\n */\n\n/*global self, document, DOMException */\n\n/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */\nif (\"document\" in window.self) {\n  // Full polyfill for browsers with no classList support\n  // Including IE < Edge missing SVGElement.classList\n  if (!(\"classList\" in document.createElement(\"_\")) || document.createElementNS && !(\"classList\" in document.createElementNS(\"http://www.w3.org/2000/svg\", \"g\"))) {\n    (function (view) {\n      \"use strict\";\n\n      if (!('Element' in view)) return;\n\n      var classListProp = \"classList\",\n          protoProp = \"prototype\",\n          elemCtrProto = view.Element[protoProp],\n          objCtr = Object,\n          strTrim = String[protoProp].trim || function () {\n        return this.replace(/^\\s+|\\s+$/g, \"\");\n      },\n          arrIndexOf = Array[protoProp].indexOf || function (item) {\n        var i = 0,\n            len = this.length;\n\n        for (; i < len; i++) {\n          if (i in this && this[i] === item) {\n            return i;\n          }\n        }\n\n        return -1;\n      } // Vendors: please allow content code to instantiate DOMExceptions\n      ,\n          DOMEx = function DOMEx(type, message) {\n        this.name = type;\n        this.code = DOMException[type];\n        this.message = message;\n      },\n          checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {\n        if (token === \"\") {\n          throw new DOMEx(\"SYNTAX_ERR\", \"An invalid or illegal string was specified\");\n        }\n\n        if (/\\s/.test(token)) {\n          throw new DOMEx(\"INVALID_CHARACTER_ERR\", \"String contains an invalid character\");\n        }\n\n        return arrIndexOf.call(classList, token);\n      },\n          ClassList = function ClassList(elem) {\n        var trimmedClasses = strTrim.call(elem.getAttribute(\"class\") || \"\"),\n            classes = trimmedClasses ? trimmedClasses.split(/\\s+/) : [],\n            i = 0,\n            len = classes.length;\n\n        for (; i < len; i++) {\n          this.push(classes[i]);\n        }\n\n        this._updateClassName = function () {\n          elem.setAttribute(\"class\", this.toString());\n        };\n      },\n          classListProto = ClassList[protoProp] = [],\n          classListGetter = function classListGetter() {\n        return new ClassList(this);\n      }; // Most DOMException implementations don't allow calling DOMException's toString()\n      // on non-DOMExceptions. Error's toString() is sufficient here.\n\n\n      DOMEx[protoProp] = Error[protoProp];\n\n      classListProto.item = function (i) {\n        return this[i] || null;\n      };\n\n      classListProto.contains = function (token) {\n        token += \"\";\n        return checkTokenAndGetIndex(this, token) !== -1;\n      };\n\n      classListProto.add = function () {\n        var tokens = arguments,\n            i = 0,\n            l = tokens.length,\n            token,\n            updated = false;\n\n        do {\n          token = tokens[i] + \"\";\n\n          if (checkTokenAndGetIndex(this, token) === -1) {\n            this.push(token);\n            updated = true;\n          }\n        } while (++i < l);\n\n        if (updated) {\n          this._updateClassName();\n        }\n      };\n\n      classListProto.remove = function () {\n        var tokens = arguments,\n            i = 0,\n            l = tokens.length,\n            token,\n            updated = false,\n            index;\n\n        do {\n          token = tokens[i] + \"\";\n          index = checkTokenAndGetIndex(this, token);\n\n          while (index !== -1) {\n            this.splice(index, 1);\n            updated = true;\n            index = checkTokenAndGetIndex(this, token);\n          }\n        } while (++i < l);\n\n        if (updated) {\n          this._updateClassName();\n        }\n      };\n\n      classListProto.toggle = function (token, force) {\n        token += \"\";\n        var result = this.contains(token),\n            method = result ? force !== true && \"remove\" : force !== false && \"add\";\n\n        if (method) {\n          this[method](token);\n        }\n\n        if (force === true || force === false) {\n          return force;\n        } else {\n          return !result;\n        }\n      };\n\n      classListProto.toString = function () {\n        return this.join(\" \");\n      };\n\n      if (objCtr.defineProperty) {\n        var classListPropDesc = {\n          get: classListGetter,\n          enumerable: true,\n          configurable: true\n        };\n\n        try {\n          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);\n        } catch (ex) {\n          // IE 8 doesn't support enumerable:true\n          // adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36\n          // modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected\n          if (ex.number === undefined || ex.number === -0x7FF5EC54) {\n            classListPropDesc.enumerable = false;\n            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);\n          }\n        }\n      } else if (objCtr[protoProp].__defineGetter__) {\n        elemCtrProto.__defineGetter__(classListProp, classListGetter);\n      }\n    })(window.self);\n  } // There is full or partial native classList support, so just check if we need\n  // to normalize the add/remove and toggle APIs.\n\n\n  (function () {\n    \"use strict\";\n\n    var testElement = document.createElement(\"_\");\n    testElement.classList.add(\"c1\", \"c2\"); // Polyfill for IE 10/11 and Firefox <26, where classList.add and\n    // classList.remove exist but support only one argument at a time.\n\n    if (!testElement.classList.contains(\"c2\")) {\n      var createMethod = function createMethod(method) {\n        var original = DOMTokenList.prototype[method];\n\n        DOMTokenList.prototype[method] = function (token) {\n          var i,\n              len = arguments.length;\n\n          for (i = 0; i < len; i++) {\n            token = arguments[i];\n            original.call(this, token);\n          }\n        };\n      };\n\n      createMethod('add');\n      createMethod('remove');\n    }\n\n    testElement.classList.toggle(\"c3\", false); // Polyfill for IE 10 and Firefox <24, where classList.toggle does not\n    // support the second argument.\n\n    if (testElement.classList.contains(\"c3\")) {\n      var _toggle = DOMTokenList.prototype.toggle;\n\n      DOMTokenList.prototype.toggle = function (token, force) {\n        if (1 in arguments && !this.contains(token) === !force) {\n          return force;\n        } else {\n          return _toggle.call(this, token);\n        }\n      };\n    }\n\n    testElement = null;\n  })();\n}\n\n//# sourceURL=webpack://C_Gantt/./node_modules/classlist-polyfill/src/index.js?");

/***/ }),

/***/ "./node_modules/element-remove/index.js":
/*!**********************************************!*\
  !*** ./node_modules/element-remove/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (arr) {\n  arr.forEach(function (item) {\n    if (item.hasOwnProperty('remove')) {\n      return;\n    }\n\n    Object.defineProperty(item, 'remove', {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function remove() {\n        this.parentNode && this.parentNode.removeChild(this);\n      }\n    });\n  });\n})([Element.prototype, CharacterData.prototype, DocumentType.prototype].filter(Boolean));\n\n//# sourceURL=webpack://C_Gantt/./node_modules/element-remove/index.js?");

/***/ })

/******/ });