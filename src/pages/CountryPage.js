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
// icons
import { FaBuilding } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaDove } from "react-icons/fa";
import { FaFish } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";
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
        <div class=" mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* capitla */}
          <SimpleCard
            title={countryData.capital}
            text={"Capital"}
            Icon={FaBuilding}
          />
          {/* currency */}
          <SimpleCard
            title={`
            ${
              countryData.currencies[Object.keys(countryData.currencies)].symbol
            }
            |
            ${countryData.currencies[Object.keys(countryData.currencies)].name}
            `}
            text={"Currency"}
            Icon={FaMoneyBillAlt}
          />
          {/* is independent */}
          <SimpleCard
            title={countryData.independent ? "Independent" : "Not Independent"}
            text={"Dependendency"}
            Icon={countryData.independent ? FaDove : FaFish}
          />
          {/* populatoin */}
          <SimpleCard
            title={countryData.population}
            text={"Population"}
            Icon={FaUsers}
          />
          {/* car side */}
          <SimpleCard
            title={countryData.car.side}
            text={"Driving Side"}
            Icon={TbSteeringWheel}
          />
          {/* car sign */}
          <SimpleCard
            title={countryData.car.signs.map((value) => value + " |")}
            text={"Car Sign"}
            Icon={FaCar}
          />
          {/* start of week */}
          <SimpleCard
            title={countryData.startOfWeek}
            text={"Start of Week"}
            Icon={FaCar}
          />
          {/* region */}
          <SimpleCard
            title={countryData.region}
            text={"Continent"}
            Icon={FaMapMarked}
          />
        </div>
        <div className="flex justify-between w-full ">
          <div className="w-1/4">
            <LangTable langs={countryData.languages} />
          </div>
          <div classNames="flex flex-col justify-center item-center">
            {/* <h4 className=" rotate-90">Coat Of Arms</h4> */}
            <img src={countryData.coatOfArms.svg} />
          </div>
        </div>
      </Container>
    </>
  );
}
