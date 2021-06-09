import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/dashboard/Dashboard.vue';
// 延迟加载  
const Home = () => import ('../views/home/Home.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [{
        path: '/dashboard',
        redirect: '/dashboard/home',
        meta: {
          keepAlive: true
        }
      }, {
        path: 'home',
        name: 'home',
        component: Home,
        meta: {
          keepAlive: true
        }
      }, {
        path: 'map',
        name: 'map',
        component: Map
      }]
    }
  ]
})
