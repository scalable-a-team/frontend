<template>
  <div
    class="relative overflow-hidden space-x-52 h-36 full flex justify-center bg-black"
  >
    <slot></slot>
    <!-- <div class=""></div> -->
    <div class="">
      <button
        :disabled="visible === 0"
        class="absolute top-6 left-40 flex justify-center items-center rounded-full border-[#12303F] border w-8 h-8 cursor-pointer"
        @click="prev"
      >
        <ChevronLeftIcon class="h-5 w-5" />
      </button>
      <button
        :disabled="visible >= len - 4"
        class="absolute top-6 flex justify-center items-center right-[160px] rounded-full border-[#12303F] border w-8 h-8 cursor-pointer"
        @click="next"
      >
        <ChevronRightIcon class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>

<script>
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/outline";
export default {
  name: "ImageCarousel",
  components: {
    ChevronRightIcon,
    ChevronLeftIcon,
  },
  props: ["visible", "len"],
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
