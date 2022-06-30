<template>
  <p class="cursor-pointer hover:bg-gray-600 hover:rounded-lg">{{ text }}</p>
</template>

<script>
export default {
  name: "HighlightedText",
  props: {
    text: String,
  },
};
</script>
