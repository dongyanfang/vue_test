import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyOrder from '@/components/MyOrder'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/myOrder',
      name: 'MyOrder',
      component: MyOrder
    }
  ]
})
