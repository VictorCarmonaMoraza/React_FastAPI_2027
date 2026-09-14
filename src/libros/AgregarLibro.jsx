function AgregarLibro() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <h2 className="text-center text-[58px] font-semibold leading-none text-[#ffc107]">
        <i aria-hidden="true" className="bi bi-book mr-4 align-middle text-[0.9em]"></i>
        <span className="align-middle">Agregar Libro</span>
      </h2>

      <form className="mx-auto mt-12 max-w-[820px] space-y-8">
        <div>
          <label htmlFor="titulo" className="mb-4 block text-[28px] text-white">
            Título
          </label>

          <input
            type="text"
            className="h-10 w-full rounded-xl border border-white/15 bg-[#212529] px-4 text-lg text-white outline-none transition focus:border-slate-500"
            id="titulo"
            name="titulo"
          />
        </div>

        <div>
          <label htmlFor="autor" className="mb-4 block text-[28px] text-white">
            Autor
          </label>

          <input
            type="text"
            className="h-10 w-full rounded-xl border border-white/15 bg-[#212529] px-4 text-lg text-white outline-none transition focus:border-slate-500"
            id="autor"
            name="autor"
          />
        </div>

        <div>
          <label htmlFor="rating" className="mb-4 block text-[28px] text-white">
            Rating (1-5)
          </label>

          <input
            type="number"
            className="h-10 w-full rounded-xl border border-white/15 bg-[#212529] px-4 text-lg text-white outline-none transition focus:border-slate-500"
            id="rating"
            name="rating"
            min="1"
            max="5"
          />
        </div>

        <div className="flex gap-4 pt-1">
          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-6 py-3 text-[18px] font-medium text-white transition hover:bg-blue-500"
          >
            Guardar
          </button>

          <button
            type="button"
            className="rounded-xl bg-slate-500 px-6 py-3 text-[18px] font-medium text-white transition hover:bg-slate-400"
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
}

export default AgregarLibro;