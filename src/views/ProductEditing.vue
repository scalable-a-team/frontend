<template>
  <div class="m-10 flex flex-row">
    <!-- Product Name and Images -->
    <!-- Review -->
    <!-- {{ this.currentImg }} -->
    <!-- this.currentImg -->
    <div class="basis-1/2 flex flex-col items-center bg-gray-30">
      <div
        id="carouselExampleControls"
        class="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full bg-black">
            <img :src="images[0]" class="block w-full" alt="No image" />
          </div>
          <div
            class="carousel-item relative float-left w-full"
            v-for="image in images.slice(1)"
            :key="image.id"
          >
            <img :src="image" class="block w-full" alt="No image" />
          </div>
          <!-- <div class="carousel-item active relative float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              class="block w-full"
              alt="Camera"
            />
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              class="block w-full"
              alt="Exotic Fruits"
            />
          </div> -->
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
      <!-- <div
        id="carouselExampleControls"
        class="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              class="block w-full"
              alt="Wild Landscape"
            />
            <div class="carousel-item relative float-left w-full">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                class="block w-full"
                alt="Exotic Fruits"
              />
            </div>
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
      </div> -->
      <!-- <h1 class="text-lg my-5">Product Template</h1>
      <div
        id="carouselExampleControls"
        class="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item relative float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              class="block w-full"
              alt="Camera"
            />
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              class="block w-full"
              alt="Camera"
            />
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              class="block w-full"
              alt="Exotic Fruits"
            />
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
      </div> -->
      <div class="w-full mt-10">
        <p class="text-start mb-5 ml-24">
          What people liked about this product
        </p>
        <div class="w-full">
          <carousel @next="next" @prev="prev">
            <carousel-slide
              v-for="(image, index) in images"
              :key="image"
              :index="index"
              :visibleSlide="visibleSlide"
              :dir="dir"
            >
              <div
                class="border ml-10 pl-10 pt-5 border-[#44BFD7] border-opacity-30 h-full w-3/4 flex flex-col rounded-md"
              >
                <div class="space-x-2 flex items-center">
                  <h1 class="pt-1">Profile</h1>
                  <StarRating
                    :active-color="['#3FABC3', '#3FABC3']"
                    star-size="20"
                    :rating="5"
                    read-only="true"
                    increment="0.1"
                    :show-rating="false"
                  />
                </div>
                <p>test</p>
              </div>
            </carousel-slide>
          </carousel>
        </div>
      </div>
    </div>

    <!-- Pricing Scheme -->
    <!-- About Product -->
    <div class="basis-1/2 flex flex-col items-center">
      <div
        class="border mb-16 border-[#44BFD7] border-opacity-30 h-2/5 w-1/2 flex flex-col rounded-lg"
      >
        <h1 class="text-center text-xl mt-2">Pricing Scheme</h1>
      </div>
      <div
        class="border border-[#44BFD7] border-opacity-30 h-56 w-3/4 flex flex-col rounded-lg"
      >
        <h1 class="text-center text-xl mt-5">About Product</h1>
      </div>
      <div class="mt-10 w-full">
        <div class="flex justify-end">
          <button class="button" @click="contactSeller">
            <router-link
              :to="{
                path: '/message',
                query: { sender_id: this.user, receiver_id: this.seller },
              }"
            >
              Contact Seller
            </router-link>
          </button>
        </div>
        <div class="flex flex-row justify-center mt-10 space-x-16">
          <button class="button">Submit</button>
          <button class="button">Reset</button>
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
  data() {
    return {
      user: "yuqi",
      seller: "miyeon",
      // contactPath: "/message/{{w3}}",
      items: [0, 1, 2, 3, 4],
      images: [
        "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
        "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
        // "https://picsum.photos/id/237/600/350",
        // "https://picsum.photos/id/231/600/350",
        // "https://picsum.photos/id/232/600/350",
        // "https://picsum.photos/id/233/600/350",
        // "https://picsum.photos/id/234/600/350",
        // "https://picsum.photos/id/234/600/350",
        // "https://picsum.photos/id/234/600/350",
        // "https://picsum.photos/id/234/600/350",
        // "https://picsum.photos/id/234/600/350",
      ],
      visibleSlide: 0,
      dir: "",
      imageVisibleSlide: 0,
      imageDir: "",
      currentImg: "https://picsum.photos/id/237/600/350",
    };
  },
  created() {
    console.log("test");
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
    // contactSeller() {
    //   // console.log("hi");
    // },
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
};
</script>

<style>
.button {
  @apply border border-[#44BFD7] border-opacity-30 rounded-lg px-5 py-1;
}
</style>
