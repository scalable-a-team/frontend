<template>
  <div class="m-10 w-full h-[28rem]">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div v-for="(order, index) in filterApproval()" :key="order.id">
        <StatusCard
          disable="true"
          :idx="index"
          :order="order"
          isPending="true"
        />
      </div>
    </div>
    <div>
      <Pagination />
    </div>
  </div>
</template>

<script>
import StatusCard from "../components/StatusCard";
import Pagination from "./Pagination.vue";
export default {
  name: "PendingApproval",
  components: {
    StatusCard,
    Pagination,
  },
  data() {
    return {
      orders: [
        {
          isPending: true,
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
          isPending: true,
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
          isPending: true,
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
          isPending: true,
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
  methods: {
    filterApproval() {
      return this.orders.filter((order) => order.isPending);
    },
    pendFalse(idx) {
      this.order[idx].isPending = false;
    },
  },
};
</script>
