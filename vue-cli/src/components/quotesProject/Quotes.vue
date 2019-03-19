<template>
    <div class="container">
        <app-header></app-header>
        <app-new-quote></app-new-quote>
        <section style="text-align:center" class="alert alert-info">Info: Click on a Quote to delete it</section>
    </div>
</template>

<script>
import Header from './Header'
import NewQuote from './NewQuote'

export default {
    components:{
        appHeader:Header,
        appNewQuote:NewQuote
    }
}
</script>

<style>
    .panel-body {
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: #6e6e6e;
    }

    .quote {
        cursor: pointer;
    }

    .quote:hover {
        background-color: #ffe2e2;
    }
</style>


