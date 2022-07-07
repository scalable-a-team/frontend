<template>
  <!-- <router-link :to="page"> -->
  <button class="flex items-center">
    <router-link :to="page">
      <div
        :class="`absolute left-0 w-1 h-10 ${isVisible ? 'bg-[#3DABC0]' : ''} `"
      ></div>
      <div
        @click="hello"
        :class="`absolute left-1 w-24 h-10 ml-10 ${
          isVisible
            ? 'transition duration-200 ease-in-out -translate-x-10 bg-gradient-to-r from-[#1F3E51]'
            : ''
        }`"
      ></div>
      <div class="flex space-x-3 pt-2">
        <div class="cursor-pointer">
          <h1 class="text-white">{{ text }}</h1>
        </div>
        <!-- group-focus:border rounded-full px-3 group-focus:border-[#0C4550]`" -->
        <p
          :class="` 
            ${isVisible ? 'border rounded-full px-3 border-[#0C4550]' : ''}`"
        >
          <span
            :class="` text-center ${
              isVisible
                ? 'text-[#44BFD7] text-[12px] opacity-100 font-semibold'
                : 'opacity-0'
            }`"
            >{{ amount }}</span
          >
          <!-- text-[#44BFD7] text-[12px] opacity-100 font-semibold -->
          <!-- class="group-focus:text-[#44BFD7] group-focus:text-[12px] opacity-0 group-focus:opacity-100 group-focus:font-semibold" -->
        </p>
      </div>
    </router-link>
  </button>
  <!-- </router-link> -->
</template>

<script>
export default {
  props: ["text", "amount", "isVisible", "page"],
};
</script>

<style></style>
