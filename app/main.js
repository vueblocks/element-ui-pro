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

import ElementPro from '../src/index' // development

// use ve-charts
import 've-charts/lib/common' // 公共chuck，引入单个图表前需引入公共包
import VeBarChart from 've-charts/lib/VeBarChart' // 单个图表chuck
import 've-charts/lib/ve-charts.min.css' // **按需引入** 同样需要引入样式

Vue.use(ElementUI, {
  size: 'small'
})
Vue.use(ElementPro)
Vue.use(VueSmartWidget)
Vue.component('VeBarChart', VeBarChart)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
