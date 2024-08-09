<template>
  <h1>TS 的接口, 泛型, 自定义类型</h1>
  <a href="https://www.bilibili.com/video/BV1Za4y1r7KE?p=24&vd_source=b5c04f54b8a7ce0b4d5deef9989f7f9f">教程地址</a>

  <p>
    ???
  </p>

  <hr>

</template>

<script setup lang="ts" name="Person">
// 引入接口的时候必须使用type来声明
// @符号表示从src开始向下找目录
import {type Person, type personList, type persons} from "@/types";

// 声明一个 person 类型的对象
let person: Person = {id: 'asdf001', name: '张三', age: 90}

// 声明一个数组类型为 Person 的变量
let persons: Array<Person> = [
  {id: 'asdf001', name: '张三', age: 90},
  {id: 'asdf002', name: '李四', age: 10},
  {id: 'asdf003', name: '王五', age: 20}
]


</script>

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