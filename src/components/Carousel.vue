<template>
  <div class="relative overflow-hidden h-24 ml-10">
    <slot></slot>
    <div class="">
      <!-- <button class="absolute left-0 top-1/2 cursor-pointer" @click="prev"> -->
      <button
        class="absolute top-8 left-6 flex justify-center items-center rounded-full border-[#12303F] border w-8 h-8 cursor-pointer"
        @click="prev"
      >
        <ChevronLeftIcon class="h-5 w-5 text-[#44BFD7]" />
      </button>
      <!-- </button> -->
      <!-- <button class="absolute right-28 top-1/2 cursor-pointer" @click="next"> -->
      <button
        class="absolute top-8 flex justify-center items-center right-[130px] rounded-full border-[#12303F] border w-8 h-8 cursor-pointer"
        @click="next"
      >
        <ChevronRightIcon class="h-5 w-5 text-[#44BFD7]" />
      </button>
    </div>
  </div>
</template>

<script>
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/outline";
export default {
  name: "Carousel",
  components: {
    ChevronRightIcon,
    ChevronLeftIcon,
  },
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>

<style></style>
