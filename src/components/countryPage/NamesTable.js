export default function NamesTable({ nativeNames }) {
  return (
    <table className="w-full rounded-lg overflow-hidden my-5">
      <thead className=" bg-gray-200">
        <tr className="rounded-l-lg  mb-2 sm:mb-0">
          <th colspan="3" className="p-3 text-center text-xl">
            <h3>Name in Native Languages</h3>
          </th>
        </tr>
        <tr className="  mb-2 sm:mb-0">
          <th className="p-3 text-left">Language</th>
          <th className="p-3 text-left">Official Name</th>
          <th className="p-3 text-left">Common Name</th>
        </tr>
      </thead>
      <tbody className="">
        {nativeNames.map((value) => {
          return (
            <tr className=" mb-2 sm:mb-0">
              <td className="border-grey-light border p-3">{value.lang}</td>
              <td className="border-grey-light border p-3">
                {value.officialName}
              </td>
              <td className="border-grey-light border p-3">
                {value.commonName}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
