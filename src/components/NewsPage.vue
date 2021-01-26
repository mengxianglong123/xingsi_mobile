<template>
	<!-- 新闻详情页面 -->
	<div class="news">
		<!-- 导航栏 -->
		<van-nav-bar
		  left-arrow
		  @click-left="$router.go('-1')"
		  fixed
		   />
		 <div class="news-detail" v-cloak>
			 <!-- 新闻上部分内容 -->
			 <div class="news-top">
				 <!-- 新闻标题 -->
				 <div class="news-title">{{news.newsTitle}}</div>
				 <div class="news-desc">
					 <!-- 浏览量 -->
					 <span class="news-visited">
						 <i class="iconfont icon-liulan"></i>
						{{news.visited}}
					 </span>
					 <!-- 作者 -->
					 <span class="news-author">
						 <i class="iconfont icon-renyuan"></i>
						{{news.authorName}}
					 </span>
					 <span class="news-time">
						 <i class="iconfont icon-lishijilu-copy-copy"></i>
						{{news.createdDateStr}}
					 </span>
				 </div>
			 </div>
			 <van-divider />
			 <div class="new-content" v-html="news.newsContent">
				 
			 </div>
			
		 </div>  
		
		
	</div>
</template>

<script>
	import {GetNewsById} from '@/request/api.js'
	export default{
		name:'NewsPage',
		data(){
			return{
				news:""
			}
		},
		// 组件被创建时请求数据
		created() {
			GetNewsById(this.$route.params.id)
			.then(res => {
				this.news = res.data
			})
		},
	}
</script>

<style lang="less"> //使用scoped之后，对v-html中的img属性会失效
	.news-detail{
		margin-top: 46px;
		background: white;
		width: 100%;
		.news-title{
			text-align: center;
			margin-top: 10px;
			display: block;
			font-size: 20px;
			font-weight: bold;
			line-height: 40px;
		}
		.news-desc{
			width: 70%;
			margin: 0 auto;
			display: flex;
			justify-content: space-around;
			align-items: center;
			color: #909399 ;
			font-size: 15px;
			line-height: 16px;
		}
		.new-content{
			padding: 0 20px;
			width: 100% !important;
			box-sizing: border-box;
			font-size: 16px;
			width: 100%;
			overflow: hidden;
			letter-spacing: 1px;
			line-height: 21px;
			color: #606266 ;
			img{
				width: 100%;
			}
			
		}
		
		
	}
</style>
