import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Buefy from 'buefy'
import './main.scss'
import '@mdi/font/css/materialdesignicons.min.css'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
