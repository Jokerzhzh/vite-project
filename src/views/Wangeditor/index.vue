<script setup lang="ts" name="Wangeditor">
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { onBeforeUnmount, onMounted, ref, shallowRef } from "vue";

const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref("<p>hello</p>");

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = "<p>模拟 Ajax 异步设置内容</p>";
  }, 1500);
});

const toolbarConfig = {};
const editorConfig = { placeholder: "请输入内容..." };

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const mode = ref("default"); // 或 'simple'

const handleCreated = (editor: any) => {
  editorRef.value = editor;
  console.log("created", editor);
};
const handleChange = (editor: any) => {
  console.log("change:", editor.children);
};
const handleDestroyed = (editor: any) => {
  console.log("destroyed", editor);
};
const handleFocus = (editor: any) => {
  console.log("focus", editor);
};
const handleBlur = (editor: any) => {
  console.log("blur", editor);
};
const customAlert = (info: any, type: any) => {
  alert(`【自定义提示】${type} - ${info}`);
};
const customPaste = (editor: any, event: any, callback: any) => {
  console.log("ClipboardEvent 粘贴事件对象", event);
  // const html = event.clipboardData.getData('text/html') // 获取粘贴的 html
  // const text = event.clipboardData.getData('text/plain') // 获取粘贴的纯文本
  // const rtf = event.clipboardData.getData('text/rtf') // 获取 rtf 数据（如从 word wsp 复制粘贴）

  // 自定义插入内容
  editor.insertText("xxx");

  // 返回 false ，阻止默认粘贴行为
  event.preventDefault();
  callback(false); // 返回值（注意，vue 事件的返回值，不能用 return）

  // 返回 true ，继续默认的粘贴行为
  // callback(true)
};
</script>

<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
      @onChange="handleChange"
      @onDestroyed="handleDestroyed"
      @onFocus="handleFocus"
      @onBlur="handleBlur"
      @customAlert="customAlert"
      @customPaste="customPaste"
    />
  </div>
</template>

<style scoped lang="scss"></style>
