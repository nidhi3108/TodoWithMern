const {Schema,model}=require('../connection')
const { Types } = require('mongoose');
const todoSchema=({
       description:String,
       createdBy:Object
       // createdBy:{type: Types.ObjectId,   ref: "users"},
})
module.exports=model("todoData",todoSchema)