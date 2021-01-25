<template>
	<div class="home-banner">
		<van-swipe :autoplay="3000">
		  <van-swipe-item >
		    <img :src="require('@/assets/banner.jpg')" />
		  </van-swipe-item>
		  <van-swipe-item >
		    <img :src="require('@/assets/banner.jpg')" />
		  </van-swipe-item>
		  <van-swipe-item >
		    <img :src="require('@/assets/banner.jpg')" />
		  </van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
export default{
	name:'HomeBanner',
	
}
</script>

<style scoped lang="less">
	.home-banner{
		margin-top: 46px;
		img{
			width: 100%;
		}
	}
</style>
