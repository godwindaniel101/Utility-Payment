import Vue from "vue";
import Vuex from "vuex";
import { router } from "./guard";
import createPersistedState from "vuex-persistedstate";
import VueToastr, { Toastr, Toast, ToastProgress } from "vue-toastr";
Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createPersistedState({ storage: window.localStorage })],
    state: {
        tableCss: {
            table: {
                tableClass: "x_gen_table",
                loadingClass: "loading",
                ascendingIcon: "glyphicon glyphicon-chevron-up",
                descendingIcon: "glyphicon glyphicon-chevron-down",
                handleIcon: "glyphicon glyphicon-menu-hamburger"
            },
            pagination: {
                infoClass: "pull-left _z_btn",
                wrapperClass: "page_wrap",
                activeClass: " _z_btn",
                disabledClass: "disabled",
                pageClass: " btn-border _z_btn",
                linkClass: " btn-border _z_btn",
                icons: {
                    first: "",
                    prev: "",
                    next: "",
                    last: ""
                }
            }
        },
        errors: [],
        auth: {
            is_logged_in: false,
            user_name: ""
        },
        vendors: '',
        unit_vendors: '',
        user_payments:'',
        all_payments:'',
        user_complain:'',
        all_complain:'',
    },
    getters: {
        getErrors: state => {
            return state.errors;
            //get all validation error
        },
        getUserDetail: state => {
            return state.auth;
            // get current logged in user detail
        },
        getTableCss: state => {
            return (state.tableCss)
            //set default style across table
        },
        getVendors: state => {
            return (state.vendors)
            //set default style across table
        },
        getUnitVendor: state => {
            return (state.unit_vendors)
            //set default style across table
        },
        getUserPayment: state => {
            return (state.user_payments)
            //set default style across table
        },
        getPayment: state => {
            return (state.all_payments)
            //set default style across table
        },
        getUserComplain: state => {
            return (state.user_complain)
            //set default style across table
        },
        getComplain: state => {
            return (state.all_complain)
            //set default style across table
        },
    },
    mutations: {
        setUserDetail: (state, data) => {
            state.auth = data;
            // set current user detail
        },
        logoutUser: (state) => {
            state.auth = {
                is_logged_in: false,
                user_name: "",
                user_type: "",
            };
            // clear user record
        },
        setErrors: (state, errors) => {
            state.errors = errors;
            //fill error array
        },

        clearUnitError: (state, error) => {
            state.errors[error] = "";
            //clear unit error array
        },
        notify: (state, data) => {
            Vue.notify({
                group: "default",
                type: data.status,
                title: data.status,
                text: data.message
            });
        },
        clearAllError: (state, data) => {
            state.errors = [];
            //clear unit error
        },
        setVendors: (state, data) => {
            state.vendors = data;
            //clear unit error
        },
        setUnitVendors: (state, data) => {
            state.unit_vendors = data;
            //clear unit error
        },
        setUserPayment: (state, data) => {
            state.user_payments = data;
            //clear unit error
        },
        setPayment: (state, data) => {
            state.all_payments = data;
            //clear unit error
        },
        setUserComplain: (state, data) => {
            state.user_complain = data;
            //clear unit error
        },
        setComplain: (state, data) => {
            state.all_complain = data;
            //clear unit error
        },
    },
    actions: {
        clearAllError: ({ commit }) => {
            commit("clearAllError");
            //clear all error
        },

        //START OF AUTHENTICATION FUNCTIONS
        createUser: ({ commit }, form) => {
            //create user
            axios
                .post("/api/register", form)
                .then(({ data }) => {
                    router.push({ path: "/login" });
                    commit("setErrors", []);
                    commit("notify", data);
                })
                .catch(error => {
                    commit("setErrors", error.response.data.errors);
                });
        },
        loginUser: ({ commit }, form) => {
            axios
                .post("/api/login", form)
                .then(({ data }) => {
                    //store local storage information

                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user_type", data.user_type);
                    localStorage.setItem("is_logged_in", true);

                    //set store information
                    commit("setUserDetail", {
                        is_logged_in: true,
                        user_name: data.user_name,
                        user_type: data.user_type
                    });

                    //redirect
                    if (data.user_type == "admin") {
                        router.push({ path: "/admin" });
                    } else {
                        router.push({ path: "/customer" });
                    }
                    commit("setErrors", []);
                })
                .catch(error => {
                    commit("setErrors", error.response.data.errors);
                });
        },
        logoutUser: ({ commit }) => {
            localStorage.clear();
            commit("logoutUser");
            router.push({ path: "/" });
        },
        // START OF SETTING DEFAULT USER
        setDefaultUser: ({ commit }) => {
            axios
                .post("/api/set_default")
                .then(({ data }) => {
                    router.push({ path: "/login" });
                    commit("notify", data);
                })
                .catch(error => {
                    commit("setErrors", error.response.data.errors);
                });
        },
        createVendor: ({ commit }, form) => {
            axios
                .post("/api/vendors/create", form)
                .then(({ data }) => {
                    router.push({ path: "/admin/vendors" });
                    commit("notify", data);
                })
                .catch(error => {
                    console.log(error)
                    commit("setErrors", error.response.data.errors);
                });
        },
        updateVendor: ({ commit }, form) => {
            axios
                .put("/api/vendors/update/" + form.id, form)
                .then(({ data }) => {
                    router.push({ path: "/admin/vendors" });
                    commit("notify", data);
                })
                .catch(error => {
                    console.log(error)
                    commit("setErrors", error.response.data.errors);
                });
        },
        getVendors: ({ commit }) => {
            axios
                .get("/api/vendors/index")
                .then(({ data }) => {
                    commit('setVendors', data);
                })
                .catch(error => {
                    console.log(error)
                    commit("setErrors", error.response.data.errors);
                });
        },
        deleteVendor: ({ commit }, id) => {
            axios
                .delete("/api/vendors/delete/" + id)
                .then(({ data }) => {
                    router.push({ path: "/admin/vendors" });
                    commit("notify", data);
                })
                .catch(error => {
                    console.log(error)
                    commit("setErrors", error.response.data.errors);
                });
        },
        getUnitVendor: ({ commit }, id) => {
            axios
                .get("/api/vendors/show/" + id)
                .then(({ data }) => {
                    commit('setUnitVendors', data);
                })
                .catch(error => {
                    console.log(error)
                    commit("setErrors", error.response.data.errors);
                });
        },
        createBill: ({ commit }, form) => {
            axios
                .post("/api/bill/create", form)
                .then(({ data }) => {
                    router.push({ path: "/admin/vendors/detail/"+form.vendor_id });
                    commit("notify", data);
                })
                .catch(error => {
                    console.log(error)
                    commit("setErrors", error.response.data.errors);
                });
        },
        deleteBill: ({ commit }, id) => {
            axios
                .delete("/api/bill/delete/" + id)
                .then(({ data }) => {
                    commit("notify", data);
                    this.getVendors();
                })
                .catch(error => {
                    console.log(error)
                    commit("setErrors", error.response.data.errors);
                });
        },
        payBill: ({ commit }, data) => {
            axios
                .post("/api/bill/paybill",data)
                .then(({ data }) => {
                    commit("notify", data);
                    router.push({ path: "/customer"});
                })
                .catch(error => {
                    console.log(error)
                    commit("setErrors", error.response.data.errors);
                });
        },
        createComplain: ({ commit }, data) => {
            axios
                .post("/api/complain/create" , data)
                .then(({ data }) => {
                    commit("notify", data);
                    router.push({ path: "/customer/complain"});
                })
                .catch(error => {
                    console.log(error)
                    commit("setErrors", error.response.data.errors);
                });
        },
        getUserPayment: ({ commit }) => {
            axios
                .get("/api/bill/user_payment")
                .then(({ data }) => {
                    commit("setUserPayment", data);
                })
                .catch(error => {
                    console.log(error)
                    commit("setErrors", error.response.data.errors);
                });
        },
        getPayment: ({ commit }) => {
            axios
                .get("/api/bill/all_payment")
                .then(({ data }) => {
                    commit("setPayment", data);
                })
                .catch(error => {
                    console.log(error)
                    commit("setErrors", error.response.data.errors);
                });
        },
        getUserComplain: ({ commit }) => {
            axios
                .get("/api/complain/get_customer_complain")
                .then(({ data }) => {
                    commit("setUserComplain", data);
                })
                .catch(error => {
                    console.log(error)
                    commit("setErrors", error.response.data.errors);
                });
        },
        getComplain: ({ commit }) => {
            axios
                .get("/api/complain/get_complain")
                .then(({ data }) => {
                    commit("setComplain", data);
                })
                .catch(error => {
                    console.log(error)
                    commit("setErrors", error.response.data.errors);
                });
        },
        addNumber: ({ commit }) => {
            alert('Work In Progress')
        },
        //END OF AUTHENTICATION METHODS
        clearUnitError: ({ commit }, unit_error) => {
            commit("clearUnitError", unit_error);
        },
        capitalizeText: (value) => {
            //Transform text into capital letters
            var firstLetter = value.substr(0, 1);
            return firstLetter.toUpperCase() + value.substr(1);
        },
        addComma: () => (value) => {
            //add comma to numbers
            output = "";
            var characters = parseInt(value, 10).toString();
            var output = "";
            for (var offset = characters.length; offset > 0; offset -= 3) {
                output =
                    characters.slice(Math.max(offset - 3, 0), offset) +
                    (output ? "," + output : "");
            }
            return output;
        },
    }
});