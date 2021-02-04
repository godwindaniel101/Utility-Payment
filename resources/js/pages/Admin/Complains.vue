<template>
  <section
    class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4"
  >
    <header class="flex items-center justify-between">
      <h2 class="text-lg leading-6 font-medium text-black">Complain Records</h2>
    </header>
    <table class="shadow-md rounded w-full">
      <thead class="sticky block top-0" scope="col">
        <tr class="flex text-left">
          <th
            scope="col"
            class="w-4/12 sm:w-1/3 p-2 border bg-white border-r-0 border-gray-300 font-normal"
          >
            <h4 class="u-slab">Subject</h4>
          </th>
          <th
            scope="col"
            class="w-8/12 sm:w-2/3 p-2 border bg-white border-r-0 border-gray-300 font-normal"
          >
            <h4 class="u-slab">Message</h4>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          class="flex text-left text-sm flex-wrap sm:no-wrap"
          v-for="data in complain"
          :key="data.id"
        >
          <td
            class="w-4/12 sm:w-1/3 p-2 border-gray-300 border border-r-0 border-t-0"
          >
            {{ data.subject }}
          </td>
          <td
            class="w-4/12 sm:w-2/3 p-2 border-gray-300 border border-r-0 border-t-0"
          >
            {{ data.message }}
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
    this.$store.dispatch("getComplain");
  },
  watch:{
    getComplain(){
      this.complain =  this.getComplain
    }
  },
  computed: {
    ...mapGetters(["getComplain"]),
  },
};
</script>
</script>