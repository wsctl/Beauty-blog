var mongoose = require('../lib/db')
var Schema =mongoose.Schema;
var ac = new Schema({
	articleClassify:{type:String},
	articleTitle:{type:String},
    content:{type:String},
     createtime:{type:Date},
     author:{type:String},
     ok:{type:Boolean},
     star:{type:Number}
})
module.exports=mongoose.model('arcticle',ac)