<template>
    <div>
         <li class= "item" v-for="item in listItem" v-bind:key="item" >
            <div class= "item-left">
                <p> <strong>{{ item.reciever }} </strong></p>
                <p> {{ item.content}} </p>
            </div>
            <span class="status">{{ item.status }}</span>
            <span> {{ item.money }} <strong>VNĐ</strong> </span>
        </li>
    </div>
</template>
<script>
    export default {
        props: {
            listItem: Array
        }
    }
</script>
<style>
    .item-left {
        display: inline-block;
        padding-right: 300px;
    }
    .item {
        border-bottom: 1px solid black;
        margin-left: -40px;
    }
    li:last-child{
        border-bottom: none
        
    }
    li:first-child{
        border-top: 1px solid black;
    
    }
    .status {
        color: rgb(0, 89, 255);
        font-weight: bold;
        padding-right: 200px
    }

</style>
