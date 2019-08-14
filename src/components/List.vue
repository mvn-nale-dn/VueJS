<template>
    <div class = "list" v-show="listItem.length >0">
        <h2>{{title}}</h2>
        <ul>
             <!-- <li v-for="item in listItem" v-bind:key="item.id">{{item.money}}{{item.status}}</li> -->
            <Item :listItem= "listItem"></Item>
        </ul>
    </div>
</template>

<script>
import Item from './Item.vue'
export default {
    props: {
        title: String,
        listItem: Array
    },
    components: {
        Item
    }
}
</script>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.list {
     border: 1px solid black;
  height: 306px;
    margin-left: 300px;
    margin-right: 300px;
}
ul {
    list-style: none;
}
</style>
