<template>
	<div class="home">
		<!-- ******************导航栏****************** -->
		<van-nav-bar border fixed safe-area-inset-top class="nav">
		  <template #title>
		    <img :src="require('@/assets/logo.png')" alt="" class="logo" >
		  </template>
		</van-nav-bar>
		
		<!-- ******************轮播图****************** -->
		<HomeBanner></HomeBanner>
		
		<!-- ******************菜单****************** -->
		<HomeMenu></HomeMenu>
		
		<!-- ******************新闻列表****************** -->
		<NewsList></NewsList>
		
		<!-- ******************相册列表****************** -->
		<PictureList></PictureList>
		
		<!-- ******************底部****************** -->
		<HomeFooter></HomeFooter>
		
		
		
	</div>
</template>

<script>
	import HomeBanner from './HomeBanner/index.vue'
	import HomeMenu from './HomeMenu/index.vue'
	import NewsList from './NewsList/index.vue'
	import PictureList from './PictureList/index.vue'
	import HomeFooter from './HomeFooter/index.vue'
	export default{
		name: 'Home',
		data(){
			return{
				
			}
		},
		components:{
			HomeBanner,
			HomeMenu,
			NewsList,
			PictureList,
			HomeFooter
		}
	}
</script>

<style scoped lang="less">
	.logo{
		width: 60%;
		height: 80%;
	}
	.nav{
		box-shadow: 1px 1px 1px #888888;
	}
</style>
