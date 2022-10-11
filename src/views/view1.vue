<script setup lang="ts" name="view1">
const router = useRouter();
console.log("🚀 ~ router", router);

const route = useRoute();
console.log("🚀 ~ route", route.path);

const a = ref(false);
</script>

<template>
  <div>view1</div>
  <el-switch v-model="a" />
</template>

<style scoped lang="scss"></style>
