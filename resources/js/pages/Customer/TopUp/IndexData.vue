<template>
  <section
        class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4"
    >
        <v-header text="Payment Records"></v-header>
    <table class='shadow-md rounded w-full'>
  <thead class='sticky block top-0' scope='col'>
    <tr class='flex text-left '>
      <th scope='col' class='w-4/12 sm:w-1/3 p-2 border bg-white border-r-0 border-gray-300 font-normal'>
        <h4 class='u-slab'>Payment Method</h4>
      </th>
      <th scope='col' class='w-8/12 sm:w-2/3 p-2 border bg-white border-r-0 border-gray-300 font-normal'>
        <h4 class='u-slab'>Action</h4>
     </th>
    </tr>
  </thead>

  <tbody>

    <tr class='flex text-left text-sm flex-wrap sm:no-wrap '  v-for="bill in getUnitVendor.bill" :key="bill.id">
      <td class='w-4/12 sm:w-1/3 p-2 border-gray-300 border border-r-0 border-t-0'>{{bill.name}}</td>
      <td class='w-8/12 sm:w-2/3 p-2 border-gray-300 border border-r-0 border-t-0'>
           <router-link
         :to="$route.query.bill_ref != null ? '/customer/bill/pay/'+bill.id+'?bill_ref='+$route.query.bill_ref :'/customer/top-up/pay/'+bill.id"
         tag="button"
           class="hover:bg-light-blue-200 bg-red-200 hover:text-light-blue-800 group text-center rounded-sm text-white-800 text-sm font-medium px-2 py-2"
               >
             Pay Now
        </router-link>
        </td>
    </tr>
   
  </tbody>
</table>
  </section>
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
  },
    watch: {
    getUnitVendor() {
      this.vendor = this.getUnitVendor;
    },
  },
  computed: {
    ...mapGetters(["getUnitVendor"]),
  },
};
</script>
</script>