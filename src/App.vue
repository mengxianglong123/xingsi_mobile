<template>
  <div id="app">
	  
		  <transition mode="out-in" :name="transitionName" >
			<keep-alive exclude="NewsPage,PicturesPage,HistoryDetail">
				<router-view class="app-main"></router-view>
			</keep-alive>
		  </transition>
	  
	 <transition mode="out-in" :name="transitionName" >
		  
		  <van-tabbar route v-show='showTabbar' style="z-index: 1000;">
		  		<van-tabbar-item replace to='/home'>
		  		    <span>首页</span>
		  		    <template #icon="props">
		  		      <i class="iconfont icon-shouye" style="font-size: 22px !important"></i>
		  		    </template>
		  		</van-tabbar-item>
		  		
		    <van-tabbar-item replace to='/nav'>
		        <span>导航</span>
		        <template #icon="props">
		          <i class="iconfont icon-daohang" style="font-size: 17px !important"></i>
		        </template>
		    </van-tabbar-item>
		  		
		  		<van-tabbar-item replace to='/about'>
		  		    <span>关于</span>
		  		    <template #icon="props">
		  		      <i class="iconfont icon-women" style="font-size: 26px !important"></i>
		  		    </template>
		  		</van-tabbar-item>
		  </van-tabbar>
		  
	  </transition>
	  
	  
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
	return{
		transitionName:"slide-left",
		showTabbar:true
	}  
  },
  components: {
    
  },
  watch: {
              //使用watch 监听$router的变化
              $route(to, from) {
                  // 有主级到次级
                  if (to.meta.index > from.meta.index) {
                      this.transitionName = 'van-slide-left' // 向左滑动
                  } else if (to.meta.index < from.meta.index) {
                      // 由次级到主级
                      this.transitionName = 'van-slide-right' // 向右滑动
                  } else {
                      this.transitionName = ''   //同级无过渡效果
                  }
				  this.showTabbar = to.meta.showTabbar //控制tabbar是否显示
              }
          }
}
</script>

<style>
@import url("assets/transtationForPage.css");
.iconfont{
	font-size: 15px;
}

body{
	background-color: #f2f3f5;
}
/* 使用绝对定位解决切换页面时的元素占位问题 */
.app-main{
	position: absolute;
	top: 0;
	margin: 0 auto;
	width: 100%;
}
/* 全局文本省略效果 */
.flow-text{
	overflow:hidden;
	
	text-overflow: ellipsis;
	
	display: -webkit-box;
	
	-webkit-line-clamp: 2;
	
	-webkit-box-orient: vertical;
}
/* 全局点击效果 */
.clicks:active{
	opacity: 0.8;
}
/* 全局navbar样式配置 */
.van-icon-arrow-left{
	font-size: 20px !important;
	color: black !important;
}
.van-nav-bar__title{
	font-size: 17px !important;
}
</style>
