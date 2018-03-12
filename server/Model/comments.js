var mongoose = require('../lib/db')
var Schema =mongoose.Schema;
var ac = new Schema({
	author:{type:String},
    content:{type:Number},
    createtime:{type:Date},
     articleId:{type:Schema.Types.ObjectId}
})
module.exports=mongoose.model('comments',ac)