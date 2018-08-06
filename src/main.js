
import Vue from 'vue'
import App from './App'
import router from './router'
import Components from './components/_index'
import 'bootstrap';

Vue.config.productionTip = false

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
