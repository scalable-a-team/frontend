<template>
  <div class="m-10 w-full h-[28rem]">
    <div class="flex justify-center">
      <div>
        <div class="dropdown relative">
          <button
            class="dropdown-toggle flex items-center whitespace-nowrap rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:text-white active:shadow-lg"
            type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Select Order Type
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="ml-2 w-2"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z">
              </path>
            </svg>
          </button>
          <ul id="selected_type"
            class="dropdown-menu absolute z-50 float-left m-0 mt-1 hidden min-w-max list-none rounded-lg border-none bg-white bg-clip-padding py-2 text-left text-base shadow-lg"
            aria-labelledby="dropdownMenuButton1">
            <li>
              <a @click="update_order_query('')"
                class="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                href="#">All</a>
            </li>
            <li>
              <a @click="update_order_query('pending')"
                class="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                href="#">Pending</a>
            </li>
            <li>
              <a @click="update_order_query('success')"
                class="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                href="#">Success</a>
            </li>
            <li>
              <a @click="update_order_query('rejected')"
                class="dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100"
                href="#">Rejected</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div v-for="(order, index) in this.orders" :key="order.id">
        <StatusCard :idx="index" :order="order" />
      </div>
    </div>
    <div class="flex-end">
      <Pagination @clicked="onClickHandler" :item-per-page="itemPerPage" :total-items="itemNumbers" />
    </div>

  </div>
</template>

<script>
import StatusCard from "../components/StatusCard";
import Pagination from "./Pagination.vue";
import orderService from "@/service/orderService";
export default {
  name: "OrderHistory",
  components: {
    StatusCard,
    Pagination,
  },
  data() {
    return {
      itemPerPage: 4,
      from: 1,
      page: 1,
      query_type: "", // pending, success, rejected
      orders: [],
    };
  },
  methods: {

    filterApproval() {
      return this.orders.filter((order) => order.isPending === 'pending');
    },

    pendFalse(idx) {
      this.order[idx].isPending = false;
    },

    onClickHandler(page) {
      this.page = page
      this.update_order()
    },

    update_order_query(type) {
      this.query_type = type
      this.update_order()
    },

    async update_order() {
      const payload = {
        'role': 'seller'?'buyer' : this.$store.state.role == 'customer',
        'page': this.page,
        'status': this.query_type
      }
      console.log(payload)
      orderService.query_order(payload)
        .then((query_response) => {
          console.log(query_response.data.results)
          this.orders = query_response.data.results
        }).catch((query_error) => {
          console.log(query_error)
        })
    }
  },

  async mounted() {
    const payload = {
      'role': 'seller'?'buyer' : this.$store.state.role == 'customer',
      'page': this.page,
      'status': this.query_type
    }
    console.log(payload)
    orderService.query_order(payload)
      .then((query_response) => {
        console.log(query_response.data.results)
        this.orders = query_response.data.results
      }).catch((query_error) => {
        console.log(query_error)
      })
  }
};
</script>