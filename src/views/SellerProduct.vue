<template>
  <div>
    <div class="text-right mr-10 mt-10">
      <router-link to="/create-product">
        <button to="/create-product" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Product
        </button>
      </router-link>
    </div>
    <div class="m-10 mr-10 w-full h-[28rem]">
      <!-- <p class="">Product Listing</p> -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Product :productList="productList" />
        <Product :productList="productList" />
        <Product :productList="productList" />
        <Product :productList="productList" />
      </div>
      <div class="flex-end">
        <Pagination @clicked="test" />
      </div>
    </div>
  </div>

  <!-- <div class="divide-y"> -->
</template>

<script>
import { PlusIcon } from "@heroicons/vue/solid";
import Product from "../components/Product";
import Pagination from "./Pagination.vue";
export default {
  name: "SellerProduct",
  components: {
    Product,
    Pagination
  },
  props: {
    productList: Object,
  },
  methods: {
    test() {
      console.log("test");
    },
  },
}
</script>

<style scoped>

</style>
