<template>
  <h1>watch 监听</h1>
  <a href="https://www.bilibili.com/video/BV1Za4y1r7KE?p=19&vd_source=b5c04f54b8a7ce0b4d5deef9989f7f9f">教程地址</a>
  <p>
    watch 监听 reactive 对象类型数据
  </p>
  <hr>
  <div>姓名: {{ person.name }}</div>
  <div>年龄: {{ person.age }}</div>
  <button @click="changeName">修改名称</button>
  <button @click="changeAge">修改年龄</button>
  <button @click="changePerson">修改整个人</button>

  <h2></h2>
</template>

<script setup>
import {reactive, watch} from "vue";

let person = reactive({
  name: '张三',
  age: 19
})

function changeName() {
  person.name += '~'
}

function changeAge() {
  person.age += 1
}

function changePerson() {
  Object.assign(person, {name: '李四', age: 90})
}

// 对于 reactive 声明的对象, watch 默认开启深度监视
// 案例中修改的都是对象的属性, 因此地址值都是一样的, 所以新旧对象都是一样的
watch(person, (newValue, oldValue) => {
  console.log('监听person:', newValue, oldValue);
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

.active {
  background-color: orangered;
}

</style>