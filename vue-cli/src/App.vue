<template>
  <div class="container">
    <!-- <app-header></app-header>
    <hr>
    <div class="row">
      <app-server></app-server>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-server-manage></app-server-manage> -->

    <!-- <User></User> -->

    <!-- <Quotes></Quotes> -->

    <hr>

    <h1>Routing</h1>
    <br>
    <app-header></app-header>
    <br>
    <router-view></router-view>
  </div>

</template>

<script>
  import Header from "./components/routerExercise/Header.vue";

  export default{
    components:{
      appHeader:Header
    }
  }
</script>

<style>

</style>
