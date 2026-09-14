import { useEffect, useState } from "react";

import { listarLibros } from "../api/libros";

// [MODIFICADO]
function ListadoLibros() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
  async function cargarDatos(){
    try{
const data = await listarLibros();
setLibros(data);
    }catch(error){
        console.error("Error al obtener los libros:", error);
    }
  }
  cargarDatos();
  }, []);

  return (
    <div className="mx-auto mt-8 max-w-5xl">
      <h2 className="text-center text-3xl font-semibold text-white">
        <i className="bi bi-book mr-2"></i>
        Listado de Libros
      </h2>

             <p className="mx-auto mt-10 max-w-[760px] text-[22px] leading-[1.55] text-white">
          Aquí podrás visualizar todos los libros registrados en el sistema.
        </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-left text-sm text-white">
          <thead className="bg-blue-600 text-sm uppercase text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Título
              </th>
              <th scope="col" className="px-6 py-3">
                Autor
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
            </tr>
          </thead>

          <tbody>
            {libros.map((libro) => (
              <tr
                key={libro.id}
                className="border-b border-gray-700 bg-gray-800 hover:bg-gray-700"
              >
                <td className="px-6 py-4">
                  {libro.id}
                </td>

                <td className="px-6 py-4">
                  {libro.titulo}
                </td>

                <td className="px-6 py-4">
                  {libro.autor}
                </td>

                <td className="px-6 py-4">
                  {libro.rating}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListadoLibros;