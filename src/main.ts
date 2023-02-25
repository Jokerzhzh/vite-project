// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/base.css";
import router from "./router";
import store from "./store/pinia";

const app = createApp(App);

app.use(ElementPlus);

// 注册Icons 全局组件
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component);
// }

app.use(router);

app.use(store);

app.mount("#app");
