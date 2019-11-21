import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import ResourceManage from '../views/ResourceManage';

const EntInfoManage = () => import('../views/EntInfoManage.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/entInfoManage',
    name: 'entInfoManage',
    component: EntInfoManage
  },
  {
    path: '/resourceManage',
    name: 'resourceManage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ResourceManage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
