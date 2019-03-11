<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{name}}</p>
        <p>User Age: {{userAge}}</p>
        <hr>
        <button @click="switchName">Cambiar nombre desde componente hijo</button>
        <hr>
        <button @click="resetName">Resetear nombre para componentes padre e hijo Método 1</button>
        <br><br>
        <button @click="resetearFn">Resetear nombre para componentes padre e hijo Método 2</button>
        <hr>
    </div>
</template>

<script>

import {eventBus} from "../../main"; //comunicación entre componentes hermanos


export default {
    props:{
        name:String,
        resetearFn:Function, //Método 2 para pasar datos de Component hijo a padre
        userAge:Number
    },

    methods:{
        switchName:function(){
            this.name="Nombre cambiado desde el child-component"
        },
        resetName:function(){ //Método 1 para pasar datos de Component hijo a padre
            this.name="Manuel";
            this.$emit("nameWasReset", this.name); // PERMITE ESCUCHAR LA "PROP" y EJECUTAR/PASAR una FUNCION O VARIABLE Al COMPONENTE PADRE
                          // 1er Parametro: nombre de evento a asignar a la etiqueta hija
                          // 2do Parametro: variable o funcion a pasar o ejecutar 
        }
    },

    created:function(){ //jalar funcion para la manipulacion de variable desde componente hermano
        eventBus.$on("ageWasEdited", (ageData) => this.userAge=ageData); //ES6 arrow function
                                                                         //"$on" permite recibir "$emit"
    }
}
</script>


<style scoped>
    div {
        background-color: lightcoral;
    }
</style>