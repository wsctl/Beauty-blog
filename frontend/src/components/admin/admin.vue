<template>
	<div>
		<el-header><h1 align="center">Admin</h1></el-header>
		<el-container style="height: 500px; border: 1px solid #eee">

			<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
				<el-menu :default-openeds="['1', '3']" :router='true'>
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-message"></i>管理面板</template>
						<el-menu-item-group>

							<el-menu-item index="/admin/classfiy">分类管理</el-menu-item>
							<el-menu-item index="/admin/acticl">文章管理</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-container>
				<router-view></router-view>
			</el-container>
		</el-container>
	</div>
</template>
<script>
	export default {
		data() {
			const item = {
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			};
			return {
				tableData: Array(20).fill(item)
			}
		},
		methods:{
			
		}
	};
</script>

<style scoped="scoped">
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}
	
	.el-aside {
		color: #333;
	}
	
	.el-container {
		padding: 0;
		margin: 0;
	}
</style>