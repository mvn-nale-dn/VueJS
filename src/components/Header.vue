<template>
    <div>
        <button @click="action('Register')">Register</button>
        <button @click="action('Info')">Info</button>
    </div>
</template>
<script>
export default {
    name: 'Header',
    methods: {
        action(val) {
            this.$emit('nameComponent', val)
        }
    }
}

</script>
