<script setup lang="ts" name="Input">
import {} from "vue";
</script>

<template>
  <div class="input-group">
    <input type="text" id="name" required class="input" />
    <label for="name" class="input-label">input-label</label>
  </div>
</template>

<style scoped lang="scss">
.input-group {
  position: relative;
}

.input {
  padding: 10px;
  border: none;
  border-radius: 4px;
  font: inherit;
  // color: #fff;
  color: #000000;
  background-color: #ffffff00;
  // outline: 2px solid #fff;
  outline: 2px solid #000000;
}

.input-label {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(10px, 10px);
  transition: transform 0.25s;
}

.input:focus + .input-label,
.input:valid + .input-label {
  transform: translate(10px, -14px) scale(0.8);
  color: #d1c5fc;
  padding-inline: 5px;
  border-radius: 5px;
  background-color: #242329;
}

.input:is(:focus, :valid) {
  outline-color: #d1c5fc;
}
</style>
