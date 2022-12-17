import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/base.css?inline";
import router from "./router";
import store from "./store";

const app = createApp(App);

// 注册Icons 全局组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);

app.use(store);

app.mount("#app");
