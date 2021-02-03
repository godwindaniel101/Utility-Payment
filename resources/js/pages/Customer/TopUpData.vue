<template>
  <div class="bg-white shadow overflow-hidden w-full">
 
    <div class="border-t border-gray-200">
      <dl>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex flex-row justify-center align-center"
        >
          <dt class="text-sm font-medium text-gray-500">Bill Name</dt>
          <dd class="mt-1 flex-auto  text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-row justify-center d_center">
            Action
          </dd>
        </div>
        <div
        v-for="bill in getUnitVendor.bill" :key="bill.id"
          class="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 d_center "
        >
          <dt class="text-sm font-medium text-gray-500 d_center ">{{bill.name}}</dt>
          <dd class="mt-1 flex-auto  text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-row justify-center d_center">
          
             <router-link
         :to="'/customer/pay-now/' +bill.id"
          class="hover:bg-light-red-200 bg-red-200 hover:text-light-blue-800 group text-center flex items-center rounded-sm text-white-800 text-sm font-medium px-2 py-2 mt-2"
        >
             Pay Now
        </router-link>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      vendor: {bill:''},
    };
  },
  mounted() {
    this.$store.dispatch("getUnitVendor", this.$route.params.id);
    this.vendor = this.getUnitVendor;
  },
  computed: {
    ...mapGetters(["getUnitVendor"]),
  },
};
</script>
</script>