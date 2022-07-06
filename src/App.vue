<template>
  <div class="">
    <!-- Nav Bar -->
    <Navbar />
    <!-- <router-view ></router-view> -->
    <!-- <SellerProfile /> -->

    <!-- Main Div -->
    <div class="flex">
      <!-- Left Bar -->
      <Leftbar />
      <div class="w-full">
        <!-- {{ productList.product1 }} -->
        <router-view :productList="productList.product1"></router-view>
      </div>
      <!-- Product Listing -->
    </div>
    <!-- Pagination -->
    <!-- <Pagination /> -->
  </div>
</template>

<script>
// import SellerProfile from "./views/SellerProfile.vue";
// import ProductListing from "./views/ProductListing.vue";
import Navbar from "./views/Navbar.vue";
import Leftbar from "./views/Leftbar.vue";
// import Pagination from "./views/Pagination";
export default {
  name: "App",
  components: {
    // ProductListing,
    Navbar,
    Leftbar,
    // Pagination,
    // SellerProfile,
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
            // "https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/06/21/16/3D-printer-4.jpg?width=1200",
            // "https://imageio.forbes.com/specials-images/imageserve/5f1a62d942a6387efb759310/What-Can-3D-Printing-Be-Used-For--Here-Are-10-Amazing-Examples/960x0.jpg?format=jpg&width=960",
            // "https://cdn.thewirecutter.com/wp-content/media/2021/08/3dprinter-2048px-9383.jpg",
            // "https://cdn.thewirecutter.com/wp-content/media/2021/08/3dprinter-2048px-9383.jpg",
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
