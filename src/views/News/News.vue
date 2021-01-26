<template>
	<div class="news">
		<!-- 导航栏 -->
		<van-nav-bar
		  title="行思新闻"
		  left-arrow
		  @click-left="$router.go('-1')"
		  fixed
		   />
		  
		  
		 <!-- 新闻列表 -->
		<van-list
		  v-model="loading"
		  :finished="finished"
		  finished-text="没有更多了"
		  @load="onLoad"
		  class="news-list"
		>
			<NewsItem v-for="news in newsList" :key="news.newsId" :news="news" class="news-item"></NewsItem>
		</van-list>
		
	</div>
	
</template>

<script>
	import {GetNews} from '@/request/api.js'
	import NewsItem from '@/components/NewsItem.vue'
	export default{
		name:'News',
		components:{
			NewsItem
		},
		data() {
		    return {
		      newsList: [],
		      loading: false,
		      finished: false,
			  pageNum:1
		    };
		  },
		  methods: {
			  // 获取新闻数据
		    onLoad() {
				GetNews({
					pageNum:this.pageNum,
					pageSize:8
				}).then(res => {
					// 添加数据
					this.newsList.push(...res.data.list)
					// 页数自增
					this.pageNum = this.pageNum + 1
					// 结束加载状态
					this.loading = false
					// 判断是否将数据全部加载
					if(res.data.isLastPage) this.finished = true;
				})
		    },
		  },
	}
</script>

<style scoped lang="less">
	.news-list{
		margin-top: 60px;
	}
</style>
