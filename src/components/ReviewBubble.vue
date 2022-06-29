<template>
  <div class="flex space-x-5 justify-center items-center">
    <img
      :src="`https://avatars.dicebear.com/api/pixel-art/${user.name}.svg`"
      alt=""
      class="h-15 w-12"
    />
    <div>
      <p class="text-lg font-bold">{{ user.name }}</p>
      <p>{{ user.review }}</p>
    </div>
    <StarRating
      :active-color="['#ffb449', '#fdfd96']"
      star-size="20"
      :rating="user.rating"
      read-only="true"
      increment="0.1"
    />
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  name: "ReviewProduct",
  components: {
    StarRating,
  },
  props: {
    user: Object,
  },
};
</script>

<style></style>
