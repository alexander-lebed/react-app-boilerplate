(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/dom-helpers/esm/camelize.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/camelize.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return camelize; });\nvar rHyphen = /-(.)/g;\nfunction camelize(string) {\n  return string.replace(rHyphen, function (_, chr) {\n    return chr.toUpperCase();\n  });\n}\n\n//# sourceURL=webpack:///./node_modules/dom-helpers/esm/camelize.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/createWithBsPrefix.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createWithBsPrefix; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dom_helpers_camelize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/camelize */ \"./node_modules/dom-helpers/esm/camelize.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n\n\n\n\n\n\n\nvar pascalCase = function pascalCase(str) {\n  return str[0].toUpperCase() + Object(dom_helpers_camelize__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(str).slice(1);\n};\n\nfunction createWithBsPrefix(prefix, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$displayName = _ref.displayName,\n      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,\n      _ref$Component = _ref.Component,\n      Component = _ref$Component === void 0 ? 'div' : _ref$Component,\n      defaultProps = _ref.defaultProps;\n\n  var BsComponent = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef( // eslint-disable-next-line react/prop-types\n  function (_ref2, ref) {\n    var className = _ref2.className,\n        bsPrefix = _ref2.bsPrefix,\n        _ref2$as = _ref2.as,\n        Tag = _ref2$as === void 0 ? Component : _ref2$as,\n        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"className\", \"bsPrefix\", \"as\"]);\n\n    var resolvedPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__[\"useBootstrapPrefix\"])(bsPrefix, prefix);\n    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      ref: ref,\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, resolvedPrefix)\n    }, props));\n  });\n  BsComponent.defaultProps = defaultProps;\n  BsComponent.displayName = displayName;\n  return BsComponent;\n}\n\n//# sourceURL=webpack:///./node_modules/react-bootstrap/esm/createWithBsPrefix.js?");

/***/ }),

/***/ "./src/components/common/ConfirmationModal.js":
/*!****************************************************!*\
  !*** ./src/components/common/ConfirmationModal.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n\n\n\n\n\nvar ConfirmationModal = function ConfirmationModal(props) {\n  var translation = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.translation;\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    show: true,\n    onHide: props.onCancel\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Title, null, props.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Body, null, props.body), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Footer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    variant: \"success\",\n    size: \"sm\",\n    onClick: props.onConfirm\n  }, translation.COMMON.YES), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    variant: \"outline-dark\",\n    size: \"sm\",\n    onClick: props.onCancel\n  }, translation.COMMON.CANCEL)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConfirmationModal);\n\n//# sourceURL=webpack:///./src/components/common/ConfirmationModal.js?");

/***/ })

}]);