import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import router from './router/router.js'
import store from './store/index.js'
import VueYouTubeEmbed from 'vue-youtube-embed'



Vue.use(VueYouTubeEmbed)
Vue.use(VueRouter)
Vue.use(Vuelidate)

Vue.config.productionTip = false

import '@/assets/styles/main.scss'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
