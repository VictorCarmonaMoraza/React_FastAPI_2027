import ListadoLibros from "./libros/ListadoLibros"

function App() {
  return (
    <main className="min-h-screen bg-[#212529] px-6 pt-4 text-white">

      {/* [NUEVO] Mostrar el componente del Listado */}
      <ListadoLibros />

    </main>
  )
}

export default App