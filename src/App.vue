<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Form msg="Quản Lí Chi Tiêu" @pushItem="addItem"/>
    <List title="Danh Sách" :listItem="listItem" />
  </div>
</template>

<script>
import Form from './components/Form.vue'
import List from './components/List.vue'
export default {
  name: 'app',
  components: {
    Form,
    List
  },
  data() {
    return {
      listItem:[]
    }
  },
  methods: {
    addItem(item) {
      this.listItem.unshift(item);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
