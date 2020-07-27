const express=require('express');


const app=express();

const port=4000;
app.get('/',(req,res)=>{
    return res.send("hello there")
});

app.listen(port,()=> console.log("server is runnig"));