const { log } = require("console");
const express=require("express");
const path=require('path')
const PORT=3200
const app=express()
app.use(express.static('static'))
app.use(express.json())
app.post('/',Token,(req,res)=>{
    console.log(req.method);
    res.send(`hello${req.user}`)
})
app.listen(PORT,()=>{
    console.log("server started");
})
//middile ware

function Token(req,res,next){
    console.log(req.body);
    const{name}=req.body;
    if(name=="alan"){
        req.user=name
        next()
    }
    console.log("this is middileware");
}