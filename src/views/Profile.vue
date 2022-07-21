<template>
  <div class="m-10 mr-10 space-y-5 w-full">
    <div class="">
      <div class="flex flex-row">
        <div
          @click="$router.push('/')"
          class="hidden ml-28 lg:flex items-center justify-center"
        >
          <!-- <img
            src="https://img.wattpad.com/ff54a8ffdbb8a23597558f8525770d350b2d9dcc/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f52344c51585f43773230715270673d3d2d3133312e313632303361666136366566373565623134373734313533353136372e6a7067?s=fit&w=720&h=720"
            class="rounded-lg w-96 h-96"
          /> -->
        </div>
        <div class="basis-3/5 ml-16 lg:ml-0">
          <div class="themedBorder h-40 w-3/4">
            <h1 class="text-xl">Profile's name</h1>
            <div class="space-x-5 text-2xl mt-5">
              {{ this.$store.state.firstname }} {{ this.$store.state.lastname }}
            </div>
          </div>

          <div class="themedBorder h-48 w-5/6">
            <h1 class="text-xl">Location</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-16">
      <div class="themedBorder w-3/4 h-44">
        <h1 class="text-xl">Interest</h1>
      </div>
      <div class="flex ml-16 space-x-5 items-center">
        <h1 class="text-xl">Rating</h1>

        <StarRating
          :active-color="['#3FABC3', '#3FABC3']"
          star-size="25"
          :rating="5"
          read-only="true"
          increment="0.1"
          :show-rating="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  name: "Profile",
  components: {
    StarRating,
  },
};
</script>

<style>
.themedBorder {
  @apply border-[#44BFD7] border-2  m-10 border-opacity-30 rounded-lg px-5 py-5;
}
</style>
