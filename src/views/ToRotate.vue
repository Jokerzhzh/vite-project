<script setup lang="ts" name="ToRotate">
import {} from "vue";

const xz = ref(0);
const yz = ref(0);
const zz = ref(0);
const radius = ref(0);
const color = ref("rgb(102, 153, 238)");

function down() {
  console.log("down");
}
function move() {
  console.log("move");
}
function up() {
  console.log("up");
}
</script>

<template>
  <div class="body">
    <div class="ranges">
      <span><el-color-picker v-model="color" show-alpha /></span>
      <span><input type="range" v-model="radius" /> radius</span>
      <span
        ><input
          id="xz"
          type="range"
          v-model="xz"
          @mousedown="down"
          @mousemove="move"
          @mouseup="up"
        />
        这是X轴运动</span
      >
      <span><input id="yz" type="range" v-model="yz" /> 这是Y轴运动</span>
      <span><input id="zz" type="range" v-model="zz" /> 这是Z轴运动</span>
    </div>
    <div
      id="fk"
      :style="{
        '--x': xz * 2 + 'deg',
        '--y': yz * 2 + 'deg',
        '--z': zz * 2 + 'deg',
        '--color': color,
        '--radius': radius + '%',
      }"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  padding: 50px;
}
.ranges {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 300px;
  padding: 20px;
}
input {
  width: 300px;
}
#fk {
  width: 300px;
  height: 300px;
  background: var(--color);
  border-radius: var(--radius);
  -webkit-transform: rotateX(var(--x)) rotateY(var(--y)) rotateZ(var(--z));
}
</style>
