export default function CountryHero({ names, flag }) {
  return (
    <div className="flex flex-col md:flex-row items-center mb-10">
      <div className=" md:w-1/2">
        <img
          alt="..."
          className=" w-full m-auto rounded-lg shadow-lg"
          src={flag}
        />
      </div>
      <div className="pl-5">
        <div className="flex">
          <h1 className=" font-bold text-4xl mb-4">{names.official}</h1>
        </div>
        <div className="flex items-center">
          <p className=" text-gray-700 text-lg mr-2">Known as</p>
          <h3 className=" font-bold text-2xl">{names.common}</h3>
        </div>
      </div>
    </div>
  );
}
