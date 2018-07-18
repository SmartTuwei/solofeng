import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'home',
      component: resolve => require(['@/views/home/index.vue'], resolve)
    },
    {
      path: '/windtalk',
      name: 'windtalk',
      component: resolve => require(['@/views/windtalk/index.vue'], resolve)
    },
    {
      path: '/digitalAsset',
      name: 'digitalAsset',
      component: resolve => require(['@/views/digitalAsset/index.vue'], resolve)
    },
    {
      path: '/wto',
      name: 'wto',
      component: resolve => require(['@/views/wto/index.vue'], resolve)
    },
    {
      path: '/community',
      name: 'community',
      component: resolve => require(['@/views/community/index.vue'], resolve)
    },
    {
      path: '/qr',
      name: 'qr',
      component: resolve => require(['@/views/QR/index.vue'], resolve)
    },
    { path: '*', meta: {title: '出错啦'}, component: resolve => require(['@/views/404/index.vue'], resolve) }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
