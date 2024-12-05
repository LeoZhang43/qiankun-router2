// /src/router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/micro-app-*', // 以`/micro-app-`开头
    component: () => import('@/views/LayoutPage.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
