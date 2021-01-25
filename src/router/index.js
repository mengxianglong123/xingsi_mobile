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

// 路由规则
const routes = [
	{
		path:'',
		redirect: '/home'
	},
	{
		path:'/home',
		component: Home
	},
	{
		path:'/about',
		component: About
	},
	{
		path:'/nav',
		component: Nav
	}
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
 
// 3.将router对象传入到Vue实例
export default router
 