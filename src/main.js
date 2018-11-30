import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import globals from './globals'
import Notifications from 'vue-notification'
import velocity from 'velocity-animate'


import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(Notifications, { velocity })



const store = new Vuex.Store({
  state: {
    dataUrl: 'http://alumnicarpool.wejjtwdrt9.us-west-2.elasticbeanstalk.com',
    // dataUrl: 'http://localhost:1010',
    isLoggedIn: false,
    userLoggedIn: null,    
  },
  mutations: {
    update_isLoggedIn (state, newValue) { state.isLoggedIn = newValue; },
    update_userLoggedIn (state, newValue) { state.userLoggedIn = newValue; }
  }
});


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(store.state.isLoggedIn){
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})



Vue.mixin({
  data: globals,

  computed:{
    $getImage(userId, imageName){
      return this.$store.state.dataUrl + "\\images\\" + userId + "\\" + imageName + ".jpg";
    },
  },

  methods: {
    $sendMessage(user, message){
      this.$http.get(this.$store.state.dataUrl+"/users/get/"+user.id).then(response => {
        let receiver = response.body;

        if(receiver.messages == null){
          receiver.messages = [];
        }
        receiver.messages.push(message);
        this.$http.put(this.$store.state.dataUrl+"/users/update", receiver).then(response => {

        }, response => {
          this.$showNotification('acNotification', 'warn', 'Message-send message', 'Message is not sent successfully!');
        });

      }, response => {
        this.$showNotification('acNotification', 'error', 'Message-send message', 'Error occurred when getting user informaiton!');
      });
    },

    $showNotification(group, type, title, text){
      this.$notify({
        group: group,
        type: type,
        title: title,
        text: text
      });
    },


  }
})



new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
