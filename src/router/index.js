import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '../views/about/index.vue'
import index from '../views/index/index.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    redirect: "/index"
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/index',
    name: 'index',
    component: index
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
