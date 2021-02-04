<template>
  <section
    class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4"
  >
    <header class="flex items-center justify-between">
      <h2 class="text-lg leading-6 font-medium text-black">Customers</h2>
    </header>
    <table class="shadow-md rounded w-full">
      <thead class="sticky block top-0" scope="col">
        <tr class="flex text-left">
          <th
            scope="col"
            class="w-4/12 sm:w-1/3 p-2 border bg-white border-r-0 border-gray-300 font-normal"
          >
            <h4 class="u-slab">Name</h4>
          </th>
          <th
            scope="col"
            class="w-4/12 sm:w-1/3 p-2 border bg-white border-r-0 border-gray-300 font-normal"
          >
            <h4 class="u-slab">Number</h4>
          </th>
          <th
            scope="col"
            class="w-4/12 sm:w-1/3 p-2 border bg-white rounded-tr border-gray-300 font-normal"
          >
            <h4 class="u-slab">Action</h4>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          class="flex text-left text-sm flex-wrap sm:no-wrap"
          v-for="data in customers"
          :key="data.id"
        >
          <td
            class="w-4/12 sm:w-1/3 p-2 border-gray-300 border border-r-0 border-t-0"
          >
            {{ data.name }}
          </td>
          <td
            class="w-4/12 sm:w-1/3 p-2 border-gray-300 border border-r-0 border-t-0"
          >
            {{ data.email }}
          </td>
          <td
            class="w-4/12 sm:w-1/3 p-2 border-gray-300 border border-r-0 border-t-0"
          >
            <router-link :to="'/admin/customer/issue_bill/'+data.id"
            tag="button"
              class="hover:bg-light-red-200 bg-red-200 hover:text-light-blue-800 group text-center rounded-sm text-white-800 text-sm font-medium px-2 py-2"
            >
              Issue Bill
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
    this.$store.dispatch("getCustomers");
  },
  data() {
    return { customers: "" };
  },
  watch: {
    getCustomers() {
      this.customers = this.getCustomers;
    },
  },
  computed: {
    ...mapGetters(["getCustomers"]),
  },
};
</script>