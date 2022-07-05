<template>
  <div class="md:fixed md:left-0 md:right-0 md:bottom-24 ml-52">
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
      console.log(page);
    },
  },
};
</script>

<style>
/* .pagination-container {
  @apply flex space-x-2;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
} */
/* .active-page:hover {
  background-color: #2988c8;
} */
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
