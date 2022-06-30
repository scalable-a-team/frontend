<template>
  <div class="m-10 relative">
    <div class="mb-12 flex justify-end"><button>Edit Profile</button></div>
    <div class="flex space-x-10 mb-20 items-center justify-evenly">
      <!-- Profile -->
      <div class="h-32 w-32">
        <Avatar profile="test" />
      </div>
      <!-- Current Listing -->
      <div class="w-full h-80 overflow-y-auto bg-teal-800">
        <div
          class="pl-20 mb-3 flex md:justify-center"
          v-for="product in productList"
          :key="product.id"
        >
          <h1 class="text-3xl">
            {{ product }}
          </h1>
        </div>
      </div>
    </div>
    <div class="flex justify-evenly">
      <!-- Pending Approval -->
      <router-link to="/pending-approval">
        <button>Pending Approval</button>
      </router-link>
      <!-- In Progress -->

      <router-link to="/in-progress">
        <button>In Progress</button>
      </router-link>
      <!-- In Transit -->
      <router-link to="/in-transit">
        <button>In Transit</button>
      </router-link>
      <!-- Order History -->
      <router-link to="/order-history">
        <button>Order History</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Avatar from "../components/Avatar";
export default {
  name: "SellerProfile",
  components: {
    Avatar,
  },
  data() {
    return {
      productList: [
        "product1",
        "product2",
        "product3",
        "product4",
        "product5",
        "product6",
        "product7",
      ],
    };
  },
};
</script>
