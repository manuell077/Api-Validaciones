import connection from "../utils/db.js"

class Generos{
    
   async getAll(){

    try{
        const[rows] = await connection.query("SELECT * FROM generos");
         return rows
         }catch(error){
             throw new Error("error al obtener los generos")
         }
   }

   async post(nombre){
    try{
       const[rows] = await connection.query("INSERT INTO generos (genero) values(?)",[nombre]);
       return {
           id: rows.id,
           nombre:nombre
       } 
    }catch(error){
       throw new Error(" Error al enviar el genero " );
       
    }

}

async update(nombre,id){
    try{
       const[rows] = await connection.query('UPDATE generos SET genero = ?  where id_genero = ?',[nombre,id])
       
       if(rows.affectedRows === 0){
         throw new Error("Genero no encontrado")
       }

       return {id,genero:nombre }
    }catch(error){
        console.log(error)
    }
}


}

export default Generos;