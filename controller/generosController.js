import  Generos from "../models/genero.js";

class GenerosController{
     
    static getAllGeneros = async(req,res)=>{
        const objetoGeneros = new Generos();
        const genero = await objetoGeneros.getAll();
        res.json(genero)
    }

    static postGeneros = async(req,res)=>{
        const {generos} = req.body;
        try{
        const objetoGeneros = new Generos();
        const genero = await objetoGeneros.post(generos);
        res.status(201).json(genero)
        }catch(error){
           res.status(500).json({error:error.message})
 
        }
         
     }

     static actualizarGeneros = async(req,res)=>{

        
        const {id} = req.params 
        const {generos} = req.body;
       
        try{ 
           const objetoGeneros = new Generos()
           const genero = await objetoGeneros.update(generos,id);
           res.json(genero);
        }catch(error){
            res.status(500).json({error:error.message})
        }
        
    }


}

export default GenerosController;