import Vue from 'vue'
// vantui的配置文件
import { Tabbar, TabbarItem,NavBar,Swipe, SwipeItem,Lazyload,Button,List,Cell, 
CellGroup,Image as VanImage,Divider,
 Grid, GridItem,Col, Row,Step, Steps,Icon,
 Tag,Empty
 } from 'vant';

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
Vue.use(Divider);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Icon);
Vue.use(Tag);
Vue.use(Empty);