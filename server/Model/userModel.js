const {Schema,model}= require('../connection')
const userSchema=new Schema({
    name: String,
    password: String,
    email: String
})
module.exports=model("userData",userSchema)