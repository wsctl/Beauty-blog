var mongoose = require('../lib/db')
var Schema =mongoose.Schema;
var ac = new Schema({
	author:{type:String},
    star:{type:Number},
     ok:{type:Boolean},
     articleId:{type:Schema.Types.ObjectId}
})
module.exports=mongoose.model('comments',ac)