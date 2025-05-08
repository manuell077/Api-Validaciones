import express from "express";
import lenguajesController  from "../controller/lenguajesController.js";

const router= express.Router();

router.get('/',lenguajesController.getAllLenguajes)
router.post('/',lenguajesController.postLenguajes)
router.put('/:id',lenguajesController.actualizarLenguajes)
router.patch('/:id',lenguajesController.actualizarParcialmente
    
)


router.put('/:id',(req,res)=>{
    console.log(req.body)
})

export default router; 