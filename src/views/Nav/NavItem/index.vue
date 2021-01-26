<template>
	<!-- 导航具体内容 -->
	<div class="nav-item">
		
		<!-- 类型 -->
		<div class="nav-type">
			<i class="iconfont icon-fenlei"></i>
			{{nav.type}}
		</div>
		<!-- 列表 -->
		<div class="nav-list">
			<!-- 网站 -->
			<a class="website animate__animated animate__fadeInDown clicks" v-for="web in nav.websiteList" :key="web.websiteId" :href="web.websiteUrl" target="_blank">
				<!-- 图片 -->
				<van-image
				  round
				  width="35px"
				  height="35px"
				  :src="web.iconUrl"
				/>
				<!-- 名称描述信息 -->
				<div class="web-content">
					<!-- 名称 -->
					<span class="web-name web-desc van-ellipsis">{{web.websiteName}}</span>
					<!-- 描述信息 -->
					<span class="web-desc van-ellipsis">{{web.description}}</span>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'NavItem',
		props:["nav"]
	}
</script>

<style scoped lang="less">
	.nav-item{
		width: 100%;
		
		padding: 10px 5px;
		box-sizing: border-box;
		.nav-list{
			margin-top: 10px;
			display: flex;
			justify-content: start;
			flex-wrap: wrap;
			.website{
				border-radius: 12px;
				box-shadow: 1px 8px 12px #ebedf0;
				margin-left: 5px;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 10px;
				padding:  5px 0;
				width: 47%;
				height: 43px;
				background: white;
				.web-content{
					margin-left: 3px;
					width: 60%;
					font-size: 13px;
					color: #82848a;
					overflow: hidden;
					display: flex;
					flex-direction: column;
					.web-name{
						font-size: 15px;
						color: #303133;
					}
				}
			}
		}
		// 类型标题
		.nav-type{
			font-size: 16px;
			font-weight: bold;
			margin-top: 10px;
			line-height: 17px;
			i{
				font-size: 20px;
				font-weight: normal;
				color:#ff9900;
			}
		}
	}
</style>
