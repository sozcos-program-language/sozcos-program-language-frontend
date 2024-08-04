<template>
  <h1>watch 数据监听</h1>
  <a href="https://www.bilibili.com/video/BV1Za4y1r7KE?p=17&vd_source=b5c04f54b8a7ce0b4d5deef9989f7f9f">教程地址</a>

  <hr>
  <p>
    watch 只监听 ref /reactive /getter 以及 上述内容的数据
  </p>

  <h2>场景1: 监听 ref 定义的 基本类型 数据</h2>
  <div>当前求和: {{ sum }}</div>
  <button @click="changeSum">点我sum+1</button>

  <h2></h2>
</template>

<script setup>
import {ref, watch} from "vue";

let sum = ref(0);

function changeSum() {
  sum.value += 1
}

watch(sum, (newValue, oldValue) => {
  console.log(newValue, oldValue);
})
</script>

<style>
body {
  font-family: "Arial", Helvetica, sans-serif;
  background-color: skyblue;
  margin: 30px auto;
  font-size: 25px;
  padding-left: 30px;
}

</style>