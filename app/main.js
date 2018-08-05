// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element'
import './plugins/vue-smart-widget'
import './plugins/ve-charts'

// use normalize css
import 'normalize.css'

import ElementPro from '../src/index' // development
Vue.use(ElementPro)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
