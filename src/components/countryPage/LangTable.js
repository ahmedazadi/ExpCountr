export default function LangTable({ langs }) {
  langs = Object.keys(langs).map((value) => langs[value]);

  return (
    <>
      {/* header */}
      <div className=" bg-gray-200 rounded-t-xl sm:mb-0 p-3 text-center text-xl font-bold">
        <h3>Languages</h3>
      </div>
      <ul className="border rounded-b-xl p-4">
        {langs.map((value) => {
          return <li className=" mb-2 sm:mb-0 border-b ">{value}</li>;
        })}
      </ul>
    </>
  );
}
