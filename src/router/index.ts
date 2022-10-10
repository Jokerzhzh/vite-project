import * as VueRouter from "vue-router";
import routes from "./routes";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
