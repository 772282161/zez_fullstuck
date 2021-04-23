import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

router.beforeEach((to, from , next) => {
  console.log(from);
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

createApp(App).use(router).use(ElementPlus).mount('#app')
