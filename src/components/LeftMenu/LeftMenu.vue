<script lang="ts" setup name="LeftMenu">
import rawRoutes from "@/router/routes";
import { menuState } from "@/store/states";
import { Expand, Fold, Menu as IconMenu } from "@element-plus/icons-vue";
import { ElIcon, ElMenu, ElMenuItem } from "element-plus";
import { storeToRefs } from "pinia";

const store = menuState();

const { isCollapse } = storeToRefs(store);

function changeState(state: boolean) {
  store.changeState(state);
}

const routes = rawRoutes.filter((item) => item.name != "index");
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
        ><expand
      /></el-icon>
      <el-icon :size="30" v-else @click="changeState(true)"><fold /></el-icon>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :router="true"
    >
      <el-scrollbar class="menu-scrollbar">
        <el-menu-item v-for="item in routes" :index="item.path">
          <el-icon :size="30" color="red"><icon-menu /></el-icon>
          <template #title>{{ item.name }}</template>
        </el-menu-item>
      </el-scrollbar>
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

.menu-scrollbar {
  height: calc(100vh - 80px);
}
.el-menu-vertical-demo {
  min-height: calc(100vh - 50px);
  &:not(.el-menu--collapse) {
    width: 200px;
  }
}
</style>
