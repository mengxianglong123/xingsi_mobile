<template>
	<div class="picture-list">
		<div class="pic-list-title">
			<i class="iconfont icon-icon_luying"></i> 行思回忆录
		</div>
		<PictureListItem 
		v-for="pic in picList" 
		:key="pic.albumId" :pic="pic">
		</PictureListItem>
	</div>
</template>

<script>
	import {GetPic} from '@/request/api.js'
	import PictureListItem from '@/components/PictureListItem.vue'
	export default{
		name: 'PictureList',
		data(){
			return{
				picList:null
			}
		},
		// 组件被创建时
		created() {
			// 获取相册列表数据
			GetPic({
				pageNum:1,
				pageSize:5
			}).then(res =>{
				this.picList = res.data.list;
			})
		},
		components:{
			PictureListItem
		}
		
	}
</script>

<style scoped lang="less">
	.picture-list{
		margin-bottom: 20px;
		.pic-list-title{
			font-size: 17px;
			font-weight: bolder;
			margin-bottom: 15px;
			i{
				font-size: 20px;
				color: #2979ff;
			}
		}
	}
</style>
