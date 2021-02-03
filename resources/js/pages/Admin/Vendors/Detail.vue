<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white shadow overflow-hidden w-full">
    <div class="px-4 py-5 sm:px-6 flex flex-row justify-space-between">
      <div class="flex flex-grow flex-col">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ vendor.name }}
        </h3>
        <p class="mt-2 max-w-2xl text-sm text-gray-500">
          Contact Number: {{ vendor.contact_number }}
        </p>
        <p class="mt-2 max-w-2xl text-sm text-gray-500">
          Contact Email:{{ vendor.contact_email }}
        </p>
        <p class="mt-2 max-w-2xl text-sm text-gray-500">
          Contact Description: {{ vendor.description }}
        </p>
      </div>

      <div class="flex flex-col justify-between text-center">
        <router-link
          :to="'/admin/vendors/edit/' + vendor.id"
          tag="button"
          class="hover:bg-light-blue-200 bg-indigo-100 hover:text-light-blue-800 group text-center flex items-center rounded-sm text-white-800 text-sm font-medium px-2 py-2 mt-2"
        >
          Edit
        </router-link>
        <button
          @click="$store.dispatch('deleteVendor', vendor.id)"
          class="hover:bg-light-red-200 bg-red-200 hover:text-light-blue-800 group text-center flex items-center rounded-sm text-white-800 text-sm font-medium px-2 py-2 mt-2"
        >
          Delete
        </button>
        <router-link
          :to="'/admin/vendors/detail/' + vendor.id + '/bill'"
          class="hover:bg-light-green-200 bg-green-100 hover:text-light-blue-800 group text-center flex items-center rounded-sm text-white-800 text-sm font-medium px-2 py-2 mt-2"
        >
          Add Bill
        </router-link>
        <button
        @click="$store.dispatch('addNumber', vendor.id)"
          class="hover:bg-light-green-200 bg-green-100 hover:text-light-blue-800 group text-center flex items-center rounded-sm text-white-800 text-sm font-medium px-2 py-2 mt-2"
        >
          Add Number
        </button>
      </div>
    </div>

    <section
      class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4"
    >
      <header class="flex items-center justify-between">
        <h2 class="text-lg leading-6 font-medium text-black">Bill Types</h2>
      </header>
      <table class="shadow-md rounded w-full">
        <thead class="sticky block top-0" scope="col">
          <tr class="flex text-left">
            <th
              scope="col"
              class="w-4/12 sm:w-1/3 p-2 border bg-white border-r-0 border-gray-300 font-normal"
            >
              <h4 class="u-slab">Bill Name</h4>
            </th>
            <th
              scope="col"
              class="w-4/12 sm:w-1/3 p-2 border bg-white border-r-0 border-gray-300 font-normal"
            >
              <h4 class="u-slab">Description</h4>
            </th>
            <th
              scope="col"
              class="w-4/12 sm:w-1/3 p-2 border bg-white border-r-0 border-gray-300 font-normal"
            >
              <h4 class="u-slab">Action</h4>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="flex text-left text-sm flex-wrap sm:no-wrap"
            v-for="bill in getUnitVendor.bill"
            :key="bill.id"
          >
            <td
              class="w-4/12 sm:w-1/3 p-2 border-gray-300 border border-r-0 border-t-0"
            >
              {{ bill.name }}
            </td>
            <td
              class="w-4/12 sm:w-1/3 p-2 border-gray-300 border border-r-0 border-t-0"
            >
              {{ bill.ref_number }}
            </td>
            <td
              class="w-4/12 sm:w-1/3 p-2 border-gray-300 border border-r-0 border-t-0"
            >
              <button
                @click="$store.dispatch('deleteBill', bill.id)"
                class="hover:bg-light-red-200 bg-red-200 hover:text-light-blue-800 group text-center rounded-sm text-white-800 text-sm font-medium px-2 py-2"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

     <section
      class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4"
    >
      <header class="flex items-center justify-between">
        <h2 class="text-lg leading-6 font-medium text-black">Registered Numbers</h2>
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
              class="w-8/12 sm:w-2/3 p-2 border bg-white border-r-0 border-gray-300 font-normal"
            >
              <h4 class="u-slab">Number</h4>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="flex text-left text-sm flex-wrap sm:no-wrap"
            v-for="number in getUnitVendor.number"
            :key="number.id"
          >
            <td
              class="w-4/12 sm:w-1/3 p-2 border-gray-300 border border-r-0 border-t-0"
            >
              {{ number.name }}
            </td>
            <td
              class="w-8/12 sm:w-1/3 2-2 border-gray-300 border border-r-0 border-t-0"
            >
              {{ number.number }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      vendor: { bill: "", number: "" },
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