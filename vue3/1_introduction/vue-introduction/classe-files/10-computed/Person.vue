<template>
  <div class="title">compute 计算属性</div>
  <a href="https://www.bilibili.com/video/BV1Za4y1r7KE/?p=16&vd_source=b5c04f54b8a7ce0b4d5deef9989f7f9f">教程地址</a>
  姓: <input type="text" v-model="firstName"><br>
  名: <input type="text" v-model="lastName"><br>
  <div>全名: {{ fullName }}</div>

  <button @click="changeName">修改全名</button>

</template>

<script setup>
import {computed, ref} from "vue";

let firstName = ref('zhang')
let lastName = ref('san')

// 计算属性是只读的
// let fullName = computed(() => {
//   return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
// })

// 可读可写的属性
let fullName = computed({
  get() {
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
  },
  set(val) {
    const [s1, s3] = val.split('-');
    firstName.value = s1
    lastName.value = s3
  }
});


function changeName() {
  fullName.value = 'li-si';
}


</script>

<style>
body {
  color: orangered;
}

body * {
  margin: 30px auto;
}

.title {
  font-size: 30px;
}
</style>