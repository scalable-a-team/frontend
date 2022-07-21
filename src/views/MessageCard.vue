<template>
  <button class="themedBorder m-10 flex justify-around items-center w-4/5">
    <!-- <router-link to="/message?sender"> -->
    <router-link
      :to="{
        path: '/message',
        query: {
          sender_id: this.$store.state.username,
          receiver_id: this.receiver_id,
        },
      }"
    >
      <!-- {{ num }} -->
      <!-- <div class="flex items-center m-5">image</div> -->
      <div class="flex flex-col">
        <!-- <h1>Receiver</h1> -->
        <h3>{{ receiver_id }}</h3>
      </div>
      <!-- <div class="flex flex-col">
        <h1>Type of Job</h1>
      <h3>Description</h3>
    </div>
    <div class="flex flex-col">
        <h1>Amount</h1>
      <h3>Description</h3>
    </div>
    <div class="flex flex-col">
        <h1>Dimension</h1>
      <h3>Description</h3>
    </div> -->
    </router-link>
  </button>
</template>

<script>
export default {
  props: ["receiver_id"],
};
</script>

<style>
.themedBorder {
  @apply border-[#44BFD7] border-2   border-opacity-30 rounded-md px-5 py-5;
}
</style>
