<template>
  <div
    class=" flex items-center justify-center  py-2 px-4 sm:px-2 lg:px-2"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
         Pay Now
        </h2>
      </div>
      <form
        class="mt-4 space-y-3"
        @submit.prevent="$store.dispatch('payBill' , form)"
      >
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <v-input
            @vchange="form.phone_no = $event"
            :extra_class="'rounded-t-md'"
            placeholder="Enter Phone Number"
            type="text"
            id="phone_no"
            label="phone_no"
            error="phone_no"
            :value="form.phone_no"
          />
          <v-input
            @vchange="form.amount = $event"
            placeholder="Enter Amount"
            type="text"
            id="amount"
            label="amount"
            error="amount"
            :value="form.amount"
          />
          <v-input
            @vchange="form.description = $event"
            :extra_class="'rounded-b-md'"
            placeholder="Description"
            type="text"
            id="description"
            label="description"
            error="description"
            :value="form.description"
          />
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
           Pay Vendor
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      edit_mode:false
    };
  },
  mounted() {
    this.form.bill_id = this.$route.params.id;
  },
    computed: {
  },
};
</script>
