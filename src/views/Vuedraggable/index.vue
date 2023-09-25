<script setup lang="ts" name="Vuedraggable">
import Sortable from "sortablejs";
import { onMounted, ref } from "vue";

onMounted(() => {
  const table_1 = document.getElementById("table_1") as HTMLElement;
  const table_2 = document.getElementById("table_2") as HTMLElement;

  new Sortable(table_1, {
    group: "shared", // set both lists to same group
    animation: 150,
  });

  new Sortable(table_2, {
    group: "shared", // set both lists to same group
    animation: 150,
  });
});

interface item {
  id: number;
  name: string;
}

const list1 = ref<item[]>([
  { name: "John", id: 1 },
  { name: "Joao", id: 2 },
  { name: "Jean", id: 3 },
  { name: "Gerard", id: 4 },
]);

const list2 = ref<item[]>([
  { name: "Juan", id: 5 },
  { name: "Edgard", id: 6 },
  { name: "Johnson", id: 7 },
]);

function con() {
  console.log(list1);
}
</script>

<template>
  <main>
    <div id="table_1" class="list-group">
      <div
        class="list-group-item"
        v-for="(item, index) in list1"
        :data-id="item.id"
        :data-label="item.name"
        :data-value="item.name"
        :key="index"
      >
        {{ item.name }}
      </div>
    </div>
    <div>{{ list1 }}</div>
    <div id="table_2" class="list-group">
      <div
        class="list-group-item tinted"
        v-for="(item, index) in list2"
        :data-id="item.id"
        :data-label="item.name"
        :data-value="item.name"
        :key="index"
      >
        {{ item.name }}
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 500px);
  grid-template-rows: repeat(2, 400px);
  align-items: center;
  justify-items: center;
}
.list-group {
  width: 400px;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.tinted {
  background-color: #fff6b2;
}
</style>
<!-- <template>
  <div class="up-down">
    <draggable
      item-key="id"
      :list="dragList"
      ghost-class="_ghost"
      chosen-class="_chosenClass"
      animation="300"
    >
      <template #item="{ element }">
        <div class="_drag-item">
          {{ element.name }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<script lang="ts" setup name="DragUpDown">
import { Ref, watchEffect } from "vue";
import draggable from "vuedraggable";

interface DragListDataModel {
  id: number;
  name: string;
}

interface DragPropsDataModel {
  modelValue: Array<{
    id: number;
    name: string;
  }>;
}

const props = defineProps<DragPropsDataModel>();

// 这里的数据供调试使用，亦可从外部传入数据配合watchEffect使用
const dragList: Ref<DragListDataModel[]> = ref([
  { id: 1, name: "看万山红遍，层林尽染；漫江碧透，百舸争流。" },
  { id: 3, name: "怅寥廓，问苍茫大地，谁主沉浮？" },
  { id: 0, name: "独立寒秋，湘江北去，橘子洲头。" },
  { id: 2, name: "鹰击长空，鱼翔浅底，万类霜天竞自由。" },
  { id: 4, name: "携来百侣曾游，忆往昔峥嵘岁月稠。" },
  { id: 5, name: "恰同学少年，风华正茂；书生意气，挥斥方遒。" },
  { id: 6, name: "指点江山，激扬文字，粪土当年万户侯。" },
  { id: 7, name: "曾记否，到中流击水，浪遏飞舟？" },
]);

watchEffect(() => {
  if (props.modelValue.length > 0) {
    dragList.value = props.modelValue;
  }
});
</script>

<style lang="scss" scoped>
._drag-item {
  border: solid 1px #eee;
  padding: 6px 10px;
  text-align: left;
}

._drag-item:hover {
  cursor: move;
}
._drag-item + ._drag-item {
  margin-top: 10px;
}
._ghost {
  border: solid 1px rgb(19, 41, 239);
}
._chosenClass {
  background-color: #f1f1f1;
}
</style> -->
