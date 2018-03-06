var express = require('express');
var router = express.Router();
var ClassifyModel =require('../Model/Classify')
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


})



	

module.exports = router;
