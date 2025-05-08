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
           const[rows] = await connection.query("INSERT INTO lenguajes (genero) values(?)",[nombre]);
           return {
               id: rows.id,
               nombre:nombre
           } 
        }catch(error){
           throw new Error(" Error al enviar el genero " );
           
        }
    
    }

    async updateParcial(id,info){

        try{
                  
                for (const key in info) {
                     
                const[rows] = await connection.query(`UPDATE generos SET ${key} = ?   where id_genero = ?`,[info[key],id] )
                }
                const[respuesta]  = await connection.query(`SELECT * FROM  generos  where id = ? `,[id]) 
                
                return respuesta;    
    
        }catch(error){
            console.log(error)
        }
    
    
    }

}

export default Lenguajes;