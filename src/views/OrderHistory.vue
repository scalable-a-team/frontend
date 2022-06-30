<template>
  <div class="flex mt-20">
    <div
      class="h-screen m-2 w-28 lg:w-48 flex-col justify-center items-center pl-3"
    >
      <h1 class="font-bold">Order by</h1>
      <h1>Name</h1>
      <div class="ml-5 text-sm">
        <HighlightedText @click="sortAZ(false)" text="A-Z" />
        <HighlightedText @click="sortAZ(true)" text="Z-A" />
      </div>
      <h1>Date</h1>
      <div class="ml-5 text-sm">
        <HighlightedText text="Most recent" />
        <HighlightedText text="Oldest first" />
      </div>
      <h1>Amount</h1>
      <div class="ml-5 text-sm">
        <HighlightedText @click="sortAmount(true)" text="High to Low" />
        <HighlightedText @click="sortAmount(false)" text="Low to High" />
      </div>
    </div>
    <div class="flex-1">
      <!-- Search Bar -->
      <div class="px-2 mx-5 h-full w-full group bg-gray-600 rounded-lg">
        <div class="flex justify-center">
          <div class="w-64 relative group mt-10">
            <input
              type="text"
              required
              class="bg-transparent border w-full rounded-2xl h-10 px-4 text-sm peer outline-none"
              v-model="searchInput"
            />
            <label
              class="transform transition-all absolute top-0 left-2 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >Search order</label
            >
          </div>
        </div>
        <!-- <div class="flex-col">
          <label
            for="first_name"
            class="font-bold text-[11px] text-white bg-gray-600 relative px-1 top-2 left-3 w-auto group-focus-within:text-gray-100"
          >
            Search Order
          </label>
          <input
            type="text"
            v-model="searchInput"
            class="h-10 w-60 text-10 bg-transparent border py-55-rem order-gray-300 text-sm rounded-lg ocus:outline-gray-100 ocus:border-gray-100 block p-2.5 focus:outline-none"
          />
        </div> -->
        <div class=" ">
          <div class="max-w-2xl" v-for="order in filterOrders()" :key="order">
            <StatusCard :order="order" isPending="false" />
          </div>
        </div>
      </div>

      <!-- <label class="relative text-gray-400 focus-within:text-gray-600 block">
        <fa
          icon="search"
          class="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3"
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Search order..."
          class="block w-[350px] py-2 pl-10 rounded-full text-lg border-teal-200 bg-transparent focus:outline-none text-gray-600"
        />
      </label> -->
      <!-- <v-icon></v-icon> -->
      <!-- <input
        type="text"
        v-model="searchInput"
        class="block w-[350px] m-20 px-20 py-2 rounded-full text-lg border-none bg-gray-300 focus:outline-none text-gray-600"
        placeholder="Search Order.."
      /> -->
      <!-- <div class="item fruit" v-for="fruit in filteredList()" :key="fruit">
        <p>{{ fruit }}</p>
      </div> -->
      <!-- <div class="item error" v-if="input && !filteredList().length">
        <p>No results found!</p>
      </div> -->
    </div>
    <div>
      <!-- Right Bar -->
      <!-- Order -->
    </div>
  </div>
</template>

<script>
import StatusCard from "../components/StatusCard";
import HighlightedText from "../components/HighlightedText.vue";
export default {
  name: "OrderHistory",
  components: {
    StatusCard,
    HighlightedText,
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
    };
  },
  methods: {
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
