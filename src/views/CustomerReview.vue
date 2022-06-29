<template>
  <div class="flex-col text-center m-10">
    <h1 class="text-4xl">Customer Reviews</h1>
    <div
      class="flex justify-center mt-5 md:justify-end items-center space-x-5 mb-10 lg:mr-10"
    >
      <p>Average:</p>
      <StarRating
        :active-color="['#ffb449', '#fdfd96']"
        star-size="25"
        :rating="averageRating"
        read-only="true"
        increment="0.1"
      />
    </div>
    <div class="mb-10" v-for="user in this.users" :key="user.id">
      <ReviewProduct :user="user" />
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import ReviewProduct from "../components/ReviewBubble.vue";
export default {
  name: "CustomerReview",
  components: {
    StarRating,
    ReviewProduct,
  },
  data() {
    return {
      users: [
        {
          name: "John",
          review: "good!",
          imageUrl: "",
          rating: 3,
        },
        {
          name: "George",
          review: "i love you",
          imageUrl: "",
          rating: 5,
        },
        {
          name: "Ben",
          review: "Trash!",
          imageUrl: "",
          rating: 0,
        },
      ],
      test: "test1",
      averageRating: 0,
    };
  },
  created: function () {
    let rawScore = 0;
    this.users.forEach((u) => (rawScore += u.rating));
    this.averageRating = rawScore / this.users.length;
  },
  methods: {},
};
</script>

<style></style>
