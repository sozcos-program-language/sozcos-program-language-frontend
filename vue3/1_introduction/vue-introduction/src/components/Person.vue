<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <button @click="showTel">产看联系方式</button>
  </div>
</template>

<!--
    通过在标签添加setup属性, 声明这个是vue3语法, 并且通过 name声明当前的组件名称
    组件安装方式: npm i vite-plugin-vue-setup-extend -D
    随后在vite.config.js中进行配置

-->
<script setup name="abc">
/*
  在vue的框架中, 每个页面都是一个组件, 组件要组测到根组件中,
  并且可以通过插件的方式, 能够使用属性的方式来告诉 vue 组件名
 */

// 原始写法
// export default {
//   data() {
//     return {
//       name: '张三',
//       age: '18',
//       tel: 18888888888,
//     }
//   },
//   methods:{
//     showTel(){
//       alert(this.tel)
//     }
//   }
// }

// vue3 写法
let name = '张思';
let age = 23;
let tel = 18899911223;

function showTel() {
  alert(tel)
}
</script>

<style scoped>

</style>