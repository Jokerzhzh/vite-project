<script setup lang="ts" name="view2">
import { Button, Title } from "@/components";
import { RandomNum } from "@/store";
import uuid from "licia-es/uuid";
import moment from "moment";
import { storeToRefs } from "pinia";
import { ref } from "vue";

console.log("🚀 ~ uuid:", uuid());

const store = RandomNum();

const { num } = storeToRefs(store);
console.log("🚀 ~ num", num);

function func() {
  console.log("~~~~~~~~~~~");
  store.Generate();
}

const ms = ref();

setInterval(() => {
  ms.value = new Date().getTime();
}, 1);
</script>

<template>
  <div>
    view2
    <Title it-title="My_title" />
    <Button @click="func" />

    <div>{{ num }}</div>

    <!-- <div>{{ store.GenerateRandomNum() }}</div> -->
    <div>毫秒数：{{ ms }}</div>
    <div>date：{{ moment(ms).format("YYYY/MM/DD HH:mm:ss") }}</div>
    <div class="title">旋转霓虹灯变边框</div>

    <div class="result">
      <div class="box"></div>
      <div class="box box-other"></div>
    </div>
    <!-- 脉动星球效果 -->
    <div class="planet-box">
      <div class="planet"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  background-color: #121212;
  color: #fff;
}

// 更改 text-selection 颜色
*::-moz-selection {
  background: rgba(255, 255, 255, 0.99);
  color: #121212;
}

// 更改 text-selection 颜色
*::selection {
  background: rgba(255, 255, 255, 0.99);
  color: #121212;
}
// 旋转霓虹灯变边框
@property --hue {
  syntax: "<integer>";
  inherits: true;
  initial-value: 0;
}

@property --deg {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0deg;
}
.result {
  position: relative;
  background-color: #000;
  border-radius: 10px;
  padding: 10px;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes rotate {
  0% {
    --hue: 0;
    --deg: 0deg;
  }

  100% {
    --hue: 360;
    --deg: 360deg;
  }
}

.box {
  animation: rotate 3s linear infinite;
  border: 2px solid transparent;
  border-image-slice: 1;
  border-image-width: 2px;
  border-image-source: conic-gradient(
    from var(--deg),
    hsla(calc(var(--hue) + 180), 100%, 75%, 0) 33%,
    hsla(calc(var(--hue) + 180), 100%, 75%, 0.5) 66%,
    hsla(calc(var(--hue) + 360), 100%, 60%, 1) 100%
  );
  width: 5vh;
  height: 20vh;
}

.box-other {
  transform: translate(-50%, -50%) scaleX(-1);
  animation-delay: -1.5s;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20vh;
  height: 5vh;
  z-index: 2;
}

// css 脉动星球效果
.planet-box {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: rgb(213, 213, 213);
  display: flex;
  justify-content: center;
  align-items: center;
}
.planet {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 0 40px 20px #fff, -20px 0 80px #f0f, 20px 0 80px #0ff,
    inset 0 0 50px #fff, inset 50px 0 80px #f0f, inset -50px 0 80px #0ff,
    inset 50px 0 200px #f0f, inset -50px 0 200px #0ff;
  animation: pulseate 6s linear infinite;
}

@keyframes pulseate {
  50% {
    box-shadow: 0 0 20px #fff, 20px 0 80px #f0f, -20px 0 80px #0ff,
      inset 0 0 50px #fff, inset -50px 0 80px #f0f, inset 50px 0 80px #0ff,
      inset -50px 0 200px #f0f, inset 50px 0 200px #0ff;
  }
}
</style>
