const mongoose=require('mongoose');
const RouterSchema=mongoose.Schema({
    Rname:{
        type:String,
        required:true
    }
    
});

const User=module.exports=mongoose.model('routes',RouterSchema);