<template>

    <div>
        <div class="col-xs-12 col-sm-6">
            <p>Server Details are currently not updated</p>
        </div>
        <div>
            <h1>Server Details</h1>
            <br>
            <p>Server ID: {{servId}}</p>
            <br>
            <p>Server STATUS: {{servStatus}}</p>
            <br>
            <button @click="levantarServer">Levantar server</button>
        </div>
    </div>
         
</template>

<script>

import { eventBus } from '../../../main';

export default {
    data: function(){
        return {
            // currentID:0,
            // currentstatus:"normal",
            servId:0,
            servStatus:""
        }
    },
    // created:function(){
    //     eventBus.$on("detalleTriggered", function(objServer){//ES5
    //             this.servId=objServer.Id;
    //             this.servStatus=objServer.Status
    //             console.log(this.servId,this.servStatus);
    //     });
    // }
    created(){
        eventBus.$on("detalleTriggered", (objServer) => {
            this.servId=objServer.Id;
            this.servStatus=objServer.Status
            // console.log(this.servId,this.servStatus);
        });
    },

    methods:{
        levantarServer(){
            this.servStatus="up";
            eventBus.$emit("serverShutted", this.servStatus);
        }
    }
}
</script>


<style>
    
</style>


