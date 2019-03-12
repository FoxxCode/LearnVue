<template>
    
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <!-- <li class="list-group-item" v-for="index in 5" :key="index">
                Server #{{ index }}
            </li> -->
            <li class="list-group-item" v-for="server in servers" :key="server">
                <div class="row">
                    <div class="col-md-6">
                        <div v-for="(item,key) in server" :key="item.id">
                            <!-- {{key}} : {{item.id}} - {{item.status}}  -->
                            {{key}} : {{item}}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <button @click="triggerDetalle(server.id, server.status)"> Detalles de server</button>
                    </div>
                </div>
                
            </li>
        </ul>
    </div>

</template>

<script>

import {eventBus} from "../../../main"; //comunicación entre componentes hermanos

export default {
    data: function(){
        return {
            servers:[
                {id:1, status: "up"},
                {id:2, status: "down"},
                {id:3, status: "error"},
                {id:4, status: "error"},
                {id:5, status: "up"}
            ]
        };
    },
    methods:{
        triggerDetalle: function(servId, servStatus){
            // this.currentID=servId;
            // this.currentstatus=servStatus;
            eventBus.$emit("detalleTriggered", servId, servStatus);

            //console.log(servId +" - "+ servStatus);
        }
    }
}
</script>

<style scoped>

</style>

