<script setup lang="ts" name="view1">
const router = useRouter();
console.log("🚀 ~ router", router);

const route = useRoute();
console.log("🚀 ~ route", route.path);

const a = ref(false);
</script>

<template>
  <div class="div">
    <div class="div1">div1</div>
    <div class="div2">div2</div>
  </div>
  <el-button-group></el-button-group>
  <el-switch v-model="a" />
</template>

<style scoped lang="scss">
.div {
  width: 400px;
  height: 400px;
  background-color: yellow;
  .div1 {
    width: 100px;
    height: 100px;
    background-color: blue;
  }
  .div2 {
    width: 100px;
    height: 100px;
    background-color: pink;
  }
}
</style>
