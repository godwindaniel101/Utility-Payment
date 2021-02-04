(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Vendors/Detail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Vendors/Detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
      vendor: {
        bill: "",
        number: ""
      }
    };
  },
  mounted: function mounted() {
    this.$store.dispatch("getUnitVendor", this.$route.params.id);
    this.vendor = this.getUnitVendor;
  },
  watch: {
    getUnitVendor: function getUnitVendor() {
      this.vendor = this.getUnitVendor;
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getUnitVendor"]))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Vendors/Detail.vue?vue&type=template&id=4745d784&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Vendors/Detail.vue?vue&type=template&id=4745d784& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "bg-white shadow overflow-hidden w-full" }, [
    _c(
      "div",
      { staticClass: "px-4 py-5 sm:px-6 flex flex-row justify-space-between" },
      [
        _c("div", { staticClass: "flex flex-grow flex-col" }, [
          _c(
            "h3",
            { staticClass: "text-lg leading-6 font-medium text-gray-900" },
            [_vm._v("\n        " + _vm._s(_vm.vendor.name) + "\n      ")]
          ),
          _vm._v(" "),
          _c("p", { staticClass: "mt-2 max-w-2xl text-sm text-gray-500" }, [
            _vm._v(
              "\n        Contact Number: " +
                _vm._s(_vm.vendor.contact_number) +
                "\n      "
            )
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mt-2 max-w-2xl text-sm text-gray-500" }, [
            _vm._v(
              "\n        Contact Email:" +
                _vm._s(_vm.vendor.contact_email) +
                "\n      "
            )
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mt-2 max-w-2xl text-sm text-gray-500" }, [
            _vm._v(
              "\n        Contact Description: " +
                _vm._s(_vm.vendor.description) +
                "\n      "
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex flex-col justify-between text-center" },
          [
            _c(
              "router-link",
              {
                staticClass:
                  "hover:bg-light-blue-200 bg-indigo-100 hover:text-light-blue-800 group text-center flex items-center rounded-sm text-white-800 text-sm font-medium px-2 py-2 mt-2",
                attrs: {
                  to: "/admin/vendors/edit/" + _vm.vendor.id,
                  tag: "button"
                }
              },
              [_vm._v("\n        Edit\n      ")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "hover:bg-light-red-200 bg-red-200 hover:text-light-blue-800 group text-center flex items-center rounded-sm text-white-800 text-sm font-medium px-2 py-2 mt-2",
                on: {
                  click: function($event) {
                    return _vm.$store.dispatch("deleteVendor", _vm.vendor.id)
                  }
                }
              },
              [_vm._v("\n        Delete\n      ")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass:
                  "hover:bg-light-green-200 bg-green-100 hover:text-light-blue-800 group text-center flex items-center rounded-sm text-white-800 text-sm font-medium px-2 py-2 mt-2",
                attrs: {
                  to: "/admin/vendors/detail/" + _vm.vendor.id + "/bill"
                }
              },
              [_vm._v("\n        Add Bill\n      ")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "hover:bg-light-green-200 bg-green-100 hover:text-light-blue-800 group text-center flex items-center rounded-sm text-white-800 text-sm font-medium px-2 py-2 mt-2",
                on: {
                  click: function($event) {
                    return _vm.$store.dispatch("addNumber", _vm.vendor.id)
                  }
                }
              },
              [_vm._v("\n        Add Number\n      ")]
            )
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "section",
      {
        staticClass:
          "px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4"
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("table", { staticClass: "shadow-md rounded w-full" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.getUnitVendor.bill, function(bill) {
              return _c(
                "tr",
                {
                  key: bill.id,
                  staticClass: "flex text-left text-sm flex-wrap sm:no-wrap"
                },
                [
                  _c(
                    "td",
                    {
                      staticClass:
                        "w-4/12 sm:w-1/3 p-2 border-gray-300 border border-r-0 border-t-0"
                    },
                    [
                      _vm._v(
                        "\n            " + _vm._s(bill.name) + "\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass:
                        "w-4/12 sm:w-1/3 p-2 border-gray-300 border border-r-0 border-t-0"
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(bill.ref_number) +
                          "\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass:
                        "w-4/12 sm:w-1/3 p-2 border-gray-300 border border-r-0 border-t-0"
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass:
                            "hover:bg-light-red-200 bg-red-200 hover:text-light-blue-800 group text-center rounded-sm text-white-800 text-sm font-medium px-2 py-2",
                          on: {
                            click: function($event) {
                              return _vm.$store.dispatch("deleteBill", bill.id)
                            }
                          }
                        },
                        [_vm._v("\n              Delete\n            ")]
                      )
                    ]
                  )
                ]
              )
            }),
            0
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "section",
      {
        staticClass:
          "px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4"
      },
      [
        _vm._m(2),
        _vm._v(" "),
        _c("table", { staticClass: "shadow-md rounded w-full" }, [
          _vm._m(3),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.getUnitVendor.number, function(number) {
              return _c(
                "tr",
                {
                  key: number.id,
                  staticClass: "flex text-left text-sm flex-wrap sm:no-wrap"
                },
                [
                  _c(
                    "td",
                    {
                      staticClass:
                        "w-4/12 sm:w-1/3 p-2 border-gray-300 border border-r-0 border-t-0"
                    },
                    [
                      _vm._v(
                        "\n            " + _vm._s(number.name) + "\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass:
                        "w-8/12 sm:w-1/3 2-2 border-gray-300 border border-r-0 border-t-0"
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(number.number) +
                          "\n          "
                      )
                    ]
                  )
                ]
              )
            }),
            0
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "flex items-center justify-between" }, [
      _c("h2", { staticClass: "text-lg leading-6 font-medium text-black" }, [
        _vm._v("Bill Types")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "thead",
      { staticClass: "sticky block top-0", attrs: { scope: "col" } },
      [
        _c("tr", { staticClass: "flex text-left" }, [
          _c(
            "th",
            {
              staticClass:
                "w-4/12 sm:w-1/3 p-2 border bg-white border-r-0 border-gray-300 font-normal",
              attrs: { scope: "col" }
            },
            [_c("h4", { staticClass: "u-slab" }, [_vm._v("Bill Name")])]
          ),
          _vm._v(" "),
          _c(
            "th",
            {
              staticClass:
                "w-4/12 sm:w-1/3 p-2 border bg-white border-r-0 border-gray-300 font-normal",
              attrs: { scope: "col" }
            },
            [_c("h4", { staticClass: "u-slab" }, [_vm._v("Description")])]
          ),
          _vm._v(" "),
          _c(
            "th",
            {
              staticClass:
                "w-4/12 sm:w-1/3 p-2 border bg-white border-r-0 border-gray-300 font-normal",
              attrs: { scope: "col" }
            },
            [_c("h4", { staticClass: "u-slab" }, [_vm._v("Action")])]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "flex items-center justify-between" }, [
      _c("h2", { staticClass: "text-lg leading-6 font-medium text-black" }, [
        _vm._v("Registered Numbers")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "thead",
      { staticClass: "sticky block top-0", attrs: { scope: "col" } },
      [
        _c("tr", { staticClass: "flex text-left" }, [
          _c(
            "th",
            {
              staticClass:
                "w-4/12 sm:w-1/3 p-2 border bg-white border-r-0 border-gray-300 font-normal",
              attrs: { scope: "col" }
            },
            [_c("h4", { staticClass: "u-slab" }, [_vm._v("Name")])]
          ),
          _vm._v(" "),
          _c(
            "th",
            {
              staticClass:
                "w-8/12 sm:w-2/3 p-2 border bg-white border-r-0 border-gray-300 font-normal",
              attrs: { scope: "col" }
            },
            [_c("h4", { staticClass: "u-slab" }, [_vm._v("Number")])]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Admin/Vendors/Detail.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/Admin/Vendors/Detail.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail_vue_vue_type_template_id_4745d784___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=4745d784& */ "./resources/js/pages/Admin/Vendors/Detail.vue?vue&type=template&id=4745d784&");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/Vendors/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_vue_vue_type_template_id_4745d784___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Detail_vue_vue_type_template_id_4745d784___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Vendors/Detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/Vendors/Detail.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/Admin/Vendors/Detail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Vendors/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/Vendors/Detail.vue?vue&type=template&id=4745d784&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/Admin/Vendors/Detail.vue?vue&type=template&id=4745d784& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_4745d784___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=template&id=4745d784& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Vendors/Detail.vue?vue&type=template&id=4745d784&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_4745d784___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_4745d784___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);