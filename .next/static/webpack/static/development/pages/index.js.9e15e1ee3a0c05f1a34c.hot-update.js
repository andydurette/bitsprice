webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Andy\\Documents\\code\\5. React\\bitsprice\\components\\Prices.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Prices = function Prices(props) {
  _s();

  //console.log(props.bpi.bpi.USD.description);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('USD'),
      currency = _useState[0],
      setCurrency = _useState[1];

  var list = '';

  if (currency === 'USD') {
    list = __jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 12
      }
    }, "Bitcoin rate for ", props.bpi.bpi.USD.description, ": ", __jsx("span", {
      className: "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }, props.bpi.bpi.USD.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, props.bpi.bpi.USD.rate));
  } else if (currency === 'GBP') {
    list = __jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 12
      }
    }, "Bitcoin rate for ", props.bpi.bpi.GBP.description, ": ", __jsx("span", {
      className: "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, props.bpi.bpi.GBP.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }, props.bpi.bpi.GBP.rate));
  } else if (currency === 'EUR') {
    list = __jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 12
      }
    }, "Bitcoin rate for ", props.bpi.bpi.EUR.description, ": ", __jsx("span", {
      className: "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, props.bpi.bpi.EUR.code), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, props.bpi.bpi.EUR.rate));
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "list-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, list));
};

_s(Prices, "IMt9glJKuY0gCtznVFnjeGsjS3E=");

_c = Prices;
/* harmony default export */ __webpack_exports__["default"] = (Prices);

var _c;

$RefreshReg$(_c, "Prices");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaWNlcy5qcyJdLCJuYW1lcyI6WyJQcmljZXMiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3VycmVuY3kiLCJzZXRDdXJyZW5jeSIsImxpc3QiLCJicGkiLCJVU0QiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJyYXRlIiwiR0JQIiwiRVVSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXhCO0FBRndCLGtCQUlNQyxzREFBUSxDQUFDLEtBQUQsQ0FKZDtBQUFBLE1BSW5CQyxRQUptQjtBQUFBLE1BSVRDLFdBSlM7O0FBTXhCLE1BQUlDLElBQUksR0FBRyxFQUFYOztBQUVBLE1BQUdGLFFBQVEsS0FBSyxLQUFoQixFQUF1QjtBQUNyQkUsUUFBSSxHQUFHO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ1dKLEtBQUssQ0FBQ0ssR0FBTixDQUFVQSxHQUFWLENBQWNDLEdBQWQsQ0FBa0JDLFdBRDdCLFFBRUw7QUFBTSxlQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQ1AsS0FBSyxDQUFDSyxHQUFOLENBQVVBLEdBQVYsQ0FBY0MsR0FBZCxDQUFrQkUsSUFEbkIsQ0FGSyxFQUlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBU1IsS0FBSyxDQUFDSyxHQUFOLENBQVVBLEdBQVYsQ0FBY0MsR0FBZCxDQUFrQkcsSUFBM0IsQ0FKSyxDQUFQO0FBTUQsR0FQRCxNQU9PLElBQUdQLFFBQVEsS0FBSyxLQUFoQixFQUF1QjtBQUM1QkUsUUFBSSxHQUFHO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ1dKLEtBQUssQ0FBQ0ssR0FBTixDQUFVQSxHQUFWLENBQWNLLEdBQWQsQ0FBa0JILFdBRDdCLFFBRUw7QUFBTSxlQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQ1AsS0FBSyxDQUFDSyxHQUFOLENBQVVBLEdBQVYsQ0FBY0ssR0FBZCxDQUFrQkYsSUFEbkIsQ0FGSyxFQUlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBU1IsS0FBSyxDQUFDSyxHQUFOLENBQVVBLEdBQVYsQ0FBY0ssR0FBZCxDQUFrQkQsSUFBM0IsQ0FKSyxDQUFQO0FBT0QsR0FSTSxNQVFBLElBQUdQLFFBQVEsS0FBSyxLQUFoQixFQUF1QjtBQUM1QkUsUUFBSSxHQUFHO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ1dKLEtBQUssQ0FBQ0ssR0FBTixDQUFVQSxHQUFWLENBQWNNLEdBQWQsQ0FBa0JKLFdBRDdCLFFBRUw7QUFBTSxlQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQ1AsS0FBSyxDQUFDSyxHQUFOLENBQVVBLEdBQVYsQ0FBY00sR0FBZCxDQUFrQkgsSUFEbkIsQ0FGSyxFQUlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBU1IsS0FBSyxDQUFDSyxHQUFOLENBQVVBLEdBQVYsQ0FBY00sR0FBZCxDQUFrQkYsSUFBM0IsQ0FKSyxDQUFQO0FBT0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLElBREgsQ0FERixDQURGO0FBT0QsQ0F4Q0Q7O0dBQU1MLE07O0tBQUFBLE07QUEwQ1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45ZTE1ZTFlZTNhMGMwNWYxYTM0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUHJpY2VzID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIC8vY29uc29sZS5sb2cocHJvcHMuYnBpLmJwaS5VU0QuZGVzY3JpcHRpb24pO1xyXG5cclxuICBsZXQgW2N1cnJlbmN5LCBzZXRDdXJyZW5jeV0gPSB1c2VTdGF0ZSgnVVNEJyk7XHJcblxyXG4gIGxldCBsaXN0ID0gJyc7XHJcblxyXG4gIGlmKGN1cnJlbmN5ID09PSAnVVNEJykge1xyXG4gICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3Byb3BzLmJwaS5icGkuVVNELmRlc2NyaXB0aW9ufVxyXG4gICAgOiA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+XHJcbiAgICAgIHtwcm9wcy5icGkuYnBpLlVTRC5jb2RlfTwvc3Bhbj5cclxuICAgICAgPHN0cm9uZz57cHJvcHMuYnBpLmJwaS5VU0QucmF0ZX08L3N0cm9uZz5cclxuICAgIDwvbGk+O1xyXG4gIH0gZWxzZSBpZihjdXJyZW5jeSA9PT0gJ0dCUCcpIHtcclxuICAgIGxpc3QgPSA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICBCaXRjb2luIHJhdGUgZm9yIHtwcm9wcy5icGkuYnBpLkdCUC5kZXNjcmlwdGlvbn1cclxuICAgIDogPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPlxyXG4gICAgICB7cHJvcHMuYnBpLmJwaS5HQlAuY29kZX08L3NwYW4+XHJcbiAgICAgIDxzdHJvbmc+e3Byb3BzLmJwaS5icGkuR0JQLnJhdGV9PC9zdHJvbmc+XHJcbiAgICA8L2xpPjtcclxuXHJcbiAgfSBlbHNlIGlmKGN1cnJlbmN5ID09PSAnRVVSJykge1xyXG4gICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3Byb3BzLmJwaS5icGkuRVVSLmRlc2NyaXB0aW9ufVxyXG4gICAgOiA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+XHJcbiAgICAgIHtwcm9wcy5icGkuYnBpLkVVUi5jb2RlfTwvc3Bhbj5cclxuICAgICAgPHN0cm9uZz57cHJvcHMuYnBpLmJwaS5FVVIucmF0ZX08L3N0cm9uZz5cclxuICAgIDwvbGk+O1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgIHtsaXN0fVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==