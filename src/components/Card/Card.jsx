import HeroImage from "/hero.jpeg";

const Card = () => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img alt="Office" src={HeroImage} className="h-56 w-full object-cover" />

      <div className="bg-white p-4 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          Noviembre 2023
        </time>

        <h3 className="mt-0.5 text-lg text-gray-900">Gran Muralla China</h3>
        <p className="mt-1 text-md text-gray-500">
          Ciudad: District de Huairou
        </p>
        <p className="mt-1 text-md text-gray-500">País: 🇨🇳China</p>

        <p className="mt-2 line-clamp-5 text-sm/relaxed text-gray-500 overflow-y-scroll"></p>
        <a
          href="https://www.google.com/maps/@40.4599779,116.6697366,15z"
          className="mt-4 text-md font-bold text-gray-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver en Google Maps
        </a>
      </div>
    </article>
  );
};

export default Card;
