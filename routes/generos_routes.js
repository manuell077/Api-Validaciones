import express from "express";
import generosController  from "../controller/generosController.js";

const router= express.Router();

router.get('/',generosController.getAllGeneros)
router.post('/',generosController.postGeneros)
router.put('/:id',generosController.actualizarGeneros)


router.put('/:id',(req,res)=>{
       console.log(req.body)
   })

export default router;   