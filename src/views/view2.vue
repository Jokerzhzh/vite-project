<script setup lang="ts" name="view2">
import {} from "vue";

function func() {
  console.log("~~~~~~~~~~~");
}
</script>

<template>
  <div>
    view2
    <Title it-title="My_title" />
    <Button @click="func" />
  </div>
</template>

<style scoped lang="scss"></style>
