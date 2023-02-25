<script setup lang="ts" name="TestComponent">
import { onUpdated, toRefs } from "vue";

const props = defineProps({
  str: { type: String, default: "" },
  num: { type: Number, default: 1 },
  obj: { type: Object, default: {} },
});

const { str, num, obj } = toRefs(props);

function changeObj() {
  obj.value.a = num.value;
  // obj.value = { a: num.value, b: 2 };
}

onUpdated(() => {
  console.log("TestComponent onUpdated");
});
</script>

<template>
  <div>str: {{ str }}</div>
  <div>num: {{ num }}</div>
  <div>obj: {{ obj }}</div>

  <input type="text" v-model="str" />
  <input type="number" v-model="num" />
  <input v-model="obj.a" />

  <button @click="changeObj">changeObj</button>
</template>

<style scoped lang="scss"></style>
