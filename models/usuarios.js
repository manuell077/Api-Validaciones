import connection from "../utils/db.js"

class Usuarios{
    
   async getAll(){

    try{
        const[rows] = await connection.query("SELECT * FROM usuarios");
         return rows
         }catch(error){
             throw new Error("error al obtener los usuarios")
         }
   }

   async post(documento,nombre_usuario,apellido,telefono,contrasena,genero,ciudad){
    try{
       const[rows] = await connection.query("INSERT INTO usuarios (documento,nombre_usuario,apellido,telefono,contrasena,genero,ciudad) values(?,?,?,?,?,?,?)",[documento,nombre_usuario,apellido,telefono,contrasena,genero,ciudad]);
       return {
           id: rows.id,
           documento:documento,
           nombre_usuario:nombre_usuario,
           apellido:apellido,
           telefono:telefono,
           contrasena:contrasena,
           genero:genero,
           ciudad:ciudad
       } 
    }catch(error){
       throw new Error(" Error al enviar el usuario " + error );
       
    }

}

async update(documento,nombre_usuario,apellido,telefono,contrasena,genero,ciudad,id){
    try{
       const[rows] = await connection.query('UPDATE usuarios SET documento = ? , nombre_usuario = ? , apellido = ? , telefono = ? , contrasena = ? , genero = ? , ciudad = ?  where id_usuarios = ?',[documento,nombre_usuario,apellido,telefono,contrasena,genero,ciudad,id])
       
       if(rows.affectedRows === 0){
         throw new Error("Usuario no encontrado")
       }

       return {id,documento:documento,nombre_usuario:nombre_usuario,apellido:apellido,telefono:telefono , contrasena:contrasena , genero:genero , ciudad:ciudad }
    }catch(error){
        console.log(error)
    }
}

async updateParcial(id,info){

    try{
              
            for (const key in info) {
                 
            const[rows] = await connection.query(`UPDATE usuarios SET ${key} = ?   where id_usuarios = ?`,[info[key],id] )
            }
            const[respuesta]  = await connection.query(`SELECT * FROM  usuarios  where id_usuarios = ? `,[id]) 
            
            return respuesta;    

    }catch(error){
        console.log(error)
    }


}


async delete(id){
   
    try{
       
        const[respuesta] = await connection.query('DELETE FROM usuarios WHERE id_usuarios = ?',[id])
        
        return respuesta;

    }catch(error){
       throw new Error(error)
    }

}



}

export default Usuarios;