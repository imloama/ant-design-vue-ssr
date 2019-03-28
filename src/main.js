import '@babel/polyfill'
import Vue from 'vue'
import Antd from 'ant-design-vue/es'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'ant-design-vue/dist/antd.css'
import 'ant-design-vue/dist/antd.less'
Vue.config.productionTip = false
import { sync } from 'vuex-router-sync'

Vue.use(Antd)

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

export function createApp () {
  sync(store, router)
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}