<template>
  <div class="person">
    <h1>使用 Objects.assign 克隆响应对象</h1>
    <p>
      当一个响应对象被重新赋值后, 它就不是一个响应对象, 要使用 Objects.assign 进行拷贝
    </p>

    <hr>

    <div>品牌: {{ car.name }} 价格: {{ car.price }}</div>
    <button @click="changePrice">修改名称</button>
  </div>
</template>

<script setup name="Car">
import {reactive, ref} from "vue";

let car = reactive({
  name: '宝马',
  price: 100
})

function changePrice() {
  car = Object.assign(car, {name: '奔驰', price: 1});
}
</script>

<style scoped>
body {
  background-color: #1b1b32;
  color: orangered;
  font-size: 30px;
}

.person * {
  margin: 10px;
  font-size: 25px;
  font-weight: 800;
}
</style>