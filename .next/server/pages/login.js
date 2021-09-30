"use strict";
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./Plugins/firebase.js":
/*!*****************************!*\
  !*** ./Plugins/firebase.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "auth": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
// Initialize Cloud Firestore through Firebase




if (firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps.length === 0) {
  const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)({
    apiKey: "AIzaSyBvjOpa-uBTfA_pBzo3MbO72dQabPRNUO0",
    authDomain: "proyecto-gloasario.firebaseapp.com",
    databaseURL: "https://proyecto-gloasario-default-rtdb.firebaseio.com",
    projectId: "proyecto-gloasario",
    storageBucket: "proyecto-gloasario.appspot.com",
    messagingSenderId: "909726365107",
    appId: "1:909726365107:web:10056c5752f289ecc047c6",
    measurementId: "G-H8LV0V60PQ"
  });
}

const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();


/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loginPage)
/* harmony export */ });
/* harmony import */ var _Plugins_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Plugins/firebase */ "./Plugins/firebase.js");
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/auth */ "@firebase/auth");
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\cristopher\\Desktop\\React\\auth-app\\pages\\login.js";




function loginPage() {
  //use ref
  const email = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const passtowd = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const {
    0: islogin,
    1: setisLoginin
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: stateSing
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_Plugins_firebase__WEBPACK_IMPORTED_MODULE_0__.auth, user => {
    if (user) {
      setisLoginin(true);
      setUser(_Plugins_firebase__WEBPACK_IMPORTED_MODULE_0__.auth);
    } else {
      console.log('Inicie sesion');
      console.log(stateSing);
    }
  });

  let singout = event => {
    const auth = (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
    event.preventDefault(); //bloque el comportamiento de la pagina

    if (!stateSing) {
      console.log('entro');
      (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth).then(() => {
        console.alert('SE CERRO SESION');
        stateSing(true);
      }).catch(error => {});
    }
  };

  let handleSubmit = async event => {
    event.preventDefault(); //bloque el comportamiento de la pagina

    try {
      const resul = await (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_Plugins_firebase__WEBPACK_IMPORTED_MODULE_0__.auth, email.current.value, passtowd.current.value);
    } catch (err) {}
  };

  return islogin ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
      onSubmit: singout,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        children: ["Bienvenido ", user.email]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        type: "submit",
        children: "exit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 13
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      children: "Iniciar sesion"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
        children: "Correo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        type: "email",
        ref: email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
        children: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        type: "password",
        ref: passtowd
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        type: "submit",
        children: "Iniciar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 13
  }, this);
}

/***/ }),

