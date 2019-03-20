import Vue from 'vue'
import App from './App.vue'

//Part 1

import Header from './components/ejOneComponents/Header.vue'
import Server from './components/ejOneComponents/server/Server.vue'
import ServerDetails from './components/ejOneComponents/server/ServerDetails.vue'
import ServerManage from './components/ejOneComponents/ServerManage.vue'
import User from './components/ejTwoComInteract/User.vue'
import Quotes from './components/quotesProject/Quotes.vue'


Vue.component("app-header", Header);
Vue.component("app-server", Server);
Vue.component("app-server-details", ServerDetails);
Vue.component("app-server-manage", ServerManage);
Vue.component("User", User);
Vue.component("Quotes", Quotes);


//Part 2

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { routes } from './routes'

const router = new VueRouter({
  routes
});
//////////////////////

export const eventBus = new Vue(); // Instancia para la comunicación entre componentes hermanos
                                   // usada tambien para almacenar variables y funciones "globales" para los componentes

new Vue({
  el: '#app',
  router,
  render: h => h(App) // renderear el archivo vue principal
})
