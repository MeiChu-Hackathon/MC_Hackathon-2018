import Vue from 'vue'
import App from './App'
import router from './router'
import Components from './components/_index'
import 'bootstrap';
import VueAnime from 'vue-animejs';
import '@/style/main.scss'

Vue.use(VueAnime)
Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
