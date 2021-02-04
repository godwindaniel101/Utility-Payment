<template>
    <section
        class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4"
    >
        <v-header text="Vendors"></v-header>
        <form class="relative">
            <svg
                width="20"
                height="20"
                fill="currentColor"
                class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
            </svg>
            <input
                class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
                type="text"
                aria-label="Filter vendor"
                placeholder="Filter vendor"
            />
        </form>

        <ul
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"
        >
            <li v-for="item in vendor" :key="item.id">
                <router-link
                    :to="$route.params.id == null ?'/customer/top-up/'+item.id :'/customer/top-up/'+item.id+'?bill_ref='+$route.params.id"
                    class="hover:bg-light-blue-500 hover:border-transparent cursor-pointer hover:shadow-sm group block rounded-md p-4 border border-gray-200"
                >
                    <dl class="flex flex-row">
                        <div class="flex-grow">
                            <div>
                                <dt class="sr-only">Title</dt>
                                <dd
                                    class="group-hover:text-gray-600 leading-6 font-medium text-black"
                                >
                                    {{ item.name }}
                                </dd>
                            </div>
                            <div>
                                <dt class="sr-only">Category</dt>
                                <dd
                                    class="group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4"
                                >
                                    {{ item.description }}
                                </dd>
                            </div>
                        </div>

                        <div class="col-start-2 row-start-1 row-end-3">
                            <dt class="sr-only">Users</dt>
                            <dd
                                class="flex justify-center sm:justify-center lg:justify-center xl:justify-center -space-x-2"
                            >
                                <img
                                    x-for="user in item.users"
                                    src="/images/sw_logo.png"
                                    :alt="item.name"
                                    width="64"
                                    height="64"
                                    class="w-20 h-20 rounded-full bg-gray-100 border-2 border-white"
                                />
                            </dd>
                        </div>
                    </dl>
                </router-link>
            </li>
        </ul>
    </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    mounted(){
        this.$store.dispatch('getVendors');
    },
    data(){
        return{
            vendor:''
        }
    },
    watch:{
        getVendors(){
            this.vendor = this.getVendors
        }
    },
      computed: {
    ...mapGetters(["getVendors"]),
  },
};
</script>
