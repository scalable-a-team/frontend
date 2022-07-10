<template>
  <div class="flex justify-center">
    <div
      class="w-72 flex space-x-5 lg:w-[400px] relative bg-gray-500 rounded-lg px-5 py-5"
    >
      <img
        :src="`https://avatars.dicebear.com/api/pixel-art/${user.name}.svg`"
        alt=""
        class="h-15 w-12"
      />
      <div class="text-start">
        <p class="text-lg font-bold">{{ user.name }}</p>
        <p class="truncate">{{ user.review }}</p>
      </div>
      <div class="flex-col bg-black items-start"></div>
      <div class="flex right-2 absolute">
        <StarRating
          :active-color="['#ffb449', '#fdfd96']"
          :star-size="starSize"
          :rating="user.rating"
          :read-only="readOnly"
          :increment="0.1"
          :show-rating="showRating"
        />
      </div>
    </div>
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
  data() {
    return {
      starSize: 15,
      readOnly: true,
      showRating: false,
    };
  },
};
</script>

<style></style>
