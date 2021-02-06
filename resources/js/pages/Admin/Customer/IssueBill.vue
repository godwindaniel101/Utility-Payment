<template>
  <div class="flex items-center justify-center py-2 px-4 sm:px-2 lg:px-2">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
          Issue Bill
        </h2>
      </div>
      <form
        class="mt-4 space-y-3"
        @submit.prevent="$store.dispatch('issueBill', form)"
      >
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <v-input
            @vchange="form.customer_name = $event"
            :extra_class="'rounded-t-md'"
            placeholder="Customer Name"
            type="text"
            id="customer_name"
            label="customer_name"
            error="customer_name"
            :value="form.customer_name"
            disabled="true"
          />
          <v-input
            @vchange="form.amount = $event"
            placeholder="Amount"
            type="text"
            id="amount"
            label="amount"
            error="amount"
            :value="form.amount"
          />
          <v-textarea
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
            Issue Bill
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      form: { description: "", customer_name: "", amount: "", customer_id: "" },
      edit_mode: false,
      customer_detail: "",
    };
  },
  mounted() {
    this.$store.dispatch("getCustomerDetail", this.$route.params.id);
    this.form.vendor_id = this.$route.params.id;
    this.customer_detail = this.getCustomerDetail;
    this.form.customer_name = this.getCustomerDetail.name;
    this.form.customer_id = this.getCustomerDetail.id;
  },
  watch: {
    getCustomerDetail() {
      this.customer_detail = this.getCustomerDetail;
      this.form.customer_name = this.getCustomerDetail.name;
      this.form.customer_id = this.getCustomerDetail.id;
    },
  },
  computed: {
    ...mapGetters(["getCustomerDetail"]),
  },
};
</script>
