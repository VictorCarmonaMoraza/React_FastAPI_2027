function ListadoLibros() {
  return (
    <section className="mx-auto mt-20 max-w-[920px] px-6">
      <div className="bg-[#23272b] px-10 py-14 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <h2 className="text-[42px] font-semibold leading-none tracking-tight text-[#ffc107]">
          <i aria-hidden="true" className="bi bi-book mr-4 align-middle text-[0.9em]"></i>
          <span className="align-middle">Listado de Libros</span>
        </h2>

        <p className="mx-auto mt-10 max-w-[760px] text-[22px] leading-[1.55] text-white">
          Aquí podrás visualizar todos los libros registrados en el sistema.
        </p>
      </div>
    </section>
  )
}

export default ListadoLibros