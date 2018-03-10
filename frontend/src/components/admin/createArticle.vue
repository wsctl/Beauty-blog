<template>
	<div>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="作者">
				<el-input v-model="form.author"></el-input>
			</el-form-item>
			<el-form-item label="文章标题">
				<el-input v-model="form.articleTitle"></el-input>
			</el-form-item>
			<el-form-item label="选择类名">
				<el-select v-model="form.articleClassify" placeholder="请选择活动区域">
					<el-option v-for="item in arr"   :label="item.name" :value="item.name"></el-option>
					
				</el-select>
			</el-form-item>
			
		</el-form>
		 <quill-editor :content="content"
                :options="editorOption"
                @change="onEditorChange($event)">
         </quill-editor>
         
				<el-button type="primary" @click="publish">立即发布</el-button>
				<el-button>取消</el-button>
			
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
                    articleTitle:'',
                    articleClassify:'',
                    author:""
				},
				content:"",
               editorOption: {},
               arr:[]
}
},
methods: {
		publish() {
			this.$store.dispatch('createArcticle', {
				author: this.form.author,
				articleTitle: this.form.articleTitle,
				articleClassify: this.form.articleClassify,
				content: this.content
			}).then(res=>{
				 if(res.data.msg =="ok"){
				 	this.$router.push('/admin/acticl');
				 	alert('发布成功')
				 }
			})
		},
		onEditorChange(e) {
			this.content = e.html
		}
	},
	created() {
          this.$store.dispatch('getclass').then(res=>{
          	this.arr = res.data
          })
	}

}</script>

<style>

</style>