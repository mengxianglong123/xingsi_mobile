<template>
	<div class="home-banner">
		<van-swipe :autoplay="3000">
		  <van-swipe-item >
		    <img src="http://xsgzs.cn/img/lunbo1.60247e6e.jpg" />
		  </van-swipe-item>
		  <van-swipe-item >
		    <img src="http://xsgzs.cn/img/lunbo2.24225084.jpg" />
		  </van-swipe-item>
		  <van-swipe-item >
		    <img src="http://xsgzs.cn/img/lunbo3.623bbcdb.jpg" />
		  </van-swipe-item>
		  
		  <van-swipe-item >
		    <img src="http://xsgzs.cn/img/lunbo4.724c8359.jpg" />
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
