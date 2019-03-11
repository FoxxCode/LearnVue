<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{userAge}}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import {eventBus} from "../../main"; //comunicación entre componentes hermanos

    export default {
        props:["userAge"],
        methods:{
            editAge: function(){ //enviar funcion para la manipulacion de variable desde componente hermano
                this.userAge=30;
                eventBus.$emit("ageWasEdited", this.userAge);
            }
        }
    }
</script>


<style scoped>
    div {
        background-color: lightgreen;
    }
</style>