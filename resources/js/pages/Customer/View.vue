<template>
  <div class="md:flex antialiased">
    <aside
      class="w-full md:h-screen overflow-hidden md:w-64 bg-gray-900 md:flex md:flex-col"
      :class="open_x ? 'h-auto' : 'h-16'"
    >
      <header class="border-b border-solid border-gray-800 flex-grow">
        <h1
          class="py-6 px-4 text-gray-100 text-base font-medium flex justify-between flex-row"
        >
          <span> Hello ! {{ getUserDetail["user_name"] }}</span>
          <span>
            <svg
              
              @click="open_x = !open_x"
              width="25px"
              height="25px"
              class="visible md:hidden svg-inline--fa fa-bars fa-w-14 fa-3x cursor-pointer mx-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="white"
                d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
                class=""
              ></path>
            </svg>
          </span>
        </h1>
      </header>
      <nav class="overflow-y-auto h-full flex-grow">
        <ul class="font-medium px-4 text-left">
          <li class="text-gray-100">
            <router-link
              to="/customer"
              class="rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full"
              :class="$route.fullPath == '/customer' ? 'bg-indigo-700' : ''"
            >
              Dashboard
            </router-link>
             <router-link
              to="/customer/top-up"
              class="rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full"
              :class="$route.fullPath == '/customer/top-up' ? 'bg-indigo-700' : ''"
            >
              Top Up
            </router-link>
             <router-link
              to="/customer/bill"
              class="rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full"
              :class="$route.fullPath == '/customer/bill' ? 'bg-indigo-700' : ''"
            >
              Bill
            </router-link>
               <router-link
              to="/customer/payment"
              class="rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full"
              :class="$route.fullPath == '/customer/payment' ? 'bg-indigo-700' : ''"
            >
              Payments
            </router-link>
             <router-link
              to="/customer/complain"
              v-on:click="select('performance')"
              class="rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full"
              :class="$route.fullPath == '/customer/complain' ? 'bg-indigo-700' : ''"
            >
              Complain
            </router-link>
             <router-link
              to="/customer/report"
              v-on:click="select('performance')"
              class="rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full"
              :class="$route.fullPath == '/customer/report' ? 'bg-indigo-700' : ''"
            >
              Report
            </router-link>
            <button
              href="#performance"
              @click="$store.dispatch('logoutUser')"
              class="rounded text-sm block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full text-left"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <section id="user" class="p-4 border-t border-solid border-gray-800">
        <div class="flex">
          <img
            src="http://preview.janlosert.com/static/media/a07.f7e8bebd.jpg"
            class="rounded-full h-10"
            alt=""
          />
          <div class="flex flex-col p-2">
            <span class="text-white pb-1">Godwin Daniel</span>
            <span class="text-xs text-gray-500">Test Accessment</span>
          </div>
        </div>
      </section>

      <footer class="p-4 border-t border-solid border-gray-800">
        <h4 class="pb-2 text-gray-100 text-sm">© SW Global Ltd. 2021</h4>
      </footer>
    </aside>

    <main class="bg-gray-100 h-screen w-full overflow-y-auto">
      <header class="border-b border-solid border-gray-300 bg-white">
        <router-link to='/' class="p-6" tag="h2">Home</router-link>
      </header>
      <div class="m-4 shadow-sm bg-white min-h-4/5 h-5/6 max-h-full">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      info: null,
      active: "performance",
      userDetail:''
    };
  },
  methods: {
    select: function (x) {
      this.active = x;
      console.log(x); // returns 'foo'
    },
  },
  watch:{
    getUserDetail(){
      this.userDetail = this.getUserDetail
    }
  },
  computed: {
    ...mapGetters(["getUserDetail"]),
  },
};
</script>