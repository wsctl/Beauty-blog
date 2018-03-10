<template>
	<div>
		<header>
			<ul>
			<li><router-link to="/custome/index">首页</router-link></li>
		     <li><router-link to="/custome/class">分类</router-link></li>
		     <li><router-link to="/custome/mine">我的</router-link></li>
		 </ul>
		</header>
		
		<div>
			<router-view></router-view>
		</div>
		
		
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped="scoped">
	header{
		width: 100%;
		height: 40px;
		background:gray;
		display: flex;
		flex-direction:row ;
		justify-content: flex-end;
	}
	ul{
		list-style: none;
		width: 30%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		
	}
	a{
		color: white;
	}
</style>