import Vue from 'vue'
import 've-charts/lib/common' // 公共chuck，引入单个图表前需引入公共包
import VeBarChart from 've-charts/lib/VeBarChart' // 单个图表chuck
import 've-charts/lib/ve-charts.min.css' // **按需引入** 同样需要引入样式

Vue.component('VeBarChart', VeBarChart)
