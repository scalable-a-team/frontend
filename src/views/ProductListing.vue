<template>
  <div class="m-10 mr-10 w-full h-[28rem]">
    <!-- <p class="">Product Listing</p> -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Product :productList="productList" />
      <Product :productList="productList" />
      <Product :productList="productList" />
      <Product :productList="productList" />
    </div>

    <Pagination />
  </div>
  <!-- <div class="divide-y"> -->
</template>

<script>
import Product from "../components/Product";
import Pagination from "./Pagination.vue";
export default {
  name: "ProductListing",
  components: {
    Product,
    Pagination,
  },
  props: {
    productList: Object,
  },
  methods: {
    test() {
      console.log("test");
    },
  },
};
</script>
