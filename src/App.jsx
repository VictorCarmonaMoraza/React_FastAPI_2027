import ListadoLibros from "./libros/ListadoLibros";
import Navegacion from "./componentes/Navegacion";

function App() {
  return (
    <main className="min-h-screen bg-[#212529] text-white">

      <Navegacion />

      <div className="mx-auto max-w-5xl px-6 pt-12">
        <ListadoLibros />
      </div>

    </main>
  );
}

export default App;