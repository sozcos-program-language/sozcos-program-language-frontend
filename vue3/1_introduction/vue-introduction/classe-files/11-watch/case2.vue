<template>
  <h1>watch 监听</h1>
  <a href="https://www.bilibili.com/video/BV1Za4y1r7KE/?p=18&spm_id_from=pageDriver&vd_source=b5c04f54b8a7ce0b4d5deef9989f7f9f">教程地址</a>
  <hr>
  <div>姓名: {{ person.name }}</div>
  <div>年龄: {{ person.age }}</div>
  <button @click="changeName">修改名称</button>
  <button @click="changeAge">修改年龄</button>
  <button @click="changePerson">修改整个人</button>

  <h2></h2>
</template>

<script setup>
import {ref, watch} from "vue";

let person = ref({
  name: '张三',
  age: 19
})

function changeName() {
  person.value.name += '~'
}

function changeAge() {
  person.value.age += 1
}

function changePerson() {
  person.value = {name: '李四', age: 90}
}

// 监听 person 对象, 监听的是对象的地址值, 当对象的内部属性变更的时候, 不会被监听到
// watch(person, (newValue, oldValue) => {
//   console.log('监听person:', newValue, oldValue);
// })

// 通过开启深度监听, 在对象的属性值发生改变的时候, 但是此时, newValue 和 oldValue 都是新值, 因为他们是同一个对象
watch(person, (newValue, oldValue) => {
  console.log('监听person:', newValue, oldValue);
}, {deep: true})


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