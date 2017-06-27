// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入vue.js文件
import Vue from 'vue'
//引入App.vue文件
import App from './App'
//引入router目录下的index.js文件
import router from './router'
//引入store目录下的index.js
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  //挂载元素
  el: '#app',
  //注入路由
  router,
  //注入store对象
  //一旦注入到根组件中，那么所有的子组件都可以通过this.$store来获取这个store对象
  store,
  //指定模板，改变了代码的书写位置
  template: '<App/>',
  //注册了一个App组件
  components: { App }
})
