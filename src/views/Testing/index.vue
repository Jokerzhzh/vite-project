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

const myHeader = "myHeader";
</script>

<template>
  <div>
    <h1>for 循环每秒输出一个数字</h1>
    {{ arr }}

    <NavigationBar />
    <TestComponent :str="str" :num="num" :obj="obj">
      <p>123123123</p>
      <!-- <template #default="obj">
        {{ obj.hello }}
      </template> -->
      <template #header="myHeader">
        {{ myHeader.message }}
        <div class="123">header</div>
      </template>
      <template #body>
        <p>5555</p>
      </template>
      <template #footer>
        <div>footer</div>
      </template>
    </TestComponent>
  </div>
</template>

<style scoped lang="scss"></style>
