const mongoose=require('mongoose');
const BirthSchema=mongoose.Schema({
    user_id:{
type:String,

    },
    router_id:{
        type:String
    },
    birthdate:{
        type:String
    }
})
const Birth=module.exports=mongoose.model('Birth',BirthSchema);