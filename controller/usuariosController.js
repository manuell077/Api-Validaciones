import  Usuario from "../models/usuarios.js";

class usuariosController{
     
    static getAllUsuarios = async(req,res)=>{
        const objetoUsuarios = new Usuario();
        const usuarios = await objetoUsuarios.getAll();
        res.json(usuarios)
    }

    static postUsuarios = async(req,res)=>{
        const {documento,nombre_usuario,apellido,telefono,contrasena,genero,ciudad} = req.body;
        try{
        const objetoUsuarios = new Usuario();
        const usuarios = await objetoUsuarios.post(documento,nombre_usuario,apellido,telefono,contrasena,genero,ciudad);
        res.status(201).json(usuarios)
        }catch(error){
           res.status(500).json({error:error.message})
 
        }
         
     }


     static actualizarUsuarios = async(req,res)=>{

        
        const {id} = req.params 
        const {documento,nombre_usuario,apellido,telefono,contrasena,genero,ciudad} = req.body;
       
        try{ 
           const objetoUsuario = new Usuario()
           const usuario = await objetoUsuario.update(documento,nombre_usuario,apellido,telefono,contrasena,genero,ciudad,id);
           res.json(usuario);
        }catch(error){
            res.status(500).json({error:error.message})
        }
        
    }

    static actualizarParcialmente = async(req,res) =>{
        
        const {id} = req.params 
        const info = req.body;
        
        
        try{ 
           const objetoUsuarios = new Usuario()
           const usuario = await objetoUsuarios.updateParcial(id,info);
           res.json(usuario);
        }catch(error){
            res.status(500).json({error:error.message})
        }

    }


    static eliminarRegistro = async(req,res) =>{
         
        const {id} = req.params;

        try{ 
            const objetoUsuarios = new Usuario()
            const usuario = await objetoUsuarios.delete(id);
            res.json(usuario);
         }catch(error){
             res.status(500).json({error:error.message})
         }

    }

} 

export default usuariosController;