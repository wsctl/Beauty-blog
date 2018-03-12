var express = require('express');
var router = express.Router();
var ClassifyModel =require('../Model/Classify')
var createArticleModel =require('../Model/createArticle')
var comments =require('../Model/comments')
var Resgist =require('../Model/resgist')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/addclass',function(req,res){
	console.log(666)
	var classify = req.body.classify;
	var clas = new ClassifyModel({
		name:classify,
		createtime:new Date()
	})
	clas.save(function(err,ress){
		if(err){
			console.log('数据库添加失败')
		}else{
			console.log(ress)
			
			ClassifyModel.find({},function(err,result){
				if(err){
					console.log("err",err)
				}else{
					res.send(result)
				}
			})
		}
	})
});
router.get('/getclass',function(req,res){
	  ClassifyModel.find({},function(err,result){
				if(err){
					
				}else{
					res.send(result)
				}
			})
});
router.get('/delclass',function(req,res){
	var id =req.query.id;
	ClassifyModel.findByIdAndRemove(id,function(err,result){
		if(err){
			console.log('Error',err)
		}else{
			res.send(result)
		}
	})
})
router.post('/update',function(req,res){
	var id = req.body.arr[0].id;
	var str = req.body.arr[1].str;
	console.log(id,str)
	var updatestr ={name:str}
	ClassifyModel.findByIdAndUpdate(id,updatestr,function(err,ress){
		if(err){
			console.log('Error',err)
		}else{
			res.send(ress)
		}
	})


});
router.post('/createArcticle',function(req,res){
	var author =req.body.author;
	var articleClassify = req.body.articleClassify;
	var  articleTitle =req.body.articleTitle;
	var  content = req.body.content;
	var  ok=false;
	var  star=0;
	var article = new createArticleModel({
		articleClassify,
		articleTitle,
		content,
		author,
		star,
		ok,
		createtime:new Date()
	});
	article.save(function(err,ress){
		if(err){
			console.log('数据库添加失败')
		}else{
			console.log(ress);
			res.send({msg:"ok"})
		}
	})
	
	
});
router.get('/getarticle',function(req,res){
	 createArticleModel.find({},function(err,result){
				if(err){
					
				}else{
					res.send(result)
				}
			})
})
router.get('/delarticle',function(req,res){
	var id = req.query.id;
	createArticleModel.findByIdAndRemove(id,function(err,result){
		if(err){
			console.log('Error',err)
		}else{
			res.send(result)
		}
	})
	
});
router.post('/change',function(req,res){
	var id = req.body.id;
	var articleClassify =req.body.articleClassify;
	var articleTitle =req.body.articleTitle;
	var content=req.body.content;
	var author = req.body.author;
	var updateStr ={
		articleClassify,
		articleTitle,
		content,
		author,
		createtime:new Date()
	};
	createArticleModel.findByIdAndUpdate(id,updateStr,function(err,ress){
		if(err){
			console.log('Error',err)
		}else{
			res.send({msg:'ok'})
		}
	})
	
})
router.get('/getById',function(req,res){
	var id = req.query.id;
	createArticleModel.findById(id,function(err,ress){
		if(err){
			console.log('Error',err)
		}else{
			res.send(ress)
		}
	})

});
router.post('/addcomment',function(req,res){
	console.log(req.body)
	var author = req.body.author;
	var articleId = req.body.id;
	var createtime = new Date;
	var content = req.body.content;
	var commen = new comments({
		  author,
		  articleId,
		  createtime,
		  content
	})
	commen.save(function(err,ress){
		if(err){
			console.log('数据库添加失败')
		}else{
			console.log(ress)
			
			comments.find({articleId},function(err,result){
				if(err){
					console.log("err",err)
				}else{
					res.send(result)
				}
			})
		}
	})
});
 router.get('/comments',function(req,res){
 	var id = req.query.id;
 	console.log(id)
 		comments.find({articleId:id},function(err,result){
				if(err){
					console.log("err",err)
				}else{
					res.send(result)
				}
			})
 })
 //根据id 获取点赞数量
 router.get('/getnum',function(req,res){
 	var articleId = req.query.id;
 	comments.count({articleId},function(err,result){
 		  if(err){
 		  	console.log("获取数量：",err)
 		  }else{
 		  	res.send({num:result})
 		  }
 	})
 })
router.get('/getstar',function(req,res){
	       var id =req.query.id;
	       console.log(id)
	       createArticleModel.findById(id,function(err,result){
				if(err){
					
				}else{
					console.log(result)
					res.send(result)
				}
			})
})
router.post('/star',function(req,res){
	var id = req.body.id;
	var updatestr ={star:req.body.updatestr.star,ok:req.body.updatestr.ok};
	console.log(id,updatestr)
	createArticleModel.findByIdAndUpdate(id,updatestr,function(err,resu){
		 if(err){
		 	console.log('更新数据失败',err)
		 }else{
		 	console.log('更新成功')
		 	console.log(resu)
		 	res.send(resu)
		 }
	})
})
router.get('/resgist',function(req,res){
	Resgist.find({},function(err,resu){
		if(err){
			console.log('注册数据没找到',err)
		}else{
			res.send(resu)
		}
	})
})
router.post('/addres',function(req,res){
	var username = req.body.username;
	var pass =req.body.pass;
	var resgist = new Resgist({
		 username,
		 pass,
		 createtime:new Date()
	})
	resgist.save(function(err,ress){
		if(err){
			console.log('注册失败')
		}else{
			res.send('注册成功')
		}
	})
	
})

module.exports = router;
