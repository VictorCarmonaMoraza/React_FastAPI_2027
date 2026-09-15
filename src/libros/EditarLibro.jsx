// Importamos useEffect para ejecutar código cuando el componente se carga
// o cuando cambia alguna dependencia.
import { useEffect, useState } from "react";

// Importamos useNavigate para poder navegar a otra ruta
// y useParams para obtener el parámetro "id" de la URL.
import { useNavigate, useParams } from "react-router-dom";

// Importamos las funciones que necesitamos para comunicarnos
// con nuestra API de FastAPI.
import { buscarLibroPorId, actualizarLibro } from "../api/libros";


// ============================================================
// COMPONENTE EDITAR LIBRO
// ============================================================

function EditarLibro() {
  // ----------------------------------------------------------
  // useParams
  // ----------------------------------------------------------
  // Obtiene los parámetros definidos en la URL.
  //
  // Por ejemplo, si nuestra ruta es:
  //
  // /editar-libro/5
  //
  // entonces:
  //
  // id = "5"
  //
    const { id } = useParams();
    
  // ----------------------------------------------------------
  // useNavigate
  // ----------------------------------------------------------
  // Nos proporciona la función navigate(), que utilizaremos
  // para cambiar de página desde JavaScript.
  const navigate = useNavigate();

  // ----------------------------------------------------------
  // Estados individuales para cada campo del formulario
  // ----------------------------------------------------------
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [rating, setRating] = useState("");

  // ==========================================================
  // CARGAR EL LIBRO
  // ==========================================================

  // useEffect se ejecuta cuando el componente se monta.
  //
  // También se vuelve a ejecutar si cambia el valor de "id".
    useEffect(() => {

        // --------------------------------------------------------
        // Función para cargar el libro desde la API
        // --------------------------------------------------------
        async function cargarLibro() {

            try {

                // Llamamos a la función buscarLibroPorId().
                //
                // Le pasamos el ID obtenido de la URL.
                //
                // Ejemplo:
                //
                // buscarLibroPorId("5")
                //
                // realizará:
                //
                // GET /api/libros/5
                //
                const libro = await buscarLibroPorId(id);


                // ------------------------------------------------------
                // Guardamos los datos recibidos en el formulario
                // ------------------------------------------------------
                //
                // Si alguna propiedad viene como null o undefined,
                // utilizamos "" para evitar problemas con los inputs.
                //
                // Por ejemplo:
                //
                // libro.titulo = "El Quijote"
                //
                // formulario.titulo = "El Quijote"
                //

                // setFormulario({
                //   titulo: libro.titulo ?? "",
                //   autor: libro.autor ?? "",
                //   rating: libro.rating ?? "",
                // });
                setTitulo(libro.titulo);
                setAutor(libro.autor);
                setRating(libro.rating);

            } catch (error) {

                // Si ocurre algún error al consultar la API,
                // lo mostramos en la consola.
                console.error("Error al cargar el libro:", error);
            }
        }
        // Ejecutamos la función que acabamos de definir.
        cargarLibro();

        // El efecto depende de "id".
        //
        // Si cambia el ID, volvemos a cargar el libro.
    }, [id]);
    
    async function manejarEnvioFormulario(e) {
      e.preventDefault();

      try {
        const libroActualizado={
            titulo,
            autor,
            rating: Number.parseFloat(rating),
        };

        await actualizarLibro(id, libroActualizado);
          // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito.
          alert("Libro actualizado con éxito.");
          // Redirigir al usuario a la lista de libros después de la actualización.
          // Por ejemplo, si estás usando react-router-dom:
          // navigate("/libros");
          navigate("/");
      } catch (error) {
        console.error("Error al actualizar el libro:", error);
      }
    }

  // ==========================================================
  // INTERFAZ DEL COMPONENTE
  // ==========================================================

  return (

    // Contenedor principal del formulario.
    //
    // mx-auto      → centra horizontalmente el contenido.
    // mt-8         → margen superior.
    // max-w-3xl    → limita el ancho máximo.
    // px-6         → padding horizontal.
    <div className="mx-auto mt-8 max-w-3xl px-6">


      {/* ----------------------------------------------------
          TÍTULO
          ---------------------------------------------------- */}

      <h2 className="mb-8 text-center text-4xl font-semibold text-[#ffc107]">

        {/* Icono de Bootstrap Icons */}
        <i className="bi bi-pencil mr-2"></i>

        Editar Libro

      </h2>


      {/* ----------------------------------------------------
          FORMULARIO
          ---------------------------------------------------- */}

      <form onSubmit={manejarEnvioFormulario}>


        {/* ==================================================
            CAMPO TÍTULO
            ================================================== */}

        <div className="mb-4">

          {/* Etiqueta del campo */}
          <label
            htmlFor="titulo"
            className="mb-2 block text-lg font-semibold"
          >
            Título
          </label>


          {/* Input del título */}
          <input
            type="text"

            // ID del input.
            id="titulo"

            // name debe coincidir con la propiedad
            // del objeto formulario.
            name="titulo"

            // Valor que muestra el input.
            value={titulo}

            // Función que se ejecuta cada vez que
            // modificamos el contenido.
            onChange={(e)=>setTitulo(e.target.value)}

            // Clases Tailwind para darle estilo.
            className="w-full rounded border border-gray-600 bg-[#2c3034] px-4 py-3 text-white outline-none focus:border-[#ffc107]"
          />

        </div>


        {/* ==================================================
            CAMPO AUTOR
            ================================================== */}

        <div className="mb-4">

          {/* Etiqueta del campo */}
          <label
            htmlFor="autor"
            className="mb-2 block text-lg font-semibold"
          >
            Autor
          </label>


          {/* Input del autor */}
          <input
            type="text"

            // ID del input.
            id="autor"

            // Nombre del campo.
            name="autor"

            // Valor actual del autor.
            value={autor}

            // Ejecutamos manejarCambio cuando
            // el usuario modifica el campo.
            onChange={(e)=>setAutor(e.target.value)}

            // Estilos Tailwind.
            className="w-full rounded border border-gray-600 bg-[#2c3034] px-4 py-3 text-white outline-none focus:border-[#ffc107]"
          />

        </div>


        {/* ==================================================
            CAMPO RATING
            ================================================== */}

        <div className="mb-6">

          {/* Etiqueta del campo */}
          <label
            htmlFor="rating"
            className="mb-2 block text-lg font-semibold"
          >
            Rating
          </label>


          {/* Input numérico */}
          <input
            type="number"

            // ID del input.
            id="rating"

            // Nombre del campo.
            name="rating"

            // Valor actual del rating.
            value={rating}

            // Función que se ejecuta al cambiar el valor.
            onChange={(e)=>setRating(e.target.value)}

            // Valor mínimo permitido.
            min="1"

            // Valor máximo permitido.
            max="5"

            // Permitimos valores decimales.
            //
            // Ejemplo:
            // 4.1
            // 4.5
            // 4.6
            step="0.1"

            // Estilos Tailwind.
            className="w-full rounded border border-gray-600 bg-[#2c3034] px-4 py-3 text-white outline-none focus:border-[#ffc107]"
          />

        </div>


        {/* ==================================================
            BOTONES
            ================================================== */}

        <div className="flex justify-center gap-3">


          {/* ------------------------------------------------
              BOTÓN GUARDAR
              ------------------------------------------------ */}

          <button
            type="submit"

            // Cuando pulsamos este botón,
            // se ejecutará automáticamente:
            //
            // form → onSubmit → manejarSubmit()
            //
            className="rounded bg-[#198754] px-5 py-2 font-semibold text-white hover:bg-[#157347]"
          >

            {/* Icono guardar */}
            <i className="bi bi-save mr-2"></i>

            Guardar Cambios

          </button>


          {/* ------------------------------------------------
              BOTÓN CANCELAR
              ------------------------------------------------ */}

          <button
            type="button"

            // Al pulsarlo volvemos al listado.
            onClick={() => navigate("/")}

            // Estilos del botón.
            className="rounded bg-[#6c757d] px-5 py-2 font-semibold text-white hover:bg-[#5c636a]"
          >

            {/* Icono cancelar */}
            <i className="bi bi-x-circle mr-2"></i>

            Cancelar

          </button>


        </div>

      </form>

    </div>
  );
}


// Exportamos el componente para poder utilizarlo
// desde App.jsx o desde nuestro sistema de rutas.
export default EditarLibro;