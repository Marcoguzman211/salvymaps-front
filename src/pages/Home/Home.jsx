import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative bg-[url(/hero.jpeg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Salvadoreños alrededor del
            <strong className="block font-extrabold text-yellow-700">
              Mundo
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Lleva un pedazo de El Salvador en cada viaje y conecta con la
            diáspora salvadoreña en todo el mundo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              to="/map"
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            >
              Mapa
            </Link>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:tex-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
