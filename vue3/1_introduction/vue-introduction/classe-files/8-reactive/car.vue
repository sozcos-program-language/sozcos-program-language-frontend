<template>
  <div class="person">
    <h2>reactive: 对象类型的响应式</h2>
    <hr>
    <p>一辆{{ car.name }}, 只要{{ car.price }}万</p>

    <hr>

    <h2>游戏列表:</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeName">修改名称</button>
  </div>
</template>

<script setup name="Car">
import {reactive} from "vue";

let car = reactive({
  name: '奔驰',
  price: 100
})

let games = reactive([
  {id: 'aefwerasd1', name: '游戏1'},
  {id: 'aefwerasd2', name: '游戏3'},
  {id: 'aefwerasd3', name: '游戏4'}
])

function changeName() {
  games[0].name = '猪八戒';
}
</script>

<style scoped>
body {
  background-color: #1b1b32;
  color: orangered;
  font-size: 30px;
}

.stage {
  margin: 10px;
  border: 2px solid orangered;
  padding: 10px;
  display: grid;
}

.stage * {
  margin: 10px;
  font-size: 25px;
  font-weight: 800;
}

a {
  color: white;
}
</style>