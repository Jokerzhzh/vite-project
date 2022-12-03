<script setup lang="ts" name="Testing">
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
</script>

<template>
  <div>
    <h1>for 循环每秒输出一个数字</h1>
    {{ arr }}

    <NavigationBar />
  </div>
</template>

<style scoped lang="scss"></style>
