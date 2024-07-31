<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <button @click="showTel">产看联系方式</button>
  </div>
</template>


<script>
export default {
  name: "Person",
  data() {
    return {
      name: '张三',
      age: '18',
      tel: 18888888888,
    }
  },
  methods:{
    showTel(){
      alert(this.tel)
    }
  }
}
</script>

<style scoped>

</style>