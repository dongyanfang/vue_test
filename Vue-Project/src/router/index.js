import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyOrder from '@/components/MyOrder'
import MyOrderDetail from '@/components/MyOrderDetail'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(Router)

Vue.http.get('static/index.json').then(
  function (res) {
    // 处理成功的结果
    console.log(res.bodyText);
  },function (res) {
    // 处理失败的结果
  }
);
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
    },
    {
      path: '/myOrderDetail',
      name: 'MyOrderDetail',
      component: MyOrderDetail
    }
  ]
})
