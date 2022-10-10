<script setup lang="ts">
import { useCounterStore } from "@/store/states";
import { UseWindowSize } from "@vueuse/components";
import { useMouse, useWindowSize } from "@vueuse/core";
import dayjs from "dayjs";
import moment from "moment";
import { reactive, ref } from "vue";

// "x" and "y" are refs
const { x, y } = useMouse();

console.log(x.value);

const mouse = useMouse();

const { width, height } = useWindowSize();

// function name() {
//   console.log(mouse.x.value);
// }

// setInterval(name, 1000);

// defineProps<{ msg: string }>();

const userStore = useCounterStore();

const count = ref(0);
dayjs().format();
console.log("🚀 ~ dayjs().format()", dayjs().format());
console.log("import.meta.url", import.meta.url);
function addCount() {
  userStore.increment();
}
const text = ref("123");
console.log("🚀 ~ text", text);

const a = reactive({ key: "value" });
console.log("🚀 ~ a", a);
function change(e: any) {
  console.log(e);
}

console.log("🚀 ~ ", moment().format());
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->
  <h1>Vite + Vue</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <el-button @click="addCount">counter</el-button>
  <p class="bg-gray-300">{{ userStore.counter }}</p>
  <div class="h-[40px] w-[40px]">div</div>
  <UseWindowSize v-slot="{ width, height }">
    Width: {{ width }} Height: {{ height }}
  </UseWindowSize>

  <div>
    <p>{{ text }}</p>
    <input type="text" :value="text" @input="value = 11" />
    <input type="text" :value="text" />

    <el-input type="text" v-model="text" />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
