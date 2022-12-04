<script setup lang="ts" name="Button">
import {} from "vue";

// defineProps ts default
interface Props {
  itSize: string;
  itTitle: string;
}
const props = withDefaults(defineProps<Props>(), {
  itSize: "10px",
  itTitle: "title",
});

// defineProps js default
// const props = defineProps<{ [key: string]: string }>({
//   itSize: { type: String, default: "20px" },
//   itTitle: { type: String, default: "title" },
// });

// 获取颜色
function getColor() {
  var str = "#";
  var arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  for (var i = 0; i < 6; i++) {
    var num: number = parseInt(String(Math.random() * 16));
    str += arr[num];
  }
  return str;
}
</script>

<template>
  <!-- <div class="button"> -->
  <div class="a" :style="{ '--color': getColor(), '--size': itSize }">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    {{ itTitle }}
  </div>
  <!-- <a href="#" :style="{ '--color': getColor(), '--size': itSize }">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {{ itTitle }}
    </a>
    <a href="#" :style="{ '--color': getColor(), '--size': itSize }">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {{ itTitle }}
    </a> -->
  <!-- </div> -->
</template>

<style scoped lang="scss">
body {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // height: 100vh;
  // background: #090e36;
  // background: #03e9f4;
  // font-family: "Raleway", sans-serif;
  // font-weight: bold;
}

.a {
  width: min-content;
  height: min-content;
  position: relative;
  display: inline-block;
  padding: var(--size);
  // padding:25px 30px
  // margin: 40px 0;
  color: var(--color);
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  // margin-right: 50px;
  cursor: pointer;
}

.a:hover {
  background-color: var(--color);
  color: #050801;
  box-shadow: 0 0 5px var(--color), 0 0 25px var(--color), 0 0 50px var(--color),
    0 0 100px var(--color);
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}

// .a:nth-child(1) {
//   filter: hue-rotate(270deg);
// }

// .a:nth-child(2) {
//   filter: hue-rotate(110deg);
// }

.a span {
  position: absolute;
  display: block;
}

.a span:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color));
  animation: animate1 1s linear infinite;
}

@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, var(--color));
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.a span:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, var(--color));
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes animate3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, var(--color));
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
