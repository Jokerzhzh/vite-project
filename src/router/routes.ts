import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "index",
    redirect: "/DragAndDrop",
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () => import("@/views/Login.vue"),
  // },
  // {
  //   path: "/home",
  //   name: "home",
  //   component: () => import("@/views/HelloWorld.vue"),
  // },
  {
    path: "/view1",
    name: "view1",
    component: () => import("@/views/view1.vue"),
  },
  {
    path: "/view2",
    name: "view2",
    component: () => import("@/views/view2.vue"),
  },
  {
    path: "/DragAndDrop",
    name: "DragAndDrop",
    component: () => import("@/views/DragAndDrop.vue"),
  },
];

export default routes;
