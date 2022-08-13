import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

export default function CountryPage() {
  const cid = useParams().cid;
  const [countryData, setCountryData] = useState();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${cid}`)
      .then((response) => response.json())
      .then((data) => setCountryData(data));
  }, []);

  console.log();

  if (!countryData) {
    return <Loading />;
  }
  return (
    <>
      <h3>Name</h3>
      <table class="table-fixed border-spacing-1 rounded-lg p-2 bg-red-400 text-center">
        <thead>
          <tr>
            <th>Official</th>
            <th>Common</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{countryData[0].name.common}</td>
            <td>{countryData[0].name.common}</td>
          </tr>
        </tbody>
      </table>
      <h1>{JSON.stringify(countryData)}</h1>;
    </>
  );
}
