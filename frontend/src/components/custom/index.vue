<template>
	<div>
		<ul v-for='item in arr'>
			<li @click="move(item._id,item)">标题：{{item.articleTitle}}</li>
			<li>分类：{{item.articleClassify}}</li>
			<li ><span v-html="'文章内容:'+item.content"></span></li>
			<li>创建时间：{{item.createtime|data}}</li>
			<li>
				评论：<i class="iconfont icon-pinglun"></i>
				点赞：<i class="iconfont icon-dianzan" @click="star(item._id)"></i>
				
			</li>
		</ul>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				arr:[],
				star:0,
				ok:''
			}
		},
		
		created(){
			this.$store.dispatch('getArticle')
			.then(res=>{
				this.arr = res.data;
			    
			}),
			//
			this.$store.dispatch('getcount',id).then(res=>{
				console.log("点赞数量",res.data.num);
				this.zan=res.data.num
			})
		},
		methods:{
			move(oid,item){
			   this.$router.push({name:"detail1",params:{id:oid,obj:item}})
			},
			star(id){
//				 this.$store.dispatch('getStar')
//				 .then(res=>{
//				 	var arr = res.data;
//				 	console.log(arr)
//				    for(var key in arr){
//				    	if(arr[key]._id==id){
//                         
//				    		if(arr[key].ok==false){
//				    			 this.ok = true
//				    			this.star = arr[key].star++
//				    		}else if(arr[key].ok==true){
//				    			
//				    			this.str = arr[key].star--;
//				    			this.ok =false
//				    		}
//				    		
//				    		var obj ={ok:this.ok,star:this.str}
//				    		//更新数据库
//				    		
//				    	}
//				    	break;
//				    }
//				 })
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
	ul{
		border: solid 1px red;
		list-style: none;
		margin: 20px;
	}
</style>