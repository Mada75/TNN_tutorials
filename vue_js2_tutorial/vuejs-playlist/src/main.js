import Vue from 'vue'
import App from './App.vue'

/* START GLOBAL REGISTRATION */
// import Ninjas from '@/components/Ninjas.vue' // import to use globally
// Vue.component('ninjas', Ninjas) // register Ninjas component as ninjas (global registration)
/* END GLOBAL REGISTRATION */

export const eventBus = new Vue() // create event bus, to be imported as import { eventBus } from 'location'

// custom directives 
Vue.directive('rainbow', {
  // eslint-disable-next-line no-unused-vars
  bind(el, binding, vnode){
    el.style.color = '#' + Math.random().toString().slice(2,8)
  }
})

Vue.directive('theme', {
  // eslint-disable-next-line no-unused-vars
  bind(el, binding, vnode){
    if (binding.value === 'wide') {
      el.style.maxWidth = '1200px'
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '500px'
    }
    if (binding.arg === 'column') {
      el.style.background = '#ddd'
      el.style.padding = '20px'
    }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
