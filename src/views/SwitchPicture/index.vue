<script setup lang="ts" name="SwitchPicture">
import type { TabsPaneContext } from "element-plus";
import { ElTabPane, ElTabs } from "element-plus";
import { ref } from "vue";

const activeName = ref("width-change");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="width-change" name="width-change">
      <div class="g-outer">
        <div class="g-inner width-change"></div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="mask-change" name="mask-change">
      <div class="g-outer">
        <div class="g-inner mask-change"></div>
      </div>
    </el-tab-pane>
    <el-tab-pane
      label="Drag and dorp with resize"
      name="Drag and dorp with resize"
    >
      <div class="picA">
        <div class="picB">
          <div readonly class="resizeElement"></div>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.g-outer {
  width: 650px;
  height: 340px;
  margin: auto;
  background-image: url(@/assets/images/landscape_1.png);
  overflow: hidden;
}

.g-inner {
  height: 340px;
  background: url(@/assets/images/landscape_2.png);
}

.width-change {
  animation: widthchange 2s infinite alternate linear;
}
.mask-change {
  mask: linear-gradient(
    90deg,
    #fff 0%,
    #fff 50%,
    transparent 50%,
    transparent 100%
  );
  mask-size: 200% 100%;
  animation: maskChange 2s infinite alternate linear;
}
@keyframes widthchange {
  0% {
    width: 650px;
  }
  100% {
    width: 0px;
  }
}
@keyframes maskChange {
  0% {
    mask-position: -100% 0;
  }
  100% {
    mask-position: 0 0;
  }
}
.picA {
  background-image: url(@/assets/images/landscape_1.png);
  background-size: cover;
  width: 650px;
  height: 340px;
  border: 5px solid #f0e5ab;
  border-radius: 3px;
  box-shadow: 0 0 1px #999, -2px 2px 3px rgba(0, 0, 0, 0.2);
  padding: 0;
  margin: 1rem auto;
  position: relative;
  overflow: hidden;
}
.picB {
  background-image: url(@/assets/images/landscape_2.png);
  background-size: cover;
  height: 340px;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 0;
  max-width: 650px;
  box-sizing: border-box;
}
.picB:before {
  content: "↔";
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  color: white;
  top: 0;
  right: 0;
  height: 100%;
  line-height: 340px;
}
.resizeElement {
  resize: horizontal;
  overflow: scroll;
  opacity: 0;
  position: relative;
  top: 50%;
  left: 0px;
  height: 15px;
  max-width: 650px;
  min-width: 15px;
  width: 0;
  cursor: move;
  transform: scaleY(35);
  transform-origin: center center;
  animation: delta 5s normal ease-in-out 1s;
}
@keyframes delta {
  30% {
    width: 0;
  }
  60% {
    width: 350px;
  }
  100% {
    width: 0;
  }
}
</style>
