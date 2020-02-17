(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _inheritsLoose; });\nfunction _inheritsLoose(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  subClass.__proto__ = superClass;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js?");

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useCommittedRef.js":
/*!************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useCommittedRef.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Creates a `Ref` whose value is updated in an effect, ensuring the most recent\n * value is the one rendered with. Generally only required for Concurrent mode usage\n * where previous work in `render()` may be discarded befor being used.\n *\n * This is safe to access in an event handler.\n *\n * @param value The `Ref` value\n */\n\nfunction useCommittedRef(value) {\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(value);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    ref.current = value;\n  }, [value]);\n  return ref;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useCommittedRef);\n\n//# sourceURL=webpack:///./node_modules/@restart/hooks/esm/useCommittedRef.js?");

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useEventCallback.js":
/*!*************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useEventCallback.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useEventCallback; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ \"./node_modules/@restart/hooks/esm/useCommittedRef.js\");\n\n\nfunction useEventCallback(fn) {\n  var ref = Object(_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fn);\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    return ref.current && ref.current.apply(ref, arguments);\n  }, [ref]);\n}\n\n//# sourceURL=webpack:///./node_modules/@restart/hooks/esm/useEventCallback.js?");

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useMergedRefs.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMergedRefs.js ***!
  \**********************************************************/
/*! exports provided: mergeRefs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeRefs\", function() { return mergeRefs; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar toFnRef = function toFnRef(ref) {\n  return !ref || typeof ref === 'function' ? ref : function (value) {\n    ref.current = value;\n  };\n};\n\nfunction mergeRefs(refA, refB) {\n  var a = toFnRef(refA);\n  var b = toFnRef(refB);\n  return function (value) {\n    if (a) a(value);\n    if (b) b(value);\n  };\n}\n/**\n * Create and returns a single callback ref composed from two other Refs.\n *\n * ```tsx\n * const Button = React.forwardRef((props, ref) => {\n *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();\n *   const mergedRef = useMergedRefs(ref, attachRef);\n *\n *   return <button ref={mergedRef} {...props}/>\n * })\n * ```\n *\n * @param refA A Callback or mutable Ref\n * @param refB A Callback or mutable Ref\n */\n\nfunction useMergedRefs(refA, refB) {\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return mergeRefs(refA, refB);\n  }, [refA, refB]);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useMergedRefs);\n\n//# sourceURL=webpack:///./node_modules/@restart/hooks/esm/useMergedRefs.js?");

/***/ }),

/***/ "./src/components/CV/ListItem.js":
/*!***************************************!*\
  !*** ./src/components/CV/ListItem.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/ListGroup */ \"./node_modules/react-bootstrap/esm/ListGroup.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var faIcon = props.faIcon,\n      title = props.title,\n      url = props.url;\n  var clickable = !!url;\n  var click;\n\n  if (clickable) {\n    click = function click() {\n      var win = window.open(url, '_blank');\n      win.focus();\n    };\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Item, {\n    action: clickable,\n    className: \"contact-item \".concat(clickable ? 'contact-item-clickable' : ''),\n    onClick: click\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"\".concat(faIcon, \" contact-item-icon fa-lg mr-2\")\n  }), \" \", title);\n});\n\n//# sourceURL=webpack:///./src/components/CV/ListItem.js?");

/***/ })

}]);