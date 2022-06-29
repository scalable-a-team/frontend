import { createRouter, createWebHistory } from "vue-router";
import CustomerReview from "../views/CustomerReview";
import ProductListing from "../views/ProductListing";

const routes = [
  {
    path: "/customer-review",
    name: "CustomerReview",
    component: CustomerReview,
  },
  {
    path: "/",
    name: "ProductListing",
    component: ProductListing,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
