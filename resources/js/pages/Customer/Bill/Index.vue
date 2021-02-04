<template>
  <section
        class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4"
    >
       <header class="flex items-center justify-between">
            <h2 class="text-lg leading-6 font-medium text-black">Payment Records</h2>
        </header>
    <table class='shadow-md rounded w-full'>
  <thead class='sticky block top-0' scope='col'>
    <tr class='flex text-left '>
      <th scope='col' class='w-3/12 sm:w-1/4 p-2 border bg-white border-r-0 border-gray-300 font-normal'>
        <h4 class='u-slab'>Amount</h4>
      </th>
      <th scope='col' class='w-3/12 sm:w-1/4 p-2 border bg-white border-r-0 border-gray-300 font-normal'>
        <h4 class='u-slab'>Descriptio</h4>
     </th>
      <th scope='col' class='w-3/12 sm:w-1/4 p-2 border bg-white rounded-tr border-gray-300 font-normal'>
        <h4 class='u-slab'>Status</h4>
     </th>
      <th scope='col' class='w-3/12 sm:w-1/4 p-2 border bg-white rounded-tr border-gray-300 font-normal'>
        <h4 class='u-slab'>Action</h4>
     </th>
    </tr>
  </thead>

  <tbody>

   
    <tr class='flex text-left text-sm flex-wrap sm:no-wrap ' v-for="data in UserBill" :key="data.id">
      <td class='w-3/12 sm:w-1/4 p-2 border-gray-300 border border-r-0 border-t-0'>{{data.amount}}</td>
      <td class='w-3/12 sm:w-1/4 p-2 border-gray-300 border border-r-0 border-t-0'>{{data.description}}</td>
      <td class='w-3/12 sm:w-1/4 p-2 border-gray-300 border border-r-0 border-t-0'>
       <svg v-if="data.is_payed" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" class='text-indigo-700 m-auto' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
           <title id="catTitle">Relevant package title ( too many to add )</title>
          <path d="M20 6L9 17l-5-5"/>
        </svg>
      </td>
      <td class='w-3/12 sm:w-1/4 p-2 border-gray-300 border border-r-0 border-t-0'>
             <router-link :to="'/customer/bill/'+data.id" tag="button"
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
  mounted() {
    this.$store.dispatch("getUserBill");
  },
  data() {
    return { UserBill: "" };
  },
  watch: {
    getUserBill() {
      this.UserBill = this.getUserBill;
    },
  },
  computed: {
    ...mapGetters(["getUserBill"]),
  },
};
</script>