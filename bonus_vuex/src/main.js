import Vue from 'vue'
import App from './App.vue'

import {store} from './store/store'

new Vue({
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
