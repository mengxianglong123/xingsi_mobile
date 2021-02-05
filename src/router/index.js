// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
 

 
// 1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2.创建路由对象

// 导入组件
const Home = () => import('@/views/Home/Home.vue')
const About = () => import('@/views/About/About.vue')
const Nav = () => import('@/views/Nav/Nav.vue')
const News = () => import('@/views/News/News.vue')
const NewsPage = () => import('@/components/NewsPage')
const Pictures = () => import('@/views/Pictures/Pictures.vue')
const PicturesPage = () => import('@/components/PicturesPage.vue')
const History = () => import ('@/views/History/History.vue')
const HistoryDetail = () => import('@/views/HistoryDetail/HistoryDetail.vue')

// 路由规则
const routes = [
	{
		path:'',
		redirect: '/home',
		meta:{
			index: 1,  //指定当前页面级别
			showTabbar: true // 是否显示底部导航栏
		}
	},
	{
		path:'/home',
		component: Home,
		meta:{
			index:1,
			showTabbar: true
		}
	},
	{
		path:'/about',
		component: About,
		meta:{
			index:1,
			showTabbar: true
		}
	},
	{
		path:'/nav',
		component: Nav,
		meta:{
			index:1,
			showTabbar: true
		}
	},
	{
		path:'/news',
		component:News,
		meta:{
			index:2,
			showTabbar: false
		}
	},
	{
		path:'/newsdetail/:id',
		component:NewsPage,
		meta:{
			index:3,
			showTabbar: false
		}
	},
	{
		path:'/pics',
		component:Pictures,
		meta:{
			index:2,
			showTabbar: false
		}
	},
	{
		path:'/picdetail/:id',
		component:PicturesPage,
		meta:{
			index:3,
			showTabbar: false
		}
	},
	{
		path:'/toNav',
		component:Nav,
		meta:{
			index:2,
			showTabbar: false
		}
	},
	{
		path:'/history',
		component:History,
		meta:{
			index:2,
			showTabbar: false
		}
	},
	{
		path:'/hisdetail/:id',
		component:HistoryDetail,
		meta:{
			index:3,
			showTabbar: false
		}
	},
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, saveTop){
          if (saveTop) {
              return saveTop;
          } else {
              return {x: 0, y: 0}
          }
      }
})
 
// 3.将router对象传入到Vue实例
export default router
 