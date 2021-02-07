(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/View.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/View.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      open_x: false,
      info: null,
      active: "performance"
    };
  },
  methods: {
    select: function select(x) {
      this.active = x;
      console.log(x); // returns 'foo'
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getUserDetail"]))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/View.vue?vue&type=template&id=87f18564&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/View.vue?vue&type=template&id=87f18564& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "md:flex antialiased" }, [
    _c(
      "aside",
      {
        staticClass:
          "w-full md:h-screen overflow-hidden md:w-64 bg-gray-900 md:flex md:flex-col",
        class: _vm.open_x ? "h-auto" : "h-16"
      },
      [
        _c(
          "header",
          { staticClass: "border-b border-solid border-gray-800 flex-grow" },
          [
            _c(
              "h1",
              {
                staticClass:
                  "py-6 px-4 text-gray-100 text-base font-medium flex justify-between flex-row"
              },
              [
                _c("span", [
                  _vm._v(" Hello ! " + _vm._s(_vm.getUserDetail["user_name"]))
                ]),
                _vm._v(" "),
                _c("span", [
                  _c(
                    "svg",
                    {
                      staticClass:
                        "visible md:hidden svg-inline--fa fa-bars fa-w-14 fa-3x cursor-pointer mx-1",
                      attrs: {
                        width: "25px",
                        height: "25px",
                        role: "img",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 448 512"
                      },
                      on: {
                        click: function($event) {
                          _vm.open_x = !_vm.open_x
                        }
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          fill: "white",
                          d:
                            "M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
                        }
                      })
                    ]
                  )
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("nav", { staticClass: "overflow-y-auto h-full flex-grow pt-5" }, [
          _c("ul", { staticClass: "font-medium px-4 text-left" }, [
            _c(
              "li",
              { staticClass: "text-gray-100" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      "rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full",
                    class:
                      _vm.$route.fullPath == "/admin" ? "bg-indigo-700" : "",
                    attrs: { to: "/admin" }
                  },
                  [_vm._v("\n            Dashboard\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass:
                      "rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full",
                    class:
                      _vm.$route.fullPath == "/admin/vendors"
                        ? "bg-indigo-700"
                        : "",
                    attrs: { to: "/admin/vendors" }
                  },
                  [_vm._v("\n            Vendors\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass:
                      "rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full",
                    class:
                      _vm.$route.fullPath == "//admin/complains"
                        ? "bg-indigo-700"
                        : "",
                    attrs: { to: "/admin/complains" }
                  },
                  [_vm._v("\n            Complains\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass:
                      "rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full",
                    class:
                      _vm.$route.fullPath == "/admin/payments"
                        ? "bg-indigo-700"
                        : "",
                    attrs: { to: "/admin/payments" }
                  },
                  [_vm._v("\n            Payments\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass:
                      "rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full",
                    class:
                      _vm.$route.fullPath == "/admin/report"
                        ? "bg-indigo-700"
                        : "",
                    attrs: { to: "/admin/report" }
                  },
                  [_vm._v("\n            Report\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass:
                      "rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full",
                    class:
                      _vm.$route.fullPath == "/admin/customer"
                        ? "bg-indigo-700"
                        : "",
                    attrs: { to: "/admin/customer" }
                  },
                  [_vm._v("\n            Customers\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass:
                      "rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full",
                    class:
                      _vm.$route.fullPath == "/customer/settings"
                        ? "bg-indigo-700"
                        : "",
                    attrs: { to: "/admin/settings" },
                    on: {
                      click: function($event) {
                        return _vm.select("performance")
                      }
                    }
                  },
                  [_vm._v("\n            Settings\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "rounded text-sm block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full text-left",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        return _vm.$store.dispatch("logoutUser")
                      }
                    }
                  },
                  [_vm._v("\n            Logout\n          ")]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1)
      ]
    ),
    _vm._v(" "),
    _c("main", { staticClass: "bg-gray-100 h-screen w-full overflow-y-auto" }, [
      _c(
        "header",
        {
          staticClass:
            "border-b border-solid border-gray-300 bg-white  justify-between hidden md:flex"
        },
        [
          _c(
            "router-link",
            { staticClass: "p-6", attrs: { to: "/", tag: "h2" } },
            [
              _c(
                "svg",
                {
                  staticClass: "svg-inline--fa fa-home-lg-alt fa-w-18 fa-3x",
                  attrs: {
                    width: "30px",
                    height: "30px",
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 576 512"
                  }
                },
                [
                  _c("g", { staticClass: "fa-group" }, [
                    _c("path", {
                      staticClass: "fa-secondary",
                      attrs: {
                        fill: "#111827",
                        d:
                          "M352 496V368a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16v128a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V311.07c1.78-1.21 3.85-1.89 5.47-3.35L288 115l218.74 192.9c1.54 1.38 3.56 2 5.26 3.2V496a16 16 0 0 1-16 16H368a16 16 0 0 1-16-16z"
                      }
                    }),
                    _c("path", {
                      staticClass: "fa-primary",
                      attrs: {
                        fill: "#4338CA",
                        d:
                          "M527.92 283.91L298.6 81.64a16 16 0 0 0-21.17 0L48.11 283.92a16 16 0 0 1-22.59-1.21L4.1 258.89a16 16 0 0 1 1.21-22.59l256-226a39.85 39.85 0 0 1 53.45 0l255.94 226a16 16 0 0 1 1.22 22.59l-21.4 23.82a16 16 0 0 1-22.6 1.2z"
                      }
                    })
                  ])
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "m-4 shadow-sm bg-white min-h-4/5 max-h-full" },
        [_c("router-view")],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      {
        staticClass: "p-4 border-t border-solid border-gray-800",
        attrs: { id: "user" }
      },
      [
        _c("div", { staticClass: "flex" }, [
          _c("img", {
            staticClass: "rounded-full h-10",
            attrs: {
              src: "http://preview.janlosert.com/static/media/a07.f7e8bebd.jpg",
              alt: ""
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "flex flex-col p-2" }, [
            _c("span", { staticClass: "text-white pb-1" }, [
              _vm._v("Godwin Daniel")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "text-xs text-gray-500" }, [
              _vm._v("Test Accessment")
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "footer",
      { staticClass: "p-4 border-t border-solid border-gray-800" },
      [
        _c("h4", { staticClass: "pb-2 text-gray-100 text-sm" }, [
          _vm._v("© SW Global Ltd. 2021")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Admin/View.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Admin/View.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_87f18564___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=87f18564& */ "./resources/js/pages/Admin/View.vue?vue&type=template&id=87f18564&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_87f18564___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_87f18564___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/View.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Admin/View.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/View.vue?vue&type=template&id=87f18564&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Admin/View.vue?vue&type=template&id=87f18564& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_87f18564___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=87f18564& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/View.vue?vue&type=template&id=87f18564&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_87f18564___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_87f18564___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);