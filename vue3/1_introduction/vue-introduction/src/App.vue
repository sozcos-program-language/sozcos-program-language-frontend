<template>
  <Menu/>
  <Content/>
</template>

<script>
import Person from "@/components/Person.vue";
import Menu from "@/components/menu.vue";
import Content from "@/components/content.vue";

export default {
  name: 'APP',
  components: {Content, Person, Menu}, // 引入组件名
}
</script>


<style>
</style>
