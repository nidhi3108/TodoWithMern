const express= require('express')
const router=express.Router();
const model=require('../Model/userModel');
// const userModel = require('../Model/userModel');


router.post('/register',(req,res)=>{
    console.log(req.body);
    new model(req.body).save()
    .then((result)=>{
        console.log(result);
            res.status(200).json(result);
    })
    .catch((err)=>{
        res.status(500).json(err)
    })

    
})

router.post('/login',(req,res)=>{
    console.log(req.body);
    const loginData= req.body;
    model.findOne({email:loginData.email,password:loginData.password})
    .then((result)=>{
        if(result){
            res.status(200).json(result);
        }
        else{
            res.status(401).json({status:"login faled"})
        }
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})


module.exports=router
