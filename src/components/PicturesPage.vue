<template>
	<div class="pic">
		<!-- 导航栏 -->
		<van-nav-bar
		:title="name"
		  left-arrow
		  @click-left="$router.go('-1')"
		  fixed
		   />
		   <!-- 内容 -->
		<div class="pic-content">
			   <van-grid :border="false" :column-num="2" >
			     <van-grid-item v-for="(pic,index) in pics" :key="pic.albumId" @click="preview(index)">
			       <van-image :src="pic.pictureUrl" class="animate__animated animate__pulse img-item"/>
			     </van-grid-item>
			   </van-grid>
		</div>
	</div>
</template>

<script>
	import { ImagePreview } from "vant";
	import {GetPicById} from '@/request/api.js'
	export default{
		name:'PicturesPage',
		data(){
			return{
				pics:"",
				urls:[],
				name:''
			}
		},
		// 获取相册数据
		created() {
			GetPicById(this.$route.params.id)
			.then(res => {
				// 获取名字
				this.name = res.data.albumName;
				// 获取图片
				this.pics = res.data.photosList;
				// 获取链接
				this.pics.forEach((item,index,array)=>{
					this.urls.push(item.pictureUrl)
				})
			})
		},
		methods:{
			preview(index){
				ImagePreview({
				  images:this.urls,
				  startPosition: index,
				});
			}
		}
	}
</script>

<style scoped lang="less">
	
	.pic-content{
		margin-top: 47px;
		.img-item{
			border-radius: 10px;
			overflow: hidden;
			box-shadow: 2px 3px 5px #909399;
		}
	}
</style>
