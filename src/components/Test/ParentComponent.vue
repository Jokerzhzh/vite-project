<script setup lang="ts" name="ParentComponent">
import {} from "vue";
import SunComponent from "./SunComponent.vue";

const emits = defineEmits(["change-num"]);
const change = (params: number) => {
  console.log("🚀 ~ change: ", params);
  // emits("change-num", params);
};
</script>

<template>
  <div>
    <h1>ParentComponent</h1>
    <SunComponent @change-num="change" />
  </div>
</template>

<style scoped lang="scss"></style>
