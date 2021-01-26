<template>
	<div class="detail-item">
		<!-- 名字 -->
		<div class="per-name">{{person.name}}</div>
		<div class="per-desc">
			
			<!-- 职务 -->
			<van-tag class="per-job" 
			round type="primary" 
			size="large" color="#dd6161">{{person.job}}</van-tag>
			<br/>
			<!-- 班级 -->
			<van-tag class="per-grade" round 
			type="primary" size="large"
			color="#f29100"
			v-if="person.grade !== ' '"
			>{{person.grade}}</van-tag>
		</div>
		
		<!-- 寄语 -->
		<div class="per-comment">{{person.comment}}</div>
	</div>
</template>

<script>
	export default{
		name: 'HistoryDetailItem',
		props:["person"]
	}
</script>

<style  lang="less">
	.detail-item{
		margin: 20px auto;
		background: white;
		border-radius: 12px;
		box-shadow: 0 8px 12px #ebedf0;
		width: 45%;
		padding: 15px;
		box-sizing: border-box;
		height: 285px;
		.per-name{
			font-size: 18px;
			font-weight: bold;
			text-align: center;
		}
		.per-desc{
			margin: 0 auto;
			text-align: center;
			.per-job{
				margin-top: 5px;
				text-align: center;
				display:inline-block;
			}
			.per-grade{
				margin-top: 5px;
			}
			
		}
		.per-comment{
			margin-top: 15px;
			padding-top: 5px;
			color: #82848a;
			box-sizing: border-box;
			font-size: 15px;
		}
	}
</style>
