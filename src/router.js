import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './views/MainPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:
  [
    {
      path: '/',
      name: 'cpi',
      component: MainPage,
      children:
      [
        {
          path: 'domain_settings',
          component: () => import('./components/DomainSettings')
        },
        {
          path: 'search',
          component: () => import('./components/SearchResults')
        },
        {
          path: 'searchWithSuggestions',
          component: () => import('./components/SearchWithDropdownSuggestions')
        }
      ]
    }
  ]
})
