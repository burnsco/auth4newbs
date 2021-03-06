import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: (to, from, next) => {
        if (localStorage.token) {
          next('/dashboard')
        } else {
          next()
        }
      },
      component: Home,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import(/* webpackChunkName: "Signup" */ './views/Signup.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "Login" */ './views/Login.vue'),
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      beforeEnter: (to, from, next) => {
        if (localStorage.token) {
          next()
        } else {
          next('/login')
        }
      },
      component: () => import(/* webpackChunkName: "Dashboard" */ './views/Dashboard.vue'),
    },
  ],
});
