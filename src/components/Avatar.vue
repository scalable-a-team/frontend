<template>
  <div class="cursor-pointer hover:opacity-40">
    <img
      :src="`https://avatars.dicebear.com/api/pixel-art/${this.profile}.svg`"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    profile: {
      type: String,
      default: "user",
    },
  },
};
</script>
