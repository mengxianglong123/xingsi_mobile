<template>
	<!-- 新闻列表元素 -->
	<div class="news-item clicks" @click="$router.push(`/newsdetail/${news.newsId}`)">
		<!-- 图片 -->
		<van-image
		  fit="cover"
		  :src="news.newsPictureViewUrl"
		  class="news-img"
		>
		</van-image>
		<span class="news-text">
			<!-- 标题 -->
			<div class="news-title">{{news.newsTitle}}</div>
			
			<!-- 描述信息（摘要） -->
			<div class="news-main flow-text">{{news.newsContentView}}</div>
			
			<!-- 信息（时间和浏览量） -->
			<div class="news-info">
				<!-- 浏览量 -->
				<span class="news-watch">
					<i class="iconfont icon-liulan"></i>
				{{news.visited}}
				</span>
				<!-- 时间 -->
				<span class="news-time">
					<i class="iconfont icon-renyuan"></i>
				{{news.authorName}}
				{{news.createdStr}}
				</span>
			</div>
		</span>
	</div>
</template>

<script>
	export default{
		name:'NewsItem',
		props:["news"],
	}
</script>

<style scoped lang="less">
	.news-item{
		display: flex;
		background: white;
		width: 100%;
		border-bottom: 1px solid #f2f3f5;
		height: 78px;
		padding-top: 5px;
		padding-bottom: 5px;
		justify-content: space-around;
		align-items: center;
		.news-img{
			width: 30%;
		}
		.news-text{
			letter-spacing: 0.5px;
			width: 60%;
			.news-title{
				
				font-weight: bold;
				font-size: 14px;
				margin-bottom: 2px;
			}
			/* 摘要 */
			.news-main{
				color: #606266;
				font-size: 14px;
			}
			/* 信息 */
			.news-info{
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 13px;
				color: #909399;
				line-height: 13px;
				margin-top: 5px;
				letter-spacing: 0;
			}
		}
		
	}
</style>
