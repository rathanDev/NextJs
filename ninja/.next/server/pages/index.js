(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\VProjects\\Trivyol\\NextJs\\ninja\\pages\\index.js";

const App = ({
  posts
}) => {
  console.log(`Inside Component ${posts}`);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "App"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/hadley/orgs");
  const posts = await res.json();
  console.log(`posts ${posts}`); // localStorage.setItem('posts', posts);

  return {
    props: {
      posts
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaW5qYS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL25pbmphL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLEdBQUcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlO0FBRXZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJGLEtBQU0sRUFBdEM7QUFFQSxzQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0FURDs7QUFXTyxlQUFlRyxjQUFmLEdBQWdDO0FBRW5DLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsMENBQUQsQ0FBdkI7QUFDQSxRQUFNTCxLQUFLLEdBQUcsTUFBTUksR0FBRyxDQUFDRSxJQUFKLEVBQXBCO0FBQ0FMLFNBQU8sQ0FBQ0MsR0FBUixDQUFhLFNBQVFGLEtBQU0sRUFBM0IsRUFKbUMsQ0FNbkM7O0FBRUEsU0FBTztBQUNITyxTQUFLLEVBQUU7QUFDSFA7QUFERztBQURKLEdBQVA7QUFLSDtBQUVELCtEQUFlRCxHQUFmLEU7Ozs7Ozs7Ozs7O0FDMUJBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQXBwID0gKHsgcG9zdHMgfSkgPT4ge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBJbnNpZGUgQ29tcG9uZW50ICR7cG9zdHN9YCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBBcHBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvaGFkbGV5L29yZ3NcIik7XHJcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhgcG9zdHMgJHtwb3N0c31gKTtcclxuXHJcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zdHMnLCBwb3N0cyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb3N0cyxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9