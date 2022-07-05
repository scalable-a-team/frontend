<template>
  <div>Product Listing</div>
  <!-- <div class="divide-y"> -->
  <!-- <Product :productList="productList" />
    <Product :productList="productList" />
    <Product :productList="productList" />
    <Product :productList="productList" /> -->
  <!-- </div> -->
</template>

<script>
// import Product from "../components/Product";
export default {
  name: "ProductListing",
  components: {
    // Product,
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
