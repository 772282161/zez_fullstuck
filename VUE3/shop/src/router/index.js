import { createRouter, createWebHistory } from 'vue-router' // @代表src目录 绝对路径
// import Login from '@/views/Login' //路由懒加载



const routes = [
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
