<template>
  <div class="">
    <p v-if="isSender">right</p>
    <!-- <img
      :src="`https://avatars.dicebear.com/api/pixel-art/${this.profile}.svg`"
      alt=""
    /> -->
  </div>
</template>

<script>
export default {
  name: "ChatBubble",
  props: {
    isSender: {
      type: Boolean,
    },
  },
};
</script>
