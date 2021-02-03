<template>
  <div class="x_container _gen_padding">
    <search-input
      @searchInputted="searchInputted($event)"
      @searchReset="searchReset"
    />
    <div class="x_gen_table_wrap">
      <div id="table-wrapper" class="ui x_gen_table">
        <div class="x_gen_table_xxx">
          <vuetable
            ref="vuetable"
            api-url="/api/application/getApplications"
            :fields="fields"
            :http-options="token"
            :sort-order="sortOrder"
            :css="getTableCss.table"
            pagination-path
            :per-page="3"
            :append-params="moreParams"
            :show-sort-icons="true"
            @vuetable:pagination-data="onPaginationData"
          >
            <div
              class="table-button-container"
              slot="actions"
              slot-scope="props"
              style="display: flex; justify-content: center"
            >
              <div class="_t_btn _btn_expired" v-if="props.rowData.is_expired">
                Expired
              </div>
            </div>
          </vuetable>
        </div>
        <vuetable-pagination
          ref="pagination"
          @vuetable-pagination:change-page="onChangePage"
          :css="getTableCss.pagination"
        ></vuetable-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      token: {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          Accept: "application/json",
        },
      },
      fields: [
        {
          name: "trading_name",
          title: "Trading Name",
          sortField: "trading_name",
        },
        {
          name: "category",
          title: "Description",
          sortField: "category",
          formatter: (value) => this.$store.getters.capitalizeText(value),
        },
        {
          name: "amount",
          title: "Amount(₦)",
          sortField: "amount",
          formatter: (value) => this.$store.getters.amountConversion(value),
        },
        {
          name: "actions",
          title: "Action",
          titleClass: "text-center",
          dataClass: "text-center",
          width: "15% ",
        },
      ],
      sortOrder: [{ field: "updated_at", direction: "desc" }],
      moreParams: {},
    };
  },
  computed: {
    ...mapGetters(["getTableCss"]),
  },
  methods: {
    searchInputted(value) {
      this.moreParams = {
        filter: value,
      };
      Vue.nextTick(() => this.$refs.vuetable.refresh());
    },
    searchReset() {
      this.moreParams = {};
      Vue.nextTick(() => this.$refs.vuetable.refresh());
    },
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
  },
};
</script>
