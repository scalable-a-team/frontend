<template>
  <div class="min-w-full">
    <div class="flex-col mt-20 m-3 space-y-3">
      <div class="grid grid-cols-3 items-center">
        <p class="text-white text-center col-start-2 text-2xl font-bold">
          {{ productList.title }}
        </p>
        <router-link to="customer-review">
          <div class="flex justify-end">
            <button
              class="bg-sky-700 hover:bg-sky-900 transition ease-in-out p-1 md:p-3 rounded-lg mr-10"
            >
              View review
            </button>
          </div>
        </router-link>
      </div>
      <div class="grid-rows md:flex justify-center overflow-auto max-h-[600px]">
        <div
          class="m-5 text-white"
          v-for="image in productList.imageUrls"
          :key="image.id"
        >
          <img
            :src="image"
            alt="no pic"
            :class="` h-60 w-60 m-auto block${
              image.length !== 0
                ? '  duration-100 ease-in hover:scale-110 object-cover'
                : ''
            }`"
          />
        </div>
      </div>
      <!-- Description -->
      <p>Description: {{ productList.desc }}</p>
      <!-- Pricing scheme -->
      <p class="text-base text-white">
        Pricing Scheme: <span class="text-base">{{ productList.price }}</span>
      </p>
      <!-- Request button -->
      <button class="flex justify-end" @click="test">Request</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductListing",
  props: {
    productList: Object,
  },
  methods: {
    test() {
      console.log("test");
    },
  },
};
</script>
