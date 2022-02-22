// 封装路由模块
import Vue from 'vue'
// 引入页面组件,默认入口就找index.js文件,所以可以省略
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Play from '@/views/Play'
// 1.引入路由对象
import VueRouter from 'vue-router'
// 2.注册
Vue.use(VueRouter)
// 3.规则数组
const routes = [
  // 加一个路由重定向
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    component: Layout,
    redirect: '/layout/home',
    children: [
      {
        path: 'home',
        component: Home,
        meta: {
          name: '首页'
        }

      },
      {
        path: 'search',
        component: Search,
        meta: {
          name: "搜索"
        }

      },
    ]
  },

  {
    path: '/play',
    component: Play
  },
]
// 4.路由对象
const router = new VueRouter({
  routes
})

export default router