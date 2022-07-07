<template>
  <div>
    <div
      v-for="index in 3"
      :key="index"
      class="flex flex-col items-center w-full"
    >
      <OrderCard :num="3 * page + index" />
    </div>
    <Pagination @clicked="onClickHandler" />
  </div>
</template>

<script>
import StatusCard from "../components/StatusCard";
import HighlightedText from "../components/HighlightedText.vue";
import Pagination from "./Pagination.vue";
import OrderCard from "../components/OrderCard.vue";
export default {
  name: "OrderHistory",
  components: {
    StatusCard,
    HighlightedText,
    Pagination,
    OrderCard,
  },
  data() {
    return {
      searchInput: "",
      orders: [
        {
          customer: {
            name: "Rick 0.1",
            desc: "Where is my gun ?",
          },
          detail: {
            type: "Laser Gun",
            amount: 1,
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
            amount: 2,
            dim: "XXX",
          },
        },
        {
          customer: {
            name: "Rick 0.3",
            desc: "Where is my pencil ?",
          },
          detail: {
            type: "Apple pencil",
            amount: 3,
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
            amount: 4,
            dim: "XXX",
          },
        },
      ],
      page: 0,
    };
  },
  methods: {
    onClickHandler(page) {
      this.page = page - 1;
    },
    filterOrders() {
      return this.orders.filter((order) =>
        order.detail.type.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    },
    sortAZ(isReverse) {
      this.orders.sort(function (a, b) {
        if (a.detail.type < a.detail.type) return !isReverse ? -1 : 1;
        else if (a.detail.type > b.detail.type) return !isReverse ? 1 : -1;
        return 0;
      });
    },
    sortAmount(isReverse) {
      this.orders.sort(function (a, b) {
        if (a.detail.amount < a.detail.amount) return !isReverse ? -1 : 1;
        else if (a.detail.amount > b.detail.amount) return !isReverse ? 1 : -1;
        return 0;
      });
    },
  },
};
// import { ref } from "vue";
// let input = ref("");
// const fruits = ["apple", "banana", "orange"];
// function filteredList() {
//   return fruits.filter((fruit) =>
//     fruit.toLowerCase().includes(input.value.toLowerCase())
//   );
// }
</script>
