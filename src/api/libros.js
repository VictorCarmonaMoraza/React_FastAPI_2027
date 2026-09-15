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

// [NUEVO]
async function crearLibro(libro) {
  debugger;
  // Validamos que el título exista y no esté vacío.
  if (!libro.titulo || !libro.titulo.trim()) {
    throw new Error("El título es obligatorio");
  }

  // Validamos que el autor exista y no esté vacío.
  if (!libro.autor || !libro.autor.trim()) {
    throw new Error("El autor es obligatorio");
  }

  // Validamos que el rating sea un número entero.
  if (!Number.isInteger(libro.rating)) {
    throw new Error("El rating debe ser un número entero");
  }

  // Validamos que el rating esté entre 1 y 5.
  if (libro.rating < 1 || libro.rating > 5) {
    throw new Error("El rating debe estar entre 1 y 5");
  }

  // Enviamos el nuevo libro al backend mediante POST.
  const respuesta = await api.post("/", libro);

  // Devolvemos el libro creado por el backend.
  return respuesta.data;
}

// Busca un libro por su ID
async function buscarLibroPorId(id) {
  debugger;
  const respuesta = await api.get(`/${id}`);
  return respuesta.data;
}

async function editarLibro(id) {
  debugger;

}
    
export { api, urlBase, listarLibros, crearLibro, buscarLibroPorId, editarLibro };