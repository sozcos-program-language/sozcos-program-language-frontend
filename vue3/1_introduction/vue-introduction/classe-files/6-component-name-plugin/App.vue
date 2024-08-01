<template>
  <div class="app">
    <h1>你好啊</h1>
  </div>
  <Person/>
</template>

<script>
import Person from "@/components/Person.vue";

export default {
  name: 'APP',
  components: {Person}, // 引入组件名
}
</script>


<style>
.app {
  background-color: #1b1b32;
  color: orangered;
}
</style>
