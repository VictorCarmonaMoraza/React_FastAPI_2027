import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscarLibroPorId } from "../api/libros";


function BuscarLibroPorId() {

  // Hook que permite navegar entre las diferentes rutas de React.
  const navigate = useNavigate();

  // Estado que almacena el ID introducido por el usuario.
    const [id, setId] = useState("");
    const [libro, setLibro] = useState(null);

  // Estado que controla el mensaje que mostramos al usuario.
  const [mensaje, setMensaje] = useState("");

  // ============================================================
  // MANEJAR CAMBIO DEL INPUT
  // ============================================================

  // Se ejecuta cada vez que el usuario escribe en el campo ID.
function manejarCambio(evento) {
  const valor = evento.target.value;

  setId(valor);

  // Si el input queda vacío, borramos el libro mostrado
  if (valor === "") {
    setLibro(null);
  }
}

  // ============================================================
  // BUSCAR LIBRO
  // ============================================================

async function manejarSubmit(evento) {

  evento.preventDefault();

  try {
      debugger;
      const libro = await buscarLibroPorId(id);
      setLibro(libro);

    console.log("Libro encontrado:", libro);

  } catch (error) {

    console.error("Error al buscar el libro:", error);

  }
}

  // ============================================================
  // CANCELAR
  // ============================================================

  function cancelar() {

    // Mostramos un mensaje informando de que se ha cancelado
    // la operación.
    setMensaje("La operación ha sido cancelada");

    // Después de 2 segundos eliminamos el mensaje.
    setTimeout(() => {
      setMensaje("");
    }, 2000);

    // De momento no navegamos.
    // navigate("/");
  }

  // ============================================================
  // HTML / JSX
  // ============================================================

  return (
    <div className="mx-auto mt-8 max-w-3xl px-6">

      {/* Título de la pantalla */}
      <h2 className="mb-8 text-center text-4xl font-semibold text-[#ffc107]">
        <i className="bi bi-search mr-2"></i>
        Buscar Libro por ID
      </h2>

      {/* Formulario */}
      <form onSubmit={manejarSubmit}>

        {/* Campo para introducir el ID */}
        <div className="mb-6">

          <label
            htmlFor="id"
            className="mb-2 block text-lg font-semibold"
          >
            ID a buscar
          </label>

          <input
            type="number"
            id="id"
            name="id"
            value={id}
            onChange={manejarCambio}
            className="w-full rounded border border-gray-600 bg-[#2c3034] px-4 py-3 text-white outline-none focus:border-[#ffc107]"
            required
          />

        </div>

        {/* Botones */}
        <div className="flex justify-center gap-3">

          {/* Botón Buscar */}
          <button
            type="submit"
            className="rounded bg-[#198754] px-5 py-2 font-semibold text-white hover:bg-[#157347]"
          >
            <i className="bi bi-search mr-2"></i>
            Buscar
          </button>

          {/* Botón Cancelar */}
          <button
            type="button"
            onClick={cancelar}
            className="rounded bg-[#6c757d] px-5 py-2 font-semibold text-white hover:bg-[#5c636a]"
          >
            <i className="bi bi-x-circle mr-2"></i>
            Cancelar
          </button>

        </div>

        {/* Mensaje de cancelación */}
        {mensaje && (
          <div className="mt-4 rounded-lg border border-yellow-500 bg-yellow-100 px-4 py-3 text-yellow-800">
            {mensaje}
          </div>
        )}

      </form>

{libro && (
  <div className="mt-8 overflow-hidden rounded-lg border border-gray-600 bg-[#2c3034]">

    {/* Cabecera */}
    <div className="grid grid-cols-4 bg-[#ffc107] px-6 py-3 font-semibold text-black">
      <span>ID</span>
      <span>Título</span>
      <span>Autor</span>
      <span>Rating</span>
    </div>

    {/* Registro del libro */}
    <div className="grid grid-cols-4 items-center px-6 py-4 text-white">

      <span>{libro.id}</span>

      <span>{libro.titulo}</span>

      <span>{libro.autor}</span>

      <span>{libro.rating}</span>

    </div>

  </div>
)}


    </div>
  );
}

export default BuscarLibroPorId;