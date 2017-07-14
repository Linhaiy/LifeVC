/**
 * 配置了路由的路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home/home.vue'
import all from '../components/all/all.vue'
import usercenter from '../components/usercenter/usercenter.vue'
import stroll from '../components/stroll/stroll.vue'
import login from '../components/login/login.vue'
import register from '../components/register/register.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/all',
      component: all
    },
    {
      path: '/stroll',
      component: stroll
    },
    {
      path: '/usercenter',
      component: usercenter
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    }
  ]
})
