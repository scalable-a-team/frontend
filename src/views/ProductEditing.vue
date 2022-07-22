<template>
  <div class="m-10 flex flex-row">
    <div class="basis-1/2 flex flex-col items-center bg-gray-30">
      <!-- {{ images }} -->

      <div
        id="carouselExampleControls"
        class="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full bg-black">
            <img :src="images[0]" class="block w-full" alt="No image" />
            <!-- class="block w-full h-full" -->
            <!-- src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" -->
            <!-- <img class="block w-full object-cover" alt="No image" /> -->
          </div>
          <div
            class="carousel-item relative float-left w-full"
            v-for="image in images.slice(1)"
            :key="image.id"
          >
            <!-- class="block w-full h-full" -->
            <img :src="image" class="block w-full object-fit" alt="No image" />
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="w-full mt-10">
        <p class="text-start mb-5 ml-24">
          What people liked about this product
        </p>
        <div class="w-full">
          <carousel @next="next" @prev="prev">
            <carousel-slide
              v-for="(image, index) in this.product_info.images"
              :key="image"
              :index="index"
              :visibleSlide="visibleSlide"
              :dir="dir"
            >
              <div
                v-for="item in this.product_info.reviews"
                class="border ml-10 pl-10 pt-5 border-[#44BFD7] border-opacity-30 h-full w-3/4 flex flex-col rounded-md"
              >
                <div class="space-x-2 flex items-center">
                  <h1 class="pt-1">{{ item.customer_name }}</h1>
                  <StarRating
                    :active-color="['#3FABC3', '#3FABC3']"
                    star-size="20"
                    :rating="item.stars"
                    read-only="true"
                    increment="0.1"
                    :show-rating="false"
                  />
                </div>
                <p>{{ item.review_text }}</p>
              </div>
            </carousel-slide>
          </carousel>
        </div>
      </div>
    </div>

    <!-- {{ this.product_info }} -->
    <!-- Pricing Scheme -->
    <!-- About Product -->
    <div class="basis-1/2 flex flex-col items-center">
      <div
        class="border mb-16 border-[#44BFD7] border-opacity-30 h-2/5 w-1/2 flex flex-col rounded-lg"
      >
        <h1 class="text-center text-xl mt-2">Pricing Scheme</h1>
        <h1 class="text-center mb-4">$ {{ this.product_info.price }}</h1>
        <h1 class="text-center mb-4">
          Seller: {{ this.product_info.seller_name }}
        </h1>
      </div>
      <div
        class="border border-[#44BFD7] border-opacity-30 h-56 w-3/4 flex flex-col rounded-lg"
      >
        <h1 class="text-center text-xl mt-5">About Product</h1>
        <h1 class="text-center mb-4">
          Product: {{ this.product_info.product_name }}
        </h1>
        <h1 class="text-center mb-4">
          Description: {{ this.product_info.description }}
        </h1>
      </div>
      <div v-if="this.$store.state.role === 'customer'" class="mt-10 w-full">
        <div class="flex justify-evenly">
          <button class="button" @click="contactSeller">
            <router-link
              :to="{
                path: '/create-order',
                query: {
                  buyer: this.user,
                  price: this.product_info.price,
                  productName: this.product_info.product_name,
                  productId: this.product_info._id,
                },
              }"
            >
              Order here
            </router-link>
          </button>
          <button class="button" @click="contactSeller">
            <router-link
              :to="{
                path: '/message',
                query: {
                  sender_id: this.$store.state.username,
                  receiver_id: this.seller,
                },
              }"
            >
              Contact Seller
            </router-link>
          </button>
        </div>
      </div>
    </div>
    <!-- Button -->
  </div>
</template>

<script>
import "tw-elements";
import Carousel from "@/components/Carousel.vue";
import StarRating from "vue-star-rating";
import CarouselSlide from "@/components/CarouselSlide.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";
import ImageCarouselSlide from "@/components/ImageCarouselSlide.vue";
import ImageList from "@/components/ImageList";
import productService from "@/service/productService";
export default {
  name: "ProductEditing",
  components: {
    StarRating,
    Carousel,
    CarouselSlide,
    ImageCarousel,
    ImageCarouselSlide,
    ImageList,
  },
  props: {
    product_id: Object,
  },
  data() {
    return {
      product_info: {},
      seller: "",
      items: [0, 1, 2, 3, 4],
      images: [],
      visibleSlide: 0,
      dir: "",
      imageVisibleSlide: 0,
      imageDir: "",
      currentImg: "https://picsum.photos/id/237/600/350",
    };
  },
  setup() {
    return {};
  },
  computed: {
    imageLen() {
      return this.images.lenght;
    },
  },
  methods: {
    imageNext() {
      this.imageDir = "right";
      if (this.imageVisibleSlide >= this.imageLen - 1) {
        this.imageVisibleSlide = 0;
      } else {
        this.imageVisibleSlide++;
      }
    },

    imagePrev() {
      this.imageDir = "left";
      if (this.imageVisibleSlide < 0) {
        this.imageVisibleSlide = this.imageLen - 1;
      } else {
        this.imageVisibleSlide--;
      }
    },
    next() {
      this.dir = "right";
      if (this.visibleSlide >= 5) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
    },
    prev() {
      this.dir = "left";
      if (this.visibleSlide < 0) {
        this.visibleSlide = 5;
      } else {
        this.visibleSlide--;
      }
    },
    changeImage(img) {
      this.currentImg = img;
    },
  },
  mounted() {
    let pid = this.$route.query.product_id;
    productService
      .get_one_product(pid)
      .then((product_response) => {
        this.product_info = product_response.data;
        this.images = product_response.data.images;
        this.seller = product_response.data.seller_name;
        console.log(this.images);
        console.log(this.product_info._id);
      })
      .catch((error_response) => {
        console.log(error_response);
      });
  },
};
</script>

<style>
.button {
  @apply border border-[#44BFD7] border-opacity-30 rounded-lg px-5 py-1;
}
</style>
