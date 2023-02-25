<script setup lang="ts" name="Testing">
import { NavigationBar, TestComponent } from "@/components";
import { onUpdated, ref, watch } from "vue";

const arr = ref<number[]>([]);

// for 循环每秒输出一个数字
for (let i = 0; i < 10; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
      arr.value.push(j);
    }, 1000 * j);
  })(i);
}

const str = ref<string>("str");
const num = ref<number>(1);
const obj = ref({ a: 1, b: 2 });

// watch str & num & obj
watch(
  obj,
  (newVal, oldVal) => {
    console.log("watch obj", newVal, oldVal);
  },
  { deep: true }
);

onUpdated(() => {
  console.log("Testing onUpdated");
});
</script>

<template>
  <div>
    <h1>for 循环每秒输出一个数字</h1>
    {{ arr }}

    <NavigationBar />
    <TestComponent :str="str" :num="num" :obj="obj" />
  </div>
</template>

<style scoped lang="scss"></style>
