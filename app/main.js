// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// use normalize css
import 'normalize.css'

// use element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// use vue-smart-widget
import VueSmartWidget from 'vue-smart-widget'
import 'vue-smart-widget/lib/vue-smart-widget.css'

import HelloWorld from '../src/index' // development

Vue.use(ElementUI, {
  size: 'small'
})
Vue.use(HelloWorld)
Vue.use(VueSmartWidget)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
