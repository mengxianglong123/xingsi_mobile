<template>
	<div class="pic-item clicks" :style="picBack" @click="$router.push(`/picdetail/${pic.albumId}`)">
		<!-- 毛玻璃遮罩层 -->
		<div class="pic-blur" :style="picBack"></div>
		
		<span class="pic-name">{{pic.albumName}}</span>
		<span class="pic-desc">{{pic.albumDesc}}</span>
		<span class="pic-time">{{pic.createdDateStr}}</span>
	</div>
</template>

<script>
	export default{
		name:'PictureListItem',
		props:['pic'],
		data(){
			return{
				picBack:{
					"background-image":`url(${this.pic.thumbUrl})`
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.pic-item{
		width: 90%;
		height: 190px;
		background-size: cover;
		box-shadow: 2px 8px 8px rgba(10,16,20,.24);
		margin-bottom: 15px;
		margin-left: auto;
		margin-right: auto;
		border-radius: 15px;
		background-position: center center;
		position: relative;
		display: flex;
		justify-content: center;
		flex-direction: column;
		overflow: hidden;
		// 遮罩模糊
		.pic-blur{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top:0;
			filter: blur(1.8px);
			background-size: cover;
			background-position: center center;
			// border-radius: 15px;
		}
		// 名字
		.pic-name{
			position: relative;
			color: white;
			font-weight: bolder;
			font-size: 19px;
			text-align: center;
			letter-spacing: 2px;
		}
		// 描述
		.pic-desc{
			position: relative;
			color: white;
			font-size: 14px;
			font-weight: 550;
			text-align: center;
			margin-top: 10px;
		}
		// 时间
		.pic-time{
			position: absolute;
			color: white;
			text-align: right;
			right: 15px;
			bottom: 10px;
		}
		
	}
</style>
