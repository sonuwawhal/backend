import express from 'express';
import dotenv from 'dotenv';
import users from './users.js';
import productRoutes from './productRoutes.js';
const app=express();
dotenv.config();
const PORT=process.env.PORT||8080

app.get("/",(req,res)=>{
   res.status(200).send({"status":200,"msg":"Prog running","data":[]})
})

// app.get("/profile",(req,res)=>{
//     res.status(200).send({"status":200,"msg":"Profile created","data":"[]"})
// })
// app.get("/users/:id",(req,res)=>{
//     const id=req.params.id;
//     console.log(id)
//     res.status(200).send({status:200,msg:"user sent ${id}",data:"[]"})
// })
// app.get("/users",(req,res)=>{
// res.status(200).send({status:200,msg:"users found",data:users})
// })

// app.get('*',(req,res)=>{
//     res.status(404).send("Page not found")
// })

app.use("/users",productRoutes)
app.listen(PORT,()=>{
    console.log("Port running successfully")
})
