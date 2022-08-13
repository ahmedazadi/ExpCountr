// tools
import { useEffect, useState } from "react";

// components
import CountryCard from "../components/CountryCard";
import Loading from "../components/Loading";
import SectionHeader from "../components/SectionHeader";
import Select from "react-select";

// layout
import Container from "../layout/Container";
import CardGrid from "../layout/CardGrid";

export default function Explore() {
  const [exploreData, setEexploreData] = useState();
  const [optionsData, setOptionsData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // store all the data from api in [ExploreData] state to show it in the page
        setEexploreData(data);
        return data;
      })
      .then((data) => {
        // store required data in [optionsData] for [select] element to use it later
        setOptionsData(
          // map through all the data and only store cca2 and official names in [optionsData]
          data.map((element) => {
            return {
              value: element.cca2,
              label: element.name.official,
            };
          })
        );
      });
  }, []);

  // if [exploreData] is empty then return [Loading] element
  if (!exploreData) {
    return <Loading />;
  }

  return (
    <>
      {/* page container */}
      <Container>
        {/* search Input */}
        <Select options={optionsData} />
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
