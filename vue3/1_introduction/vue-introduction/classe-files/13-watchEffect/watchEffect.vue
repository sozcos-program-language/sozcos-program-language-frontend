<template>
  <h1>watch 监听</h1>
  <a href="https://www.bilibili.com/video/BV1Za4y1r7KE?p=22&vd_source=b5c04f54b8a7ce0b4d5deef9989f7f9f">教程地址</a>

  <p>
    使用 watchEffect 实现隐式监听
  </p>

  <hr>

  <h2>当温度达到60℃, 水位达到 80cm 的时候, 向服务器发送请求</h2>
  <div>温度: {{ wendu }} ℃</div>
  <div>水位: {{ shuiwei }} cm</div>
  <button @click="changeName">添加温度</button>
  <button @click="changeAge">添加水位</button>

  <h2></h2>
</template>

<script setup>
import {ref, watchEffect} from "vue";

let wendu = ref(0)
let shuiwei = ref(0)

function changeName() {
  wendu.value += 10
}

function changeAge() {
  shuiwei.value += 10
}

// watch 需要显式的声明监听的属性, 当属性多的时候, 这样代码就会不好看, 因此使用 watchEffect 来解决这个问题
// watch([wendu, shuiwei], (newValue) => {
//   let [newWendu, newShuiwei] = newValue;
//   if (newWendu >= 60 || newShuiwei >= 80) {
//     console.log('发送请求到服务器');
//   }
// })


watchEffect(() => {
  if (wendu.value >= 60 || shuiwei.value >= 80) {
    console.log('发送请求到服务器');
  }
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