<template>
  <div class="flex mt-20">
    <div
      class="h-screen m-2 w-28 lg:w-48 flex-col justify-center items-center pl-3"
    >
      <h1 class="font-bold">Order by</h1>
      <h1>Name</h1>
      <div class="ml-5 text-sm">
        <p>A-Z</p>
        <p>Z-A</p>
      </div>
      <h1>Date</h1>
      <div class="ml-5 text-sm">
        <p>Most recent</p>
        <p>Oldest first</p>
      </div>
      <h1>Amount</h1>
      <div class="ml-5 text-sm">
        <p>High to Low</p>
        <p>Low to High</p>
      </div>
    </div>
    <div class="flex-1">
      <!-- Search Bar -->
      <div class="relative z-0 px-2 mx-5 w-full group bg-gray-600 rounded-lg">
        <div class="flex-col justify-">
          <label
            for="first_name"
            class="font-bold text-[11px] text-white bg-gray-600 relative px-1 top-2 left-3 w-auto group-focus-within:text-red-600"
          >
            Search Order
          </label>
          <input
            type="text"
            class="h-10 w-60 text-10 bg-transparent border py-55-rem border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="max-w-2xl">
          <div v-for="order in orders" :key="order.id">
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
export default {
  name: "OrderHistory",
  components: {
    StatusCard,
  },
  data() {
    return {
      searchInput: "",
      fruits: ["apple", "banana", "orange"],
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
// import { ref } from "vue";
// let input = ref("");
// const fruits = ["apple", "banana", "orange"];
// function filteredList() {
//   return fruits.filter((fruit) =>
//     fruit.toLowerCase().includes(input.value.toLowerCase())
//   );
// }
</script>
