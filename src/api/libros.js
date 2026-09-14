import axios from "axios";



const urlBase = "http://localhost:8080/api/libros";
const api = axios.create({
  baseURL: urlBase
});


// [NUEVO]
async function listarLibros() {
    try {
          const respuesta = await api.get("/");
            //Imprimir listado de libros
            console.log(respuesta.data);
            return respuesta.data;
    } catch (error) {
        console.error("Error al listar los libros:", error);
        throw error;
    }

}
    
export { api, urlBase, listarLibros };