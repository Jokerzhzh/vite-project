<script setup lang="ts" name="PointerEvent">
import { onMounted, ref } from "vue";

const isSecondaryDragging$ = ref(false);
const offsetSecondary$ = ref(0);

// 当某指针得以激活时触发。 （点击）
function draggerMouseDown(event: PointerEvent) {
  // console.log("🚀 ~ event", event);
  const target = event.target as HTMLElement;
  // console.log("down", event);
  target?.setPointerCapture(event.pointerId);
  isSecondaryDragging$.value = true;
}

// 当某指针不再活跃时触发。 （抬起）
function draggerMouseUp(event: PointerEvent) {
  // console.log("up", event);
  const target = event.target as HTMLElement;
  // console.log("endY", event.screenY);
  target?.releasePointerCapture(event.pointerId);
  isSecondaryDragging$.value = false;
}

// 当某指针改变其坐标时触发。 （移动）
function draggerMouseMove(event: PointerEvent) {
  // console.log("move", event);
  if (isSecondaryDragging$.value) {
    let newValue = offsetSecondary$.value - event.movementY;
    // console.log("🚀 ~ newValue", newValue);
    if (newValue < -277) {
      newValue = -277;
    } else if (newValue > 277) {
      newValue = 277;
    }
    offsetSecondary$.value = newValue;
  }
}
// 鼠标右键事件
function draggerContextMenu(event: PointerEvent) {
  event.preventDefault();
}

onMounted(() => {
  // js 实现手电筒效果
  // document
  //   .querySelector("style")
  //   ?.append(
  //     "canvas { position: fixed; top: 0; left: 0;z-index:1;pointer-events: none; }"
  //   );
  // const canvas = document.createElement("canvas");
  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;
  // document.body.appendChild(canvas);
  // const ctx = canvas.getContext("2d");
  // // ctx.fillStyle = "rgba(0,0,0,0.5)";
  // ctx?.fillRect(0, 0, canvas.width, canvas.height);
  // document.addEventListener("pointermove", (e) => {
  //   ctx?.clearRect(0, 0, canvas.width, canvas.height);
  //   ctx?.fillRect(0, 0, canvas.width, canvas.height);
  //   ctx?.beginPath();
  //   var radialGradient = ctx?.createRadialGradient(
  //     e.clientX,
  //     e.clientY,
  //     0,
  //     e.clientX,
  //     e.clientY,
  //     100
  //   );
  //   radialGradient?.addColorStop(0, "rgba(255,255,255,0)");
  //   radialGradient?.addColorStop(1, "rgba(0,0,0,0.5)");
  //   ctx.fillStyle = radialGradient;
  //   ctx?.arc(e.clientX, e.clientY, 100, 0, Math.PI * 2);
  //   ctx?.fill();
  // });
});
</script>

<template>
  <main>
    <div class="up" :style="{ height: 427 - offsetSecondary$ + 'px' }"></div>
    <div
      class="pointer_offset"
      @pointerdown="draggerMouseDown"
      @pointerup="draggerMouseUp"
      @pointermove.prevent.capture.stop="draggerMouseMove"
      @draggerContextMenu="draggerContextMenu"
    ></div>
    <div class="down" :style="{ height: 427 + offsetSecondary$ + 'px' }"></div>
  </main>
</template>

<style scoped lang="scss">
.up {
  width: 100%;
  border-radius: 5px;
  background-image: url(@/assets/images/あなたの名前.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.down {
  width: 100%;
  border-radius: 5px;
  background-image: url(@/assets/images/ねずこ.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.pointer_offset {
  height: 10px;
  border-radius: 10px;
  background: #e5e5e5;
  cursor: row-resize;
}
</style>
