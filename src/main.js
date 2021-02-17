import Vue from 'vue'
import App from './App.vue'
//引入elementui 相关文件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入vue-router相关文件
import router from "../router/index.js"
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
