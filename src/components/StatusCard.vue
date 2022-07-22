<template>
  <!-- <div class=""> -->
  <div class="themedBorder">
    <div class="border-b border-[#44BFD7] border-opacity-20 py-5 g-white">
      <div>
        <div>
          <h1>{{ order.seller_id }}</h1>
          <h2>{{ order.description_text }}</h2>
        </div>
      </div>
    </div>
    <div>
      <div class="flex items-center m-5 space-x-5">
        <div class="space-y-10 w-1/5">
          <h2>Status</h2>
          <h2>Amount</h2>
          <h2>Dimension</h2>
        </div>
        <div class="w-full space-y-5">
          <div class="border border-[#2F394D] h-12 rounded-md">
            <p class="mx-2 my-1">{{ order.status }}</p>
          </div>
          <div class="border border-[#2F394D] h-12 rounded-md">
            <p class="mx-2 my-1">{{ order.total_incl_tax }}</p>
          </div>
          <div class="border border-[#2F394D] h-12 rounded-md">
            <p class="mx-2 my-1">{{ order.dimension_text }}</p>
          </div>
        </div>
        <div class="w-full space-y-5">
          <h2>Created At</h2>
          <div class="border border-[#2F394D] h-12 rounded-md">
            <p class="mx-2 my-1">{{ order.created_at }}</p>
          </div>
          <h2>Date Shipped</h2>
          <div class="border border-[#2F394D] h-12 rounded-md">
            <p class="mx-2 my-1">{{ order.date_shipped }}</p>
          </div>
          <h2>uuid</h2>
          <div class="border border-[#2F394D] h-12 rounded-md">
            <p class="mx-2 my-1">{{ order.uuid }}</p>
          </div>
        </div>
      </div>
      <div v-if="disable" class="flex justify-center space-x-12">
        <button class="button" @click="acceptOrder" >Submit</button>
        <button class="button" @click="declineOrder" >Reset</button>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "StatusCard",
  props: {
    isPending: {
      type: Boolean,
      required: true,
    },
    order: Object,
    customerName: String,
    idx: Number,
    disable: Boolean,
  },
  data() {
    return {
      customer: this.customerName
    };
  },
  methods: {
    test() {
      console.log(this.idx);
    },
    acceptOrder() {
      this.$emit("accept-order", this.order.uuid)
    },
    declineOrder() {
      this.$emit("decline-order", this.order.uuid)
    }
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
