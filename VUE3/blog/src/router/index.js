import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'
const name = '蜗牛的博客'

const routes = [
  {
    path: '/',
    name: Home,
    component: Home,
    meta: {
      title: '首页-' + name
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes
})

export default router