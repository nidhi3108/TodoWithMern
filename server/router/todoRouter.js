const express= require('express')
const router=express.Router();
const model=require('../Model/todoModel')

router.post('/save',(req,res)=>{
    console.log(req.body);
    new model(req.body).save()
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
})

router.get('/getall',(req,res)=>{
    model.find().populate('createdBy') //isse pura data aata ah
    
    .then((result)=>{
        console.log(result);
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.json(err)
    });
})


router.post('/delete',(req,res)=>{
    model.findByIdAndDelete({_id: req.body._id})
    .then((result) => {
        res.status(200).json(result)
        
    }).catch((err) => {
        res.json(err);
    });
})

router.post('/edit',(req,res)=>{
    console.log(req.body.description._id);
    model.updateOne({_id: req.body.description._id}, {description:req.body.updateTodo})
    .then((result) => {
        res.json(result)
        // console.log();
    }).catch((err) => {
        res.json(err)
    });
    
})



module.exports=router