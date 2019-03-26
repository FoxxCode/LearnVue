<template>
    <div class="container">
        <h1>The user Page</h1>
        <hr>
        <!-- <p>Loaded ID: {{ id }}</p> -->
        <button @click="navigateToHome" class="btn btn-primary">Go to home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id //"$route" se refiere a la ruta actual, "params" el objeto de tal
        }
    },
    methods:{
        navigateToHome(){
            this.$router.push('/');
        }
    }
}
</script>
