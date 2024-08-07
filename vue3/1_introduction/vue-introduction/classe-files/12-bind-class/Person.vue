<template>
  <h1>样式绑定</h1>
  <a href="https://www.bilibili.com/video/BV1Za4y1r7KE?p=17&vd_source=b5c04f54b8a7ce0b4d5deef9989f7f9f">教程地址</a>

  <hr>
  <p>
    watch 只监听 ref /reactive /getter 以及 上述内容的数据
  </p>

  <div :class="{active: isActive, 'text-danger': hasError }">我是样式</div>
  <button @click="changeSum">点我启用样式</button>

  <h2></h2>
</template>

<script setup>
import {ref} from "vue";

let isActive = ref(false);
let hasError = ref(true);

function changeSum() {
  isActive.value = !isActive.value
  hasError.value = !hasError.value
}

</script>

<style>
body {
  font-family: "Arial", Helvetica, sans-serif;
  background-color: skyblue;
  margin: 30px auto;
  font-size: 25px;
  padding-left: 30px;
}

.active {
  background-color: orangered;
}

</style>