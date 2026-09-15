import { NavLink } from "react-router-dom";

function Navegacion() {
  return (
    <nav className="bg-gray-800 text-[#ffc107] shadow-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

        <NavLink
          className="flex items-center text-xl font-semibold text-[#ffc107] no-underline"
          to="/"
        >
          <i className="bi bi-book mr-2"></i>
          Biblioteca Personal
        </NavLink>

        <div className="flex items-center">
          <NavLink
            className={({ isActive }) =>
              `flex items-center no-underline transition ${
                isActive ? "text-[#ffc107]" : "text-[#ffc107] hover:text-yellow-300"
              }`
            }
            to="/agregar"
          >
            <i className="bi bi-list mr-2"></i>
            Agregar
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center no-underline transition ${
                isActive ? "text-[#ffc107]" : "text-[#ffc107] hover:text-yellow-300"
              }`
            }
            to="/buscar-por-id"
          >
            <i className="bi bi-list mr-2"></i>
            BuscarPorId
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navegacion;