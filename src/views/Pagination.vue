<template>
  <div>
    <div>
      <vue-awesome-paginate
        :total-items="50"
        :items-per-page="5"
        :max-pages-shown="5"
        :current-page="1"
        :on-click="onClickHandler"
        active-page-class="btn-active"
        paginate-buttons-class="btn"
        back-button-class="back-btn"
        next-button-class="next-btn"
      >
        <template #prev-button>
          <span>
            <ChevronLeftIcon
              class="h-3 w-3 flex justify-center items-center text-[#FFEDED]"
            />
          </span>
        </template>
        <template #next-button>
          <span>
            <ChevronRightIcon
              class="h-3 w-3 flex justify-center items-center text-[#FFEDED]"
            />
          </span>
        </template>
      </vue-awesome-paginate>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/outline";
export default {
  name: "PaginationBottom",
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  methods: {
    onClickHandler(page) {
      this.$emit("clicked", page);
    },
  },
};
</script>

<style>
.btn {
  @apply h-10 w-10 cursor-pointer   mx-1;
}
.btn-active {
  @apply border-2 rounded-full border-[#44BFD7];
}
.back-btn {
  @apply h-7 w-7 border-2  mt-2 flex items-center justify-center rounded-full border-[#37466C];
}
.next-btn {
  @apply h-7 w-7 border-2  mt-2 flex items-center justify-center rounded-full border-[#37466C];
}
</style>
