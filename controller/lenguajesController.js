import  Lenguaje from "../models/lenguaje.js";

class lenguajesController{
     
    static getAllLenguajes = async(req,res)=>{
        const objetoLenguajes = new Lenguaje();
        const lenguaje = await objetoLenguajes.getAll();
        res.json(lenguaje)
    }

    static postLenguajes = async(req,res)=>{
        const {lenguajes} = req.body;
        try{
        const objetoLenguajes = new Lenguaje();
        const lenguaje = await objetoLenguajes.post(lenguajes);
        res.status(201).json(lenguaje)
        }catch(error){
           res.status(500).json({error:error.message})
 
        }
         
     }

     static actualizarLenguajes = async(req,res)=>{

        
        const {id} = req.params 
        const {lenguajes} = req.body;
       
        try{ 
           const objetoLenguajes = new Lenguaje()
           const lenguaje = await objetoLenguajes.update(lenguajes,id);
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

    static eliminarRegistro = async(req,res) =>{
         
        const {id} = req.params;

        try{ 
            const objetoLenguajes = new Lenguaje()
            const lenguaje = await objetoLenguajes.delete(id);
            res.json(lenguaje);
         }catch(error){
             res.status(500).json({error:error.message})
         }

    }


}

export default lenguajesController;