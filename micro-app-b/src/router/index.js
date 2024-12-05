// src/router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/micro-app-order/pageA',
    name: 'GoodsList',
    component: () => import('@/views/goods/PageAView.vue')
  },
  {
    path: '/micro-app-order/pageB',
    name: 'GoodsList',
    component: () => import('@/views/goods/PageBView.vue')
  },
  {
    path: '/micro-app-order/pageC',
    name: 'GoodsList',
    component: () => import('@/views/goods/PageCView.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
