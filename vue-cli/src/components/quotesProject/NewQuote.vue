<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-6">
                <b>Quote</b>
                <br>
                <textarea name="" id="" cols="60" rows="5" v-model="newQuote"></textarea>
                <br>
                <button @click="añadirQuote" class="btn btn-primary" >Add Quote</button>
            </div>
            <div class="col-md-2"></div>
            <br>
        </div>
        <br>
        <div class="row">
            <app-quote-grid>
                <slot>
                    <div class="col-md-12">
                        <div class="card" v-for="quote in quotes" :key="quote">
                            <div class="card-body">
                                {{quote}}
                            </div>
                        </div>
                    </div>
                </slot>
            </app-quote-grid>
        </div>
    </div>
</template>

<script>

import QuoteGrid from './QuoteGrid'

export default {
    components:{
        appQuoteGrid:QuoteGrid
    },
    data:function(){
        return {
            quotes:[],
            newQuote:"aasdasf",
            numeroQuotes:0
        }
    },
    methods:{
        añadirQuote:function(){
            console.log(this.newQuote);
            this.quotes.push(this.newQuote);
        }
    }
}
</script>

