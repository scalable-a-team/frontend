<template>
  <div class="m-10 w-full h-[28rem]">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div v-for="(order, index) in orders" :key="order.uuid">
        <StatusCard
          disable="true"
          :idx="index"
          :order="order"
          isPending="true"
          @decline-order="rejectOrder"
          @accept-order="acceptOrder"
        />
      </div>
    </div>
    <div>
      <Pagination @clicked="onClickHandler" item-per-page="4" :total-items="totalOrder" />
    </div>
  </div>
</template>

<script>
import StatusCard from "../components/StatusCard";
import Pagination from "./Pagination.vue";
import api from '@/service/api';

export default {
  name: "PendingApproval",
  components: {
    StatusCard,
    Pagination,
  },
  data() {
    return {
      orders: [],
      totalOrder: 0,
      currentPage: 1,
    };
  },
  async mounted() {
    try {
      const {data} = await api.get('order/seller/?status=pending')
      this.orders = data.results
      this.totalOrder = data.count
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    pendFalse(idx) {
      this.order[idx].isPending = false;
    },
    async fetchPendingOrder(page) {
      try {
        const {data} = await api.get(`order/seller/?status=pending?page=${page}`)
        this.orders = data.results
        this.totalOrder = data.count
      } catch (e) {
        console.log(e)
      }
    },
    async acceptOrder(uuid) {
      try {
        const payload = {new_status: "success"}
        await api.patch(`order/seller/${uuid}/`, payload)
        await this.fetchPendingOrder(this.currentPage)
      } catch (e) {
        console.log(e)
      }
    },
    async rejectOrder(uuid) {
      try {
        const payload = {new_status: "rejected"}
        await api.patch(`order/seller/${uuid}/`, payload)
        await this.fetchPendingOrder(this.currentPage)
      } catch (e) {
        console.log(e)
      }
    },
    async onClickHandler(page) {
      this.currentPage = page
      await this.fetchPendingOrder(page)
    },
  },
};
</script>
