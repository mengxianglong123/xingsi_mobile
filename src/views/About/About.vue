<template>
	<div class="about">
		<!-- 导航栏 -->
		<van-nav-bar
		  title="行思简介"
		  fixed
		   />
		<div class="about-content">
			<div class="card animate__animated animate__bounceInUp">
				<div class="about-img">
					<van-image width="100" fit="cover" :src="require('@/assets/logo-big.png')" />
					<h2>行思工作室</h2>
				</div>
				<div class="about-text">
					<h4>且学且思，且行且思，行则有序，思则无疆，是为行思 !</h4>
					<p>大学生网络工作室又称 “ 行思工作室 ” ，是河南理工大学校团委领导下的社团组织。工作室成立之初负责部分官方网站的搭建与维护，经过历届的发展与创新，现设有程序组、设计组、视创组、游戏开发组、文案组运营组五个组，每个组各有特色、大神云集，始终贯行着 “ 参与、协作、奉献 ” 的精神。</p>
					<p>工作室主要以学习计算机应用技术为主，定期进行各方向的专业技术培训指导，扎实基础之后即可帮助完成学校、个人下发的网站项目、3D游戏开发、海报创作、视频制作、文案策划、微博微信运营等工作。</p>
				</div>
			</div>
			
			
			<div class="card animate__animated animate__bounceInUp" >
				<div class="about-img">
					<van-image width="100" fit="cover" :src="require('@/assets/chengxu.png')" />
					<h3>程序组</h3>
				</div>
				<div class="about-text">
					<p>这里是行思工作室最大的一个组，可谓是人丁兴旺，人才济济！所谓程序组，主力当然就是搞软件开发啦！无论是前端，亦是后台，或是两者兼顾的全栈开发，各种方向我们都有，这里都有优秀的学长学姐，最新的前沿技术，有无所不能的it大佬。如果你想变成传说中那个无所不能的hacker的话，来吧，我们在这儿等你！只要你想，一切都会变成真的！</p>
				</div>
			</div>
			
			
			<div class="card" >
				<div class="about-img">
					<van-image width="100" fit="cover" :src="require('@/assets/sheji.png')" />
					<h3>设计组</h3>
				</div>
				<div class="about-text">
					<p>分为两个方向：前端和PS。前端包括HTML，CSS，JavaScript等，做好网页开发，布局和色彩搭配；PS方向主要运用photoshop，以AI，AE为辅助，设计海报，宣传资料。以有限的技术呈现视觉美感，表达内涵以及展现自己的设计想法。</p>
				</div>
			</div>
			
			
			<div class="card" >
				<div class="about-img">
					<van-image width="100" fit="cover" :src="require('@/assets/shichuang.png')" />
					<h3>视创组</h3>
				</div>
				<div class="about-text">
					<p>视创组以adobe系列pr为主，活用AE,Flash,Au等软件去打造视频，同时致力于以兴趣开发为根基的视频创作，用简单的技术做当初令自己心动的视频类型。以扎实的技术为核心，新奇的创意为灵魂，通过视频表达生活。</p>
				</div>
			</div>
			
			
			<div class="card" >
				<div class="about-img">
					<van-image width="100" fit="cover" :src="require('@/assets/shouxi.png')" />
					<h3>游戏开发组</h3>
				</div>
				<div class="about-text">
					<p>视创组以adobe系列pr为主，活用AE,Flash,Au等软件去打造视频，同时致力于以兴趣开发为根基的视频创作，用简单的技术做当初令自己心动的视频类型。以扎实的技术为核心，新奇的创意为灵魂，通过视频表达生活。</p>
				</div>
			</div>
			
			
			<div class="card" >
				<div class="about-img">
					<van-image width="100" fit="cover" :src="require('@/assets/wenan.png')" />
					<h3>文案运营组</h3>
				</div>
				<div class="about-text">
					<p>文案运营组负责社团推广写推文，官Q官微公众号，office软件手里拿，社团生活真奇妙。</p>
				</div>
			</div>
			
			<div class="card" style="color: #666666;">
				<van-image width="100" fit="cover" :src="require('@/assets/guanQ.jpg')" />
				<p>行思官Q</p>
				<van-image width="100" fit="cover" :src="require('@/assets/weixin.jpg')" />
				<p>行思官微</p>
			</div>
		</div>
		
	</div>
</template>

<script>
export default{
	name: 'About'
}
</script>

<style scoped lang="less">
	.about-content{
		margin-top: 55px;
		margin-bottom: 55px;
		.card{
			text-align: center;
			border-radius: 12px;
			box-shadow: 1px 8px 12px #ebedf0;
			display: flex;
			background-color: white;
			width: 90%;
			flex-direction: column;
			margin: 15px auto;
			justify-content: center;
			align-items: center;
			padding: 15px;
			box-sizing: border-box;
			.about-text{
				color: #606266;
				letter-spacing: 0.5px;
				
			}
		}
	}
</style>
