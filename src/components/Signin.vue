<template>
  <Dialog>
    <template>
      <div class="view" v-show="show">
        <h2>SignIn</h2>
        <form>
          <label>Your Name:</label>
          <input type="text">
          <label>Password: </label>
          <input type="password">
          <button type="submit">Submit</button>
        </form>
      </div>
    </template>
  </Dialog>
</template>

<script>
import Dialog from './Dialog.vue'

export default {
  name: 'Signin',
  components: {
    Dialog
  },
  data() {
    return {
      show:true
    }
  },
  methods: {
    close() {
      this.show = false
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
input {
  display: block;
  margin-left: 200px;
}
.view {
  border : 1px solid black;
  width: 500px;
  height: 200px;
  background-color: #00e1ff3b;
 
}
h2 {
  display: inline;
  margin-left: 21px;
}
.close {
  position: absolute;
  margin-left: 44%;
  margin-top: 5px;
}

</style>
