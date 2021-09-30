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

    if (!singout) {
      console.log('entro');
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
      lineNumber: 45,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
      onClick: singout,
      children: "exit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 13
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
      children: "Iniciar sesion"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
        children: "Correo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "email",
        ref: email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
        children: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "password",
        ref: passtowd
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        type: "submit",
        children: "Iniciar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uYzdlYjg1ZmM5ZDVhN2Y4YzVkMjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTTyxTQUFULEdBQW9CO0FBQUE7O0FBQy9CO0FBQ0EsTUFBTUMsS0FBSyxHQUFHSCw2Q0FBTSxDQUFDLElBQUQsQ0FBcEI7QUFDQSxNQUFNSSxRQUFRLEdBQUdKLDZDQUFNLENBQUMsSUFBRCxDQUF2Qjs7QUFDQSxrQkFBZ0NDLCtDQUFRLENBQUMsS0FBRCxDQUF4QztBQUFBLE1BQU9JLE9BQVA7QUFBQSxNQUFnQkMsWUFBaEI7O0FBQ0EsbUJBQW9CTCwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUI7QUFBQSxNQUFPTSxTQUFQOztBQUNBLG1CQUF3Qk4sK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT08sSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0FaLEVBQUFBLGtFQUFrQixDQUFDRixtREFBRCxFQUFPLFVBQUNhLElBQUQsRUFBVTtBQUMvQixRQUFHQSxJQUFILEVBQVE7QUFDSkYsTUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBRyxNQUFBQSxPQUFPLENBQUNkLG1EQUFELENBQVA7QUFDSCxLQUhELE1BR0s7QUFDRGUsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosU0FBWjtBQUNIO0FBQ0osR0FSaUIsQ0FBbEI7O0FBU0EsTUFBSUssT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNoQixRQUFNakIsSUFBSSxHQUFHQyx1REFBTyxFQUFwQjs7QUFDQSxRQUFHLENBQUNnQixPQUFKLEVBQVk7QUFDUkYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBWixNQUFBQSx1REFBTyxDQUFDSixJQUFELENBQVAsQ0FBY2tCLElBQWQsQ0FBbUIsWUFBSztBQUNwQkgsUUFBQUEsT0FBTyxDQUFDSSxLQUFSLENBQWMsaUJBQWQ7QUFDQVAsUUFBQUEsU0FBUyxDQUFDLElBQUQsQ0FBVDtBQUNILE9BSEQsV0FHUyxVQUFDUSxLQUFELEVBQVcsQ0FFbkIsQ0FMRDtBQU1IO0FBQ0osR0FYRDs7QUFZQSxNQUFJQyxZQUFZO0FBQUEscVNBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZBLGNBQUFBLEtBQUssQ0FBQ0MsY0FBTixHQURlLENBQ1M7O0FBRFQ7QUFBQTtBQUFBLHFCQUdTcEIsMEVBQTBCLENBQUNILG1EQUFELEVBQU9RLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBY0MsS0FBckIsRUFBNEJoQixRQUFRLENBQUNlLE9BQVQsQ0FBaUJDLEtBQTdDLENBSG5DOztBQUFBO0FBR0xDLGNBQUFBLEtBSEs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaTCxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQVFBLFNBQ0lYLE9BQU8sZ0JBQ0g7QUFBQSw0QkFDSTtBQUFBLGdDQUFnQkcsSUFBSSxDQUFDTCxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQVEsYUFBTyxFQUFFUyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURHLGdCQU1IO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU0sY0FBUSxFQUFFSSxZQUFoQjtBQUFBLDhCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUNBLFlBQUksRUFBQyxPQURMO0FBRUEsV0FBRyxFQUFJYjtBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxlQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkEsZUFPQTtBQUNBLFlBQUksRUFBQyxVQURMO0FBRUEsV0FBRyxFQUFFQztBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQQSxlQVVBO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFQUjtBQXVCSDs7R0EzRHVCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vUGx1Z2lucy9maXJlYmFzZSdcclxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkLCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbk91dH0gZnJvbSAnQGZpcmViYXNlL2F1dGgnXHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9naW5QYWdlKCl7XHJcbiAgICAvL3VzZSByZWZcclxuICAgIGNvbnN0IGVtYWlsID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgcGFzc3Rvd2QgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbaXNsb2dpbiwgc2V0aXNMb2dpbmluXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3N0YXRlU2luZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KVxyXG4gICAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XHJcbiAgICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgICAgIHNldGlzTG9naW5pbih0cnVlKVxyXG4gICAgICAgICAgICBzZXRVc2VyKGF1dGgpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmljaWUgc2VzaW9uJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlU2luZylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgbGV0IHNpbmdvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICAgICAgICBpZighc2luZ291dCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbnRybycpXHJcbiAgICAgICAgICAgIHNpZ25PdXQoYXV0aCkudGhlbigoKT0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuYWxlcnQoJ1NFIENFUlJPIFNFU0lPTicpXHJcbiAgICAgICAgICAgICAgICBzdGF0ZVNpbmcodHJ1ZSlcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvL2Jsb3F1ZSBlbCBjb21wb3J0YW1pZW50byBkZSBsYSBwYWdpbmFcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bCA9IGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLmN1cnJlbnQudmFsdWUsIHBhc3N0b3dkLmN1cnJlbnQudmFsdWUpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICBpc2xvZ2luID8gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPkJpZW52ZW5pZG8ge3VzZXIuZW1haWx9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2luZ291dH0+ZXhpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIFxyXG4gICAgICAgIDogKCA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPkluaWNpYXIgc2VzaW9uPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9ID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db3JyZW88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICByZWYgPSB7ZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICByZWY9e3Bhc3N0b3dkfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+SW5pY2lhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbImF1dGgiLCJnZXRBdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJsb2dpblBhZ2UiLCJlbWFpbCIsInBhc3N0b3dkIiwiaXNsb2dpbiIsInNldGlzTG9naW5pbiIsInN0YXRlU2luZyIsInVzZXIiLCJzZXRVc2VyIiwiY29uc29sZSIsImxvZyIsInNpbmdvdXQiLCJ0aGVuIiwiYWxlcnQiLCJlcnJvciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiLCJyZXN1bCJdLCJzb3VyY2VSb290IjoiIn0=