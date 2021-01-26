<template>
	<!-- 历史详细信息 -->
	<div class="his-detail">
		
		<!-- 导航栏 -->
		<van-nav-bar
		  title="行思历史"
		  left-arrow
		  @click-left="$router.go('-1')"
		  fixed
		   />
		   
		 <!-- 详细信息 -->
		 <div class="his-detail-content">
			 <van-empty v-if="personList.length === 0" description="信息待完善" style="margin: auto auto;" />
			 <HistoryDetailItem v-for="person in personList" :key="person.personId" :person="person"></HistoryDetailItem>
		 </div>
	</div>
</template>

<script>
	import {GetHisDetail} from '@/request/api.js'
	import HistoryDetailItem from './HistoryDetailItem/index.vue'
	export default{
		name:'HistoryDetail',
		components:{
			HistoryDetailItem
		},
		data(){
			return{
				personList:""
			}
		},
		created() {
			GetHisDetail(this.$route.params.id)
			.then(res => {
				this.personList = res.data
			})
		}
	}
</script>

<style scoped lang="less">
	.his-detail-content{
		margin-top: 56px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
</style>
