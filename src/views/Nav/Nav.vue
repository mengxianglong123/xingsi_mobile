<template>
	<!-- 导航页面 -->
	<div class="navs">
		<!-- 导航栏 -->
		<van-nav-bar
		  title="行思导航"
		  :left-arrow="$route.path == '/toNav'"
		  @click-left="$router.go('-1')"
		  fixed
		   />
		<div class="nav-content">
			<NavItem v-for="nav in navs" :nav="nav" :key="nav.typeId"></NavItem>
		</div>
	</div>
</template>

<script>
	import {GetNav} from '@/request/api.js'
	import NavItem from './NavItem/index.vue'
	export default{
		name: 'Nav',
		components:{
			NavItem
		},
		data(){
			return{
				navs:""
			}
		},
		// 获取数据
		created() {
			GetNav()
			.then(res => {
				console.log(res)
				this.navs = res.data
			})
		}
	}
</script>

<style>
	.nav-content{
		margin-top: 46px;
		margin-bottom: 50px;
	}
	
</style>
