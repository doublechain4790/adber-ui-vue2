import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locales'
// import 'adber-ui/css/reset.scss'
import 'adber-ui/css/index.scss'

// 导入组件库
import AdberUI from './../packages'

// 正式
/* import AdberUI from 'adber-ui'
import 'adber-ui/lib/adber-ui.css' */

// demo 测试
/* import AdberUI from 'adber-ui-demo'
import 'adber-ui-demo/lib/adber-ui.css' */
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI, {
  // Locale,
  size: 'small'
})
// 注册组件库
Vue.use(AdberUI)
// AdberUI.install(Vue)

Vue.config.productionTip = false
Vue.config.lang = 'en'
window.vue = Vue
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
