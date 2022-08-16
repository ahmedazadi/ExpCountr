import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// layout
import Container from "../layout/Container";
// components
import Loading from "../components/Loading";
import NativeNameTable from "../components/NativeNameTable";

export default function CountryPage() {
  const cid = useParams().cid;
  const [countryData, setCountryData] = useState();
  const [nativeNames, setNativeNames] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${cid}`)
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data[0]);
        return data[0];
      })
      .then((data) => {
        setNativeNames(
          // return an array of keys which are Languages
          // map through the keys
          Object.keys(data.name.nativeName).map((lang) => {
            // return an array of objects that contains Language, Official Name and Common Name
            return {
              lang: lang,
              commonName: data.name.nativeName[lang].common,
              officialName: data.name.nativeName[lang].official,
            };
          })
        );
      });
  }, []);

  if (!countryData) {
    return <Loading />;
  }

  console.log(nativeNames);

  return (
    <>
      {/* <h1>{JSON.stringify(countryData.name.nativeName)}</h1> */}
      <Container>
        <div className="flex flex-col md:flex-row items-center ">
          <div className=" md:w-1/2">
            <img
              alt="..."
              className=" w-full m-auto rounded-lg shadow-lg"
              src={countryData.flags.svg}
            />
          </div>
          <div className="pl-5">
            <div className="flex">
              <h1 className=" font-bold text-4xl mb-4">
                {countryData.name.official}
              </h1>
            </div>
            <div className="flex items-center">
              <p className=" text-gray-700 text-lg mr-2">Known as</p>
              <h3 className=" font-bold text-2xl">{countryData.name.common}</h3>
            </div>
          </div>
        </div>

        {/* check if number of native names are more than one */}
        {nativeNames.length > 1 && (
          // then render the table
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
                    <td className="border-grey-light border p-3">
                      {value.lang}
                    </td>
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
        )}
      </Container>
      {/* <NativeNameTable data={nativeNames} /> */}
    </>
  );
}
