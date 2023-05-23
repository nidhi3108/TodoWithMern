const mongoose=require('mongoose')
const databaseName="todo"
const databaseUrl=`mongodb+srv://nidhi3108:123Nid45@cluster0.u5hhcyg.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
mongoose.connect(databaseUrl)
.then((result)=>{
    console.log('database connected');
})
.catch((err)=>{
    console.log(err);
    console.log("err in database connecting ");
});
module.exports=mongoose;