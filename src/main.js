// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 引入app.vue文件
  components: { App },
  // 文件的内容将以<App/>这样的标签写进去#app中
  template: '<App/>'
})
