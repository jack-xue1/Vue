import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Xs from '@/components/Xs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // 增加新匹配路径进行对应 跳转到Test.vue路径中
      path: '/index',
      name: 'Test',
      component: Test
    },
    {
      // 增加新匹配路径进行对应 跳转到Test.vue路径中
      path: '/xs',
      name: 'Xs',
      component: Xs
    }
  ]
})
