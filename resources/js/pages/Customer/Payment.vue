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
      <th scope='col' class='w-4/12 sm:w-1/3 p-2 border bg-white border-r-0 border-gray-300 font-normal'>
        <h4 class='u-slab'>Amount</h4>
      </th>
      <th scope='col' class='w-4/12 sm:w-1/3 p-2 border bg-white border-r-0 border-gray-300 font-normal'>
        <h4 class='u-slab'>Number</h4>
     </th>
      <th scope='col' class='w-4/12 sm:w-1/3 p-2 border bg-white rounded-tr border-gray-300 font-normal'>
        <h4 class='u-slab'>Description</h4>
     </th>
    </tr>
  </thead>

  <tbody>

   
    <tr class='flex text-left text-sm flex-wrap sm:no-wrap ' v-for="data in getUserPayment" :key="data.id">
      <td class='w-4/12 sm:w-1/3 p-2 border-gray-300 border border-r-0 border-t-0'>{{data.amount}}</td>
      <td class='w-4/12 sm:w-1/3 p-2 border-gray-300 border border-r-0 border-t-0'>{{data.phone_no}}</td>
      <td class='w-4/12 sm:w-1/3 p-2 border-gray-300 border border-r-0 border-t-0'>{{data.description}}</td>
    </tr>
   
  </tbody>
  <!-- <tfoot>
    <tr class='flex text-left text-sm'>
      <td class='w-1/4 hidden sm:block p-4 border-gray-300 border border-t-0 text-center bg-gray-100 border-r-0'></td>
      <td class='w-1/3 sm:w-1/4 p-4 border-gray-300 border border-t-0 text-center border-r-0'><a href='' class=' mt-auto block text-white bg-indigo-500 text-xs py-2 text-center rounded font-normal' title=''>Get Started</a></td>
      <td class='w-1/3 sm:w-1/4 p-4 border-gray-300 border border-t-0 text-center border-r-0'><a href='' class=' mt-auto block text-white bg-indigo-500 text-xs py-2 text-center rounded font-normal' title=''>Request a demo</a></td>
      <td class='w-1/3 sm:w-1/4 p-4 border-gray-300 border border-t-0 text-center'><a href='' class=' mt-auto block text-white bg-indigo-500 text-xs py-2 text-center rounded font-normal rounded-bt' title=''>Request a demo</a></td>
    </tr>
  </tfoot> -->
</table>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    mounted(){
        this.$store.dispatch('getUserPayment');
    },
      computed: {
    ...mapGetters(["getUserPayment"]),
  },
};
</script>
</script>