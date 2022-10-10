<script setup lang="ts" name="DragAndDrop">
import { computed, onMounted, ref } from "vue";
const divList = ref([
  {
    id: 1,
    name: "1",
    type: "drag",
  },
  {
    id: 2,
    name: "2",
    type: "drag",
  },
  {
    id: 3,
    name: "3",
    type: "drag",
  },
  {
    id: 4,
    name: "4",
    type: "drag",
  },
  {
    id: 5,
    name: "5",
    type: "drag",
  },
  {
    id: 6,
    name: "6",
    type: "drag",
  },
  {
    id: 7,
    name: "7",
    type: "drag",
  },
  {
    id: 8,
    name: "8",
    type: "drag",
  },
  {
    id: 9,
    name: "9",
    type: "drop",
  },
  {
    id: 10,
    name: "10",
    type: "drag",
  },
]);
const list = ref([
  {
    id: 1,
    type: "drop",
  },
  {
    id: 2,
    type: "drop",
  },
]);
const DragList = computed(() =>
  divList.value.filter((item) => item.type === "drag")
);
const DropList = computed(() =>
  divList.value.filter((item) => item.type === "drop")
);

onMounted(() => {
  let dragged: any;

  let info: any;
  let divId: any;

  divList.value.forEach((item: any) => {
    const dragDiv = document.getElementById("div" + item.id);

    dragDiv!.addEventListener("drag", (event) => {
      console.log("🚀 ~ event", event);
      console.log("dragging");
    });
    dragDiv!.addEventListener("dragstart", (event: any) => {
      dragged = event.target;
      divId = dragged.__vnode.props.key;
      info = item;
      event.target.classList.add("dragging");
    });

    dragDiv!.addEventListener("dragend", (event: any) => {
      event.target.classList.remove("dragging");
      console.log("🚀 ~ dragend");
    });
  });

  [
    { id: 1, type: "drag" },
    { id: 2, type: "drop" },
  ].forEach((ele: any) => {
    const dropDiv = document.getElementById("dropDiv" + ele.id);

    dropDiv!.addEventListener(
      "dragover",
      (event) => {
        event.preventDefault();
      },
      false
    );

    dropDiv!.addEventListener("dragenter", (event: any) => {
      if (event.target.classList.contains("dropzone")) {
        event.target.classList.add("dragover");
      }
      console.log("dragenter");
    });

    dropDiv!.addEventListener("dragleave", (event: any) => {
      if (event.target.classList.contains("dropzone")) {
        event.target.classList.remove("dragover");
      }
      console.log("dragleave");
    });

    dropDiv!.addEventListener("drop", (event: any) => {
      event.preventDefault();
      if (event.target.classList.contains("dropzone")) {
        event.target.classList.remove("dragover");
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
      }
      console.log("drop");

      divList.value.forEach((item) => {
        if (item.id === divId)
          console.log("item~~~", item, "###", divId), (item.type = ele.type);
      });
      console.log("🚀 ~ divList.value", divList.value);
    });
  });
});
</script>

<template>
  <div>DragAndDrop</div>
  <div>
    <div class="DragList flex">
      <span>DragList</span>
      <div class="DropDiv" id="dropDiv1">+</div>
      <div
        class="DragDiv cursor-move"
        :id="'div' + item.id"
        v-for="item in DragList"
        :key="item.id"
        draggable="true"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="DropList flex">
      <span>DropList</span>
      <div class="DropDiv" id="dropDiv2">+</div>
      <div
        class="DragDiv cursor-move"
        :id="'div' + item.id"
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
