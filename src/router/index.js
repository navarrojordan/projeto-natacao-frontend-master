import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Carousel.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import VisualEvento from '../components/VisualEvento.vue';

import PerfilEvento from '../components/PerfilEvento.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/visualevento',
    name: 'VisualEvento',
    component: VisualEvento,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/PerfilEvento',
    name: 'PerfilEvento',
    component: PerfilEvento,
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
