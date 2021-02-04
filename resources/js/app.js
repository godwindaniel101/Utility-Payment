/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require("./bootstrap");

window.Vue = require("vue");
window.axios = require('axios');
import VueRouter from "vue-router";
import Input from "./components/Input"
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
import Vuetable from "vuetable-2/src/components/Vuetable";
import axiosControl from "./scripts/api";
import Button from "./components/Button"
import {store} from "./scripts/store"
import {router} from "./scripts/guard";
import Notifications from 'vue-notification'
import SearchInput from './components/SearchInput'
import Textarea from './components/Textarea'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


/*
or for SSR:
import Notifications from 'vue-notification/dist/ssr.js'
*/

Vue.use(Notifications)
Vue.use(VueSweetalert2);
Vue.use(VueRouter);

Vue.component('v-input',Input)
Vue.component('v-button',Button)
Vue.component('v-textarea',Textarea)
Vue.component('search-input',SearchInput)
Vue.component("vuetable",Vuetable);
Vue.component("vuetable-pagination",VuetablePagination);


export const dataCheck = new Vue();

const app = new Vue({
    el: "#app",
    store,
    router:router
});