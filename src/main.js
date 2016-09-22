import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store.js'
import router from './router.js'

new Vue({
	router,
	store,
  el: '#app',
  render: h => h(App)
})
