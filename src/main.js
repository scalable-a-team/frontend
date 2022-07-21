import { createApp } from "vue"
import App from "./App.vue"
import "./index.css"
import router from "./router"
import VueAwesomePaginate from "vue-awesome-paginate"
import "vue-awesome-paginate/dist/style.css"
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import setupInterceptors from './service/setupInterceptors';

setupInterceptors(store)
const app = createApp(App).use(router).use(VueAwesomePaginate).use(store).use(VueAxios, axios).mount("#app")



