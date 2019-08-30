<template>
    <div>
        <h2>Register</h2>
        <label>Email: </label>
        <input v-model="register.email" />
        <br />
        <label>Password: </label>
        <input type="password" v-model="register.password"/>
        <br />
        <label>Phone: </label>
        <input v-model="register.phone"/>
        <br />
        <label>Name: </label>
        <input v-model="register.name"/>
    </div>
</template>
<script>
export default {
    name: 'Register',
    data() {
        return {
            register: {
                email:'',
                password:'',
                phone: null,
                name: ''
            }
        }
    }
}

</script>
