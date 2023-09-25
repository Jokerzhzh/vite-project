import { RouteRecordRaw } from "vue-router";

// const routes: RouteRecordRaw[] = [
//   {
//     path: "/",
//     name: "index",
//     redirect: "/HelloWorld",
//   },
//   {
//     path: "/home",
//     name: "home",
//     component: () => import("@/views/Home.vue"),
//     children: [
//       {
//         path: "/HelloWorld",
//         name: "HelloWorld",
//         component: () => import("@/views/HelloWorld.vue"),
//       },
//       {
//         path: "/view1",
//         name: "view1",
//         component: () => import("@/views/view1.vue"),
//       },
//       {
//         path: "/view2",
//         name: "view2",
//         component: () => import("@/views/view2.vue"),
//       },
//       {
//         path: "/DragAndDrop",
//         name: "DragAndDrop",
//         component: () => import("@/views/DragAndDrop.vue"),
//       },
//       {
//         path: "/SwitchPicture",
//         name: "SwitchPicture",
//         component: () => import("@/views/SwitchPicture.vue"),
//       },
//       {
//         path: "/BaiduMap",
//         name: "BaiduMap",
//         component: () => import("@/views/BaiduMap.vue"),
//       },
//       {
//         path: "/PointerEvent",
//         name: "PointerEvent",
//         component: () => import("@/views/PointerEvent.vue"),
//       },
//       {
//         path: "/CardFlip",
//         name: "CardFlip",
//         component: () => import("@/views/CardFlip.vue"),
//       },
//       {
//         path: "/Vuedraggable",
//         name: "Vuedraggable",
//         component: () => import("@/views/Vuedraggable.vue"),
//       },
//       {
//         path: "/Wangeditor",
//         name: "Wangeditor",
//         component: () => import("@/views/Wangeditor.vue"),
//       },
//       {
//         path: "/ToRotate",
//         name: "ToRotate",
//         component: () => import("@/views/ToRotate.vue"),
//       },
//       {
//         path: "/FileAndFolder",
//         name: "FileAndFolder",
//         component: () => import("@/views/FileAndFolder.vue"),
//       },
//       {
//         path: "/ImagesEdit",
//         name: "ImagesEdit",
//         component: () => import("@/views/ImagesEdit.vue"),
//       },
//       {
//         path: "/Testing",
//         name: "Testing",
//         component: () => import("@/views/Testing.vue"),
//       },
//     ],
//   },
// ];

const pageConfigs = import.meta.glob("../views/**/page.ts", {
  eager: true,
  import: "default",
});
console.log("🚀 ~ pageConfigs:", pageConfigs);

const pageComponents = import.meta.glob("../views/**/index.vue", {});
console.log("🚀 ~ pageComponents:", pageComponents);

const routes: RouteRecordRaw[] = Object.entries(pageConfigs).map(
  ([filePath, meta]) => {
    const TSPath = filePath;

    const path =
      filePath.replace(/\/page.ts$/, "").replace(/\.*\/views/, "") || "/";

    const name = path.split("/").filter(Boolean).join("-") || "index";

    const vuePath = TSPath.replace(/page.ts$/, "index.vue");

    return {
      path,
      name,
      component: pageComponents[vuePath],
      meta: { ...meta, TSPath, vuePath },
    };
  }
);

console.log("🚀 ~ pages:", routes);

export default routes;
