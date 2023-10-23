import { createRouter, createWebHashHistory, RouteLocationNormalized } from 'vue-router';
import Login from './Login.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('./Dashboard.vue'), 
    props: (route: RouteLocationNormalized) => ({ message: route.params.message })
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
