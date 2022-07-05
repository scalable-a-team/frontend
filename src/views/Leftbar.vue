<template>
  <div class="flex relative flex-col space-y-7 pl-14 mt-20">
    <h1>Menu</h1>
    <div class="flex items-center">
      <div class="absolute left-0 w-1 h-10 bg-[#3DABC0]"></div>
      <div
        class="absolute left-1 w-24 h-10 bg-gradient-to-r from-[#1F3E51]"
      ></div>
      <div class="flex space-x-3">
        <h1 class="text-white">Products</h1>
        <p class="border rounded-full px-3 border-[#0C4550]">
          <span class="text-[#44BFD7] text-[12px] font-semibold">52</span>
        </p>
      </div>
    </div>
    <div>
      <h1 class="text-[#9DA5B4]">Product Status</h1>
    </div>
    <div>
      <h1 class="text-[#9DA5B4]">Order History</h1>
    </div>
    <div class="divide-y-2"></div>
  </div>
</template>

<script>
export default {
  name: "LeftbarMain",
};
</script>

<style></style>
