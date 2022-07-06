<template>
  <transition :name="dir">
    <div v-show="visibleSlide <= index && index < visibleSlide + 4">
      <!-- class="absolute top-0 right-0 bottom-0 left-0" -->
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["visibleSlide", "index", "dir"],
  data() {
    return {};
  },
  computed: {},
};
</script>

<style scoped>
.left-enter-active {
  animation: image-left-in 0.4s ease-in-out;
}
.left-leave-active {
  animation: image-left-out 0.4s ease-in-out;
}
@keyframes image-left-in {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes image-left-out {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(50%);
  }
}

.right-enter-active {
  animation: image-right-in 0.4s ease-in-out;
}
.right-leave-active {
  animation: image-right-out 0.4s ease-in-out;
}
@keyframes image-right-out {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}
@keyframes image-right-in {
  from {
    transform: translateX(50%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
