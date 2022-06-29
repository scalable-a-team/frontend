<template>
  <div class="">
    <!-- <ProductListing :productList="productList.product1" /> -->
    <!-- <CustomerReview /> -->
    <router-view :productList="productList.product1"></router-view>
  </div>
</template>

<script>
// import ProductListing from "./views/ProductListing";
// import CustomerReview from "./views/CustomerReview.vue";
export default {
  name: "App",
  components: {
    // ProductListing,
    // CustomerReview,
  },
  data() {
    return {
      productList: {
        product1: {
          productId: 1,
          supplierId: 1,
          title: "3D Printer",
          price: 200,
          desc: "blah blah blah",
          imageUrls: [
            "https://cdn.thewirecutter.com/wp-content/media/2021/08/3dprinter-2048px-9383.jpg",
            "",
            "",
            "",
            "",
            "",
            "",
          ],
        },
        product2: {
          productId: 2,
          supplierId: 2,
          title: "3D Printer",
          price: 200,
          desc: "blah blah blah",
          imageUrls: [
            "https://cdn.thewirecutter.com/wp-content/media/2021/08/3dprinter-2048px-9383.jpg",
            "",
            "",
          ],
        },
        product3: {
          productId: 3,
          supplierId: 3,
          title: "3D Printer",
          price: 200,
          desc: "blah blah blah",
          imageUrls: [
            "https://cdn.thewirecutter.com/wp-content/media/2021/08/3dprinter-2048px-9383.jpg",
            "",
            "",
          ],
        },
      },
    };
  },
};
</script>
