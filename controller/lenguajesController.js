import  Lenguaje from "../models/lenguaje.js";

class GenerosController{
     
    static getAllLenguajes = async(req,res)=>{
        const objetoLenguajes = new Lenguaje();
        const lenguaje = await objetoLenguajes.getAll();
        res.json(lenguaje)
    }

    static postLenguajes = async(req,res)=>{
        const {generos} = req.body;
        try{
        const objetoLenguajes = new Lenguaje();
        const lenguaje = await objetoLenguajes.post(generos);
        res.status(201).json(lenguaje)
        }catch(error){
           res.status(500).json({error:error.message})
 
        }
         
     }

     static actualizarLenguajes = async(req,res)=>{

        
        const {id} = req.params 
        const {generos} = req.body;
       
        try{ 
           const objetoLenguajes = new Lenguaje()
           const lenguaje = await objetoLenguajes.update(generos,id);
           res.json(lenguaje);
        }catch(error){
            res.status(500).json({error:error.message})
        }
        
    }

    static actualizarParcialmente = async(req,res) =>{
        
        const {id} = req.params 
        const info = req.body;
        
        
        try{ 
           const objetoLenguajes = new Lenguaje()
           const lenguaje = await objetoLenguajes.updateParcial(id,info);
           res.json(lenguaje);
        }catch(error){
            res.status(500).json({error:error.message})
        }

    }




}

export default GenerosController;