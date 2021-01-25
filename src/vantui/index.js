import Vue from 'vue'
// vantui的配置文件
import { Tabbar, TabbarItem,NavBar,Swipe, SwipeItem,Lazyload,Button,List,Cell, CellGroup,Image as VanImage } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);
Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);
Vue.use(Lazyload, {
  lazyComponent: true,
});