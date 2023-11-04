const BeagleError = () => (
  <section className="flex bg-white absolute bottom-0 right-0 h-screen left-0 top-0">
    <div className="container flex px-6 py-12 mx-auto items-center justify-center">
      <div className="flex flex-col items-center max-w-sm mx-auto text-center justify-center">
        <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-zinc-950">
          Página não encontrada
        </h1>
        <p className="mt-4 text-zinc-800">
          Infelizmente tivemos um problema, tente novamente mais tarde!
        </p>
      </div>
    </div>
  </section>
)

export default BeagleError
