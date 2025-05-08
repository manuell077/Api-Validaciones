import  Ciudades from "../models/ciudades.js";

class CiudadesController{
     
    static getAllCiudades = async(req,res)=>{
        const objetoCiudades = new Ciudades();
        const ciudades = await objetoCiudades.getAll();
        res.json(ciudades)
    }

    static postCiudades = async(req,res)=>{
        const {nombre} = req.body;
        try{
        const objetoCiudades = new Ciudades();
        const envio = await objetoCiudades.post(nombre);
        res.status(201).json(envio)
        }catch(error){
           res.status(500).json({error:error.message})
 
        }
        
        
        
     }

    
     static actualizarCiudades = async(req,res)=>{

        
        const {id} = req.params 
        const {nombre} = req.body;
       
        try{ 
           const objetoCiudades = new Ciudades()
           const ciudad = await objetoCiudades.update(nombre,id);
           res.json(ciudad);
        }catch(error){
            res.status(500).json({error:error.message})
        }
        
    }

    static actualizarParcialmente = async(req,res) =>{
        
        const {id} = req.params 
        const info = req.body;
        
        
        try{ 
           const objetoCiudades = new Ciudades()
           const ciudad = await objetoCiudades.updateParcial(id,info);
           res.json(ciudad);
        }catch(error){
            res.status(500).json({error:error.message})
        }

    }

    static eliminarRegistro = async(req,res) =>{
         
        const {id} = req.params;

        try{ 
            const objetoCiudades = new Ciudades()
            const ciudad = await objetoCiudades.delete(id);
            res.json(ciudad);
         }catch(error){
             res.status(500).json({error:error.message})
         }

    }
 




}

export default CiudadesController;