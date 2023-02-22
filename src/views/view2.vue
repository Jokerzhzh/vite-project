<script setup lang="ts" name="view2">
import {} from "vue";
import { RandomNum } from "@/store";
import moment from "moment";

const store = RandomNum();

const { num } = storeToRefs(store);
console.log("🚀 ~ num", num);

function func() {
  console.log("~~~~~~~~~~~");
  store.Generate();
}

const ms = ref();

setInterval(() => {
  ms.value = new Date().getTime();
}, 1);
</script>

<template>
  <div>
    view2
    <Title it-title="My_title" />
    <Button @click="func" />

    <div>{{ num }}</div>

    <!-- <div>{{ store.GenerateRandomNum() }}</div> -->
    <div>毫秒数：{{ ms }}</div>
    <div>date：{{ moment(ms).format("YYYY/MM/DD HH:mm:ss") }}</div>
  </div>
</template>

<style scoped lang="scss"></style>
