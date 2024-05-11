import CW1_1Device from '@/views/CW1_1Device.vue'
import CW1_2Device from '@/views/CW1_2Device.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TestMqttView from '../views/TestMqttView.vue'
import LoginView from '../views/LoginView.vue'
import MainView from '@/components/MainView.vue'
import Test1View from '@/views/Test1View.vue'
import RegisterView from '@/views/RegisterView.vue'
// import HomeView from '../views/HomeView.vue'

// import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cclj',
      name: 'cclj',
      component: MainView
    },
    {
      path: '/testmqtt',
      name: 'testmqtt',
      component: TestMqttView
    },
    {
      path: '/test1view',
      name: 'test1view',
      component: Test1View
    },
    {
      path: '/',
      name: 'login',
      component: LoginView,
      
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/cw1_1',
      name: 'cw1_1',
      component: CW1_1Device,
      
    }, 
    {
      path: '/cw1_2',
      name: 'cw1_2',
      component: CW1_2Device
    },
    {
      path: '/about',
      name: 'about',
      // component:AboutView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})


router.beforeEach((to, from, next) => {
  // 检查路由是否需要登录验证
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 检查用户是否已经登录
    if (!localStorage.getItem('token')) {
      // 如果用户未登录，重定向到登录页面
      next({ name: 'login' });
      console.log('登录了')
    } else {
      console.log('未登录')
      next();
    }
  } else {
    next(); // 确保一定要调用 next()
  }
});
export default router
