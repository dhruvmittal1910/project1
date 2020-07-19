const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
 const ejs=require("ejs");
 const _=require("lodash");

const app=express();

mongoose.connnet("mongodb://locaclhost/27017/sampleDB",{useNewUrlParser:true,useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

app.listen(process.env.PORT || 3000,function(){
    console.log("server running on port 3000");
    
})