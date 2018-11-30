import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MainPage from './views/MainPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:
  [
    {
      path: '/cpi',
      name: 'cpi',
      component: MainPage,
      children:
      [
        {
          path: 'domain_settings',
          component: () => import('@/components/search/DomainSettings')
        },
        {
          path: 'search',
          component: () => import('@/components/search/SearchResults')
        }
      ]
    }
  ]
})
