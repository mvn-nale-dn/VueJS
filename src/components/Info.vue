<template>
    <div>
        <h2>Info: </h2>
        <label>Name: </label>
        <input v-model="info.name" />
        <br />
        <label>Address: </label>
        <input v-model="info.address"/>
        <br />
        <label>ID: </label>
        <input v-model="info.id"/>
    </div>
</template>
<script>
export default {
    name: 'Info',
   data() {
       return {
           info: {
               name: '',
               address: '',
               id: ''
           }
       }
   }
}
</script>
<style>
  
</style>
