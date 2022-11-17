<script lang="ts" setup name="LeftMenu">
import routes from "@/router/routes";
import { menuState } from "@/store/states";

const store = menuState();

const { isCollapse } = storeToRefs(store);

function changeState(state: boolean) {
  store.changeState(state);
}

const list = computed(() => {
  return routes[1].children;
});
</script>
<template>
  <main class="main-menu">
    <div
      class="icon-btn-group"
      :style="
        isCollapse
          ? 'width:64px;justify-content: center'
          : 'width:200px;justify-content: end'
      "
    >
      <el-icon :size="30" v-if="isCollapse" @click="changeState(false)"
        ><Expand
      /></el-icon>
      <el-icon :size="30" v-else @click="changeState(true)"><Fold /></el-icon>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :router="true"
    >
      <el-menu-item v-for="item in list" :index="item.path">
        <el-icon><Menu /></el-icon>
        <template #title>{{ item.name }}</template>
      </el-menu-item>
    </el-menu>
  </main>
</template>

<style scoped lang="scss">
.icon-btn-group {
  width: 64px;
  border-right: solid 1px var(--el-menu-border-color);
  display: flex;
  align-items: center;
  transition: width 0.3s;

  .el-icon {
    width: 50px;
    height: 50px;
  }
}
.main-menu {
  display: flex;
  flex-direction: column;
}
.el-menu--collapse {
  min-height: calc(100vh - 50px);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: calc(100vh - 50px);
}
</style>
