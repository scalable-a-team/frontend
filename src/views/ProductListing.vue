<template>
  <div class="m-10 mr-10 w-full h-[28rem]">
    <!-- <p class="">Product Listing</p> -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="item in fetch_product" :key="item.title">
        <Product :product="item" />
      </div>
    </div>
    <div class="flex-end">
      <Pagination @clicked="onClickHandler" />
    </div>
  </div>
  <!-- <div class="divide-y"> -->
</template>

<script>
import productService from "@/service/productService";
import Product from "../components/Product";
import Pagination from "./Pagination.vue";
export default {
  name: "ProductListing",
  data: () => ({
    page: 0,
    fetch_product: [],
  }),
  components: {
    Product,
    Pagination,
    Product,
  },
  props: {
    productList: Object,
  },
  methods: {
    test() {
      console.log("test");
    },
    async onClickHandler(page) {
      this.page = page - 1;
      this.load_product();
    },
    async load_product() {
      console.log(tihs.$route.query.query);
      productService
        .list_products({ query: this.$route.query })
        .then((response) => {
          this.fetch_product = response.data.results;
          console.log(this.fetch_product);
        })
        .catch((login_error) => {
          console.log(login_error);
        });
    },
  },
  mounted() {
    this.load_product();
  },
};
</script>
