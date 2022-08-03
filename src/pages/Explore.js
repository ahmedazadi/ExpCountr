// tools
import CountryCard from "../components/CountryCard";
import { useEffect, useState } from "react";

// components
import Loading from "../components/Loading";
import Search from "../components/Search";
import Container from "../components/Container";

export default function Explore() {
  const [exploreData, setEexploreData] = useState();
  const [searchData, setSearchData] = useState();

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
        {/* section header */}
        <h2 className=" text-4xl font-bold ml-4 mb-4">Explore</h2>
        {/* search Input */}
        <Search className="mx-auto" searchResult={setSearchData} />
        {/* grid container */}
        <div className="justify-between flex flex-wrap ">
          {exploreData.map((value) => {
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
