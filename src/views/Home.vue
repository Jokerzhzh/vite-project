<script setup lang="ts" name="Home"></script>

<template>
  <main class="main-content">
    <LeftMenu />
    <!-- <MyMenu /> -->
    <div class="main-content__right">
      <TopBar class="topbar" />
      <div class="content">
        <el-scrollbar class="content-scrollbar">
          <router-view />
        </el-scrollbar>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main-content {
  display: flex;
  flex-direction: row;
}
.main-content__right {
  background-color: #e5e5e5;
  width: 100%;
}
.content {
  margin: 10px;
  padding: 5px;
  background: white;
  border-radius: 5px;
  height: calc(100vh - 70px);
  overflow-y: auto;
}
.main-scrollbar {
  height: 100vh;
  width: 100%;
}
.content-scrollbar {
  height: calc(100vh - 80px);
}
</style>
