<script setup lang="ts" name="SunComponent">
import {} from "vue";
const emits = defineEmits(["change-num"]);
console.log("🚀 ~ emits:", emits("change-num"));

function change() {
  console.log("🚀 ~ change:");
  emits("change-num", 10);
}
</script>

<template>
  <div>
    <h1>SunComponent</h1>
    <button @click="change">change</button>
  </div>
</template>

<style scoped lang="scss"></style>
