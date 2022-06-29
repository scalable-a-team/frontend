<template>
  <div class="min-w-full">
    <div class="flex-col mt-20 m-3 space-y-3">
      <div class="grid grid-cols-3 items-center">
        <p
          class="text-white text-center col-start-2 text-2xl font-bold hover:animate-bounce"
        >
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
                ? 'duration-100 ease-in hover:scale-110 object-cover'
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
      <div class="flex justify-end mr-10">
        <button
          class="bg-sky-700 hover:bg-sky-900 transition ease-in px-3 py-1 rounded-lg"
          @click="test"
        >
          Request
        </button>
      </div>
    </div>
    <!-- <section class="block bg-red-500 w-[80%] h-20 whitespace-nowrap">
      <div class="overflow-y-hidden block w-full h-full">
        <div class="inline w-[20%]">
          <img src="http://img.youtube.com/vi/Je7VuV9yHIw/1.jpg" />
        </div>
        <div class="inline w-[20%]">
          <img src="http://img.youtube.com/vi/uxps_fYUeJk/1.jpg" />
        </div>
        <div>
          <img src="http://img.youtube.com/vi/Zvr3cwbbqHU/1.jpg" />
        </div>
        <div>
          <img src="http://img.youtube.com/vi/Ka9xtXPD3BA/1.jpg" />
        </div>
        <div>
          <img src="http://img.youtube.com/vi/U8HVQXkeU8U/1.jpg" />
        </div>
        <div>
          <img src="http://img.youtube.com/vi/e7_UUfokexM/1.jpg" />
        </div>
      </div>
    </section> -->
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
