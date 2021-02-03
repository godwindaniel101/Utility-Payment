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
          Create a new Account
        </h2>
      </div>
      <form
        class="mt-8 space-y-6"
        @submit.prevent="$store.dispatch('createUser', form)"
      >
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <v-input
            @vchange="form.name = $event"
            placeholder="Name"
            :extra_class="'rounded-t-md'"
            type="text"
            id="name"
            label="name"
            error="name"
          />
          <v-input
            @vchange="form.email = $event"
            placeholder="Email"
            type="text"
            id="email"
            label="Email"
            error="email"
          />

          <v-input
            @vchange="form.password = $event"
            placeholder="Password"
            type="password"
            id="password"
            label="Password"
            error="password"
          />
          <v-input
            @vchange="form.confirm_password = $event"
            placeholder="Confirm Password"
            :extra_class="'rounded-b-md'"
            type="password"
            id="confirm_password"
            label="Confirm Password"
            error="confirm_password"
          />
        </div>
        <div>
          <v-button tag="Register" />
        </div>
      </form>
      <p class="mt-2 text-center text-sm text-gray-600">
        Do you have an Account ?
        <router-link
          to="/login"
          class="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Login
        </router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: { email: "", password: "", confirm_password: "",name:'' },
    };
  },
  mounted(){
    this.$store.dispatch('clearAllError')
  }
};
</script>