"use strict";
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loginPage; }
/* harmony export */ });
/* harmony import */ var C_Users_cristopher_Desktop_React_auth_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_cristopher_Desktop_React_auth_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_cristopher_Desktop_React_auth_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_cristopher_Desktop_React_auth_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Plugins_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Plugins/firebase */ "./Plugins/firebase.js");
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/auth */ "./node_modules/@firebase/auth/dist/esm2017/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\cristopher\\Desktop\\React\\auth-app\\pages\\login.js",
    _s = $RefreshSig$();






function loginPage() {
  _s();

  //use ref
  var email = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  var passtowd = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      islogin = _useState[0],
      setisLoginin = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      stateSing = _useState2[0];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),
      user = _useState3[0],
      setUser = _useState3[1];

  (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(_Plugins_firebase__WEBPACK_IMPORTED_MODULE_2__.auth, function (user) {
    if (user) {
      setisLoginin(true);
      setUser(_Plugins_firebase__WEBPACK_IMPORTED_MODULE_2__.auth);
    } else {
      console.log('Inicie sesion');
      console.log(stateSing);
    }
  });

  var singout = function singout() {
    var auth = (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();

    if (singout) {} else {
      (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(auth).then(function () {
        console.alert('SE CERRO SESION');
        stateSing(true);
      })["catch"](function (error) {});
    }
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_Users_cristopher_Desktop_React_auth_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_cristopher_Desktop_React_auth_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
      var resul;
      return C_Users_cristopher_Desktop_React_auth_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault(); //bloque el comportamiento de la pagina

              _context.prev = 1;
              _context.next = 4;
              return (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_Plugins_firebase__WEBPACK_IMPORTED_MODULE_2__.auth, email.current.value, passtowd.current.value);

            case 4:
              resul = _context.sent;
              _context.next = 9;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return islogin ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
      children: ["Bienvenido ", user.email]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
      onClick: singout,
      children: "exit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 13
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
      children: "Iniciar sesion"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
        children: "Correo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "email",
        ref: email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
        children: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "password",
        ref: passtowd
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        type: "submit",
        children: "Iniciar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 13
  }, this);
}

_s(loginPage, "ypscOQFOj3WyZhmkCUiRnwRA0DM=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMjNkZjZlMmM5NzA4NzE0NmMyMGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTTyxTQUFULEdBQW9CO0FBQUE7O0FBQy9CO0FBQ0EsTUFBTUMsS0FBSyxHQUFHSCw2Q0FBTSxDQUFDLElBQUQsQ0FBcEI7QUFDQSxNQUFNSSxRQUFRLEdBQUdKLDZDQUFNLENBQUMsSUFBRCxDQUF2Qjs7QUFDQSxrQkFBZ0NDLCtDQUFRLENBQUMsS0FBRCxDQUF4QztBQUFBLE1BQU9JLE9BQVA7QUFBQSxNQUFnQkMsWUFBaEI7O0FBQ0EsbUJBQW9CTCwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUI7QUFBQSxNQUFPTSxTQUFQOztBQUNBLG1CQUF3Qk4sK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT08sSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0FaLEVBQUFBLGtFQUFrQixDQUFDRixtREFBRCxFQUFPLFVBQUNhLElBQUQsRUFBVTtBQUMvQixRQUFHQSxJQUFILEVBQVE7QUFDSkYsTUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBRyxNQUFBQSxPQUFPLENBQUNkLG1EQUFELENBQVA7QUFDSCxLQUhELE1BR0s7QUFDRGUsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosU0FBWjtBQUNIO0FBQ0osR0FSaUIsQ0FBbEI7O0FBU0EsTUFBSUssT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNoQixRQUFNakIsSUFBSSxHQUFHQyx1REFBTyxFQUFwQjs7QUFDQSxRQUFHZ0IsT0FBSCxFQUFXLENBRVYsQ0FGRCxNQUVLO0FBQ0RiLE1BQUFBLHVEQUFPLENBQUNKLElBQUQsQ0FBUCxDQUFja0IsSUFBZCxDQUFtQixZQUFLO0FBQ3BCSCxRQUFBQSxPQUFPLENBQUNJLEtBQVIsQ0FBYyxpQkFBZDtBQUNBUCxRQUFBQSxTQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0gsT0FIRCxXQUdTLFVBQUNRLEtBQUQsRUFBVyxDQUVuQixDQUxEO0FBTUg7QUFDSixHQVpEOztBQWFBLE1BQUlDLFlBQVk7QUFBQSxxU0FBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZkEsY0FBQUEsS0FBSyxDQUFDQyxjQUFOLEdBRGUsQ0FDUzs7QUFEVDtBQUFBO0FBQUEscUJBR1NwQiwwRUFBMEIsQ0FBQ0gsbURBQUQsRUFBT1EsS0FBSyxDQUFDZ0IsT0FBTixDQUFjQyxLQUFyQixFQUE0QmhCLFFBQVEsQ0FBQ2UsT0FBVCxDQUFpQkMsS0FBN0MsQ0FIbkM7O0FBQUE7QUFHTEMsY0FBQUEsS0FISztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpMLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBUUEsU0FDSVgsT0FBTyxnQkFDSDtBQUFBLDRCQUNJO0FBQUEsZ0NBQWdCRyxJQUFJLENBQUNMLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBUSxhQUFPLEVBQUVTLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREcsZ0JBTUg7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTSxjQUFRLEVBQUVJLFlBQWhCO0FBQUEsOEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQ0EsWUFBSSxFQUFDLE9BREw7QUFFQSxXQUFHLEVBQUliO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBLGVBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOQSxlQU9BO0FBQ0EsWUFBSSxFQUFDLFVBREw7QUFFQSxXQUFHLEVBQUVDO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBBLGVBVUE7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVBSO0FBdUJIOztHQTVEdUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9QbHVnaW5zL2ZpcmViYXNlJ1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQsIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLCBzaWduT3V0fSBmcm9tICdAZmlyZWJhc2UvYXV0aCdcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpblBhZ2UoKXtcclxuICAgIC8vdXNlIHJlZlxyXG4gICAgY29uc3QgZW1haWwgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBwYXNzdG93ZCA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFtpc2xvZ2luLCBzZXRpc0xvZ2luaW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc3RhdGVTaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pXHJcbiAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcclxuICAgICAgICBpZih1c2VyKXtcclxuICAgICAgICAgICAgc2V0aXNMb2dpbmluKHRydWUpXHJcbiAgICAgICAgICAgIHNldFVzZXIoYXV0aClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0luaWNpZSBzZXNpb24nKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGVTaW5nKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBsZXQgc2luZ291dCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gICAgICAgIGlmKHNpbmdvdXQpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2lnbk91dChhdXRoKS50aGVuKCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5hbGVydCgnU0UgQ0VSUk8gU0VTSU9OJylcclxuICAgICAgICAgICAgICAgIHN0YXRlU2luZyh0cnVlKVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vYmxvcXVlIGVsIGNvbXBvcnRhbWllbnRvIGRlIGxhIHBhZ2luYVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsID0gYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwuY3VycmVudC52YWx1ZSwgcGFzc3Rvd2QuY3VycmVudC52YWx1ZSlcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIGlzbG9naW4gPyAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+QmllbnZlbmlkbyB7dXNlci5lbWFpbH08L2gxPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaW5nb3V0fT5leGl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgXHJcbiAgICAgICAgOiAoIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+SW5pY2lhciBzZXNpb248L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvcnJlbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgIHJlZiA9IHtlbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgIHJlZj17cGFzc3Rvd2R9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5JbmljaWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiYXV0aCIsImdldEF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImxvZ2luUGFnZSIsImVtYWlsIiwicGFzc3Rvd2QiLCJpc2xvZ2luIiwic2V0aXNMb2dpbmluIiwic3RhdGVTaW5nIiwidXNlciIsInNldFVzZXIiLCJjb25zb2xlIiwibG9nIiwic2luZ291dCIsInRoZW4iLCJhbGVydCIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsInJlc3VsIl0sInNvdXJjZVJvb3QiOiIifQ==