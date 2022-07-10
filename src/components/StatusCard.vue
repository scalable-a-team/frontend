<template>
  <!-- <div class=""> -->
  <div class="themedBorder">
    <div class="border-b border-[#44BFD7] border-opacity-20 py-5 g-white">
      <div>
        <div>
          <h1>Mike Wheeler</h1>
          <h2>Description</h2>
        </div>
      </div>
    </div>
    <div>
      <div class="flex items-center m-5 space-x-5">
        <div class="space-y-10 w-1/5">
          <h2>Type of Job</h2>

          <h2>Amount</h2>

          <h2>Dimension</h2>
        </div>
        <div class="w-full space-y-5">
          <div class="border border-[#2F394D] h-12 rounded-md">
            <p class="mx-2 my-1">test</p>
          </div>
          <div class="border border-[#2F394D] h-12 rounded-md">
            <p class="mx-2 my-1">test</p>
          </div>
          <div class="border border-[#2F394D] h-12 rounded-md">
            <p class="mx-2 my-1">test</p>
          </div>
        </div>
        <!-- <div class="flex m-5 space-x-5">
          <h2>Type of Job</h2>
          <div class="border border-[#2F394D] h-12 w-3/4 rounded-md">
            <p class="mx-2 my-1">test</p>
          </div>
        </div>
        <div class="flex m-5 space-x-5">
          <h2>Amount</h2>
          <div class="border border-[#2F394D] h-12 w-3/4 rounded-md">
            <p class="mx-2 my-1">test</p>
          </div>
        </div>
        <div class="flex m-5 space-x-5">
          <h2>Dimension</h2>
          <div class="border border-[#2F394D] h-12 w-3/4 rounded-md">
            <p class="mx-2 my-1">test</p>
          </div>
        </div> -->
      </div>
      <div v-if="disable" class="flex justify-center space-x-12">
        <button class="button">Submit</button>
        <button class="button">Reset</button>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import Avatar from "./Avatar";
import Pagination from "../views/Pagination.vue";
export default {
  name: "StatusCard",
  components: {
    Pagination,
    Avatar,
  },
  props: {
    isPending: {
      type: Boolean,
      required: true,
    },
    order: Object,
    idx: Number,
    disable: Boolean,
  },
  data() {
    return {
      customer: this.order.customer,
      detail: this.order.detail,
    };
  },
  methods: {
    test() {
      console.log(this.idx);
    },
  },
};
</script>

<style scoped>
.themedBorder {
  @apply border-[#44BFD7] border-2  m-10 border-opacity-30 rounded-lg px-5 py-5;
}
.button {
  @apply border border-[#44BFD7] border-opacity-30 rounded-lg px-5 py-1;
}
</style>
