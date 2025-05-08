import connection from "../utils/db.js"

class Ciudades{
    
   async getAll(){

    try{
        const[rows] = await connection.query("SELECT * FROM ciudades");
         return rows
         }catch(error){
             throw new Error("error al obtener las ciudades")
         }
   }
    
   
   
  async post(nombre){
    try{
       const[rows] = await connection.query("INSERT INTO ciudades (ciudad) values(?)",[nombre]);
       return {
           id: rows.id,
           nombre:nombre
       } 
    }catch(error){
       throw new Error(" Error al enviar ciudad " );
       
    }

}
     
async update(nombre,id){
    try{
       const[rows] = await connection.query('UPDATE ciudades SET ciudad = ?  where id_ciudad = ?',[nombre,id])
       
       if(rows.affectedRows === 0){
         throw new Error("Ciudad no encontrada")
       }

       return {id,ciudad:nombre }
    }catch(error){
        console.log(error)
    }
}


async updateParcial(id,info){

    try{
       
        
            for (const key in info) {
                
            
            const[rows] = await connection.query(`UPDATE ciudades SET ${key} = ?   where id_ciudad = ?`,[info[key],id] )
            }
            const[respuesta]  = await connection.query(`SELECT * FROM  ciudades  where id = ? `,[id]) 
            
            return respuesta;

        
      

    }catch(error){
        console.log(error)
    }


}



async delete(id){
   
    try{
       
        const[respuesta] = await connection.query('DELETE FROM ciudades WHERE id_ciudad = ?',[id])
        
        return respuesta;

    }catch(error){
       throw new Error(error)
    }

}




}

export default Ciudades;