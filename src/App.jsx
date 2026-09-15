import ListadoLibros from "./libros/ListadoLibros";
import AgregarLibro from "./libros/AgregarLibro";
import BuscarLibroPorId from "./libros/BuscarLibroPorId";
import Navegacion from "./componentes/Navegacion";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="min-h-screen bg-[#212529] text-white">

      <Navegacion />

      <Routes>
        <Route path="/" element={<ListadoLibros />} />
        <Route path="/agregar" element={<AgregarLibro />} />
        <Route path="/buscar-por-id" element={<BuscarLibroPorId />} />
      </Routes>

    </main>
  );
}

export default App;