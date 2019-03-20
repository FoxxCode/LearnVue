<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-6">
                <b>Quote</b>
                <br>
                <textarea name="" id="" cols="60" rows="5" v-model="newQuote" ></textarea>
                <br>
                <button @click="añadirQuote()" class="btn btn-primary" >Add Quote {{triggerProgress}}</button>
            </div>
            <div class="col-md-2"></div>
            <br>
        </div>
        <br>
        <div class="row">
            <app-quote-grid>
                <div class="col-md-12" v-if="limiteQuotes(quotes.length)">
                    <div class="card" v-for="(quote,index) in quotes" :key="quote" style="width: 18rem; height: 6rem" >
                        <div class="card-body" @click="deleteQuote(index)">
                            {{quote}}
                        </div>
                    </div>
                </div>
                <template v-else>

                </template>
            </app-quote-grid>
        </div>
        <br>
    </div>
</template>

<script>

import QuoteGrid from './QuoteGrid'
import {eventBus} from "../../main";

export default {
    components:{
        appQuoteGrid:QuoteGrid
    },
    data:function(){
        return {
            quotes:[],
            newQuote:"",
            numeroQuotes:0
        }
    },
    methods:{
        añadirQuote:function(){
            console.table(this.quotes);
            this.quotes.push(this.newQuote);
        },
        deleteQuote:function(indx){
            this.quotes.splice(indx,1);
        },
        limiteQuotes:function(allquotes){
            if(allquotes+1>10){
                alert("Excedido el límite de Quotes!!!");
            }
            return true;
        }
    },
    computed:{
        triggerProgress:function(){
            eventBus.$emit("progressTriggered", this.quotes.length);
        }
    }
}
</script>

