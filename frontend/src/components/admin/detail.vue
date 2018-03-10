<template>
	<div>
	<el-table :data="arr" style="width: 100%">
	<el-table-column prop="articleTitle" label="文章标题" width="180">
	</el-table-column>
	<el-table-column prop="content" label="文章内容" width="180">
	</el-table-column>
	<el-table-column prop="articleClassify" label="文章归类">

	</el-table-column>
	<el-table-column prop="createtime" label="文章创建时间">

	</el-table-column>
</el-table>
 <el-button @click='fn'>返回</el-button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				id:'',
				arr:[]
			}
		},
		created(){
			var that = this;
			this.id =this.$route.params.id
			console.log(this.$route.params.id)
			
			this.$store.dispatch('getarticleById',that.id).then(res=>{
				console.log(res.data)
				this.arr.push(res.data)
			})
		},
		methods:{
			fn(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
</style>