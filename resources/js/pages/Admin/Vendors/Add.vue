<template>
  <div
    class=" flex items-center justify-center  py-2 px-4 sm:px-2 lg:px-2"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
         New Vendor
        </h2>
      </div>
      <form
        class="mt-4 space-y-3"
        @submit.prevent="$store.dispatch(edit_mode? 'updateVendor':'createVendor', form)"
      >
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <v-input
            @vchange="form.name = $event"
            :extra_class="'rounded-t-md'"
            placeholder="Name"
            type="text"
            id="name"
            label="name"
            error="name"
            :value="form.name"
          />
          <v-input
            @vchange="form.description = $event"
            placeholder="Short Description"
            type="text"
            id="description"
            label="description"
            error="description"
            :value="form.description"
          />
          <v-input
            @vchange="form.contact_email = $event"
            placeholder="Contact Email"
            type="text"
            id="contact_email"
            label="contact_email"
            error="contact_email"
            :value="form.contact_email"
          />
           <v-input
            @vchange="form.contact_number = $event"
            :extra_class="'rounded-b-md'"
            placeholder="Contact Number"
            type="text"
            id="contact_number"
            label="contact_number"
            error="contact_number"
            :value="form.contact_number"
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
           {{edit_mode ? 'Update' : 'Create' }} Vendor
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
      form: {name:'',description:'',contact_email:'',contact_number:''},
      edit_mode:false
    };
  },
  mounted() {
    this.$store.dispatch("clearAllError");
    if( this.$route.params.id != null){
     this.$store.dispatch("getUnitVendor", this.$route.params.id);
    this.form = this.getUnitVendor;
    this.edit_mode = true
    }
  },
    computed: {
    ...mapGetters(["getErrors","getUnitVendor"]),
  },
};
</script>
