import CW1_1Device from '@/views/CW1_1Device.vue'
import CW1_2Device from '@/views/CW1_2Device.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Test1View from '../views/Test1View.vue'
// import HomeView from '../views/HomeView.vue'

// import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test1',
      name: 'test1',
      component: Test1View
    },
    {
      path: '/cw1_1',
      name: 'cw1_1',
      component: CW1_1Device
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

export default router
