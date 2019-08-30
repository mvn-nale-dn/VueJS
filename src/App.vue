<template>
  <div id="app">
    <Header @nameComponent= "changeComponent"></Header>
    <img alt="Vue logo" src="./assets/logo.png">
    <div v-if="dynamicComponent" class="view">
      <component :is="dynamicComponent" ref="chidUser"></component>
      <button v-if="dynamicComponent" @click="submit">Submit</button>
    </div>
    <Result v-if="result" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Register from './components/Register.vue'
import Info from './components/Info.vue'
import Result from './components/Result.vue'


export default {
  name: 'app',
  components: {
    Header,
    Register,
    Info,
    Result
  },
  data() {
    return {
      dynamicComponent: '',
      result: null
    }
  },
  methods: {
    changeComponent(value) {
      this.dynamicComponent = value;
    },
    submit() {
      const check = this.$refs.chidUser.register
      this.result = check ? check : this.$refs.chidUser.info
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
.view {
  border : 1px solid black;
  width: 500px;
  height: 200px;
  background-color: #00e1ff3b;
  margin: 0 auto;
}
button {
    height: 28px;
    margin: 8px;
    background-color: white;
}

</style>
