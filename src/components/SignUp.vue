<template>
    <Dialog>
      <template>
        <div class="view" v-show="show">
            <h2>SignUp</h2>
            <form>
              <label>UserName:</label>
              <input type="text">
              <label>NickName:</label>
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
  name: 'SignUp',
  components: {
    Dialog
  },
   data() {
    return {
      show:true
    }
  },
  
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
