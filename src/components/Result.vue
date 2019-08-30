<template>
    <div>
        <h2>Result</h2>
        <table>
            <tr >
                <th v-for="(value, key) in $parent.result" :key="key">{{ key }}</th>
                
            </tr>
            <tr>
                <td v-for="(value, key) in $parent.result" :key="key">{{value}}</td>
            </tr>
        </table>
    </div>
</template>
<style>
    table {
        border-collapse: collapse;
        margin: 0 auto
    }

    table, th, td {
        border: 1.5px solid black;
        height: 50px;
        width: 300px;
    }
</style>
