<template>
	<!-- 行思历史 -->
	<div class="history">
		<!-- 导航栏 -->
		<van-nav-bar
		  title="行思历史"
		  left-arrow
		  @click-left="$router.go('-1')"
		  fixed
		   />
		   <!-- 历史列表 -->
		   <div class="his-list">
			   <van-steps direction="vertical" active-icon="clock" :active="0" inactive-icon="underway" active-color="#2979ff">
				   <!-- 年份信息 -->
			     <van-step class="his-step clicks" 
				 v-for="his in historyList" 
				 :key="his.yearId" 
				 
				 >
					<div @click="$router.push(`/hisdetail/${his.yearId}`)">
						
						<!-- 描述信息 -->
						 <h3 class="his-desc">{{his.description}}</h3>
						 <!-- 年份 -->
						 <p class="his-year">{{his.year}}</p>
					</div>
					
			     </van-step>
			     
			   </van-steps>
		   </div>
	</div>
</template>

<script>
	import {GetHis} from '@/request/api.js'
	export default{
		name:'History',
		data(){
			return{
				historyList:""
			}
		},
		// 获取数据
		created() {
			GetHis()
			.then(res => {
				this.historyList = res.data;
			})
		},
	}
</script>

<style scoped lang="less">
	.his-list{
		margin-top: 46px;
	}
</style>
