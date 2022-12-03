<script setup lang="ts">
import { useCounterStore } from "@/store/states";
import { UseWindowSize } from "@vueuse/components";
import { useMouse, useWindowSize } from "@vueuse/core";
import dayjs from "dayjs";
import moment from "moment";

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

const store = useCounterStore();

const { counter, doubleCountPlusOne, doubleCountPlusTwo } = storeToRefs(store);
console.log("🚀 ~ counter", counter);
console.log("🚀 ~ doubleCountPlusOne", doubleCountPlusOne);
console.log("🚀 ~ doubleCountPlusTwo", doubleCountPlusTwo);
console.log("🚀 ~ store", store);

const count = ref(0);
dayjs().format();
console.log("🚀 ~ dayjs().format()", dayjs().format());
console.log("import.meta.url", import.meta.url);
function addCount() {
  store.increment();
}
function clern() {
  store.clern();
}
const text = ref("123");
console.log("🚀 ~ text", text);

const a = reactive({ key: "value" });
console.log("🚀 ~ a", a);
function change(e: any) {
  console.log(e);
}

console.log("🚀 ~ ", moment().format());

let obj = reactive({ a: 1 });
console.log("🚀 ~ obj", obj);

function show() {
  console.log("🚀 ~ obj", obj);
  console.log("🚀 ~ obj", toRaw(obj));
  console.log("🚀 ~ isReactive(obj)", isReactive(obj));
}
function changeReactive() {
  obj = { a: 1 };
  // obj.a = 2;
}

const date = ref();

setInterval(() => {
  date.value = new Date();
}, 1000);
console.log("🚀 ~ date", date.value);

console.log("dayjs====", dayjs(date.value));
console.log("moment====", moment(date.value));

watch(
  () => counter.value,
  () => {
    console.log("counter is Changed", counter);
  }
);

const asd = () => {
  console.log("a");
};

console.log();
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
  <el-button @click="clern">counter</el-button>
  <p class="bg-gray-300">{{ counter }}</p>
  <div class="h-[40px] w-[40px]">div</div>
  <UseWindowSize v-slot="{ width, height }">
    Width: {{ width }} Height: {{ height }}
  </UseWindowSize>
  <div></div>
  <p></p>
  <UseWindowSize></UseWindowSize>
  <span></span>
  <div>
    <p>{{ text }}</p>
    <!-- <input type="text" :value="text" @input="value = 11" /> -->
    <input type="text" :value="text" />

    <el-input type="text" v-model="text" />
  </div>
  <div>
    <el-button @click="show">shallowReactive</el-button>
    <el-button @click="changeReactive">reactive</el-button>
  </div>
  <div>{{ date }}</div>

  <img src="../assets/vue.svg" alt="" />

  <!-- <div class="bg-black"> -->
  <Input />
  <!-- </div> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
