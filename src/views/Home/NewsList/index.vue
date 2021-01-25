<template>
	<!-- 首页(热门)新闻列表 -->
	<div class="hot-news">
		<div class="hot-news-title">
			<i class="iconfont icon-remen"></i> 行思大事件
		</div>
		<NewsItem v-for="news in newsList" :key="news.newsId"
				:news="news"></NewsItem>
	</div>
</template>

<script>
	// 导入组件
	import NewsItem from '@/components/NewsItem.vue'
	import {GetNews} from '@/request/api.js'
	export default{
		name:'NesList',
		components:{
			NewsItem
		},
		data(){
			return{
				newsList:null,
				list:[1,2,3,4]
			}
		},
		// 组件被创建时
		created() {
			// 请求新闻数据
			GetNews({
				pageNum:1,
				pageSize:4
			}).then(res =>{
				this.newsList = res.data.list;
			})
		}
	}
</script>

<style scoped lang="less">
	.hot-news{
		margin-top: 35px;
		margin-bottom: 65px;
		.hot-news-title{
			font-size: 17px;
			font-weight: bolder;
			margin-bottom: 3px;
			i{
				font-size: 20px;
				color: #fa3534;
			}
		}
	}
</style>
