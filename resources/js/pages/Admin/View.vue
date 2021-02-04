<template>
  <div id="app" class="md:flex antialiased">
    <aside class="w-full md:h-screen md:w-64 bg-gray-900 md:flex md:flex-col">
      <header class="border-b border-solid border-gray-800 flex-grow">
        <h1 class="py-6 px-4 text-gray-100 text-base font-medium">
          Hello ! {{ getUserDetail["user_name"] }}
        </h1>
      </header>
      <nav class="overflow-y-auto h-full flex-grow">
        <header>
          <span class="text-xs text-gray-500 block py-6 px-6">MENU</span>
        </header>
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
              Complians
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
              :class="
                $route.fullPath == '/admin/report' ? 'bg-indigo-700' : ''
              "
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