// 引入vue.js
import Vue from 'vue'
// 引入vue-router.js
import Router from 'vue-router'
// 引入Hello组件@符号表示src路径是已经配置好的
import Hello from '@/components/Hello'
//引入Test组件
// import Test from '@/components/Test'
//引入count组件
import Count from '@/components/Count'
//引入Todosr组件
import Todosr from '@/components/Todosr'
//引入All组件
import All from '@/components/All'
//引入Active组件
import Active from '@/components/Active'
//引入completed组件
import Completed from '@/components/Completed'
// 这一步不能少
Vue.use(Router)

export default new Router({
  routes: [
    {
      // 如果访问的路径是/就载入Hello组件
      path: '/',
      name: 'Hello',
      //修改路由
      component: Todosr,
      children:[
        {
          path:'/',
          redirect:'/all',
        },
        {
          path:'/all',
          component:All
        },
        {
          path:'/active',
          component:Active
        },
        {
          path:'/completed',
          component:Completed
        }
      //   {
      //     path:'/Todosr/All',
      //     component:All,
      //   },
      //   {
      //     path:'/Todosr/All',
      //     component:All,
      //   },
      //   {
      //     path:'/Todosr/All',
      //     component:All,
      //   },
      ]
    }
  ]
})
