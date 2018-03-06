<template>
	<el-container>
		<el-header>
			<el-button @click='addclass'>添加类</el-button>
		</el-header>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column type="index">
			</el-table-column>
			<el-table-column label="添加时间" width="180" align='center'>
				<template slot-scope="scope">
					<i class="el-icon-time">{{ scope.row.createtime }}</i>
					<!--<span style="margin-left: 10px">{{ scope.row.date }}</span>-->
				</template>
			</el-table-column>
			<el-table-column label="类名" width="180" align='center'>
				<template slot-scope="scope">
					<el-popover trigger="hover" placement="top">
						<p>姓名: {{ scope.row.name }}</p>
						<p>住址: {{ scope.row.createtime }}</p>
						<div slot="reference" class="name-wrapper">
							<el-tag size="medium">{{ scope.row.name }}</el-tag>
						</div>
					</el-popover>
				</template>
			</el-table-column>
			<el-table-column label="操作" align='center'>
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.row._id)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

	</el-container>
</template>
<script>
	export default {
		data() {
			return {
				tableData: []
			}
		},
		methods: {
			//添加类名
			addclass() {
				this.$prompt('请输入分类名称', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						inputPattern: /\S/,
						inputErrorMessage: '请输入分类名称'
					}).then(({
						value
					}) => {
						this.$message({
							type: 'success',
							message: '新增加的类: ' + value
						});
						this.$store.dispatch('addclass', {
								classify: value
							})
							.then(res => {
								console.log(res)
								this.tableData = res.data
							}).catch(err => {
								console.log('error:', err)
							})
					})
					.catch(() => {
						this.$message({
							type: 'info',
							message: '取消输入'
						});
					});
			},
			//根据id删除数据
			handleDelete(index) {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					this.$store.dispatch('delclass', index)
						.then(res => {
							this.$store.dispatch('getclass').then(res => {
								this.tableData = res.data
							})
						})
						.catch(err => {
							console.log("删除失败");
							this.tableData = res.data
						})

				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});

			},
			//根据id更新数据
			handleEdit(oid) {
				this.$prompt('请输入更新类名', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					inputPattern: /\S/,
					inputErrorMessage: '邮箱格式不正确'
				}).then(({
					value
				}) => {
					this.$message({
						type: 'success',
						message: '你的更新后类名是: ' + value
					});
					this.$store.dispatch('update',[{id:oid},{str:value}]).then(res => {
					console.log('更新数据', res);
					this.$store.dispatch('getclass').then(res=>{
						this.tableData=res.data
					})
				})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '取消输入'
					});
				});
				
			}
		},
		created() {
			this.$store.dispatch('getclass')
				.then(res => {
					this.tableData = res.data
				})

		}

	}
</script>

<style scoped="scoped">
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
		width: 100%;
	}
	div.cell{
		align: center;
	}
</style>
/*open2() { }