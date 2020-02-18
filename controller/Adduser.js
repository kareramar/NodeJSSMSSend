const express=require('express');
const router=express.Router();
const User=require('../models/user')
const Rlist=require('../models/createRouter');
const Birth=require('../models/birth')
var d = new Date();
var date1 = d.getDate();
var month2 = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
var year3 = d.getFullYear();
var arraylist=[];
var temparr=[];
router.get('/list',(req,res,next)=>{
    User.find((err,response)=>{
  res.json(response);
})
})

router.get('/Rlist',(req,res,next)=>{
    Rlist.find((err,response)=>{
  res.json(response);
})
})

function async() {
  //  router.get('/:id',(req,res,next)=>{
       // const id = req.params.id;
        let obj={DOB:date1+'-0'+month2};
       // let obj={DOB:"04-03"}
       Birth.find((err,res)=>{
           arraylist=res;
         //  console.log(res.DOB)
        //    temparr.push(res);
        //    arraylist=temparr;
        //    temparr.push([])
       })
     //  console.log(arraylist)
//        var data = arraylist.filter(e => 
        
//         e.birthdate ==obj.DOB);
//         console.log(data)
//         for(let obj1 of data) {
// console.log(obj1.roterID)
// console.log(obj1.firstname)
// console.log(obj1.mobile);
// console.log(obj1.status)
//         }
//   //  })
arraylist.forEach((res,next)=>{
   // console.log(res.birthdate)
    if(res.birthdate==obj.DOB) {
//console.log(values)
User.find({firstname:res.user_id},(err,data)=>{
    data.forEach((response)=>{
console.log('RouterName:-'+response.roterID+',UserName:-'+response.firstname+',UserMobileNo:-'+response.mobile+', UserBirthday status:-'+response.status)
    })
})
    }
    })


 }



 setInterval(async, 60*60*1000*24);
// setInterval(async, 1000);
router.post('/addUser',(req,res,next)=>{
    Rlist.findOne({Rname: req.body.Rname}, (err, routerName)=> { 

        
        if (!routerName) {
            console.log(err);
    return res.status(403).send({success: false, msg: 'user not found!'});
        }
        else {
    let newUserList=new User({
        roterID:req.body.Rname,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
      //  DOB:birthdate[0]+'-'+birthdate[1],
       // BirthDate:req.body.DOB,
        mobile:req.body.mobile,
      //  address:req.body.address,
        status: req.body.status
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
}

    })
})
module.exports=router;