<template>
  <div class="m-10 flex flex-row">
    <!-- Product Name and Images -->
    <!-- Review -->
    <div class="basis-1/2 flex flex-col items-center bg-gray-30">
      <h1 class="text-lg my-5">Product Template</h1>

      <!-- <div> -->
      <img
        alt="no pic"
        :src="currentImg"
        class="h-70 w-3/4 object-cover rounded-lg"
      />
      <!-- </div> -->
      <!-- {{ imageLen() }} -->
      <div class="flex mt-10 h-20 justify-center -gray-300">
        <!-- <ImageList /> -->
        <image-carousel
          @next="imageNext"
          @prev="imagePrev"
          :visible="visibleSlide"
          :len="images.length"
        >
          <image-carousel-slide
            v-for="(image, index) in images"
            :key="image"
            :index="index"
            :visibleSlide="imageVisibleSlide"
            :dir="imageDir"
          >
            <ImageList :index="index" @changeImage="changeImage(image)" />
            <!-- <img
              @click="changeImg(image)"
              :src="image"
              class="h-20 w-32 object-cover rounded-lg cursor-pointer opacity-50"
            /> -->
          </image-carousel-slide>
        </image-carousel>
        <!-- <img
          alt="no pic"
          src="https://i.all3dp.com/wp-content/uploads/2017/10/27000303/shoe_in_printer.jpg"
          class="h-20 object-cover rounded-lg opacity-40"
        />
        <img
          alt="no pic"
          src="https://i.all3dp.com/wp-content/uploads/2017/10/27000303/shoe_in_printer.jpg"
          class="h-20 object-cover rounded-lg opacity-40"
        /> -->
      </div>
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
    </div>
    <!-- Button -->
    <div></div>
  </div>
</template>

<script>
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
      items: [0, 1, 2, 3, 4],
      images: [
        "https://picsum.photos/id/237/600/350",
        "https://picsum.photos/id/231/600/350",
        "https://picsum.photos/id/232/600/350",
        "https://picsum.photos/id/233/600/350",
        "https://picsum.photos/id/234/600/350",
        "https://picsum.photos/id/234/600/350",
        "https://picsum.photos/id/234/600/350",
        "https://picsum.photos/id/234/600/350",
        "https://picsum.photos/id/234/600/350",
      ],
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
};
</script>

<style></style>
