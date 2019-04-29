import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import globals from './globals'
import Notifications from 'vue-notification'
import velocity from 'velocity-animate'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(Notifications, { velocity })


const store = new Vuex.Store({
  state: {
    dataUrl: 'http://34.219.154.42:2020',
    //dataUrl: 'http://localhost:2020',
    isLoggedIn: false,
    userLoggedIn: null,
  },
  mutations: {
    update_isLoggedIn (state, newValue) { state.isLoggedIn = newValue; },
    update_userLoggedIn (state, newValue) { state.userLoggedIn = newValue; }
  }
});


Vue.mixin({
  data: globals,
  methods: {
    $showNotification(group, type, title, text){
      this.$notify({
        group: group,
        type: type,
        title: title,
        text: text
      });
    }
  }
})


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
