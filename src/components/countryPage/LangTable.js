import { useState } from "react";

export default function LangTable({ langs }) {
  const [languages, setLanguages] = useState();

  langs = Object.keys(langs).map((value) => langs[value]);

  return (
    <table className="w-full rounded-lg overflow-hidden mb-10">
      <thead className=" bg-gray-200">
        <tr className="rounded-l-lg  mb-2 sm:mb-0">
          <th className="p-3 text-center text-xl">
            <h3>Languages</h3>
          </th>
        </tr>
      </thead>
      <tbody className="">
        {langs.map((value) => {
          return (
            <tr className=" mb-2 sm:mb-0">
              <td className="border-grey-light border p-3 ">{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
