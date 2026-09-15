import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { crearLibro } from "../api/libros";

function AgregarLibro() {
  const navigate = useNavigate();

  // Estado que contiene los datos introducidos en el formulario.
  const [libro, setLibro] = useState({
    titulo: "",
    autor: "",
    rating: ""
  });

  const [mensaje, setMensaje] = useState("");
    setTimeout(() => {
    setMensaje("");
  }, 2000);

  // [NUEVO]
  function manejarCambio(evento) {
    const { name, value } = evento.target;

    setLibro({
      ...libro,
      [name]: value
    });
  }

  // [NUEVO]
  async function manejarSubmit(evento) {
    evento.preventDefault();

    try {
      // Convertimos el rating de texto a número entero.
      const datosLibro = {
        ...libro,
        rating: Number(libro.rating)
      };

      // Llamamos a la función que realiza el POST contra FastAPI.
      await crearLibro(datosLibro);

      alert("Libro creado correctamente");

      // Volvemos al listado después de crear el libro.
      navigate("/");
    } catch (error) {
      console.error("Error al crear el libro:", error);

      alert(error.message || "Error al crear el libro");
    }
  }

  // [NUEVO]
  function cancelar() {
    setMensaje("La operación ha sido cancelada");
    // navigate("/");
  }

  return (
    <div className="mx-auto mt-8 max-w-3xl px-6">
      <h2 className="mb-8 text-center text-4xl font-semibold text-[#ffc107]">
        <i className="bi bi-book mr-2"></i>
        Agregar Libro
      </h2>

      <form onSubmit={manejarSubmit}>

        <div className="mb-4">
          <label
            htmlFor="titulo"
            className="mb-2 block text-lg font-semibold"
          >
            Título
          </label>

          <input
            type="text"
            id="titulo"
            name="titulo"
            value={libro.titulo}
            onChange={manejarCambio}
            className="w-full rounded border border-gray-600 bg-[#2c3034] px-4 py-3 text-white outline-none focus:border-[#ffc107]"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="autor"
            className="mb-2 block text-lg font-semibold"
          >
            Autor
          </label>

          <input
            type="text"
            id="autor"
            name="autor"
            value={libro.autor}
            onChange={manejarCambio}
            className="w-full rounded border border-gray-600 bg-[#2c3034] px-4 py-3 text-white outline-none focus:border-[#ffc107]"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="rating"
            className="mb-2 block text-lg font-semibold"
          >
            Rating
          </label>

          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            step="1"
            value={libro.rating}
            onChange={manejarCambio}
            className="w-full rounded border border-gray-600 bg-[#2c3034] px-4 py-3 text-white outline-none focus:border-[#ffc107]"
            required
          />
        </div>

        <div className="flex justify-center gap-3">

          <button
            type="submit"
            className="rounded bg-[#198754] px-5 py-2 font-semibold text-white hover:bg-[#157347]"
          >
            <i className="bi bi-save mr-2"></i>
            Guardar
          </button>

          <button
            type="button"
            onClick={cancelar}
            className="rounded bg-[#6c757d] px-5 py-2 font-semibold text-white hover:bg-[#5c636a]"
          >
            <i className="bi bi-x-circle mr-2"></i>
            Cancelar
          </button>

        </div>
{mensaje && (
  <div className="mt-4 rounded-lg border border-yellow-500 bg-yellow-100 px-4 py-3 text-yellow-800">
    {mensaje}
  </div>
)}
      </form>
    </div>
  );
}

export default AgregarLibro;