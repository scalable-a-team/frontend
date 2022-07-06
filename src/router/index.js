import { createRouter, createWebHistory } from "vue-router";
import CustomerReview from "../views/CustomerReview";
import ProductListing from "../views/ProductListing";
import PendingApproval from "../views/PendingApproval";
import InProgress from "../views/InProgress";
import Transit from "../views/Transit";
import OrderHistory from "../views/OrderHistory";
import SellerProfile from "../views/SellerProfile";
import ProductEditing from "../views/ProductEditing";
const routes = [
  {
    path: "/customer-review",
    name: "CustomerReview",
    component: CustomerReview,
  },
  {
    path: "/product-xxx",
    name: "ProductEditing",
    component: ProductEditing,
  },
  {
    path: "/",
    name: "ProductListing",
    component: ProductListing,
  },
  {
    path: "/seller-profile",
    name: "SellerProfile",
    component: SellerProfile,
  },
  {
    path: "/pending-approval",
    name: "PendingApproval",
    component: PendingApproval,
  },
  {
    path: "/in-progress",
    name: "InProgress",
    component: InProgress,
  },
  {
    path: "/in-transit",
    name: "Transit",
    component: Transit,
  },
  {
    path: "/order-history",
    name: "OrderHistory",
    component: OrderHistory,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