/***/ "@firebase/auth":
/*!*********************************!*\
  !*** external "@firebase/auth" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@firebase/auth");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvbG9naW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBR0Msd0RBQUEsS0FBbUIsQ0FBdEIsRUFBd0I7QUFDcEIsUUFBTUksV0FBVyxHQUFHTCwyREFBYSxDQUFDO0FBQzlCTSxJQUFBQSxNQUFNLEVBQUUseUNBRHNCO0FBRTlCQyxJQUFBQSxVQUFVLEVBQUUsb0NBRmtCO0FBRzlCQyxJQUFBQSxXQUFXLEVBQUUsd0RBSGlCO0FBSTlCQyxJQUFBQSxTQUFTLEVBQUUsb0JBSm1CO0FBSzlCQyxJQUFBQSxhQUFhLEVBQUUsZ0NBTGU7QUFNOUJDLElBQUFBLGlCQUFpQixFQUFFLGNBTlc7QUFPOUJDLElBQUFBLEtBQUssRUFBRSwyQ0FQdUI7QUFROUJDLElBQUFBLGFBQWEsRUFBRTtBQVJlLEdBQUQsQ0FBakM7QUFVSDs7QUFFRCxNQUFNQyxFQUFFLEdBQUdaLGdFQUFZLEVBQXZCO0FBQ0EsTUFBTWEsSUFBSSxHQUFHWixzREFBTyxFQUFwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBOztBQUdlLFNBQVNrQixTQUFULEdBQW9CO0FBQy9CO0FBQ0EsUUFBTUMsS0FBSyxHQUFHSCw2Q0FBTSxDQUFDLElBQUQsQ0FBcEI7QUFDQSxRQUFNSSxRQUFRLEdBQUdKLDZDQUFNLENBQUMsSUFBRCxDQUF2QjtBQUNBLFFBQU07QUFBQSxPQUFDSyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUEwQkwsK0NBQVEsQ0FBQyxLQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNNO0FBQUQsTUFBY04sK0NBQVEsQ0FBQyxLQUFELENBQTVCO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQUosRUFBQUEsa0VBQWtCLENBQUNELG1EQUFELEVBQVFZLElBQUQsSUFBVTtBQUMvQixRQUFHQSxJQUFILEVBQVE7QUFDSkYsTUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBRyxNQUFBQSxPQUFPLENBQUNiLG1EQUFELENBQVA7QUFDSCxLQUhELE1BR0s7QUFDRGMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosU0FBWjtBQUNIO0FBQ0osR0FSaUIsQ0FBbEI7O0FBU0EsTUFBSUssT0FBTyxHQUFJQyxLQUFELElBQVc7QUFDckIsVUFBTWpCLElBQUksR0FBR1osdURBQU8sRUFBcEI7QUFDQTZCLElBQUFBLEtBQUssQ0FBQ0MsY0FBTixHQUZxQixDQUVHOztBQUN4QixRQUFHLENBQUNQLFNBQUosRUFBYztBQUNWRyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FaLE1BQUFBLHVEQUFPLENBQUNILElBQUQsQ0FBUCxDQUFjbUIsSUFBZCxDQUFtQixNQUFLO0FBQ3BCTCxRQUFBQSxPQUFPLENBQUNNLEtBQVIsQ0FBYyxpQkFBZDtBQUNBVCxRQUFBQSxTQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0gsT0FIRCxFQUdHVSxLQUhILENBR1VDLEtBQUQsSUFBVyxDQUVuQixDQUxEO0FBTUg7QUFDSixHQVpEOztBQWFBLE1BQUlDLFlBQVksR0FBRyxNQUFPTixLQUFQLElBQWlCO0FBQ2hDQSxJQUFBQSxLQUFLLENBQUNDLGNBQU4sR0FEZ0MsQ0FDUjs7QUFDeEIsUUFBSTtBQUNBLFlBQU1NLEtBQUssR0FBRyxNQUFNdEIsMEVBQTBCLENBQUNGLG1EQUFELEVBQU9PLEtBQUssQ0FBQ2tCLE9BQU4sQ0FBY0MsS0FBckIsRUFBNEJsQixRQUFRLENBQUNpQixPQUFULENBQWlCQyxLQUE3QyxDQUE5QztBQUNILEtBRkQsQ0FFRSxPQUFPQyxHQUFQLEVBQVksQ0FFYjtBQUNKLEdBUEQ7O0FBUUEsU0FDSWxCLE9BQU8sZ0JBQ0g7QUFBQSwyQkFDSTtBQUFNLGNBQVEsRUFBRU8sT0FBaEI7QUFBQSw4QkFDSTtBQUFBLGtDQUFnQkosSUFBSSxDQUFDTCxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREcsZ0JBUUg7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTSxjQUFRLEVBQUVnQixZQUFoQjtBQUFBLDhCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUNBLFlBQUksRUFBQyxPQURMO0FBRUEsV0FBRyxFQUFJaEI7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkEsZUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5BLGVBT0E7QUFDQSxZQUFJLEVBQUMsVUFETDtBQUVBLFdBQUcsRUFBRUM7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEEsZUFVQTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBVFI7QUF5Qkg7Ozs7Ozs7Ozs7QUNuRUQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aC1hcHAvLi9QbHVnaW5zL2ZpcmViYXNlLmpzIiwid2VicGFjazovL2F1dGgtYXBwLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vYXV0aC1hcHAvZXh0ZXJuYWwgXCJAZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovL2F1dGgtYXBwL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vYXV0aC1hcHAvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vYXV0aC1hcHAvZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly9hdXRoLWFwcC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYXV0aC1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbml0aWFsaXplIENsb3VkIEZpcmVzdG9yZSB0aHJvdWdoIEZpcmViYXNlXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAsIGdldEFwcHN9IGZyb20gXCJmaXJlYmFzZS9hcHBcIlxyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCJcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5pZihnZXRBcHBzLmxlbmd0aCA9PT0gMCl7IFxyXG4gICAgY29uc3QgZmlyZWJhc2VBcHAgPSBpbml0aWFsaXplQXBwKHtcclxuICAgICAgICBhcGlLZXk6IFwiQUl6YVN5QnZqT3BhLXVCVGZBX3BCem8zTWJPNzJkUWFiUFJOVU8wXCIsXHJcbiAgICAgICAgYXV0aERvbWFpbjogXCJwcm95ZWN0by1nbG9hc2FyaW8uZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICAgICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9wcm95ZWN0by1nbG9hc2FyaW8tZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICAgICAgcHJvamVjdElkOiBcInByb3llY3RvLWdsb2FzYXJpb1wiLFxyXG4gICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwicHJveWVjdG8tZ2xvYXNhcmlvLmFwcHNwb3QuY29tXCIsXHJcbiAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTA5NzI2MzY1MTA3XCIsXHJcbiAgICAgICAgYXBwSWQ6IFwiMTo5MDk3MjYzNjUxMDc6d2ViOjEwMDU2YzU3NTJmMjg5ZWNjMDQ3YzZcIixcclxuICAgICAgICBtZWFzdXJlbWVudElkOiBcIkctSDhMVjBWNjBQUVwiXHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKTtcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcbmV4cG9ydCB7IGRiLCBhdXRoIH1cclxuXHJcbiIsImltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9QbHVnaW5zL2ZpcmViYXNlJ1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQsIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLCBzaWduT3V0fSBmcm9tICdAZmlyZWJhc2UvYXV0aCdcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpblBhZ2UoKXtcclxuICAgIC8vdXNlIHJlZlxyXG4gICAgY29uc3QgZW1haWwgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBwYXNzdG93ZCA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFtpc2xvZ2luLCBzZXRpc0xvZ2luaW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc3RhdGVTaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pXHJcbiAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcclxuICAgICAgICBpZih1c2VyKXtcclxuICAgICAgICAgICAgc2V0aXNMb2dpbmluKHRydWUpXHJcbiAgICAgICAgICAgIHNldFVzZXIoYXV0aClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0luaWNpZSBzZXNpb24nKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGVTaW5nKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBsZXQgc2luZ291dCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy9ibG9xdWUgZWwgY29tcG9ydGFtaWVudG8gZGUgbGEgcGFnaW5hXHJcbiAgICAgICAgaWYoIXN0YXRlU2luZyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbnRybycpXHJcbiAgICAgICAgICAgIHNpZ25PdXQoYXV0aCkudGhlbigoKT0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuYWxlcnQoJ1NFIENFUlJPIFNFU0lPTicpXHJcbiAgICAgICAgICAgICAgICBzdGF0ZVNpbmcodHJ1ZSlcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvL2Jsb3F1ZSBlbCBjb21wb3J0YW1pZW50byBkZSBsYSBwYWdpbmFcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bCA9IGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLmN1cnJlbnQudmFsdWUsIHBhc3N0b3dkLmN1cnJlbnQudmFsdWUpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICBpc2xvZ2luID8gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NpbmdvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5CaWVudmVuaWRvIHt1c2VyLmVtYWlsfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+ZXhpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIFxyXG4gICAgICAgIDogKCA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPkluaWNpYXIgc2VzaW9uPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9ID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db3JyZW88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICByZWYgPSB7ZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICByZWY9e3Bhc3N0b3dkfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+SW5pY2lhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgKVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFwcHMiLCJnZXRGaXJlc3RvcmUiLCJnZXRBdXRoIiwibGVuZ3RoIiwiZmlyZWJhc2VBcHAiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJkYiIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImxvZ2luUGFnZSIsImVtYWlsIiwicGFzc3Rvd2QiLCJpc2xvZ2luIiwic2V0aXNMb2dpbmluIiwic3RhdGVTaW5nIiwidXNlciIsInNldFVzZXIiLCJjb25zb2xlIiwibG9nIiwic2luZ291dCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiYWxlcnQiLCJjYXRjaCIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwicmVzdWwiLCJjdXJyZW50IiwidmFsdWUiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9