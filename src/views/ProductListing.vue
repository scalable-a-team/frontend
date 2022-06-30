<template>
  <div class="min-w-full">
    <div class="flex-col mt-20 m-3 space-y-3 mx-10">
      <div class="grid grid-cols-3 items-center">
        <p
          class="text-white text-center col-start-2 text-2xl font-bold hover:animate-bounce"
        >
          {{ productList.title }}
        </p>
      </div>
      <div
        :class="`grid-rows md:flex ${
          productList.imageUrls.length <= 4 ? 'md:justify-items-center' : ''
        } overflow-y-auto w-screen md:overflow-x-auto max-h-[600px]`"
      >
        <div
          class="m-5 text-white flex-shrink-0"
          v-for="image in productList.imageUrls"
          :key="image.id"
        >
          <img
            :src="image"
            alt="no pic"
            :class="`h-60  w-100 m-auto ${
              image.length !== 0
                ? 'duration-100 ease-in hover:scale-110 object-cover rounded-2xl'
                : ''
            }`"
          />
        </div>
      </div>
      <div class="flex-col items-center text-center">
        <!-- Description -->
        <p>Description: {{ productList.desc }}</p>
        <!-- Pricing scheme -->
        <p class="text-base text-white">
          Pricing Scheme: <span class="text-base">{{ productList.price }}</span>
        </p>
      </div>
      <!-- Request & Review button -->
      <div class="flex justify-between">
        <!-- <router-link to="customer-review"> -->
        <div class="">
          <button
            class="bg-sky-700 hover:bg-sky-900 transition ease-in-out p-1 md:p-3 rounded-lg mr-10"
          >
            Request
          </button>
        </div>
        <!-- </router-link> -->
        <router-link to="customer-review">
          <div class="">
            <button
              class="bg-sky-700 hover:bg-sky-900 transition ease-in-out p-1 md:p-3 rounded-lg mr-10"
            >
              View review
            </button>
          </div>
        </router-link>
      </div>
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
