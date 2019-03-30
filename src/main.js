import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueSwal from 'vue-swal'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueSwal)
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: Routes
})

new Vue({
  render: h => h(App),
  router			
}).$mount('#app')
