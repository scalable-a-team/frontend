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
          <!-- <div>
            <label
              for="product_tag"
              class="block text-sm font-medium text-gray-700"
            >
              Dimension
            </label>
            <div v-if="productTags" class="mt-2">
              <TagComponent
                class="mr-2"
                v-for="tag in productTags"
                :key="tag"
                :text="tag"
              />
            </div>
          </div> -->
          <!-- <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <select
                @change="onTagChange($event.target.value)"
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Select Tags</option>
                <option
                  v-for="tag in availableTags"
                  :value="tag.tag_name"
                  :key="tag._id"
                >
                  {{ tag.tag_name }}
                </option>
              </select>
            </div>
          </div> -->
          <!-- <div>
            <label
              for="product_categories"
              class="block text-sm font-medium text-gray-700"
            >
              Categories
            </label>
          </div>
          <div v-if="productCategories" class="mt-2">
            <TagComponent
              class="mr-2"
              v-for="category in productCategories"
              :key="category"
              :text="category"
            />
          </div> -->
          <!-- <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <select
                @change="onCategoriesChange($event.target.value)"
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Select Categories</option>
                <option
                  v-for="category in availableCategories"
                  :value="category.category_name"
                  :key="category._id"
                >
                  {{ category.category_name }}
                </option>
              </select>
            </div>
          </div> -->
          <div>
            <!-- <label class="block text-sm font-medium text-gray-700">
              Cover photo
            </label>
            <div
              class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
            >
              <div class="space-y-1 text-center">
                <svg
                  class="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div class="flex text-sm text-gray-600">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      class="sr-only"
                      @change="
                        filesChange($event.target.name, $event.target.files);
                        fileCount = $event.target.files.length;
                      "
                    />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs text-gray-500">PNG or JPG</p>
              </div>
            </div> -->
          </div>
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
  async created() {
    let response;
    response = await api.get("product/categories");
    this.availableCategories = response.data.categories;
    this.availableCategories.map((category) => {
      this.categoryStringToId[category.category_name] = category._id;
    });

    response = await api.get("product/tags");
    this.availableTags = response.data.tags;
    this.availableTags.map((category) => {
      this.tagStringToId[category.tag_name] = category._id;
    });
  },
  methods: {
    async filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();
      formData.append("image", fileList[0]);
      try {
        const { data } = await api.post("product/create/photo", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        this.uploadedImages.push(data.s3_url);
      } catch (e) {
        console.log(e);
      }
    },

    onTagChange(tag) {
      if (tag !== "Select Tags" && !this.productTags.includes(tag)) {
        this.productTags.push(tag);
      }
    },

    onCategoriesChange(category) {
      if (
        category !== "Select Categories" &&
        !this.productCategories.includes(category)
      ) {
        this.productCategories.push(category);
      }
    },

    deleteImage(idx) {
      console.log(`deleting ${idx}`);
      this.uploadedImages.splice(idx, 1);
    },

    async createOrder() {
      try {
        const tagIds = this.productTags.map((name) => this.tagStringToId[name]);
        const categoryIds = this.productCategories.map(
          (name) => this.categoryStringToId[name]
        );
        console.log(this.jobDescription);
        console.log(this.dimension);
        const payload = {
          product_id: 1,
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
          //   query: { product_id: data.product._id },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style></style>
