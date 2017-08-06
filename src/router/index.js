import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export function createRouter () {
  return new VueRouter({
    mode: 'history',
    base: __dirname,
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    routes: [{
      path: '/',
      name: 'index',
      component: require('../views/home/index')
    }, {
      path: '/login',
      name: 'login',
      component: require('../views/member/login')
    }, {
      path: '/film',
      name: 'film',
      component: require('../views/film/film-view')
    }, {
      path: '/cinema',
      name: 'cinema',
      component: require('../views/cinema/index')
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: require('../views/film/detail')
    }, {
      path: '/card',
      name: 'card',
      component: require('../views/card/index')
    }, {
      path: '*',
      component: require('../views/home/index')
    }]
  })
}
