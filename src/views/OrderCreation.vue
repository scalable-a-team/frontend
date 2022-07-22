<template>
  <div class="m-10 mr-10 w-full h-[28rem]">
    <!-- Product Name and Images -->
    <!-- Review -->
    <h1 class="text-lg my-5 text-center">Order Creation</h1>
    <form action="#" method="POST">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div class="flex flex-row space-x-5">
            <p class="text-gray-700">Product Name</p>
            <p class="text-gray-700">{{ this.$route.query.productName }}</p>
          </div>
          <div class="flex flex-row space-x-5">
            <p class="text-gray-700">Price</p>
            <p class="text-gray-700 text-md">{{ this.$route.query.price }}</p>
          </div>
          <!-- <div>
            <label
              for="product_name"
              class="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <div class="mt-1">
              <input
                v-model="productName"
                id="product_name"
                name="product_name"
                class="text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Brief description for your product."
              />
            </div>
          </div> -->
          <div>
            <label
              for="product_desc"
              class="block text-sm font-medium text-gray-700"
            >
              Job Description
            </label>
            <div class="mt-1">
              <textarea
                v-model="jobDescription"
                id="product_desc"
                name="product_desc"
                rows="3"
                class="text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Brief description for your desire."
              />
            </div>
          </div>
          <div>
            <label
              for="product_price"
              class="block text-sm font-medium text-gray-700"
            >
              Dimension
            </label>
            <input
              v-model="dimension"
              id="product_price"
              name="product_name"
              class="text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Put in dimension."
            />
          </div>
          <div></div>
          <div v-if="uploadedImages.length > 0">
            <label class="block text-sm font-medium text-gray-700">
              Uploaded files:
            </label>
            <div v-for="(image, idx) in uploadedImages" :key="idx" class="mb-4">
              <div>
                <span @click="deleteImage(idx)"
                  ><XCircleIcon class="h-5 w-5 text-red-400"
                /></span>
                <img class="object-cover h-48 w-96" :src="image" />
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            @click.prevent="createOrder"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
    <div></div>
  </div>
</template>

<script>
import { XCircleIcon } from "@heroicons/vue/solid";
import api from "@/service/api";
import TagComponent from "@/components/TagComponent";

export default {
  name: "OrderCreation",

  data() {
    return {
      visibleSlide: 0,
      dir: "",
      imageVisibleSlide: 0,
      imageDir: "",
      currentImg: "https://picsum.photos/id/237/600/350",
      uploadedImages: [],
      productName: "",
      productDescription: "",
      productTags: [],
      productCategories: [],
      productPrice: "",
      jobDescription: "",
      dimension: "",
      availableTags: [],
      availableCategories: [],
      selectTag: "",
      tagStringToId: {},
      categoryStringToId: {},
    };
  },
  components: {
    TagComponent,
    XCircleIcon,
  },
  setup() {
    return {};
  },
  async created() {},
  methods: {
    async createOrder() {
      try {
        const tagIds = this.productTags.map((name) => this.tagStringToId[name]);
        const categoryIds = this.productCategories.map(
          (name) => this.categoryStringToId[name]
        );
        console.log(this.$route.query.productId);
        const payload = {
          product_id: this.$route.query.productId,
          job_description: this.jobDescription,
          dimension: this.dimension,
        };
        const { data } = await api.post(`order/buyer/`, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.$router.push({
          path: "/",
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style></style>
