<template>
  <div class="my-20">
    <div>
      <h1 class="text-center text-2xl mb-10">Pending Approval</h1>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 grid-flow-row"
    >
      <div v-for="order in orders" :key="order.id">
        <StatusCard :order="order" isPending="true" />
      </div>
    </div>
  </div>
</template>

<script>
import StatusCard from "../components/StatusCard";
export default {
  name: "PendingApproval",
  components: {
    StatusCard,
  },
  data() {
    return {
      orders: [
        {
          customer: {
            name: "Rick 0.1",
            desc: "Where is my gun ?",
          },
          detail: {
            type: "Laser Gun",
            amount: "1$",
            dim: "XXX",
          },
        },
        {
          customer: {
            name: "Rick 0.2",
            desc: "Where is my gun ?",
          },
          detail: {
            type: "Laser Gun",
            amount: "1$",
            dim: "XXX",
          },
        },
        {
          customer: {
            name: "Rick 0.3",
            desc: "Where is my gun ?",
          },
          detail: {
            type: "Laser Gun",
            amount: "1$",
            dim: "XXX",
          },
        },
        {
          customer: {
            name: "Rick 0.4",
            desc: "Where is my gun ?",
          },
          detail: {
            type: "Laser Gun",
            amount: "1$",
            dim: "XXX",
          },
        },
      ],
    };
  },
};
</script>
