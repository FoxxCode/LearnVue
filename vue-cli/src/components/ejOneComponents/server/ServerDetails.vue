<template>

    <div>
        <div class="col-xs-12 col-sm-6">
            <p>Server Details are currently not updated</p>
        </div>
        <div>
            <h1>Server Details</h1>
            <br>
            <p>Server ID: {{serv.id}}</p>
            <br>
            <p>Server STATUS: {{serv.status}}</p>
            <br>
            <button>Levantar server</button>
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
            serv:null
        }
    },
    created:function(){
            eventBus.$on("detalleTriggered", function(objServer){//ES5
                    this.serv=objServer.Id;
                    this.serv=objServer.Status;
            });
    }
    // created:function(){
    //         eventBus.$on("triggerDetalle", (arrServer) => {
    //             this.currentID=arrServer[0];
    //             this.currentstatus=arrServer[1];
    //         });

    //         console.log(this.currentID+ "-" + this.currentstatus);
    // }
    // methods:{
    //     receivedDetalle: function(){
    //         // eventBus.$on("triggerDetalle", function(servId, servStatus){//ES5
    //         //     this.currentID=servId;
    //         //     this.currentstatus=servStatus;
    //         // });

    //         eventBus.$on("triggerDetalle", (servId, servStatus) => {
    //              this.currentID=servId;
    //              this.currentstatus=servStatus;
    //         })
    //     }
    // }
}
</script>


<style>
    
</style>


