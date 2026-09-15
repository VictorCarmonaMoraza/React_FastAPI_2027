import axios from "axios";



const urlBase = "http://localhost:8080/api/libros";
const api = axios.create({
  baseURL: urlBase
});


// Servicio para listar todos los libros
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

// Servicio para crear un nuevo libro
async function crearLibro(libro) {
  // Validamos que el título exista y no esté vacío.
  if (!libro.titulo || !libro.titulo.trim()) {
    throw new Error("El título es obligatorio");
  }

  // Validamos que el autor exista y no esté vacío.
  if (!libro.autor || !libro.autor.trim()) {
    throw new Error("El autor es obligatorio");
  }

  // Validamos que el rating sea un número entero.
  if (!Number.isFinite(libro.rating)) {
    throw new Error("El rating debe ser un número");
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
  const respuesta = await api.get(`/${id}`);
  return respuesta.data;
}

//Servicio para actualizar un libro por su ID
async function actualizarLibro(id, libro) {
  debugger;
  if (!libro.titulo || !libro.titulo.trim()) {
    throw new Error("El título es obligatorio");
  }

  if (!libro.autor || !libro.autor.trim()) {
    throw new Error("El autor es obligatorio");
  }

  if (!Number.isFinite(libro.rating)) {
    throw new Error("El rating debe ser un número");
  }

  if (libro.rating < 1 || libro.rating > 5) {
    throw new Error("El rating debe estar entre 1 y 5");
  }

  const respuesta = await api.put(`/${id}`, libro);

  return respuesta.data;
}

//servicio para eliminar un libro por su ID
async function eliminarLibro(id) {
  try {
    const respuesta = await api.delete(`/${id}`);
    return respuesta.data;
  } catch (error) {
    console.error("Error al eliminar el libro:", error);
    throw error;
  }
}

export { api, urlBase, listarLibros, crearLibro, buscarLibroPorId, actualizarLibro, eliminarLibro };