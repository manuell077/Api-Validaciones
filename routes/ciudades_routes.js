import express from "express";
import ciudadesController  from "../controller/ciudadesController.js";
// import {validarCategoria} from "../middlewares/validarCategoria.js"

const router= express.Router();

router.get('/',ciudadesController.getAllCiudades)
router.post('/',ciudadesController.postCiudades)
router.put('/:id',ciudadesController.actualizarCiudades)
router.patch('/:id',ciudadesController.actualizarParcialmente)
router.delete('/:id',ciudadesController.eliminarRegistro)

router.put('/:id',(req,res)=>{
       console.log(req.body)
   })

export default router;   