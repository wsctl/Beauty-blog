var mongoose = require('../lib/db')
var Schema =mongoose.Schema;
var Res = new Schema({
	username:{type:String},
	pass:{type:String},
	createtime:{type:String}
})
module.exports=mongoose.model('resgist',Res)














