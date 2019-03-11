import Vue from 'vue'
import App from './App.vue'
import Header from './components/ejOneComponents/Header.vue'
import ServerDetails from './components/ejOneComponents/ServerDetails.vue'
import ServerManage from './components/ejOneComponents/ServerManage.vue'
import User from './components/ejTwoComInteract/User.vue'


Vue.component("app-header", Header);
Vue.component("app-server-details", ServerDetails);
Vue.component("app-server-manage", ServerManage);
Vue.component("User", User);


export const eventBus = new Vue(); // Instancia para la comunicación entre componentes hermanos
                                   // usada tambien para almacenar variables y funciones "globales" para los componentes

new Vue({
  el: '#app',
  render: h => h(App) // renderear el archivo vue principal
})
