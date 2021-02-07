<template>
  <div class="w-full flex flex-col justify-start text-left pt-10 pb-3 px-7">
    <div class="float-left">
      <h3 class="text-xl text-gray-900 font-semibold">
        <span class="border-b-4 border-indigo-700 py-3">
          Welcome ! <span class="text-indigo-700">{{ getUserDetail["user_name"] }}</span>
        </span>
      </h3>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
      computed: {
    ...mapGetters(["getUserDetail"]),
  },
}
</script>