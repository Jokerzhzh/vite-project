<script setup lang="ts" name="DragAndDrop">
interface divItem {
  [key: string]: string;
}
const divList = ref<divItem[]>([]);

for (let i = 1; i <= 20; i++) {
  divList.value.push({
    id: i + "",
    name: i + "",
    type: i % 2 ? "drag" : "drop",
  });
}

const DragList = computed<divItem[]>(() =>
  divList.value.filter((item) => item.type === "drag")
);

const DropList = computed<divItem[]>(() =>
  divList.value.filter((item) => item.type === "drop")
);

// 首次加载时 数据不变 不会调用 onUpdated ，所以需要在 onMounted 中调用一次 获取 dom方法 添加拖拽监听事件
// 数据更新后 dom改变 不会调用 onMounted ，所以需要在 onUpdated 中调用一次 获取 dom方法 添加拖拽监听事件

function getDoms() {
  const dragDivs = document.querySelectorAll(".DragDiv");
  // console.log("🚀 ~ dragDivs", dragDivs);
  dragDivs.forEach((item) => {
    item.addEventListener("dragstart", (event: any) => {
      // event.target.classList.add("dragging");
      event.dataTransfer.setData("itemId", event.target.id);
    });
    item.addEventListener("dragend", (event: any) => {
      // event.target.classList.remove("dragging");
      event.preventDefault();
    });
  });
}

onMounted(() => {
  getDoms();
  const dropDivs = document.querySelectorAll(".DropDiv");
  // console.log("🚀 ~ dropDivs", dropDivs);
  dropDivs.forEach((item) => {
    item.addEventListener("dragover", (event: any) => {
      event.preventDefault();
    });
    item.addEventListener("dragenter", (event: any) => {
      event.target.classList.add("dragover");
    });
    item.addEventListener("dragleave", (event: any) => {
      event.target.classList.remove("dragover");
    });
    item.addEventListener("drop", (event: any) => {
      // console.log("🚀 ~ event", event.dataTransfer.getData("itemId"));
      // console.log("🚀 ~ event", event.target.id);
      if (event.target.id === "DragList") {
        divList.value.forEach((item) => {
          if (item.id === event.dataTransfer.getData("itemId"))
            item.type = "drag";
        });
      } else {
        divList.value.forEach((item) => {
          if (item.id === event.dataTransfer.getData("itemId"))
            item.type = "drop";
        });
      }
    });
  });
});

onUpdated(() => {
  getDoms();
});
</script>

<template>
  <div>DragAndDrop</div>
  <div>
    <div class="DragList flex">
      <span>DragList</span>
      <div class="DropDiv" id="DragList">+</div>
      <div
        class="DragDiv cursor-move"
        :id="item.id"
        v-for="item in DragList"
        :key="item.id"
        draggable="true"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="DropList flex">
      <span>DropList</span>
      <div class="DropDiv" id="DropList">+</div>
      <div
        class="DragDiv cursor-move"
        :id="item.id"
        v-for="item in DropList"
        :key="item.id"
        draggable="true"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.DragDiv {
  width: 50px;
  height: 50px;
  background-color: pink;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}
.DropDiv {
  width: 50px;
  height: 50px;
  background-color: pink;
  border: 1px dashed black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}
</style>
