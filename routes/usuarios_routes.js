import express from "express";
import usuariosController  from "../controller/usuariosController.js";

const router= express.Router();

router.get('/',usuariosController.getAllUsuarios)
router.post('/',usuariosController.postUsuarios)
router.put('/:id',usuariosController.actualizarUsuarios)
router.patch('/:id',usuariosController.actualizarParcialmente)
router.delete('/:id',usuariosController.eliminarRegistro)


router.put('/:id',(req,res)=>{
    console.log(req.body)
})

export default router; 