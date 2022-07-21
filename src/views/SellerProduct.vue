<template>
  <div class="m-10 mr-10 w-full h-[28rem]">
    <p class="">My Product</p>
    <div class="text-right mr-20 mt-10">
      <router-link to="/create-product">
        <button to="/create-product" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Product
        </button>
      </router-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Product v-for="product in products" :key="product._product_id" :product="product"  />
    </div>
    <div class="flex-end">
      <Pagination @clicked="onClickHandler" :item-per-page="itemPerPage" :total-items="itemNumbers" />
    </div>
  </div>
  <!-- <div class="divide-y"> -->
</template>

<script>
import Product from "../components/Product";
import Pagination from "./Pagination.vue";
import api from '@/service/api';
export default {
  name: "ProductListing",
  components: {
    Product,
    Pagination,
  },
  props: {
    productList: Object,
    sellerId: String
  },
  data () {
    return {
      products: [],
      itemNumbers: 0,
      itemPerPage: 10,
      from: 1
    }
  },
  async mounted() {
    try {
      const { data } = await api.get(`product/es/seller_products/${this.$store.state.userid}?size=${this.itemPerPage}`)
      this.products = data.data.map(product => ({
        '_product_id': product._id,
        'product_name': product.product_name,
        'thumbnail': product.images[0],
        'price': product.price
      }))
      this.itemNumbers = data.total
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    async onClickHandler(page) {
      try {
        const { data } = await api.get(`product/es/seller_products/${this.$store.state.userid}?from=${page}&size=${this.itemPerPage}`)
        this.products = data.data.map(product => ({
          '_product_id': product._id,
          'product_name': product.product_name,
          'thumbnail': product.images[0],
          'price': product.price
        }))
        this.itemNumbers = data.total
      } catch (e) {
        console.log(e)
      }
    }
  },
};
</script>
