import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/base.css";
import store from "./store/pinia";
import router from "./router";

const app = createApp(App);

// 注册Icons 全局组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);

app.use(store);

app.mount("#app");
