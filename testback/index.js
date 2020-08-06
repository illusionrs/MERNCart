const express=require('express');


const app=express();

const port=4000;

const isadmin=(req,res,next)=>{
    console.log("is admin man")
    next()

}

const admin=(req,res)=>{
    return res.send(" admin page")
}

app.get('/admin', isadmin,admin);
app.get('/',(req,res)=>{
    return res.send("hello there")
});

app.listen(port,()=> console.log("server is runnig"));