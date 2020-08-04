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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/Component.js":
/*!**********************************!*\
  !*** ./src/classes/Component.js ***!
  \**********************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Component = /*#__PURE__*/function () {
  function Component(id, element) {
    _classCallCheck(this, Component);

    this._id = id;
    this._element = element;
    this._element.id = this._id;
    this._children = []; // Initial State

    this._background = 'black';
    this._foreground = 'white';
    this._dirtyColors = true;
    this._height = 0;
    this._width = 0;
    this._dirtyBounds = true;
  }

  _createClass(Component, [{
    key: "getElement",
    value: function getElement() {
      return this._element;
    }
  }, {
    key: "setForeground",
    value: function setForeground(foreground) {
      this._foreground = foreground;
      this._dirtyColors = true;
    }
  }, {
    key: "setBackground",
    value: function setBackground(background) {
      this._background = background;
      this._dirtyColors = true;
    }
  }, {
    key: "append",
    value: function append(component) {
      this._children.push(component);

      this._element.append(component.getElement());
    }
  }, {
    key: "draw",
    value: function draw() {
      if (this._dirtyColors) {
        console.log('updating colours of ', this._id);
        this._element.style.background = this._background;
        this._element.style.color = this._foreground;
        this._dirtyColors = false;
      }

      this._children.forEach(function (child) {
        return child.draw();
      });
    }
  }]);

  return Component;
}();
;

/***/ }),

/***/ "./src/classes/SeeSaw.js":
/*!*******************************!*\
  !*** ./src/classes/SeeSaw.js ***!
  \*******************************/
/*! exports provided: SeeSaw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeSaw", function() { return SeeSaw; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/classes/Component.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var SeeSaw = /*#__PURE__*/function () {
  function SeeSaw() {
    var _this = this;

    _classCallCheck(this, SeeSaw);

    this._rootComponent = new _Component__WEBPACK_IMPORTED_MODULE_0__["Component"]('seesaw', document.getElementById('seesaw')); // Interval that performs the drawing of components

    this._drawInterval = setInterval(function () {
      _this._performDrawing();
    }, 1000);
  }

  _createClass(SeeSaw, [{
    key: "append",
    value: function append(component) {
      this._rootComponent.append(component);
    }
  }, {
    key: "_performDrawing",
    value: function _performDrawing() {
      this._rootComponent.draw();
    }
  }], [{
    key: "Component",
    value: function Component(id) {
      return new _Component__WEBPACK_IMPORTED_MODULE_0__["Component"](id, document.createElement('div'));
    }
  }]);

  return SeeSaw;
}();
;

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_SeeSaw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/SeeSaw */ "./src/classes/SeeSaw.js");
 // Expose SeeSaw globally

window.SeeSaw = _classes_SeeSaw__WEBPACK_IMPORTED_MODULE_0__["SeeSaw"];

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1NlZVNhdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJpZCIsImVsZW1lbnQiLCJfaWQiLCJfZWxlbWVudCIsIl9jaGlsZHJlbiIsIl9iYWNrZ3JvdW5kIiwiX2ZvcmVncm91bmQiLCJfZGlydHlDb2xvcnMiLCJfaGVpZ2h0IiwiX3dpZHRoIiwiX2RpcnR5Qm91bmRzIiwiZm9yZWdyb3VuZCIsImJhY2tncm91bmQiLCJjb21wb25lbnQiLCJwdXNoIiwiYXBwZW5kIiwiZ2V0RWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsImNvbG9yIiwiZm9yRWFjaCIsImNoaWxkIiwiZHJhdyIsIlNlZVNhdyIsIl9yb290Q29tcG9uZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIl9kcmF3SW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIl9wZXJmb3JtRHJhd2luZyIsImNyZWF0ZUVsZW1lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1C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QUFsQixDQUFQO0FBQ0g7QUFmTDs7QUFBQTtBQUFBO0FBMEJDLEM7Ozs7Ozs7Ozs7OztBQzVCRDtBQUFBO0NBRUE7O0FBQ0FDLE1BQU0sQ0FBQ1IsTUFBUCxHQUFnQkEsc0RBQWhCLEMiLCJmaWxlIjoic2Vlc2F3LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCJleHBvcnQgY2xhc3MgQ29tcG9uZW50XG57XG4gICAgY29uc3RydWN0b3IoaWQsIGVsZW1lbnQpXG4gICAge1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5pZCA9IHRoaXMuX2lkO1xuXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG5cbiAgICAgICAgLy8gSW5pdGlhbCBTdGF0ZVxuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kID0gJ2JsYWNrJztcbiAgICAgICAgdGhpcy5fZm9yZWdyb3VuZCA9ICd3aGl0ZSc7XG4gICAgICAgIHRoaXMuX2RpcnR5Q29sb3JzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl9oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLl93aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuX2RpcnR5Qm91bmRzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRFbGVtZW50KClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICAgIH1cblxuICAgIHNldEZvcmVncm91bmQoZm9yZWdyb3VuZClcbiAgICB7XG4gICAgICAgIHRoaXMuX2ZvcmVncm91bmQgPSBmb3JlZ3JvdW5kO1xuICAgICAgICB0aGlzLl9kaXJ0eUNvbG9ycyA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0QmFja2dyb3VuZChiYWNrZ3JvdW5kKVxuICAgIHtcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG4gICAgICAgIHRoaXMuX2RpcnR5Q29sb3JzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBhcHBlbmQoY29tcG9uZW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChjb21wb25lbnQpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZChjb21wb25lbnQuZ2V0RWxlbWVudCgpKTtcbiAgICB9XG5cbiAgICBkcmF3KClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLl9kaXJ0eUNvbG9ycylcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0aW5nIGNvbG91cnMgb2YgJywgdGhpcy5faWQpO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gdGhpcy5fYmFja2dyb3VuZDtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLl9mb3JlZ3JvdW5kO1xuICAgICAgICAgICAgdGhpcy5fZGlydHlDb2xvcnMgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5kcmF3KCkpO1xuICAgIH1cbn07IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgU2VlU2F3XG57XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy5fcm9vdENvbXBvbmVudCA9IG5ldyBDb21wb25lbnQoJ3NlZXNhdycsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWVzYXcnKSk7XG5cbiAgICAgICAgLy8gSW50ZXJ2YWwgdGhhdCBwZXJmb3JtcyB0aGUgZHJhd2luZyBvZiBjb21wb25lbnRzXG4gICAgICAgIHRoaXMuX2RyYXdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3BlcmZvcm1EcmF3aW5nKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIHN0YXRpYyBDb21wb25lbnQoaWQpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IENvbXBvbmVudChpZCwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIH1cblxuICAgIGFwcGVuZChjb21wb25lbnQpXG4gICAge1xuICAgICAgICB0aGlzLl9yb290Q29tcG9uZW50LmFwcGVuZChjb21wb25lbnQpO1xuICAgIH1cblxuICAgIF9wZXJmb3JtRHJhd2luZygpXG4gICAge1xuICAgICAgICB0aGlzLl9yb290Q29tcG9uZW50LmRyYXcoKTtcbiAgICB9XG59OyIsImltcG9ydCB7IFNlZVNhdyB9IGZyb20gJy4vY2xhc3Nlcy9TZWVTYXcnO1xuXG4vLyBFeHBvc2UgU2VlU2F3IGdsb2JhbGx5XG53aW5kb3cuU2VlU2F3ID0gU2VlU2F3OyJdLCJzb3VyY2VSb290IjoiIn0=