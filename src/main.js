import Vue from 'vue'
import VueResourse from 'vue-router'
import App from './App.vue'
import router from './router'
import VueScroller from 'vue-scroller'

Vue.use(VueResourse)
Vue.use(VueScroller)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
