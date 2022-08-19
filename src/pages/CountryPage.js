import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// layout
import Container from "../layout/Container";
// components
import Loading from "../components/Loading";
import NativeNameTable from "../components/NativeNameTable";
import CountryHero from "../components/countryPage/CountryHero";
import NamesTable from "../components/countryPage/NamesTable";
import BorderMap from "../components/countryPage/BorderMap";

export default function CountryPage() {
  const cid = useParams().cid;
  const [countryData, setCountryData] = useState();
  const [nativeNames, setNativeNames] = useState([]);
  const [borders, setBorders] = useState();

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

  return (
    <>
      <Container>
        {/* hero section for the country */}
        <CountryHero names={countryData.name} flag={countryData.flags.svg} />
        {/* native names section */}
        <NamesTable nativeNames={nativeNames} />
        <BorderMap
          borders={countryData.borders}
          location={countryData.latlng}
        />
        {/* maps and border section */}
      </Container>
    </>
  );
}
