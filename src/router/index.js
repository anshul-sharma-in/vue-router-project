import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import History from '@/components/History'
import Products from '@/components/Products'
import Computed from '@/components/Computed'
import Method from '@/components/Method'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      props: true,
      component: Home
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/computed',
      name: 'Computed',
      component: Computed
    },
    {
      path: '/method',
      name: 'Mehtod',
      component: Method
    }
  ]
})
