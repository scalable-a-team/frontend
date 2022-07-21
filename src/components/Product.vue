<template>
  <router-link :to="{ path: '/product-xxx', query: {product_id: product._product_id}}">
    <div class="m-5 cursor-pointer">
      <!-- duration-100 ease-in hover:scale-110"> -->
      <!-- Image -->
      <div>
        <img
            alt="no pic"
            :src="product.thumbnail"
            class="h-60 w-full object-cover rounded-t-lg"
        />
      </div>
      <div
          class="bg-white rounded-b-lg h-16 flex items-center justify-between px-5 bg-gradient-to-r from-[#1A253B] to-[#3D4C76]"
      >
        <p class="">{{product.product_name}}</p>

        <p class="border rounded-full px-3 border-[#0C4550] bg-[#1A243A]">
          <span class="text-[#44BFD7] text-[12px] font-semibold">${{product.price}}</span>
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductSeller",
  props: {
    product: Object,
  },
};
</script>
