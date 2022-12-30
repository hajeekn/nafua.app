import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: require('@/components/FirstPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
