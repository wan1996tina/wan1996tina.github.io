import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import './style/style.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'pattern.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCoffee, faAngleDoubleDown, faHome, faUser, faTools, faNewspaper, faAddressCard, faPalette, faThLarge, faMagic } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons'
// import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
library.add(faCoffee, faGooglePlus, faAngleDoubleDown, faHome, faUser, faTools, faNewspaper, faAddressCard, faPalette, faThLarge, faMagic)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
