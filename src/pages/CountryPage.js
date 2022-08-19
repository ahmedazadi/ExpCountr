import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// layout
import Container from "../layout/Container";
// components
import Loading from "../components/Loading";
import NativeNameTable from "../components/NativeNameTable";
// special components
import CountryHero from "../components/countryPage/CountryHero";
import NamesTable from "../components/countryPage/NamesTable";
// react leaflet
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

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

  console.log(countryData.borders);

  return (
    <>
      <Container>
        {/* hero section for the country */}
        <CountryHero names={countryData.name} flag={countryData.flags.svg} />
        {/* check if number of native names are more than one */}
        {nativeNames.length > 1 && (
          // then render the table
          <NamesTable nativeNames={nativeNames} />
        )}

        {/* maps section */}
        <div className="flex">
          {/* border section */}
          <div className=" w-1/4 ">
            <ul class="border rounded-l-xl rounded-r-none border-gray-200 rounded overflow-hidden">
              <h3 className="px-4 py-2 bg-gray-200 font-bold ">borders</h3>
              {countryData.borders.map((value) => {
                return (
                  <li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* leaflet map */}
          <div className=" flex-grow h-96 bg-blue-gray-600">
            <MapContainer
              center={countryData.latlng}
              zoom={4.5}
              scrollWheelZoom={false}
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>
        </div>
      </Container>
    </>
  );
}
