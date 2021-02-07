(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Authentication/Register.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Authentication/Register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        email: "",
        password: "",
        confirm_password: "",
        name: ''
      }
    };
  },
  mounted: function mounted() {
    this.$store.dispatch('clearAllError');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Authentication/Register.vue?vue&type=template&id=099fe601&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Authentication/Register.vue?vue&type=template&id=099fe601& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
        "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    },
    [
      _c("div", { staticClass: "max-w-md w-full space-y-8" }, [
        _c(
          "div",
          [
            _c("router-link", { attrs: { to: "/" } }, [
              _c("img", {
                staticClass: "mx-auto h-12 w-auto",
                attrs: { src: "/images/sw_logo.png", alt: "Workflow" }
              })
            ]),
            _vm._v(" "),
            _c(
              "h2",
              {
                staticClass:
                  "mt-6 text-center text-3xl font-extrabold text-gray-900"
              },
              [_vm._v("\n        Create a new Account\n      ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "form",
          {
            staticClass: "mt-8 space-y-6",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.$store.dispatch("createUser", _vm.form)
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
                    placeholder: "Name",
                    extra_class: "rounded-t-md",
                    type: "text",
                    id: "name",
                    label: "name",
                    error: "name"
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
                    placeholder: "Email",
                    type: "text",
                    id: "email",
                    label: "Email",
                    error: "email"
                  },
                  on: {
                    vchange: function($event) {
                      _vm.form.email = $event
                    }
                  }
                }),
                _vm._v(" "),
                _c("v-input", {
                  attrs: {
                    placeholder: "Password",
                    type: "password",
                    id: "password",
                    label: "Password",
                    error: "password"
                  },
                  on: {
                    vchange: function($event) {
                      _vm.form.password = $event
                    }
                  }
                }),
                _vm._v(" "),
                _c("v-input", {
                  attrs: {
                    placeholder: "Confirm Password",
                    extra_class: "rounded-b-md",
                    type: "password",
                    id: "confirm_password",
                    label: "Confirm Password",
                    error: "confirm_password"
                  },
                  on: {
                    vchange: function($event) {
                      _vm.form.confirm_password = $event
                    }
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", [_c("v-button", { attrs: { tag: "Register" } })], 1)
          ]
        ),
        _vm._v(" "),
        _c(
          "p",
          { staticClass: "mt-2 text-center text-sm text-gray-600" },
          [
            _vm._v("\n      Do you have an Account ?\n      "),
            _c(
              "router-link",
              {
                staticClass:
                  "font-medium text-indigo-600 hover:text-indigo-500",
                attrs: { to: "/login" }
              },
              [_vm._v("\n        Login\n      ")]
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Authentication/Register.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/Authentication/Register.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_099fe601___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=099fe601& */ "./resources/js/pages/Authentication/Register.vue?vue&type=template&id=099fe601&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/pages/Authentication/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_099fe601___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_099fe601___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Authentication/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Authentication/Register.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Authentication/Register.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Authentication/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Authentication/Register.vue?vue&type=template&id=099fe601&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/Authentication/Register.vue?vue&type=template&id=099fe601& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_099fe601___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=099fe601& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Authentication/Register.vue?vue&type=template&id=099fe601&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_099fe601___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_099fe601___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);