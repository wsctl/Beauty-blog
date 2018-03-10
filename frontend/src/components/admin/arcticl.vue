<template>
	<el-container>
		<el-header>
			<el-button @click='addArticle'>添加文章</el-button>
		</el-header>

		<el-table :data="tableData" style="width: 100%">
			<el-table-column label="作者" width="180">
				<template slot-scope="scope">
					<i class="el-icon-time">{{ scope.row.author }}</i>

				</template>
			</el-table-column>
			<el-table-column label="发表时间" width="180">
				<template slot-scope="scope">
					<i class="el-icon-time">{{ scope.row.createtime }}</i>

				</template>
			</el-table-column>
			<el-table-column label="文章标题" width="180">
				<template slot-scope="scope">
					<i>{{ scope.row.articleTitle }}</i>
					<!--<span style="margin-left: 10px">{{ scope.row.date }}</span>-->
				</template>
			</el-table-column>
			<el-table-column label="类" width="180">
				<template slot-scope="scope">
					<el-popover trigger="hover" placement="top">
						<p>姓名: {{ scope.row.articleClassify }}</p>
						<p>住址: {{ scope.row.address }}</p>
						<div slot="reference" class="name-wrapper">
							<el-tag size="medium">{{ scope.row.articleClassify }}</el-tag>
						</div>
					</el-popover>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="check(scope.row._id)">查看</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
					<el-button size="mini" @click="handleEdit(scope.row._id)">编辑</el-button>
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
			addArticle() {
				this.$router.push('/admin/createArticle')
			},
			get1() {
				this.$store.dispatch('getArticle').then(res => {
					console.log(res.data)
					this.tableData = res.data
				})
			},
			handleDelete(oid) {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					this.$store.dispatch('delarticle', oid).then(res => {
						this.get1()
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			handleEdit(oid) {
				this.$router.push({name:'changeArcticl',params:{id:oid}})
			},
			check(oid){
				console.log(oid)
				this.$router.push({name:"detail",params:{id:oid}})
			}

		},
		created() {
			this.get1()
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
</style>