const express=require('express');
const router=express.Router();
const routes=require('../models/createRouter')
router.get('/Rlist',(req,res,next)=>{
    routes.find((err,response)=>{
  res.json(response);
})
})

router.post('/addRouter',(req,res,next)=>{
let newUserList=new routes({
     Rname:req.body.Rname 
})
newUserList.save((err,saveRecord)=>{
    if(err) {
        res.json({msg:'failed to save records...'+err})
        console.log('faield to save record...')
    }
    else {
        res.json({msg:'record save successfully...'})
        console.log('record save successfully...'+saveRecord)
    }
})
})


module.exports=router;