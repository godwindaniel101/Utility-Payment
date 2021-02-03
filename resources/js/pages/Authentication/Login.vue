<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
         <router-link to="/">
        <img
          class="mx-auto h-12 w-auto"
           src="/images/sw_logo.png"
          alt="Workflow"
        />
        </router-link>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form
        class="mt-8 space-y-6"
        @submit.prevent="$store.dispatch('loginUser', form)"
      >
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <v-input
            @vchange="form.email = $event"
            :extra_class="'rounded-t-md'"
            placeholder="Email"
            type="text"
            id="email"
            label="Email"
            error="email"
          />
          <!-- start invalid combination check -->
          <span
            class="error"
            v-if="
              getErrors['invalidcombo'] != null &&
              getErrors['invalidcombo'] != ''
            "
            >* {{ getErrors["invalidcombo"][0] }}</span
          >
          <!-- end invalid combination check -->

          <v-input
            @vchange="form.password = $event"
            :extra_class="'rounded-b-md'"
            placeholder="Password"
            type="password"
            id="password"
            label="Password"
            error="password"
          />
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: lock-closed -->
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign in
          </button>
        </div>
      </form>
      <p class="mt-2 text-center text-sm text-gray-600">
        Don't you have an Account ?
        <router-link
          to="/register"
          class="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Register
        </router-link>
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      form: { email: "", password: "" },
    };
  },
  mounted() {
    this.$store.dispatch("clearAllError");
  },
    computed: {
    ...mapGetters(["getErrors"]),
  },
};
</script>