import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Admin from './admin.js'
import Custom from './custome.js'

Vue.use(Router)

export default new Router({
  routes: [
    ... Admin,
    
    ... Custom
  ]
})
