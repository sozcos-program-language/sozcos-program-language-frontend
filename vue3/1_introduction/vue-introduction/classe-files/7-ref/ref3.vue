<template>
  <h1>watch 监听</h1>
  <a href="https://www.bilibili.com/video/BV1Za4y1r7KE?p=23&vd_source=b5c04f54b8a7ce0b4d5deef9989f7f9f">教程地址</a>

  <p>
    标签的 ref 属性
  </p>

  <hr>

  <div ref="wendu">温度</div>
  <button @click="changeName">添加温度</button>

  <h2></h2>
</template>

<script setup>
import {ref, watchEffect} from "vue";
let wedu = ref()

function changeName() {
  console.log(wedu);
}

</script>
<!-- scoped 表示样式只会应用到当前组件中-->
<style scoped>
body {
  font-family: "Arial", Helvetica, sans-serif;
  background-color: skyblue;
  margin: 30px auto;
  font-size: 25px;
  padding-left: 30px;
}

button {
  margin: 10px;
  font-size: 25px;
}

</style>