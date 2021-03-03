import { createApp } from "vue";
import App from "./App.vue";
import Home from "@/components/pages/Home";
import RamenEnDeuren from "@/components/pages/aanbod/RamenEnDeuren";
import Industriebouw from "@/components/pages/aanbod/Industriebouw";
import VloerenEnPlinten from '@/components/pages/aanbod/VloerenEnPlinten';
import Contact from "@/components/pages/Contact";
import Renovatie from "@/components/pages/Renovatie";
import OverOns from "@/components/pages/OverOns";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/over ons", name: "Over ons", component: OverOns },
  { path: "/renovatie", name: "Renovatie", component: Renovatie },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/ramen en deuren", name: "Ramen en deuren", component: RamenEnDeuren },
  { path: "/industriebouw", name: "Industriebouw", component: Industriebouw },
  { path: "/vloeren en plinten", name: "Vloeren en plinten", component: VloerenEnPlinten },
  { path: "/:catchAll(.*)", redirect: "/" },
];

const router = createRouter({ history: createWebHistory(), routes });

createApp(App).use(router).mount("#app");
