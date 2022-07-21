<template>
  <span>
    <span
        class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full"
    >
      {{ text }}
    </span>
  </span>
</template>

<script>
export default {
  name: "TagComponent",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
