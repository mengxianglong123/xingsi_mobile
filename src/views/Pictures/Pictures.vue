<template>
	<!-- 行思相册 -->
	<div class="pics">
		<!-- 导航栏 -->
		<van-nav-bar
		  title="行思相册"
		  left-arrow
		  @click-left="$router.go('-1')"
		  fixed
		   />
		<van-list
		  v-model="loading"
		  :finished="finished"
		  finished-text="没有更多了"
		  @load="onLoad"
		  class="pic-list"
		>
			<PictureListItem v-for="pic in pics" :key="pic.albumId" :pic="pic"></PictureListItem>
		</van-list>
	</div>
</template>

<script>
	import {GetPic} from '@/request/api.js'
	import PictureListItem from '@/components/PictureListItem.vue'
	export default{
		name:'Pictures',
		components:{
			PictureListItem
		},
		data(){
			return{
				pics:[],
				pageNum:1,
				loading: false,
				finished: false,
			}
		},
		methods:{
			// 请求数据
			onLoad(){
				GetPic({
					pageNum:this.pageNum,
					pageSize:5
				}).then(res => {
					// 添加数据
					this.pics.push(...res.data.list)
					// 页数自增
					this.pageNum = this.pageNum + 1
					// 结束加载状态
					this.loading = false
					// 判断是否将数据全部加载
					if(res.data.isLastPage) this.finished = true;
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.pic-list{
		margin-top: 55px;
	}
</style>
