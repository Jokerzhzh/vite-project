<script setup lang="ts">
// const baseURL = computed(() => {
//   return window.location.href;
// });

// watch(
//   () => baseURL,
//   (baseURL, prevCount) => {
//     /* ... */
//   }
// );

// //防止页面后退
// history.pushState(null, "", document.URL);
// window.addEventListener("popstate", function () {
//   history.pushState(null, "", document.URL);
// });

import Home from "./views/Home.vue";
</script>

<template>
  <div>
    <!-- <RouterView /> -->
    <Home />
  </div>
</template>

<style scoped lang="scss"></style>
