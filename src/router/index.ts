import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/Index.vue'
import Refferal from '../views/Refferal.vue'
import Earn from '../views/Earn.vue'
import Boost from '../views/Boost.vue'
import qrcode from '../views/qr-code.vue'
import slider from '../views/Slider.vue'
import Wallet from '../views/Wallet.vue'
import Reload from '../views/Reload.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/refferal',
    name: 'refferal',
    component: Refferal
  },
  {
    path: '/earn',
    name: 'earn',
    component: Earn
  },
  {
    path: '/boost',
    name: 'boost',
    component: Boost
  },
  {
    path: '/qr-code',
    name: 'qr-code',
    component: qrcode
  },
  {
    path: '/slider',
    name: 'slider',
    component: slider
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: Wallet
  },
  {
    path: '/wallet',
    name: 'reload',
    component: Reload
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
