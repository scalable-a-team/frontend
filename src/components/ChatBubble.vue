<template>
  <div class="relative bg-black">
    <div
      :class="`flex items-center  ${
        isSender ? 'float-right justify-end' : 'float-left'
      } w-1/2 space-x-2 themedBorder bg-[#44BFD7] relative`"
    >
      <div class="space-x-4">
        <p>{{ message }}</p>
      </div>
    </div>
    <div class="absolute right-0 text-gray-400">{{ timestamp }}</div>
    <!-- <p v-if="isSender">right</p> -->
  </div>
</template>

<script>
export default {
  name: "ChatBubble",
  props: {
    isSender: {
      type: Boolean,
    },
    image: {
      type: String,
    },
    message: {
      type: String,
    },
    timestamp: {
      type: String,
    },
  },
};
</script>
<style scoped>
.themedBorder {
  @apply bg-opacity-30 rounded-lg;
}
</style>
