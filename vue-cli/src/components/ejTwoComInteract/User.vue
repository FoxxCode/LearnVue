<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>User name: {{name}}</p>
        <p>User Age: {{age}}</p>
        <button @click="changeName">Change my Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name" 
                                 @nameWasReset="name=$event" 
                                 :resetearFn="resetearNombre"
                                 :userAge="age">
                </app-user-detail> 
                <!--Método 1 para pasar datos de Component hijo a padre-->
                <!--"@nameWasReset" se refiere al evento ejecutado cuando el boton del componente hijo
                    se clickee, debido a que se esta escuchando a la variable "name", se pasa una funcion
                    o variable como parametro al componente padre , en este caso es la misma variable "this.name" 
                    cambiada, y se la referencia desde el componente padre con "$event"-->

                <!--Método 2 para pasar datos de Component hijo a padre (preferible)-->
                <!--Se asigna la funcion callback "resetearFn" que contiene una funcion creada
                    en el componente padre y que se la pasa como otro prop del componente hijo-->
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue'
    import UserEdit from './UserEdit.vue'   

    export default {
        components: {
            appUserDetail: UserDetail, //vue interpreta camelCase como guiones en el template
            appUserEdit: UserEdit
        },
        data: function(){
            return {
                name:"Manuel",
                age:25
            }
        },
        methods:{
            changeName: function(){
                this.name="Diego";
            },
            resetearNombre: function(){
                this.name="Manuel"
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>