const express= require("express")
const port=5000;
const app= express();
const userRouter =require( './router/userRouter')
const todoRouter=require('./router/todoRouter')
const cors= require('cors')

app.use(cors({
    origin:["http://localhost:3000"]
}))
app.use(express.json())



app.use('/user',userRouter)
app.use('/todo',todoRouter)

app.listen(port,()=>{
console.log(`server is running on port ${port}`);
})