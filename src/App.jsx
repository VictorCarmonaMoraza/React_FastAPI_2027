import ListadoLibros from "./libros/ListadoLibros";
import AgregarLibro from "./libros/AgregarLibro";
import Navegacion from "./componentes/Navegacion";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="min-h-screen bg-[#212529] text-white">

      <Navegacion />

      <Routes>
        <Route path="/" element={<ListadoLibros />} />
        <Route path="/agregar" element={<AgregarLibro />} />
      </Routes>

    </main>
  );
}

export default App;