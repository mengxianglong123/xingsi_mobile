import Vue from 'vue'
import App from './App.vue'
import '@/vantui' // 引入我们自己的vantui配置
import 'vant/lib/index.css' // 引入vant的css样式
import router from './router/index.js'
import animated from 'animate.css' // 引入animate.css

Vue.use(animated)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
