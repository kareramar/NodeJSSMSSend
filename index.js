const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const path=require('path');
const app=express();
const port=3000;
//const route=require('./routes/route');
mongoose.connect('mongodb://localhost:27017/getStatus');
mongoose.connection.on('connected',()=>{
    console.log('connection successfull.......')
})
mongoose.connection.on('error',(err)=>{
if(err) {
    console.log('error in connection...'+err);
}
})
app.get('/',(req,res)=>{
res.send('heyyy..... ')
})

app.use(cors());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'public')))
//app.use('/',route)
app.use(require('./controller'));
app.listen(port,()=>{
    console.log('server started on port'+port); 
})