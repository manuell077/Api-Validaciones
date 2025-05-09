import connection from "../utils/db.js"

class Lenguajes{
    async getAll(){

        try{
            const[rows] = await connection.query("SELECT * FROM lenguajes");
             return rows
             }catch(error){
                 throw new Error("error al obtener los lenguajes")
             }
       }

       async post(nombre){
        try{
           const[rows] = await connection.query("INSERT INTO lenguajes (nombre_lenguaje) values(?)",[nombre]);
           return {
               id: rows.id,
               nombre:nombre
           } 
        }catch(error){
           throw new Error(" Error al enviar el lenguaje " );
           
        }
    
    }

    async update(nombre,id){
        try{
           const[rows] = await connection.query('UPDATE lenguajes SET nombre_lenguaje = ?  where id_lenguaje = ?',[nombre,id])
           
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
                     
                const[rows] = await connection.query(`UPDATE lenguajes SET ${key} = ?   where id_lenguaje = ?`,[info[key],id] )
                }
                const[respuesta]  = await connection.query(`SELECT * FROM  lenguajes  where id_lenguaje = ? `,[id]) 
                
                return respuesta;    
    
        }catch(error){
            console.log(error)
        }
    
    
    }


    async delete(id){
   
        try{
           
            const[respuesta] = await connection.query('DELETE FROM lenguajes WHERE id_lenguaje = ?',[id])
            
            return respuesta;
    
        }catch(error){
           throw new Error(error)
        }
    
    }

}

export default Lenguajes;