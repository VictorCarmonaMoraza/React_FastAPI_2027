import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { buscarLibroPorId, editarLibro } from "../api/libros";

function EditarLibro() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formulario, setFormulario] = useState({
    titulo: "",
    autor: "",
    rating: "",
  });

  useEffect(() => {
    async function cargarLibro() {
      try {
        const libro = await buscarLibroPorId(id);
        setFormulario({
          titulo: libro.titulo ?? "",
          autor: libro.autor ?? "",
          rating: libro.rating ?? "",
        });
      } catch (error) {
        console.error("Error al cargar el libro:", error);
      }
    }

    cargarLibro();
  }, [id]);

  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setFormulario((previo) => ({
      ...previo,
      [name]: value,
    }));
  }

  async function manejarSubmit(evento) {
    evento.preventDefault();

    try {
      await editarLibro(id, {
        titulo: formulario.titulo.trim(),
        autor: formulario.autor.trim(),
        rating: Number.parseInt(formulario.rating, 10),
      });

      navigate("/");
    } catch (error) {
      console.error("Error al editar el libro:", error);
    }
  }

  return (
    <div className="mx-auto mt-8 max-w-3xl px-6">

      <h2 className="mb-8 text-center text-4xl font-semibold text-[#ffc107]">
        <i className="bi bi-pencil mr-2"></i>
        Editar Libro
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
            value={formulario.titulo}
            onChange={manejarCambio}
            className="w-full rounded border border-gray-600 bg-[#2c3034] px-4 py-3 text-white outline-none focus:border-[#ffc107]"
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
            value={formulario.autor}
            onChange={manejarCambio}
            className="w-full rounded border border-gray-600 bg-[#2c3034] px-4 py-3 text-white outline-none focus:border-[#ffc107]"
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
            value={formulario.rating}
            onChange={manejarCambio}
            min="1"
            max="5"
            step="1"
            className="w-full rounded border border-gray-600 bg-[#2c3034] px-4 py-3 text-white outline-none focus:border-[#ffc107]"
          />
        </div>

        <div className="flex justify-center gap-3">

          <button
            type="submit"
            className="rounded bg-[#198754] px-5 py-2 font-semibold text-white hover:bg-[#157347]"
          >
            <i className="bi bi-save mr-2"></i>
            Guardar Cambios
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="rounded bg-[#6c757d] px-5 py-2 font-semibold text-white hover:bg-[#5c636a]"
          >
            <i className="bi bi-x-circle mr-2"></i>
            Cancelar
          </button>

        </div>

      </form>
    </div>
  );
}

export default EditarLibro;