const mongoose=require('mongoose');


const UserSchema=mongoose.Schema({
    roterID:{
type:String,
required:"please enter rotername"
    },
    firstname:{
        type:String,
        required:"Please enter firstname"
    },
    lastname:{
        type:String,
        required:"please enter lastname"
    },
    mobile:{
        type:Number,
        required:"please enter mobile number"
    },
    DOB:{
        
        type:String,
     //   required:"please enter dob"
    },
    // BirthDate:{
    //     type:String,
    //     required:'please enter dob'
    // },
    address:{
        type:String,
     //   required:"please enter address"
    },
    status:{
        type:String,
        required:"please enter status"
    },
    metadata:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Birth' }]
});


const User=module.exports=mongoose.model('User',UserSchema);
 //module.exports=mongoose.model('Birth',BirthSchema);