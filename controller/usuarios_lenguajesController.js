import  LenguajeUsuarios from "../models/usuarios_lenguajes.js";

class lenguajesUsuariosController{
     
    static getAllLenguajesUsuarios = async(req,res)=>{
        const objetoLenguajesUsuarios = new LenguajeUsuarios();
        const lenguaje = await objetoLenguajesUsuarios.getAll();
        res.json(lenguaje)
    }
    static postLenguajes = async(req,res)=>{
        const {lenguaje,usuario} = req.body;
        try{
        const objetoLenguajesUsuarios = new LenguajeUsuarios();
        const lenguajeUsuarios = await objetoLenguajesUsuarios.post(lenguaje,usuario);
        res.status(201).json(lenguajeUsuarios)
        }catch(error){
           res.status(500).json({error:error.message})
    
        }
         
     }


     static actualizarLenguajes = async(req,res)=>{

        
        const {id} = req.params 
        const {lenguajes,usuarios} = req.body;
       
        try{ 
           const objetoLenguajesUsuarios = new LenguajeUsuarios()
           const lenguaje = await objetoLenguajesUsuarios.update(lenguajes,usuarios,id);
           res.json(lenguaje);
        }catch(error){
            res.status(500).json({error:error.message})
        }
        
    }


    static actualizarParcialmente = async(req,res) =>{
        
        const {id} = req.params 
        const info = req.body;
        
        
        try{ 
           const objetoLenguajesUsuarios = new LenguajeUsuarios()
           const lenguaje = await objetoLenguajesUsuarios.updateParcial(id,info);
           res.json(lenguaje);
        }catch(error){
            res.status(500).json({error:error.message})
        }

    }

    static eliminarRegistro = async(req,res) =>{
         
        const {id} = req.params;

        try{ 
            const objetoLenguajesUsuarios = new LenguajeUsuarios()
            const lenguaje = await objetoLenguajesUsuarios.delete(id);
            res.json(lenguaje);
         }catch(error){
             res.status(500).json({error:error.message})
         }

    }


    
}

export default lenguajesUsuariosController;