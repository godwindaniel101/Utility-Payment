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
      <nav class="overflow-y-auto h-full flex-grow pt-5">
        <ul class="font-medium px-4 text-left">
          <li class="text-gray-100">
            <router-link
              to="/admin"
              class="rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full"
              :class="$route.fullPath == '/admin' ? 'bg-indigo-700' : ''"
            >
              Dashboard
            </router-link>
            <router-link
              to="/admin/vendors"
              class="rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full"
              :class="
                $route.fullPath == '/admin/vendors' ? 'bg-indigo-700' : ''
              "
            >
              Vendors
            </router-link>
            <router-link
              to="/admin/complains"
              class="rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full"
              :class="
                $route.fullPath == '//admin/complains' ? 'bg-indigo-700' : ''
              "
            >
              Complains
            </router-link>
            <router-link
              to="/admin/payments"
              class="rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full"
              :class="
                $route.fullPath == '/admin/payments' ? 'bg-indigo-700' : ''
              "
            >
              Payments
            </router-link>
            <router-link
              to="/admin/report"
              class="rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full"
              :class="$route.fullPath == '/admin/report' ? 'bg-indigo-700' : ''"
            >
              Report
            </router-link>
            <router-link
              to="/admin/customer"
              class="rounded text-sm text-left block py-3 px-6 hover:bg-blue-200 hover:text-gray-900 w-full"
              :class="
                $route.fullPath == '/admin/customer' ? 'bg-indigo-700' : ''
              "
            >
              Customers
            </router-link>
            <button
              href="#"
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
      <header
        class="border-b border-solid border-gray-300 bg-white  justify-between hidden md:flex"
      >
        <router-link to="/" class="p-6" tag="h2">
        <svg width="30px" height="30px" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-home-lg-alt fa-w-18 fa-3x"><g class="fa-group"><path fill="#111827" d="M352 496V368a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16v128a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V311.07c1.78-1.21 3.85-1.89 5.47-3.35L288 115l218.74 192.9c1.54 1.38 3.56 2 5.26 3.2V496a16 16 0 0 1-16 16H368a16 16 0 0 1-16-16z" class="fa-secondary"></path><path fill="#4338CA" d="M527.92 283.91L298.6 81.64a16 16 0 0 0-21.17 0L48.11 283.92a16 16 0 0 1-22.59-1.21L4.1 258.89a16 16 0 0 1 1.21-22.59l256-226a39.85 39.85 0 0 1 53.45 0l255.94 226a16 16 0 0 1 1.22 22.59l-21.4 23.82a16 16 0 0 1-22.6 1.2z" class="fa-primary"></path></g></svg></router-link>
      </header>
      <div class="m-4 shadow-sm bg-white min-h-4/5 max-h-full">
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
      open_x: false,
      info: null,
      active: "performance",
    };
  },
  methods: {
    select: function (x) {
      this.active = x;
      console.log(x); // returns 'foo'
    },
  },
  computed: {
    ...mapGetters(["getUserDetail"]),
  },
};
</script>