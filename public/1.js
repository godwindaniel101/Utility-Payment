(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/Dashboard/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/Dashboard/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome */ "./resources/js/pages/Customer/Dashboard/Welcome.vue");
/* harmony import */ var _SubModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubModule */ "./resources/js/pages/Customer/Dashboard/SubModule.vue");
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SubModule: _SubModule__WEBPACK_IMPORTED_MODULE_1__["default"],
    Welcome: _Welcome__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/Dashboard/Welcome.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/Dashboard/Welcome.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getUserDetail"]))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/Dashboard/Index.vue?vue&type=template&id=3945b2a2&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/Dashboard/Index.vue?vue&type=template&id=3945b2a2& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("welcome"), _vm._v(" "), _c("sub-module")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/Dashboard/SubModule.vue?vue&type=template&id=199331ae&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/Dashboard/SubModule.vue?vue&type=template&id=199331ae& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-full p-5" }, [
    _c(
      "div",
      { staticClass: "flex flex-col md:flex-row" },
      [
        _c(
          "router-link",
          {
            staticClass:
              "w-full relative xszxs px-4 py-3 md:w-1/4 sm:w-2/4 m-2 h-32 border border-black-200 cursor-pointer rounded flex text-left md:text-center shadow-lg overflow-hidden",
            attrs: { tag: "div", to: "/customer/report" }
          },
          [
            _c(
              "div",
              { staticClass: "w-10/12 flex flex-col justify-start text-left" },
              [
                _c(
                  "h3",
                  { staticClass: "text-xl text-gray-900 font-semibold" },
                  [_vm._v("Report")]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "text-xs text-gray-300 mt-1" }, [
                  _vm._v("You Have 23 unpaid bill")
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "w-2/12 flex items-end justify-end" }, [
              _c(
                "svg",
                {
                  staticClass: "svg-inline--fa fa-wallet fa-w-16 fa-3x",
                  attrs: {
                    width: "30px",
                    height: "30px",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512"
                  }
                },
                [
                  _c("g", { staticClass: "fa-group" }, [
                    _c("path", {
                      staticClass: "fa-secondary",
                      attrs: {
                        fill: "#4338CA",
                        d:
                          "M416 272a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm16-240H64A64 64 0 0 0 0 96a32 32 0 0 0 32 32h48a16 16 0 0 1 0-32h384a16 16 0 0 0 16-16 48 48 0 0 0-48-48z"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticClass: "fa-primary",
                      attrs: {
                        fill: "currentColor",
                        d:
                          "M461.2 128H32A32 32 0 0 1 0 96v320a64 64 0 0 0 64 64h397.2c28 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                      }
                    })
                  ])
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          {
            staticClass:
              "w-full relative xszxs px-4 py-3 md:w-1/4 sm:w-2/4 m-2 h-32 border border-black-200 cursor-pointer rounded flex text-left md:text-center shadow-lg overflow-hidden",
            attrs: { tag: "div", to: "/customer/bill" }
          },
          [
            _c(
              "div",
              { staticClass: "w-10/12 flex flex-col justify-start text-left" },
              [
                _c(
                  "h3",
                  { staticClass: "text-xl text-gray-900 font-semibold" },
                  [_vm._v("Pay Utility")]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "text-xs text-gray-300 mt-1" }, [
                  _vm._v("You Have 23 unpaid bill")
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "w-2/12 flex items-end justify-end" }, [
              _c(
                "svg",
                {
                  staticClass: "svg-inline--fa fa-landmark fa-w-16 fa-3x",
                  attrs: {
                    width: "30px",
                    height: "30px",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512"
                  }
                },
                [
                  _c("g", { staticClass: "fa-group" }, [
                    _c("path", {
                      staticClass: "fa-secondary",
                      attrs: {
                        fill: "#111827",
                        d:
                          "M496 448H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-16-80a16 16 0 0 0-16-16h-16V192h-64v160h-96V192h-64v160h-96V192H64v160H48a16 16 0 0 0-16 16v48h448z"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticClass: "fa-primary",
                      attrs: {
                        fill: "#4338CA",
                        d:
                          "M10.38 92.11L244.77 2a32 32 0 0 1 22.47 0l234.38 90.11a16 16 0 0 1 10.38 15V144a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-36.91a16 16 0 0 1 10.38-14.98z"
                      }
                    })
                  ])
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          {
            staticClass:
              "w-full relative xszxs px-4 py-3 md:w-1/4 sm:w-2/4 m-2 h-32 border border-black-200 cursor-pointer rounded flex text-left md:text-center shadow-lg overflow-hidden",
            attrs: { tag: "div", to: "/customer/complain" }
          },
          [
            _c(
              "div",
              { staticClass: "w-10/12 flex flex-col justify-start text-left" },
              [
                _c(
                  "h3",
                  { staticClass: "text-xl text-gray-900 font-semibold" },
                  [_vm._v("Complain")]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "text-xs text-gray-300 mt-1" }, [
                  _vm._v("You Have 23 unpaid bill")
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "w-2/12 flex items-end justify-end" }, [
              _c(
                "svg",
                {
                  staticClass: "svg-inline--fa fa-tags fa-w-20 fa-3x",
                  attrs: {
                    width: "30px",
                    height: "30px",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 640 512"
                  }
                },
                [
                  _c("g", { staticClass: "fa-group" }, [
                    _c("path", {
                      staticClass: "fa-secondary",
                      attrs: {
                        fill: "#111827",
                        d:
                          "M497.94 225.94L286.06 14.06A48 48 0 0 0 252.12 0H48A48 48 0 0 0 0 48v204.12a48 48 0 0 0 14.06 33.94l211.88 211.88a48 48 0 0 0 67.88 0l204.12-204.12a48 48 0 0 0 0-67.88zM112 160a48 48 0 1 1 48-48 48 48 0 0 1-48 48z"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticClass: "fa-primary",
                      attrs: {
                        fill: "#4338CA",
                        d:
                          "M625.94 293.82L421.82 497.94a48 48 0 0 1-67.88 0l-.36-.36 174.06-174.06a90 90 0 0 0 0-127.28L331.4 0h48.72a48 48 0 0 1 33.94 14.06l211.88 211.88a48 48 0 0 1 0 67.88z"
                      }
                    })
                  ])
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          {
            staticClass:
              "w-full relative xszxs px-4 py-3 md:w-1/4 sm:w-2/4 m-2 h-32 border border-black-200 cursor-pointer rounded flex text-left md:text-center shadow-lg overflow-hidden",
            attrs: { tag: "div", to: "/customer/top-up" }
          },
          [
            _c(
              "div",
              { staticClass: "w-10/12 flex flex-col justify-start text-left" },
              [
                _c(
                  "h3",
                  { staticClass: "text-xl text-gray-900 font-semibold" },
                  [_vm._v("Mobile Top Up")]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "text-xs text-gray-300 mt-1" }, [
                  _vm._v("You Have 23 unpaid bill")
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "w-2/12 flex items-end justify-end" }, [
              _c(
                "svg",
                {
                  staticClass: "svg-inline--fa fa-phone-laptop fa-w-20 fa-3x",
                  attrs: {
                    width: "30px",
                    height: "30px",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 640 512"
                  }
                },
                [
                  _c("g", { staticClass: "fa-group" }, [
                    _c("path", {
                      staticClass: "fa-secondary",
                      attrs: {
                        fill: "#4338CA",
                        d:
                          "M128 64h320v32h64V48a48.1 48.1 0 0 0-47.91-48H111.91A48.1 48.1 0 0 0 64 48v240H16a16 16 0 0 0-16 16v16a64.14 64.14 0 0 0 63.91 64H352v-96H128z"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticClass: "fa-primary",
                      attrs: {
                        fill: "#111827",
                        d:
                          "M604 128H420a36 36 0 0 0-36 36v312a36 36 0 0 0 36 36h184a36 36 0 0 0 36-36V164a36 36 0 0 0-36-36zm-28 320H448V192h128z"
                      }
                    })
                  ])
                ]
              )
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/Dashboard/Welcome.vue?vue&type=template&id=6f55d3ff&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/Dashboard/Welcome.vue?vue&type=template&id=6f55d3ff& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "w-full flex flex-col justify-start text-left pt-10 pb-3 px-7"
    },
    [
      _c("div", { staticClass: "float-left" }, [
        _c("h3", { staticClass: "text-xl text-gray-900 font-semibold" }, [
          _c("span", { staticClass: "border-b-4 border-indigo-700 py-3" }, [
            _vm._v("\n        Welcome ! "),
            _c("span", { staticClass: "text-indigo-700" }, [
              _vm._v(_vm._s(_vm.getUserDetail["user_name"]))
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Customer/Dashboard/Index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/Customer/Dashboard/Index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_3945b2a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=3945b2a2& */ "./resources/js/pages/Customer/Dashboard/Index.vue?vue&type=template&id=3945b2a2&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Customer/Dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_3945b2a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_3945b2a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Customer/Dashboard/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Customer/Dashboard/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Customer/Dashboard/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/Dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Customer/Dashboard/Index.vue?vue&type=template&id=3945b2a2&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/Customer/Dashboard/Index.vue?vue&type=template&id=3945b2a2& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3945b2a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=3945b2a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/Dashboard/Index.vue?vue&type=template&id=3945b2a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3945b2a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3945b2a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Customer/Dashboard/SubModule.vue":
/*!*************************************************************!*\
  !*** ./resources/js/pages/Customer/Dashboard/SubModule.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubModule_vue_vue_type_template_id_199331ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubModule.vue?vue&type=template&id=199331ae& */ "./resources/js/pages/Customer/Dashboard/SubModule.vue?vue&type=template&id=199331ae&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _SubModule_vue_vue_type_template_id_199331ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubModule_vue_vue_type_template_id_199331ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Customer/Dashboard/SubModule.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Customer/Dashboard/SubModule.vue?vue&type=template&id=199331ae&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/Customer/Dashboard/SubModule.vue?vue&type=template&id=199331ae& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubModule_vue_vue_type_template_id_199331ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubModule.vue?vue&type=template&id=199331ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/Dashboard/SubModule.vue?vue&type=template&id=199331ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubModule_vue_vue_type_template_id_199331ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubModule_vue_vue_type_template_id_199331ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Customer/Dashboard/Welcome.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/Customer/Dashboard/Welcome.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Welcome_vue_vue_type_template_id_6f55d3ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=6f55d3ff& */ "./resources/js/pages/Customer/Dashboard/Welcome.vue?vue&type=template&id=6f55d3ff&");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js& */ "./resources/js/pages/Customer/Dashboard/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Welcome_vue_vue_type_template_id_6f55d3ff___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Welcome_vue_vue_type_template_id_6f55d3ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Customer/Dashboard/Welcome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Customer/Dashboard/Welcome.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/Customer/Dashboard/Welcome.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/Dashboard/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Customer/Dashboard/Welcome.vue?vue&type=template&id=6f55d3ff&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/Customer/Dashboard/Welcome.vue?vue&type=template&id=6f55d3ff& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_6f55d3ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=template&id=6f55d3ff& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/Dashboard/Welcome.vue?vue&type=template&id=6f55d3ff&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_6f55d3ff___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_6f55d3ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);