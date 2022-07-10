<template>
  <div class="flex justify-center">
    <img
      class="h-40 w-40 cursor-pointer"
      :src="`https://picsum.photos/id/${230 + index * 4}/600/350`"
      @click="changeImage"
    />
    <img
      class="h-40 w-40 cursor-pointer"
      :src="`https://picsum.photos/id/${230 + index * 4 + 1}/600/350`"
      @click="changeImage"
    />
    <img
      class="h-40 w-40 cursor-pointer"
      :src="`https://picsum.photos/id/${230 + index * 4 + 2}/600/350`"
      @click="changeImage"
    />
    <img
      class="h-40 w-40 cursor-pointer"
      :src="`https://picsum.photos/id/${230 + index * 4 + 3}/600/350`"
      @click="changeImage"
    />
    <!-- class="opacity-50" -->
    <!-- <img :src="`https://picsum.photos/id/${230 + index * 4 + 2}/600/350`" />
    <img :src="`https://picsum.photos/id/${230 + index * 4 + 3}/600/350`" />
    <img :src="`https://picsum.photos/id/${230 + index * 4 + 4}/600/350`" /> -->
  </div>
</template>

<script>
export default {
  props: ["index"],
  methods: {
    changeImage() {
      this.$emit("changeImage");
    },
  },
};
</script>

<style></style>
