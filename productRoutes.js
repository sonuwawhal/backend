import express from 'express';
import users from './users.js';



const productRoutes=express.Router();

productRoutes.get("/:id",(req,res)=>{
    res.status(200).send({status:200,msg:"Data found",data:[]})
})
export default productRoutes;