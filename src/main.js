import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'

import VueRouter from 'vue-router'
import About from './pages/About'
import Home from './pages/Home'
import WhyHireMe from './pages/WhyHireMe'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



import './app.scss'


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/why-hire-me',
    component: WhyHireMe, 
  },
  {
    path: '/portfolio',
    component: Portfolio,
  },
  {
    path: '/services',
    component: Services,
  }
]

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
