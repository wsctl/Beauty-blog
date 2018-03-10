<template>
	<div>
		<h1>详情页</h1>
		<div class="detailContent">
			<h2>{{obj.articleTitle}}</h2>
			<p v-html="obj.content"></p>
			 <p>{{obj.author}}</p>
			 <p>{{obj.createtime|data}}</p>
			 {{obj._id}}
			 <p>点赞：<i class="iconfont icon-dianzan" @click="star1(obj._id)">{{star}}{{str}}</i></p>
		</div>
		
		<div>
			<el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea1">
			</el-input>
			<el-button type="primary" icon="el-icon-share" @click='send'>提交评论</el-button>
			<i class="iconfont icon-pinglun1"></i>{{zan}}
		</div>
		   <div class="content">
		   	     <ul v-for="item in arr1">
		   	     	<li >{{item.author}}<i class="iconfont icon-pinglun"></i>：</li>
		   	     	<li>{{item.content}}</li>
		   	     	<li>{{item.createtime|data}}</li>
		   	     	<li><i class="iconfont icon-dianzan"></i></li>
		   	     </ul>
		   </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				num:1,
				textarea1: "",
				id: "",
				obj: {},
				arr1:[],
				star:0,
				ok:"",
				str:""
				
			}
		},
		created() {
			this.id = this.$route.params.id;
			console.log("111",this.id)
			this.$store.dispatch('getarticleById',this.id).then(res=>{
				console.log("获取数据",res.data)
				this.obj = res.data;
			});
			this.$store.dispatch('getStar',this.id).then(res=>{
				this.star =res.data.star;
				//console.log('6666666660',res.data)
				if(res.data.ok==false){
					this.str="已取消"
				}else{
					this.str="已点赞"
				}
			})
			
		},
		mounted(){
			var id = this.$route.params.id;
			console.log('222',id)
			this.$store.dispatch('comments',id).then(res=>{
				 this.arr1 = res.data
				 
			});
			//获取点赞数量
			this.$store.dispatch('getcount',id).then(res=>{
				//console.log("点赞数量",res.data.num);
				this.zan=res.data.num
			})
			
		},
		
		methods: {
			send() {
				var id = this.$route.params.id;
				this.$store.dispatch('addcomment', {
					id: this.id,
					author: '小王',
					content: this.textarea1,
				}).then(res=>{
                   this.arr1 = res.data
					
					//获取点赞数量
					this.$store.dispatch('getcount',id).then(res=>{
				   // console.log("点赞数量",res.data.num);
				    this.zan=res.data.num
				})
				
				
			})
				
			},
			star1(id){
				//console.log(1)
				console.log(this.star)
				this.$store.dispatch('getStar',id).then(res=>{
					var obj = res.data;
					//console.log(obj)
					if(obj.ok==false){
						alert('false')
					//	alert('开始')
						this.star = obj.star+1;
						console.log('false..............',this.star,obj.star)
						//console.log('ssss',this.star)
						this.ok = true;
						this.str = "已取消"
					}else if(obj.ok==true){
						
						alert('true')
						//alert('取消')
						this.star = obj.star-1;
						console.log("true...........",this.star,obj.star)
						this.ok = false;
						this.str="已赞"
						
					}
					var obj1 = {id,updatestr:{star:this.star,ok:this.ok}}
					this.$store.dispatch('updateStar',obj1).then(res=>{
						//console.log('更新后数据',res.data);
						this.star =res.data.star;
						
					})
				})
			}
		},
		filters: {
			data: function(val) {
				var d = new Date(val);
				var year = d.getFullYear();
				var month = d.getMonth() + 1;
				var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
				var hour = d.getHours();
				var minutes = d.getMinutes();
				var seconds = d.getSeconds();
				return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
			}
		}


	}
</script>

<style scoped="scoped">
	input {
		width: 60%;
	}
	ul{
		list-style: none;
		border-top: 1px dashed gray;
	    border-bottom:1px dashed gray ;
	}
	.detailContent{
	  border-top: dashed 1px red;
	  border-bottom:red 1px dashed ;
	}
	.detailContent p:nth-child(3),.detailContent p:nth-child(4),.detailContent p:last-child{
		text-align: right;
	}
	
</style>