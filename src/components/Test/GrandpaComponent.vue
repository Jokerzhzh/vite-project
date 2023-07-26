<script setup lang="ts" name="GrandpaComponent">
import { ref } from "vue";
import ParentComponent from "./ParentComponent.vue";

const num = ref<number>(0);

const change = (params: number) => {
  if (params) {
    num.value = params;
  } else {
    num.value++;
  }
  console.log("GrandpaComponent: num++");
};
</script>

<template>
  <div>
    <h1>GrandpaComponent</h1>
    <div>num: {{ num }}</div>
    <button @click="change">num++</button>
    <ParentComponent @change-num="change" />
  </div>
</template>

<style scoped lang="scss"></style>
