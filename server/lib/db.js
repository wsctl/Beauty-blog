var mongoose = require('mongoose');
var ourl = 'mongodb://localhost:27017/beauty'
mongoose.connect(ourl);
mongoose.connection.on('connected',function(){
	console.log('数据库连接成功')
})
mongoose.connection.on('error',function(){
	console.log("连接数据库失败")
})
mongoose.connection.on('disconnect',function(){
	console.log('数据库断开')
})
module.exports = mongoose;




















