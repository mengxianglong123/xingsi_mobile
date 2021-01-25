<template>
  <div id="app">
	  <keep-alive>
		  <router-view></router-view>
	  </keep-alive>
	  
	  
	  
	  
	  <van-tabbar route>
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
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
.iconfont{
	font-size: 15px;
}

body{
	background-color: #f2f3f5;
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
</style>
