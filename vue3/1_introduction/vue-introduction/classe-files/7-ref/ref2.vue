<template>
  <div class="title">对象的解构: toRefs 和 toRef</div>
  <a href="https://www.bilibili.com/video/BV1Za4y1r7KE?p=15&vd_source=b5c04f54b8a7ce0b4d5deef9989f7f9f">教程地址</a>
  <p>
    使用 toRefs 进行对象的拷贝, 这样才能保证响应式
  </p>
  <div>姓名: {{ person.name }}</div>
  <div>年龄: {{ person.age }}</div>
  <button @click="changeName">修改名称</button>
  <button @click="changeAge">修改年龄</button>

  <p>
    可以理解成是赋予引用地址
  </p>
</template>

<script setup>
import {reactive, toRefs} from "vue";

let person = reactive({
  name: '张三',
  age: 18
})

let {name, age} = toRefs(person)


function changeName() {
  name.value += '~'
}

function changeAge() {
  age.value += 1
}


</script>

<style>
body {
  background-color: #1b1b32;
  color: orangered;
}

body * {
  margin: 30px auto;
}

.title {
  font-size: 30px;
}
</style>