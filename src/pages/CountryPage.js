import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// layout
import Container from "../layout/Container";
// components
import Loading from "../components/Loading";
import CountryHero from "../components/countryPage/CountryHero";
import NamesTable from "../components/countryPage/NamesTable";
import BorderMap from "../components/countryPage/BorderMap";
import SimpleCard from "../components/SimpleCard";
import CountryDataGrid from "../components/countryPage/CountryDataGrid";
import LangTable from "../components/countryPage/LangTable";

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
      })
      .catch((reason) => {
        console.log("reason", reason.json());
      });
  }, []);

  if (!countryData) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        {/* hero section for the country */}
        <CountryHero names={countryData.name} flag={countryData.flags.svg} />
        {/* native names section */}
        <NamesTable nativeNames={nativeNames} />
        {/* maps and border section */}
        <BorderMap
          borders={countryData.borders}
          location={countryData.latlng}
        />
        <div className="flex flex-col md:flex-row mt-10">
          {/* left side */}
          <div>
            {/* data grid */}
            <CountryDataGrid data={countryData} />
          </div>
          {/* right side */}
          <div className="md:w-1/4 ml-4">
            {/* languages */}
            <LangTable langs={countryData.languages} />
            {/* coad of arms */}
            <div className="mt-4">
              {/* header */}
              <div className=" bg-gray-200 rounded-t-xl sm:mb-0 p-3 text-center text-xl font-bold">
                <h3>Coat of Arms</h3>
              </div>
              <div className="border rounded-b-xl p-4">
                <img className="" src={countryData.coatOfArms.svg} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
