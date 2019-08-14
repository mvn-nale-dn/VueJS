<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <b>Money: </b>
      <input id="money" type="text" name="" v-model="money">
      <br/><br />
      <b>Status: </b>
      <input type="radio" name="status" value="Recive" v-model="status">Recieve
      <input type="radio" name="status" value="Send" v-model="status">Send
      <br/><br />
      <b>Content: </b>
      <textarea id="content" type="text" name="" v-model="content"></textarea>
      <br/><br />
      <b>Reciever: </b>
      <input id="reciever" type="text" name="" v-model="reciever">
      <br/><br />
      <button @click="getList">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: '',
      reciever: '',
      status: null,
      content: ''
    }
  },
  props: {
    msg: String,
  },
  methods: {
    getList() {
      var item = {
        reciever: this.reciever,
        money: this.money,
        status: this.status,
        content: this.content
      }
      this.$emit("pushItem", item);

      this.money = '';
      this.reciever = '';
      this.status = null;
      this.content = '';
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  background-color: #42b983;
  height: 30px;
  width: 80px;
  border-radius: 4px;
  font-size: 20px;
  color: #FFFFFF;
}
.hello {
  border: 1px solid black;
  height: 350px;
  margin-left: 300px;
  margin-right: 300px;

}
b {
  padding-right: 50px
}
</style>
