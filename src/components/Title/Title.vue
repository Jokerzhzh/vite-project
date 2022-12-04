<script setup lang="ts" name="Title">
const props = defineProps<{
  itTitle: { type: String; default: "title" };
}>();
</script>

<template>
  <div class="title">
    {{ itTitle }}
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

.title {
  position: relative;
  height: 50px;
  font-size: 30px;
  font-family: "Anton", sans-serif;
  cursor: pointer;
  width: min-content;
}

.title::before,
.title::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #fc2f70;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

.title::before {
  top: 0;
  transform-origin: center right;
}

.title:hover::before {
  transform-origin: center left;
  transform: scaleX(1);
}

.title::after {
  bottom: 0;
  transform-origin: center left;
}

.title:hover::after {
  transform-origin: center right;
  transform: scaleX(1);
}
</style>
