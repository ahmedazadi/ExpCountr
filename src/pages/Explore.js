// tools
import CountryCard from "../components/CountryCard";
import { useEffect, useState } from "react";

// components
import Loading from "../components/Loading";
import Search from "../components/Search";
import SectionHeader from "../components/SectionHeader";

// layout
import Container from "../layout/Container";
import CardGrid from "../layout/CardGrid";

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
      <Container>
        {/* search Input */}
        <Search className="mx-auto" searchResult={setSearchData} />
        {/* section header */}
        <SectionHeader>Explore</SectionHeader>
        {/* grid container */}
        <CardGrid className="bg-red-700">
          {exploreData.map((value) => {
            // for each entity in the [exploreData] array create a card and pass in the required props
            return (
              <CountryCard
                cca2={value.cca2}
                text={value.name.official}
                image={value.flags.png}
              />
            );
          })}
        </CardGrid>
      </Container>
    </>
  );
}
