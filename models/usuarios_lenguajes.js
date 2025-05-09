import connection from "../utils/db.js"

class lenguajesUsuarios{
    
   async getAll(){

    try{
        const[rows] = await connection.query("SELECT * FROM lenguaje_usuario");
         return rows
         }catch(error){
             throw new Error("error al obtener los lenguajes de usuarios")
         }
   }


   async post(lenguaje,usuario){
    try{
       const[rows] = await connection.query("INSERT INTO lenguaje_usuario (id_lenguaje,id_usuario) values(?,?)",[lenguaje,usuario]);
       return {
           id: rows.id,
           lenguaje:lenguaje,
           usuario:usuario
       } 
    }catch(error){
       throw new Error(" Error al enviar el lenguaje_usuario " + error );
       
    }

}


async update(lenguaje,usuario,id){
    try{
       const[rows] = await connection.query('UPDATE lenguaje_usuario SET id_lenguaje = ? ,id_usuario = ? where id_lenguaje_usuario = ?',[lenguaje,usuario,id])
       
       if(rows.affectedRows === 0){
         throw new Error("Lenguaje no encontrado")
       }

       return {id,genero:nombre }
    }catch(error){
        console.log(error)
    }
}


async updateParcial(id,info){

    try{
              
            for (const key in info) {
                 
            const[rows] = await connection.query(`UPDATE lenguaje_usuario SET ${key} = ?   where id_lenguaje_usuario = ?`,[info[key],id] )
            }
            const[respuesta]  = await connection.query(`SELECT * FROM  lenguajes_usuarios  where id_lenguaje_usuario = ? `,[id]) 
            
            return respuesta;    

    }catch(error){
        console.log(error)
    }


}

async delete(id){
   
    try{
       
        const[respuesta] = await connection.query('DELETE FROM lenguaje_usuario WHERE id_lenguaje_usuario = ?',[id])
        
        return respuesta;

    }catch(error){
       throw new Error(error)
    }

}

}

export default lenguajesUsuarios;