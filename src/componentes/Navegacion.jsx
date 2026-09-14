import { NavLink } from "react-router-dom";

function Navegacion() {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

        <NavLink
          className="flex items-center text-xl font-semibold text-white no-underline"
          to="/"
        >
          <i className="bi bi-book mr-2"></i>
          Biblioteca Personal
        </NavLink>

        <div className="flex items-center">
          <NavLink
            className="flex items-center text-white no-underline hover:text-yellow-400"
            to="/"
          >
            <i className="bi bi-list mr-2"></i>
            Libros
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navegacion;