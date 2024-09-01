var mongoose = require("mongoose");
require('dotenv').config();

var conn = mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://srishti@database-5ivou.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true  , useUnifiedTopology: true} , (err)=>{
     if(!err){
         console.log("Moongoose connect succeded...");
     }
     else{
         console.log("ERROR : " , err);
     }
 });


 require("../models/User");