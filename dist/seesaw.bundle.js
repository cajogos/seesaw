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
/* harmony import */ var _NumberUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberUtils */ "./src/classes/NumberUtils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Component = /*#__PURE__*/function () {
  function Component(id, element) {
    _classCallCheck(this, Component);

    this._id = id;
    this._element = element;
    this._element.id = this._id;
    this._children = [];

    this._initColors();

    this._initDimensions();

    this._initSize();
  }

  _createClass(Component, [{
    key: "_initColors",
    value: function _initColors() {
      this._background = this._element.style.background || '#000000';
      this._foreground = this._element.style.color || '#FFFFFF';
      this._dirtyColors = true;
    }
  }, {
    key: "_initDimensions",
    value: function _initDimensions() {
      this._position = this._element.style.position || 'absolute';
      this._x = 0;
      this._y = 0;
      this._z = _NumberUtils__WEBPACK_IMPORTED_MODULE_0__["NumberUtils"].toInt(this._element.style.zIndex);
      this._dirtyDimensions = true;
    }
  }, {
    key: "_initSize",
    value: function _initSize() {
      this._height = _NumberUtils__WEBPACK_IMPORTED_MODULE_0__["NumberUtils"].toInt(this._element.style.height);
      this._width = _NumberUtils__WEBPACK_IMPORTED_MODULE_0__["NumberUtils"].toInt(this._element.style.width);
      this._dirtySize = true;
    }
  }, {
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
    key: "getX",
    value: function getX() {
      return this._x;
    }
  }, {
    key: "setX",
    value: function setX(x) {
      x = _NumberUtils__WEBPACK_IMPORTED_MODULE_0__["NumberUtils"].toInt(x);

      if (x !== this._x) {
        this._x = x;
        this._dirtyDimensions = true;
      }
    }
  }, {
    key: "getY",
    value: function getY() {
      return this._y;
    }
  }, {
    key: "setY",
    value: function setY(y) {
      y = _NumberUtils__WEBPACK_IMPORTED_MODULE_0__["NumberUtils"].toInt(y);

      if (y !== this._y) {
        this._y = y;
        this._dirtyDimensions = true;
      }
    }
  }, {
    key: "getZ",
    value: function getZ() {
      return this._z;
    }
  }, {
    key: "setZ",
    value: function setZ(z) {
      z = _NumberUtils__WEBPACK_IMPORTED_MODULE_0__["NumberUtils"].toInt(z);

      if (z !== this._z) {
        this._z = z;
        this._dirtyDimensions = true;
      }
    }
  }, {
    key: "setPosition",
    value: function setPosition(x, y) {
      this.setX(x);
      this.setY(y);
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this._width;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      width = _NumberUtils__WEBPACK_IMPORTED_MODULE_0__["NumberUtils"].toInt(width);

      if (width !== this._width) {
        this._width = width;
        this._dirtySize = true;
      }
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this._height;
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      height = _NumberUtils__WEBPACK_IMPORTED_MODULE_0__["NumberUtils"].toInt(height);

      if (height !== this._height) {
        this._height = height;
        this._dirtySize = true;
      }
    }
  }, {
    key: "setSize",
    value: function setSize(width, height) {
      this.setWidth(width);
      this.setHeight(height);
    }
  }, {
    key: "append",
    value: function append(component) {
      component.setZ(this._z + 1);

      this._children.push(component);

      this._element.append(component.getElement());
    }
  }, {
    key: "draw",
    value: function draw() {
      if (this._dirtyColors) {
        this._element.style.background = this._background;
        this._element.style.color = this._foreground;
        this._dirtyColors = false;
      }

      if (this._dirtyDimensions) {
        this._element.style.position = this._position;
        this._element.style.left = _NumberUtils__WEBPACK_IMPORTED_MODULE_0__["NumberUtils"].toPx(this._x);
        this._element.style.top = _NumberUtils__WEBPACK_IMPORTED_MODULE_0__["NumberUtils"].toPx(this._y);
        this._element.style.zIndex = this._z;
        this._dirtyDimensions = false;
      }

      if (this._dirtySize) {
        this._element.style.width = _NumberUtils__WEBPACK_IMPORTED_MODULE_0__["NumberUtils"].toPx(this._width);
        this._element.style.height = _NumberUtils__WEBPACK_IMPORTED_MODULE_0__["NumberUtils"].toPx(this._height);
        this._dirtySize = false;
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

/***/ "./src/classes/NumberUtils.js":
/*!************************************!*\
  !*** ./src/classes/NumberUtils.js ***!
  \************************************/
/*! exports provided: NumberUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberUtils", function() { return NumberUtils; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NumberUtils = /*#__PURE__*/function () {
  function NumberUtils() {
    _classCallCheck(this, NumberUtils);
  }

  _createClass(NumberUtils, null, [{
    key: "toInt",
    value: function toInt(value) {
      if (typeof value === 'string') {
        value = String(value).trim();

        if (value.length > 0) {
          if (value.substr(-2, 2) === 'px') {
            value = value.substr(0, value.length - 2);
          }
        } else {
          value = 0;
        }
      } else {
        value = parseInt(value, 10);
      }

      return value;
    }
  }, {
    key: "toPx",
    value: function toPx(value) {
      if (typeof value === 'string') {
        value = String(value);

        if (value.substr(-2, 2) !== 'px') {
          value += 'px';
        }
      } else {
        value += 'px';
      }

      return value;
    }
  }]);

  return NumberUtils;
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


var componentsCreated = 0;
var SeeSaw = /*#__PURE__*/function () {
  function SeeSaw() {
    var _this = this;

    _classCallCheck(this, SeeSaw);

    var rootElement = document.getElementById('seesaw');
    rootElement.style.position = 'relative';
    this._rootComponent = new _Component__WEBPACK_IMPORTED_MODULE_0__["Component"]('seesaw', rootElement);
    componentsCreated++; // Interval that performs the drawing of components

    this._drawInterval = setInterval(function () {
      _this._performDrawing();
    }, 16);
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
    key: "component",
    value: function component() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$id = _ref.id,
          id = _ref$id === void 0 ? null : _ref$id,
          _ref$type = _ref.type,
          type = _ref$type === void 0 ? 'div' : _ref$type;

      componentsCreated++;
      if (id === null) id = "ssc-".concat(componentsCreated);
      return new _Component__WEBPACK_IMPORTED_MODULE_0__["Component"](id, document.createElement(type));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL051bWJlclV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1NlZVNhdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJpZCIsImVsZW1lbnQiLCJfaWQiLCJfZWxlbWVudCIsIl9jaGlsZHJlbiIsIl9pbml0Q29sb3JzIiwiX2luaXREaW1lbnNpb25zIiwiX2luaXRTaXplIiwiX2JhY2tncm91bmQiLCJzdHlsZSIsImJhY2tncm91bmQiLCJfZm9yZWdyb3VuZCIsImNvbG9yIiwiX2RpcnR5Q29sb3JzIiwiX3Bvc2l0aW9uIiwicG9zaXRpb24iLCJfeCIsIl95IiwiX3oiLCJOdW1iZXJVdGlscyIsInRvSW50IiwiekluZGV4IiwiX2RpcnR5RGltZW5zaW9ucyIsIl9oZWlnaHQiLCJoZWlnaHQiLCJfd2lkdGgiLCJ3aWR0aCIsIl9kaXJ0eVNpemUiLCJmb3JlZ3JvdW5kIiwieCIsInkiLCJ6Iiwic2V0WCIsInNldFkiLCJzZXRXaWR0aCIsInNldEhlaWdodCIsImNvbXBvbmVudCIsInNldFoiLCJwdXNoIiwiYXBwZW5kIiwiZ2V0RWxlbWVudCIsImxlZnQiLCJ0b1B4IiwidG9wIiwiZm9yRWFjaCIsImNoaWxkIiwiZHJhdyIsInZhbHVlIiwiU3RyaW5nIiwidHJpbSIsImxlbmd0aCIsInN1YnN0ciIsInBhcnNlSW50IiwiY29tcG9uZW50c0NyZWF0ZWQiLCJTZWVTYXciLCJyb290RWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJfcm9vdENvbXBvbmVudCIsIl9kcmF3SW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIl9wZXJmb3JtRHJhd2luZyIsInR5cGUiLCJjcmVhdGVFbGVtZW50Iiwid2luZG93Il0sIm1h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LGVBQUw7QUFDSCxLQUYrQixFQUU3QixFQUY2QixDQUFoQztBQUdIOztBQWRMO0FBQUE7QUFBQSwyQkF1Qld6QixTQXZCWCxFQXdCSTtBQUNJLFdBQUtzQixjQUFMLENBQW9CbkIsTUFBcEIsQ0FBMkJILFNBQTNCO0FBQ0g7QUExQkw7QUFBQTtBQUFBLHNDQTZCSTtBQUNJLFdBQUtzQixjQUFMLENBQW9CWixJQUFwQjtBQUNIO0FBL0JMO0FBQUE7QUFBQSxnQ0FpQkk7QUFBQSxxRkFEK0MsRUFDL0M7QUFBQSx5QkFEbUI5QyxFQUNuQjtBQUFBLFVBRG1CQSxFQUNuQix3QkFEd0IsSUFDeEI7QUFBQSwyQkFEOEI4RCxJQUM5QjtBQUFBLFVBRDhCQSxJQUM5QiwwQkFEcUMsS0FDckM7O0FBQ0lULHVCQUFpQjtBQUNqQixVQUFJckQsRUFBRSxLQUFLLElBQVgsRUFBaUJBLEVBQUUsaUJBQVVxRCxpQkFBVixDQUFGO0FBQ2pCLGFBQU8sSUFBSXRELG9EQUFKLENBQWNDLEVBQWQsRUFBa0J3RCxRQUFRLENBQUNPLGFBQVQsQ0FBdUJELElBQXZCLENBQWxCLENBQVA7QUFDSDtBQXJCTDs7QUFBQTtBQUFBO0FBZ0NDLEM7Ozs7Ozs7Ozs7OztBQ3BDRDtBQUFBO0NBRUE7O0FBQ0FFLE1BQU0sQ0FBQ1YsTUFBUCxHQUFnQkEsc0RBQWhCLEMiLCJmaWxlIjoic2Vlc2F3LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCJpbXBvcnQgeyBOdW1iZXJVdGlscyB9IGZyb20gJy4vTnVtYmVyVXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50XG57XG4gICAgY29uc3RydWN0b3IoaWQsIGVsZW1lbnQpXG4gICAge1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5pZCA9IHRoaXMuX2lkO1xuXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG5cbiAgICAgICAgdGhpcy5faW5pdENvbG9ycygpO1xuICAgICAgICB0aGlzLl9pbml0RGltZW5zaW9ucygpO1xuICAgICAgICB0aGlzLl9pbml0U2l6ZSgpO1xuICAgIH1cblxuICAgIF9pbml0Q29sb3JzKClcbiAgICB7XG4gICAgICAgIHRoaXMuX2JhY2tncm91bmQgPSB0aGlzLl9lbGVtZW50LnN0eWxlLmJhY2tncm91bmQgfHwgJyMwMDAwMDAnO1xuICAgICAgICB0aGlzLl9mb3JlZ3JvdW5kID0gdGhpcy5fZWxlbWVudC5zdHlsZS5jb2xvciB8fCAnI0ZGRkZGRic7XG4gICAgICAgIHRoaXMuX2RpcnR5Q29sb3JzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBfaW5pdERpbWVuc2lvbnMoKVxuICAgIHtcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gPSB0aGlzLl9lbGVtZW50LnN0eWxlLnBvc2l0aW9uIHx8ICdhYnNvbHV0ZSc7XG4gICAgICAgIHRoaXMuX3ggPSAwO1xuICAgICAgICB0aGlzLl95ID0gMDtcbiAgICAgICAgdGhpcy5feiA9IE51bWJlclV0aWxzLnRvSW50KHRoaXMuX2VsZW1lbnQuc3R5bGUuekluZGV4KTtcbiAgICAgICAgdGhpcy5fZGlydHlEaW1lbnNpb25zID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBfaW5pdFNpemUoKVxuICAgIHtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gTnVtYmVyVXRpbHMudG9JbnQodGhpcy5fZWxlbWVudC5zdHlsZS5oZWlnaHQpO1xuICAgICAgICB0aGlzLl93aWR0aCA9IE51bWJlclV0aWxzLnRvSW50KHRoaXMuX2VsZW1lbnQuc3R5bGUud2lkdGgpO1xuICAgICAgICB0aGlzLl9kaXJ0eVNpemUgPSB0cnVlO1xuICAgIH1cblxuICAgIGdldEVsZW1lbnQoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gICAgfVxuXG4gICAgc2V0Rm9yZWdyb3VuZChmb3JlZ3JvdW5kKVxuICAgIHtcbiAgICAgICAgdGhpcy5fZm9yZWdyb3VuZCA9IGZvcmVncm91bmQ7XG4gICAgICAgIHRoaXMuX2RpcnR5Q29sb3JzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRCYWNrZ3JvdW5kKGJhY2tncm91bmQpXG4gICAge1xuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcbiAgICAgICAgdGhpcy5fZGlydHlDb2xvcnMgPSB0cnVlO1xuICAgIH1cblxuICAgIGdldFgoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3g7XG4gICAgfVxuXG4gICAgc2V0WCh4KVxuICAgIHtcbiAgICAgICAgeCA9IE51bWJlclV0aWxzLnRvSW50KHgpO1xuICAgICAgICBpZiAoeCAhPT0gdGhpcy5feClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5feCA9IHg7XG4gICAgICAgICAgICB0aGlzLl9kaXJ0eURpbWVuc2lvbnMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0WSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5feTtcbiAgICB9XG5cbiAgICBzZXRZKHkpXG4gICAge1xuICAgICAgICB5ID0gTnVtYmVyVXRpbHMudG9JbnQoeSk7XG4gICAgICAgIGlmICh5ICE9PSB0aGlzLl95KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl95ID0geTtcbiAgICAgICAgICAgIHRoaXMuX2RpcnR5RGltZW5zaW9ucyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRaKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLl96O1xuICAgIH1cblxuICAgIHNldFooeilcbiAgICB7XG4gICAgICAgIHogPSBOdW1iZXJVdGlscy50b0ludCh6KTtcbiAgICAgICAgaWYgKHogIT09IHRoaXMuX3opXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3ogPSB6O1xuICAgICAgICAgICAgdGhpcy5fZGlydHlEaW1lbnNpb25zID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFBvc2l0aW9uKHgsIHkpXG4gICAge1xuICAgICAgICB0aGlzLnNldFgoeCk7XG4gICAgICAgIHRoaXMuc2V0WSh5KTtcbiAgICB9XG5cbiAgICBnZXRXaWR0aCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gICAgfVxuXG4gICAgc2V0V2lkdGgod2lkdGgpXG4gICAge1xuICAgICAgICB3aWR0aCA9IE51bWJlclV0aWxzLnRvSW50KHdpZHRoKTtcbiAgICAgICAgaWYgKHdpZHRoICE9PSB0aGlzLl93aWR0aClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHRoaXMuX2RpcnR5U2l6ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRIZWlnaHQoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICB9XG5cbiAgICBzZXRIZWlnaHQoaGVpZ2h0KVxuICAgIHtcbiAgICAgICAgaGVpZ2h0ID0gTnVtYmVyVXRpbHMudG9JbnQoaGVpZ2h0KTtcbiAgICAgICAgaWYgKGhlaWdodCAhPT0gdGhpcy5faGVpZ2h0KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9kaXJ0eVNpemUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG4gICAgfVxuXG4gICAgYXBwZW5kKGNvbXBvbmVudClcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudC5zZXRaKCh0aGlzLl96ICsgMSkpO1xuICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kKGNvbXBvbmVudC5nZXRFbGVtZW50KCkpO1xuICAgIH1cblxuICAgIGRyYXcoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuX2RpcnR5Q29sb3JzKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSB0aGlzLl9iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5jb2xvciA9IHRoaXMuX2ZvcmVncm91bmQ7XG4gICAgICAgICAgICB0aGlzLl9kaXJ0eUNvbG9ycyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2RpcnR5RGltZW5zaW9ucylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IHRoaXMuX3Bvc2l0aW9uO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5sZWZ0ID0gTnVtYmVyVXRpbHMudG9QeCh0aGlzLl94KTtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUudG9wID0gTnVtYmVyVXRpbHMudG9QeCh0aGlzLl95KTtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuekluZGV4ID0gdGhpcy5fejtcbiAgICAgICAgICAgIHRoaXMuX2RpcnR5RGltZW5zaW9ucyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2RpcnR5U2l6ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS53aWR0aCA9IE51bWJlclV0aWxzLnRvUHgodGhpcy5fd2lkdGgpO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBOdW1iZXJVdGlscy50b1B4KHRoaXMuX2hlaWdodCk7XG4gICAgICAgICAgICB0aGlzLl9kaXJ0eVNpemUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5kcmF3KCkpO1xuICAgIH1cbn07IiwiZXhwb3J0IGNsYXNzIE51bWJlclV0aWxzXG57XG4gICAgc3RhdGljIHRvSW50KHZhbHVlKVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKS50cmltKCk7XG4gICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuc3Vic3RyKC0yLCAyKSA9PT0gJ3B4JylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsIHZhbHVlLmxlbmd0aCAtIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgdG9QeCh2YWx1ZSlcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAodmFsdWUuc3Vic3RyKC0yLCAyKSAhPT0gJ3B4JylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWUgKz0gJ3B4JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufTsiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmxldCBjb21wb25lbnRzQ3JlYXRlZCA9IDA7XG5cbmV4cG9ydCBjbGFzcyBTZWVTYXdcbntcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICBsZXQgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vlc2F3Jyk7XG4gICAgICAgIHJvb3RFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcblxuICAgICAgICB0aGlzLl9yb290Q29tcG9uZW50ID0gbmV3IENvbXBvbmVudCgnc2Vlc2F3Jywgcm9vdEVsZW1lbnQpO1xuICAgICAgICBjb21wb25lbnRzQ3JlYXRlZCsrO1xuXG4gICAgICAgIC8vIEludGVydmFsIHRoYXQgcGVyZm9ybXMgdGhlIGRyYXdpbmcgb2YgY29tcG9uZW50c1xuICAgICAgICB0aGlzLl9kcmF3SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9wZXJmb3JtRHJhd2luZygpO1xuICAgICAgICB9LCAxNik7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbXBvbmVudCh7IGlkID0gbnVsbCwgdHlwZSA9ICdkaXYnIH0gPSB7fSlcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudHNDcmVhdGVkKys7XG4gICAgICAgIGlmIChpZCA9PT0gbnVsbCkgaWQgPSBgc3NjLSR7Y29tcG9uZW50c0NyZWF0ZWR9YDtcbiAgICAgICAgcmV0dXJuIG5ldyBDb21wb25lbnQoaWQsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSkpO1xuICAgIH1cblxuICAgIGFwcGVuZChjb21wb25lbnQpXG4gICAge1xuICAgICAgICB0aGlzLl9yb290Q29tcG9uZW50LmFwcGVuZChjb21wb25lbnQpO1xuICAgIH1cblxuICAgIF9wZXJmb3JtRHJhd2luZygpXG4gICAge1xuICAgICAgICB0aGlzLl9yb290Q29tcG9uZW50LmRyYXcoKTtcbiAgICB9XG59OyIsImltcG9ydCB7IFNlZVNhdyB9IGZyb20gJy4vY2xhc3Nlcy9TZWVTYXcnO1xuXG4vLyBFeHBvc2UgU2VlU2F3IGdsb2JhbGx5XG53aW5kb3cuU2VlU2F3ID0gU2VlU2F3OyJdLCJzb3VyY2VSb290IjoiIn0=