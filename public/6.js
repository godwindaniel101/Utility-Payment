(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Vendors/Bill.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Vendors/Bill.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  data: function data() {
    return {
      form: {
        vendor_id: '',
        ref_number: '',
        name: ''
      },
      edit_mode: false
    };
  },
  mounted: function mounted() {
    this.form.vendor_id = this.$route.params.id;
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Vendors/Bill.vue?vue&type=template&id=7f627398&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Vendors/Bill.vue?vue&type=template&id=7f627398& ***!
  \****************************************************************************************************************************************************************************************************************/
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
        " flex items-center justify-center  py-2 px-4 sm:px-2 lg:px-2"
    },
    [
      _c("div", { staticClass: "max-w-md w-full space-y-8" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "form",
          {
            staticClass: "mt-4 space-y-3",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.$store.dispatch(
                  _vm.edit_mode ? "updateBill" : "createBill",
                  _vm.form
                )
              }
            }
          },
          [
            _c("input", {
              attrs: { type: "hidden", name: "remember", value: "true" }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "rounded-md shadow-sm -space-y-px" },
              [
                _c("v-input", {
                  attrs: {
                    extra_class: "rounded-t-md",
                    placeholder: "Name",
                    type: "text",
                    id: "name",
                    label: "name",
                    error: "name",
                    value: _vm.form.name
                  },
                  on: {
                    vchange: function($event) {
                      _vm.form.name = $event
                    }
                  }
                }),
                _vm._v(" "),
                _c("v-input", {
                  attrs: {
                    extra_class: "rounded-b-md",
                    placeholder: "Ref Number",
                    type: "text",
                    id: "ref_number",
                    label: "ref_number",
                    error: "ref_number",
                    value: _vm.form.number
                  },
                  on: {
                    vchange: function($event) {
                      _vm.form.ref_number = $event
                    }
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", [
              _c(
                "button",
                {
                  staticClass:
                    "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                  attrs: { type: "submit" }
                },
                [
                  _c(
                    "span",
                    {
                      staticClass:
                        "absolute left-0 inset-y-0 flex items-center pl-3"
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass:
                            "h-5 w-5 text-indigo-500 group-hover:text-indigo-400",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            "aria-hidden": "true"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              d:
                                "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                              "clip-rule": "evenodd"
                            }
                          })
                        ]
                      )
                    ]
                  ),
                  _vm._v(
                    "\n         " +
                      _vm._s(_vm.edit_mode ? "Update" : "Create") +
                      " Bill\n        "
                  )
                ]
              )
            ])
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "h2",
        { staticClass: "mt-6 text-center text-3xl font-bold text-gray-900" },
        [_vm._v("\n       New Bill\n      ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Admin/Vendors/Bill.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/Admin/Vendors/Bill.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bill_vue_vue_type_template_id_7f627398___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bill.vue?vue&type=template&id=7f627398& */ "./resources/js/pages/Admin/Vendors/Bill.vue?vue&type=template&id=7f627398&");
/* harmony import */ var _Bill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bill.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/Vendors/Bill.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Bill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bill_vue_vue_type_template_id_7f627398___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Bill_vue_vue_type_template_id_7f627398___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Vendors/Bill.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/Vendors/Bill.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Admin/Vendors/Bill.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bill.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Vendors/Bill.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/Vendors/Bill.vue?vue&type=template&id=7f627398&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Admin/Vendors/Bill.vue?vue&type=template&id=7f627398& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bill_vue_vue_type_template_id_7f627398___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bill.vue?vue&type=template&id=7f627398& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Vendors/Bill.vue?vue&type=template&id=7f627398&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bill_vue_vue_type_template_id_7f627398___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bill_vue_vue_type_template_id_7f627398___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);