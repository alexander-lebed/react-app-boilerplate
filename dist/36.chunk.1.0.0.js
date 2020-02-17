(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/react-bootstrap/esm/Image.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Image.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n\n\n\n\n\nvar defaultProps = {\n  fluid: false,\n  rounded: false,\n  roundedCircle: false,\n  thumbnail: false\n};\nvar Image = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {\n  var bsPrefix = _ref.bsPrefix,\n      className = _ref.className,\n      fluid = _ref.fluid,\n      rounded = _ref.rounded,\n      roundedCircle = _ref.roundedCircle,\n      thumbnail = _ref.thumbnail,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"bsPrefix\", \"className\", \"fluid\", \"rounded\", \"roundedCircle\", \"thumbnail\"]);\n\n  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__[\"useBootstrapPrefix\"])(bsPrefix, 'img');\n  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(fluid && bsPrefix + \"-fluid\", rounded && \"rounded\", roundedCircle && \"rounded-circle\", thumbnail && bsPrefix + \"-thumbnail\");\n  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"img\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    // eslint-disable-line jsx-a11y/alt-text\n    ref: ref\n  }, props, {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, classes)\n  }));\n});\nImage.displayName = 'Image';\nImage.defaultProps = defaultProps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image);\n\n//# sourceURL=webpack:///./node_modules/react-bootstrap/esm/Image.js?");

/***/ }),

/***/ "./src/components/CV/Skill.js":
/*!************************************!*\
  !*** ./src/components/CV/Skill.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Image */ \"./node_modules/react-bootstrap/esm/Image.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var title = props.title;\n  var imageSrc = \"/images/skills/\".concat(title.toLowerCase(), \".jpg\").replace(' ', '_');\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"skill-item\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: \"skill-image\",\n    src: imageSrc\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"skill-title\"\n  }, title));\n});\n\n//# sourceURL=webpack:///./src/components/CV/Skill.js?");

/***/ })

}]);