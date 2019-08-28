<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <p v-login="login"></p>
    </div>
    <button class="btn" @click="signin">Sign-in</button>
    <button class="btn" @click="signup">Sign-up</button>
    <button class="btn" @click="change">Change</button>

    <component :is="currentView"></component>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Signin from "./components/Signin.vue";
import Signup from "./components/SignUp.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
    Signin,
    Signup
  },
  data() {
    return {
      currentView: "",
      login: false
    };
  },
  methods: {
    signin() {
      this.currentView = "Signin";
    },
    signup() {
      this.currentView = "Signup";
    },
    change() {
      console.log("hello")
      this.login = !this.login
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  width: 100px;
  height: 20px;
}

/* .close {
  display: inline-block;
} */
</style>
