import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/home/index'
import ProductList from '@/views/productList/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/productList',
      name: 'ProductList',
      component: ProductList
    },
  ]
})
