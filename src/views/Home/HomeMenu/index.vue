<template>
	<!-- 首页菜单 -->
	<div class="home-menu">
		<div class="menu-item">
			<span class="menu-icon" 
			style="background-image: linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%);">
				<i class="iconfont icon-xinwen"></i>
			</span>
			<span class="menu-text">行思新闻</span>
		</div>
		<div class="menu-item">
			<span class="menu-icon" 
			style="background-image: linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%);">
				<i class="iconfont icon-xiangce"></i>
			</span>
			<span class="menu-text">行思相册</span>
		</div>
		<div class="menu-item">
			<span class="menu-icon" 
			style="background-image: linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%);">
				<i class="iconfont icon-faxian"></i>
			</span>
			<span class="menu-text">行思导航</span>
		</div>
		<div class="menu-item">
			<span class="menu-icon" 
			style="background-image: linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%);">
				<i class="iconfont icon-lishi"></i>
			</span>
			<span class="menu-text">行思历史</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'HomeMenu'
	}
</script>

<style scoped lang='less'>
	.home-menu{
		display: flex;
		justify-content: space-between;
		background: white;
		padding-bottom: 15px; 
		padding-top: 15px;
		.menu-item{
			width: 23%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			
			/* 图标 */
			.menu-icon{
				padding: 10px;
				border: none;
				border-radius: 10px;
				box-shadow: 1px 1px 2px #888888;
				i{
					font-size: 25px !important;
					color: white;
				}
			}
			/* 文字 */
			.menu-text{
				color: #888888;
				font-size: 14px;
				margin-top: 3px;
				letter-spacing: .5px;
			}
			/* 实现按钮的点击效果 */
			.menu-icon:active{
				opacity: 0.7;
			}
		}
		
	}
	
</style>
