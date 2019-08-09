import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index'


Vue.use(Router)

const mytest = r => require.ensure([], () => r(require('@/page/mytest')), 'mytest')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
        path: '/mytest',
        name: 'mytest',
        component: mytest
    },
    {
      path: '/ka',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
