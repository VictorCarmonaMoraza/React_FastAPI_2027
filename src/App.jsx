import { listarLibros } from "./api/libros";

function App() {

  listarLibros();
  return (
    <main className="min-h-screen bg-[#212529] px-6 py-5 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-center text-[52px] font-semibold leading-none text-[#ffc107]">
          <i aria-hidden="true" className="bi bi-book mr-3 align-middle text-[0.9em]"></i>
          <span className="align-middle">Biblioteca Personal</span>
        </h1>

        <p className="mt-8 text-center text-[20px] text-white">
          Aplicacion React + Vite usando bootstrap en modo oscuro.
        </p>
      </div>
    </main>
  )
}

export default App