<template>
  <div class="flex-col bg-gray-700 m-5 p-5 rounded-lg">
    <!-- Customer Profile -->
    <div class="flex items-center">
      <div class="h-32 w-32">
        <Avatar :profile="this.customer.name" />
      </div>
      <div class="flex-col">
        <p class="font-bold">{{ customer.name }}</p>
        <p class="text-sm">{{ customer.desc }}</p>
      </div>
    </div>
    <!-- Product Detail -->
    <div class="my-5">
      <p class="font-bold">
        Type: <span class="font-normal">{{ detail.type }}</span>
      </p>
      <p class="font-bold">
        Amount: <span class="font-normal">{{ detail.amount }} </span>
      </p>
      <p class="font-bold">
        Dimension: <span class="font-normal">{{ detail.dim }}</span>
      </p>
    </div>
    <div class="flex justify-evenly" v-if="isPending === 'true'">
      <button class="rounded-lg bg-green-400 p-3 w-24 hover:opacity-60">
        Approval
      </button>
      <button class="rounded-lg bg-red-500 p-3 w-24 hover:opacity-60">
        Decline
      </button>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar";
export default {
  name: "StatusCard",
  components: {
    Avatar,
  },
  props: {
    isPending: {
      type: Boolean,
      required: true,
    },
    order: Object,
  },
  data() {
    return {
      customer: this.order.customer,
      detail: this.order.detail,
    };
  },
};
</script>
