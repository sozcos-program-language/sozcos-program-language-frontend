<template>
  <h1>watch 监听</h1>
  <a href="https://www.bilibili.com/video/BV1Za4y1r7KE?p=20&vd_source=b5c04f54b8a7ce0b4d5deef9989f7f9f">教程地址</a>

  <p>
    如果需要 watch 监听对象的属性, 此时应该使用 getter 函数才能有效
  </p>

  <hr>
  <div>姓名: {{ person.name }}</div>
  <div>年龄: {{ person.age }}</div>
  <div>汽车: {{ person.car.c1 }}, {{ person.car.c2 }}</div>
  <button @click="changeName">修改名称</button>
  <button @click="changeAge">修改年龄</button>
  <button @click="changec1">修改第一台车</button>
  <button @click="changec2">修改第二台车</button>
  <button @click="changec3">修改整台车</button>

  <h2></h2>
</template>

<script setup>
import {reactive, watch} from "vue";

let person = reactive({
  name: '张三',
  age: 19,
  car: {
    c1: '奔驰',
    c2: '宝马'
  }
})

function changeName() {
  person.name += '~'
}

function changeAge() {
  person.age += 1
}

function changec1() {
  person.car.c1 = '奥迪';
}

function changec2() {
  person.car.c2 = '大众';
}

function changec3() {
  person.car = {c1: '雅迪', c2: '爱玛'}
}

// 通过getter函数类实现对对象的属性进行监听
// watch(() => person.name, (newValue, oldValue) => {
//   console.log('监听person.name:', newValue, oldValue);
// })

// 监听对象的内部对象
// 当没有使用 getter 函数的时候, 实际上监听的是对象的地址值, 只有使用了 getter 函数, 才会监听内部对象的属性
// watch(person.car, (newValue, oldValue) => {
// watch(() => person.car, (newValue, oldValue) => {
//   console.log('监听person.car:', newValue, oldValue);
// }, {deep: true});// 开启了深度监听, 这样监听对象的内部属性变化的时候也会监听到

// 使用数组来监听多个属性
watch([() => person.name, () => person.car], (newValue, oldValue) => {
  console.log('监听person.car:', newValue, oldValue);
}, {deep: true});
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