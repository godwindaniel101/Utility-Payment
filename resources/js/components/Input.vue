<template>
  <div>
    <label :for="id" class="sr-only">{{ label }}</label>
    <input
      v-model="vm_data"
      :id="id"
      name=""
      @keyup="inputChanged"
      :type="type"
      :autocomplete="type"
      :value="value"
      class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      :placeholder="placeholder"
      :class="
        getErrors[error] != null &&  getErrors[error] != [] &&  getErrors[error] != ''
          ? extra_class +' '+ 'border border-red-500'
          : extra_class +' '+ 'border border-gray-300'
      "
    />
    <span class="error" v-if="getErrors[error] != null &&  getErrors[error] != ''">* {{
      getErrors[error][0]
    }}</span>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["extra_class", "placeholder", "type", "id", "label", "error",'value'],
  data() {
    return { vm_data: "" };
  },
        watch: { 
      	value: function(data) { 
          this.vm_data = data
          console.log(data)
        }
      },
  methods: {
    inputChanged() {
        //clear unit error on key stroke
      this.$emit("vchange", this.vm_data);
      if (this.getErrors[this.error] != null) {
        this.$store.dispatch("clearUnitError", this.error);
      }
    },
  },
  computed: {
    ...mapGetters(["getErrors"]),
  },
};
</script>