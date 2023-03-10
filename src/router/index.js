import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewPersonaView from '../views/NewPersonaView.vue'
import VerPersona from '../views/VerPersonaView.vue'
import VerPersonaID from '../views/VerPersonaID.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/NewPersona',
      name: 'NewPersona',
      component: NewPersonaView
    },
    {
      path: '/VerPersona',
      name: 'VerPersona',
      component: VerPersona
    },
    {
      path: '/VerPersonaID',
      name: 'VerPersonaID',
      component: VerPersonaID
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
