 const express=require('express');

 const app=express();


 const reqFilter=(req,resp,next)=>{
    if(!req.query.age)
    {
     resp.send("please enter your age")
    }
    else if(req.query.age<18)
    {
     resp.send("you should be balik atleast maa chuda bhosdike")
    }
    else 
    {
       next();
    }
 }
  
//   app.use(reqFilter)

 app.get('/',(req,resp)=>{
  resp.send("welcome to home page")
 })
  
 
 app.get('/user',reqFilter,(req,resp)=>{
  resp.send("welcome to user page")
 })
  


 app.listen(5500);