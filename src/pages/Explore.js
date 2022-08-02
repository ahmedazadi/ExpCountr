import CountryCard from "../components/CountryCard";
import { useEffect, useState } from "react";

import Loading from "../components/Loading";

export default function Explore() {
  const [exploreData, setEexploreData] = useState();
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setEexploreData(data);
      });
  }, []);

  if (!exploreData) {
    return <Loading />;
  }

  return (
    <>
      {/* page container */}
      <div className="container max-w-7xl mx-auto mt-7">
        <h2 className=" text-4xl font-bold ml-4 mb-4">Explore</h2>

        {/* grid container */}
        <div className="justify-between flex flex-wrap ">
          {exploreData.map((value) => {
            console.log();
            return (
              <CountryCard
                cca2={value.cca2}
                text={value.name.official}
                image={value.flags.png}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
