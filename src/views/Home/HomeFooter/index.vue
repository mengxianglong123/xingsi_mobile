<template>
	<div class="home-footer">
		<img src="../../../assets/logo.png" alt=""
		width="30%">
		<a data-v-1ae3933e="" href="http://beian.miit.gov.cn/" target="_blank">豫ICP备20006399号</a>
		<div class="footer-text"> ©2008-2021行思工作室（大学生网络工作室）版权所有</div>
	</div>
</template>

<script>
	export default{
		name:'HomeFooter'
	}
</script>

<style scoped lang="less">
	.home-footer{
		margin-bottom: 70px;
		text-align: center;
		img{
			margin: 0 auto;
			margin-top: 30px;
			display: block;
		}
		a{
			font-size: 10px;
			color: #2b85e4;
		}
		.footer-text{
			font-size: 10px;
			color: #82848a;
		}
	}
</style>
