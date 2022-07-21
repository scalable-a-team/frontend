<template>
  <div class="flex relative flex-col space-y-10 w-72 pl-14 mt-20">
    <h1>Menu</h1>
    <MenuItem
      text="Product"
      amount="52"
      :isVisible="index === 0"
      @click="index = 0"
      page="/"
    />
    <template v-if="$store.state.role === 'seller'">
      <MenuItem
        text="My Product"
        amount="52"
        :isVisible="index === 1"
        @click="index = 1"
        page="my-product"
      />
      <MenuItem
          text="Product Status"
          amount="52"
          :isVisible="index === 3 || index === 4 || index === 5"
          @click="index = 3"
          page="pending"
      />

    </template>
    <template v-if="$store.state.role === 'customer'">
      <MenuItem
          text="Order History"
          amount="52"
          :isVisible="index === 2"
          @click="index = 2"
          page="order-history"
      />
      <div class="border-b border-[#50555E]"></div>
      <h1>Status</h1>
      <MenuItem
          text="Pending"
          amount="52"
          :isVisible="index === 3"
          @click="index = 3"
          page="pending"
      />
      <MenuItem
          text="In-progress"
          amount="52"
          :isVisible="index === 4"
          @click="index = 4"
          page="in-progress"
      />
      <MenuItem
          text="In-transit"
          amount="52"
          :isVisible="index === 5"
          @click="index = 5"
          page="in-transit"
      />
    </template>
    <!-- <div class="flex items-center">
      <div v-if="1 === 2" class="absolute left-0 w-1 h-10 bg-[#3DABC0]"></div>
      <button
        v-if="1 === 1"
        @click="hello"
        class="absolute left-1 w-24 h-10 ml-10 transition duration-200 ease-in-out focus:-translate-x-10 focus:bg-gradient-to-r focus:from-[#1F3E51]"
      ></button>
      <div class="flex space-x-3">
        <router-link to="/">
          <div class="cursor-pointer">
            <h1 class="text-white">Products</h1>
          </div>
        </router-link>
        <p v-if="1 === 1" class="border rounded-full px-3 border-[#0C4550]">
          <span class="text-[#44BFD7] text-[12px] font-semibold">52</span>
        </p>
      </div>
    </div> -->
    <!-- <router-link to="pending-approval">
      <div class="cursor-pointer">
        <h1 class="text-[#9DA5B4]">Product Status</h1>
      </div>
    </router-link>
    <router-link to="order-history">
      <div class="cursor-pointer">{}
        <h1 class="text-[#9DA5B4]">Order History</h1>
      </div>
    </router-link> -->

    <!-- <div class="flex items-center">
      <div class="absolute left-0 w-1 h-10 bg-[#3DABC0]"></div>
      <div
        class="absolute left-1 w-24 h-10 bg-gradient-to-r from-[#1F3E51]"
      ></div>
      <div class="flex space-x-3">
        <router-link to="/">
          <div class="cursor-pointer">
            <h1 class="text-white">Pending</h1>
          </div>
        </router-link>
        <p class="border rounded-full px-3 border-[#0C4550]">
          <span class="text-[#44BFD7] text-[12px] font-semibold">52</span>
        </p>
      </div>
    </div>
    <router-link to="pending-approval">
      <div class="cursor-pointer">
        <h1 class="text-[#9DA5B4]">In-progress</h1>
      </div>
    </router-link>
    <router-link to="order-history">
      <div class="cursor-pointer">
        <h1 class="text-[#9DA5B4]">In-transit</h1>
      </div>
    </router-link> -->
  </div>
</template>

<script>
import MenuItem from "../components/MenuItem.vue";
export default {
  name: "SideBar",
  components: {
    MenuItem,
  },
  data() {
    return {
      index: -1,
    };
  },
  methods: {
    toggle(item) {
      console.log(item);
    },
  },
};
</script>

<style></style>
