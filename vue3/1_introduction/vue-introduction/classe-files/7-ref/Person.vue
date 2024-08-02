<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <button @click="modifyName">修改名称</button>
    <button @click="modifyAge">修改年龄</button>
    <button @click="showTel">差看联系方式</button>
  </div>
</template>

<!--
  在vue中, 如果一个数据需要响应式的处理, 就是用 ref() 抱起来
  在 js 使用的地方要使用显式的使用 xxx.value 来进行操作
-->
<script setup name="Person">
import {ref} from "vue";

let name = ref('张思');
let age = ref(23);
let tel = 18899911223;

function showTel() {
  alert(tel)
}

function modifyName() {
  name.value = 'zhangsanf';
}

function modifyAge() {
  age.value += 1;
}
</script>

<style scoped>
body {
  background-color: #1b1b32;
  color: orangered;
}

.stage {
  margin: 10px;
  border: 2px solid orangered;
  padding: 10px;
  display: grid;
}

.stage * {
  margin: 10px;
  font-size: 25px;
  font-weight: 800;
}

a {
  color: white;
}
</style>