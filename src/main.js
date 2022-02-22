import Vue from 'vue';
import App from './App.vue';
// 引入reset.css和flexible.js
import '@/mobile/flexible.js';
import '@/styles/reset.css';
// 引入封装的路由
import router from '@/router';
//底部标签栏
import { Tabbar, TabbarItem, NavBar } from 'vant';
// import {  } from 'vant';
// Vue.use(ConfigProvider);
Vue.use(Tabbar);
Vue.use(TabbarItem);
// 头部=>import { NavBar } from 'vant';与底部合着写,但是Vue.use()不可以
Vue.use(NavBar);
// 推荐歌单布局
import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);
//推荐歌单图片
import { Image as VanImage } from 'vant';

Vue.use(VanImage);

Vue.config.productionTip = false;
//最新音乐布局
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
//图标
import { Icon } from 'vant';
Vue.use(Icon);
// 搜索框
import { Search } from 'vant';
Vue.use(Search);
// 加载更多
import { List } from 'vant';

Vue.use(List);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
