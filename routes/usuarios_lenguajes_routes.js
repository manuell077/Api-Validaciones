import express from "express";
import usuarios_lenguajesController  from "../controller/usuarios_lenguajesController.js";

const router= express.Router();

router.get('/',usuarios_lenguajesController.getAllLenguajesUsuarios)
router.post('/',usuarios_lenguajesController.postLenguajes)
router.put('/:id',usuarios_lenguajesController.actualizarLenguajes)
router.patch('/:id',usuarios_lenguajesController.actualizarParcialmente)
router.delete('/:id',usuarios_lenguajesController.eliminarRegistro)



router.put('/:id',(req,res)=>{
    console.log(req.body)
})

export default router; 