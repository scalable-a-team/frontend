<template>
  <div class="">
    <!-- Nav Bar -->
    <NavBar />
    <!-- <router-view ></router-view> -->
    <!-- <SellerProfile /> -->

    <!-- Main Div -->
    <div class="flex">
      <!-- Left Bar -->
      <SideBar />
      <div class="w-full">
        <!-- {{ productList.product1 }} -->
        <router-view></router-view>
      </div>
      <!-- Product Listing -->
    </div>
    <div>
      <Pagination />
    </div>
    <!-- Pagination -->
    <!-- <Pagination /> -->
  </div>
</template>

<script>
// Imports
import api from "@/service/customerService";
import NavBar from "./views/NavBar.vue";
import SideBar from "./views/SideBar.vue";
// Exports
export default {
  name: 'App',
  components: {
    NavBar,
    SideBar,
  },
  data: () => ({
    drawer: false,
    search: '',
  }),
  methods: {
    logout: async function() {
      let response = await api.logout();
      if(response.data.success){
        await this.$router.push("/Login")
      }
    },
    test: () => {
      console.log(1)
    },
  },
};
</script>