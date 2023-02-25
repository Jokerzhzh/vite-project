<script setup lang="ts" name="FileAndFolder">
import { file } from "@/utils";
import { UploadFilled } from "@element-plus/icons-vue";
import { ElButton, ElIcon, ElTable, ElTableColumn } from "element-plus";
import { ref } from "vue";

const fileData = ref<File[]>([]);

interface files {
  [key: number]: File;
}

function addFile(params: files | Array<File> | any) {
  for (const key in params) {
    fileData.value.push(params[key]);
  }
}

function emptyData() {
  fileData.value = [];
}

function selectFile() {
  new Promise((resolve: any, reject) => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.click();
    input.onchange = function (e: any) {
      resolve(e.target.files);
    };
  }).then((resolve: any) => {
    addFile(resolve);
  });
}

function selectFolder() {
  new Promise((resolve: any, reject) => {
    const input = document.createElement("input");
    input.type = "file";
    input.webkitdirectory = true;
    input.click();
    input.onchange = function (e: any) {
      resolve(e.target.files);
    };
  }).then((resolve: any) => {
    addFile(resolve);
  });
}

function clickToUpload() {
  new Promise((resolve: any, reject) => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.webkitdirectory = true;
    input.click();
    input.onchange = function (e: any) {
      resolve(e.target.files);
    };
  }).then((resolve: any) => {
    addFile(resolve);
  });
}

const isDraging = ref(false);

function dragInHandler(e: DragEvent) {
  if (!e.dataTransfer?.types.includes("Files")) {
    return;
  }
  e.preventDefault();
  isDraging.value = true;
}
function dragLeaveHandler(e: DragEvent) {
  e.preventDefault();
  isDraging.value = false;
}
async function dropHandler(e: any) {
  e.preventDefault();
  isDraging.value = false;

  let results = await Promise.all(
    [...e.dataTransfer.items].map((item) => {
      return handleEntry(item.webkitGetAsEntry());
    })
  );

  results = results.flat(Infinity);

  addFile(results);
}

function handleEntry(entry: any) {
  return new Promise((resolve) => {
    if (entry.isFile) {
      entry.file(resolve);
      return;
    }
    const dirReader = entry.createReader();
    dirReader.readEntries(async (entries: any) => {
      resolve(await Promise.all(entries.map(handleEntry)));
    });
  });
}
</script>

<template>
  <div>
    <el-button type="primary" @click="selectFile">选择文件</el-button>
    <el-button type="primary" @click="selectFolder">选择文件夹</el-button>
    <el-button type="danger" @click="emptyData">清空</el-button>
    <div
      id="upload"
      class="upload"
      @click="clickToUpload"
      @dragenter="dragInHandler"
      @dragover="dragInHandler"
      @drop="dropHandler"
      @dragleave="dragLeaveHandler"
    >
      <el-icon class="el-icon--upload" :size="40" color="#a8abb2"
        ><upload-filled
      /></el-icon>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
    </div>
    <el-table :data="fileData" stripe border>
      <el-table-column prop="name" label="Name" />
      <el-table-column label="Type">
        <template #default="scope">
          <div>{{ file.getType(scope.row.name) }}</div>
        </template>
      </el-table-column>
      <el-table-column label="Size">
        <template #default="scope">
          <div>{{ file.getSize(scope.row.size) }}</div>
        </template>
      </el-table-column>
      <el-table-column label="Parent">
        <template #default="scope">
          <div>{{ file.getParent(scope.row.webkitRelativePath) }}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped lang="scss">
.upload {
  width: 300px;
  height: 150px;
  margin: 20px;
  border: 1px dashed #d9d9d9;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  em {
    color: #409eff;
  }
}
</style>
