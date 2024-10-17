import express from "express";
const app=express();
const port=3001;
app.get("/",(req,res)=>{
    //console.log(req.rawHeaders);
    res.send("<h1>hello express!<h1>");
});
app.get("/",(req,res)=>{
    
    res.sendStatus("<h2>About us<h2><p>This is Niharika</p>");
});
app.get("/",(req,res)=>{
    
    res.sendStatus("<h2>Contact me<h2><p>+91 728797xxxx</p>");
});
app.listen(port,()=>{
    console.log(`server started on port ${port}`);
});