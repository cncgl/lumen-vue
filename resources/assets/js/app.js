import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
// Import VueStrap Core That has the Core Sass Files of Boostrap Add What you Need
import 'vuestrap/core'

// Import The Components for Vuestrap Base Bootsrap 4
import navbar from 'vuestrap-base-components/src/components/navbar'

//import GritCode Components
//import toast from 'gritcode-components/src/components/toast'

//import view components for Router
import default_view from '../components/default.vue'

// Use Vue Router
Vue.use(VueRouter)
// Use Vue Resource
Vue.use(VueResource)

var router = new VueRouter({})
router.map({
  '*': {
    component: default_view
  }
})
var App = Vue.extend()

router.start(App, '#app')

new Vue({
  el: '#app',
  data: { },
  components: {
    'vs-navbar': navbar
  }
})
