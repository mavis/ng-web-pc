// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { setMetaTitle,getCookie,getuserInfo} from './assets/js/util.js'
import store from './store'
import axios from 'axios'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.use(Antd)
Vue.directive('title', {
  inserted: function (el, binding) {
    setMetaTitle(binding.value)
  }
})
// Object.keys(filter).forEach(function (k) {
//   Vue.filter(k, filter[k])
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
