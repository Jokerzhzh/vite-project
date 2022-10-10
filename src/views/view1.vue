<script setup lang="ts" name="view1">
import {} from "vue";

import { useRoute, useRouter } from "vue-router";
const router = useRouter();
console.log("🚀 ~ router", router);
const route = useRoute();
console.log("🚀 ~ route", route.path);
</script>

<template>
  <div>view1</div>
</template>

<style scoped lang="scss"></style>
