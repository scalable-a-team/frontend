import { createRouter, createWebHistory } from "vue-router";
import CustomerReview from "../views/CustomerReview";
import ProductListing from "../views/ProductListing";
import PendingApproval from "../views/PendingApproval";
import InProgress from "../views/InProgress";
import Transit from "../views/Transit";
import OrderHistory from "../views/OrderHistory";
import SellerProfile from "../views/SellerProfile";
import ProductEditing from "../views/ProductEditing";
import Profile from "../views/Profile";
import Message from "../views/Message";
import Messages from "../views/Messages";
import Register from "../views/Register";
import Login from "../views/Login";
import ProductCreation from "../views/ProductCreation";
import OrderCreation from "../views/OrderCreation";
import SellerProduct from "@/views/SellerProduct";

const routes = [
  {
    path: "/customer-review",
    name: "CustomerReview",
    component: CustomerReview,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/message",
    name: "Message",
    component: Message,
  },
  {
    path: "/messages",
    name: "Messages",
    component: Messages,
  },
  {
    path: "/product-xxx",
    name: "ProductEditing",
    component: ProductEditing,
  },
  {
    path: "/create-product",
    name: "ProductCreation",
    component: ProductCreation,
  },
  {
    path: "/create-order",
    name: "OrderCreation",
    component: OrderCreation,
  },
  {
    path: "/my-product",
    name: "SellerProduct",
    component: SellerProduct,
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
    path: "/pending",
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
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
