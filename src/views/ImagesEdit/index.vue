<script setup lang="ts" name="ImagesEdit">
import "tui-image-editor/dist/tui-image-editor.css";
import { onMounted } from "vue";

// var locale_ru_RU = {
//   // override default English locale to your custom
//   Crop: "Обзрезать", // as result default English inscription will be translated into Russian
//   "Delete-all": "Удалить всё",
//   // etc...
// };

// import locale_ru_RU from "tui-image-editor/dist/locale/ru-RU.js";
const locale_zh_CN = {
  // override default English locale to your custom
  Crop: "裁剪", // as result default English inscription will be translated into Russian
  "Delete-all": "删除所有",
  // etc...
};

onMounted(() => {
  // const imageEditor = new ImageEditor("#tui-image-editor", {
  //   includeUI: {
  //     loadImage: {
  //       path: image,
  //       name: "SampleImage",
  //     },
  //     // theme: blackTheme, // or whiteTheme
  //     initMenu: "filter",
  //     menuBarPosition: "bottom",
  //     // locale: locale_zh_CN,
  //   },
  //   selectionStyle: {
  //     cornerSize: 20,
  //     rotatingPointOffset: 70,
  //   },
  // });
});
</script>

<template>
  <div>
    <!-- <div id="tui-image-editor"></div> -->
  </div>
</template>

<style scoped lang="scss">
#tui-image-editor {
  width: 100%;
  height: calc(100vh - 80px) !important;
}
</style>
