<template>
	<div class="home-banner">
		<van-swipe :autoplay="3000">
		  <van-swipe-item >
		    <img src="http://xsbanner.oss-cn-beijing.aliyuncs.com/img/89993-lunbo1.jpg" />
		  </van-swipe-item>
		  <van-swipe-item >
		    <img src="http://xsbanner.oss-cn-beijing.aliyuncs.com/img/68502-lunbo2.jpg" />
		  </van-swipe-item>
		  <van-swipe-item >
		    <img src="http://xsbanner.oss-cn-beijing.aliyuncs.com/img/68502-lunbo2.jpg" />
		  </van-swipe-item>
		  
		  <van-swipe-item >
		    <img src="http://xsbanner.oss-cn-beijing.aliyuncs.com/img/27710-lunbo4.jpg" />
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
