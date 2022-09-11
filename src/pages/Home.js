// tools
import { useEffect, useState } from "react";

// components
import { Input, Button } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import CountryCard from "../components/CountryCard";
import SectionHeader from "../components/SectionHeader";
import Loading from "../components/Loading";

// layout
import Container from "../layout/Container";
import CardGrid from "../layout/CardGrid";

const continents = [
  {
    name: "Africa",
    api: "https://restcountries.com/v3.1/region/africa",
  },
  {
    name: "America",
    api: "https://restcountries.com/v3.1/region/Americas",
  },
  {
    name: "Asia",
    api: "https://restcountries.com/v3.1/region/Asia",
  },
  {
    name: "Europe",
    api: "https://restcountries.com/v3.1/region/Europe",
  },
  {
    name: "Oceania",
    api: "https://restcountries.com/v3.1/region/Oceania",
  },
];

export default function Home() {
  // "CurrentContinent" for storing countries of a certain continent
  const [currentContinent, setCurrentContinent] = useState(null);
  const [currentContinentData, setCurrentContinentData] = useState();

  const [searchResult, setSearchResult] = useState();
  const [searchInput, setSearchInput] = useState();
  const [searchLoading, setSearchLoading] = useState();

  useEffect(() => {
    // first check if {currentContinent} has some value or not
    if (currentContinent) {
      // if {currentContinent} has a value that means the user has clicked on a continent button
      // then fetch data from api
      fetch(currentContinent.api)
        .then((response) => response.json())
        .then((data) => setCurrentContinentData(data));
    }
  }, [currentContinent]);

  const background =
    "https://images.unsplash.com/photo-1638291792853-5ab967de3611?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80";
  return (
    <>
      <div
        className=" fixed top-0 left-0 h-screen w-screen bg-no-repeat blur bg-cover"
        style={{
          backgroundImage: `url("${background}")`,
          zIndex: "-2",
        }}
      ></div>
      <div
        className=" fixed top-0 left-0 h-screen w-screen"
        style={{
          backgroundColor: "rgba(255,255,255,.5)",
          zIndex: "-1",
        }}
      ></div>
      <Container>
        {/* title */}
        <h2 className=" font-bold text-5xl mt-20 text-center">
          <span className=" text-deep-purple-700">Explore</span> Countries with
          us
        </h2>
        {/* search input */}
        <form
          className={`flex max-w-lg mt-20 mx-auto bg-white p-10 rounded-lg`}
          onSubmit={async (e) => {
            e.preventDefault();

            const value = searchInput;

            // fetch by name
            await fetch(
              `https://restcountries.com/v3.1/name/${value}?fields=name,flags,cca2`
            )
              .then((response) => response.json())
              .then((data) => {
                if (data[0].status === 404) return;

                setSearchResult(data);
                setSearchLoading(true);
                return data;
              })
              .catch((reason) => console.warn("name failed", reason));

            // fetch by currency
            await fetch(
              `https://restcountries.com/v3.1/currency/${value}?fields=name,flags,cca2`
            )
              .then((response) => response.json())
              .then((data) => {
                if (data[0].status === 404) return;

                setSearchResult(data);
                setSearchLoading(true);
                return data;
              })
              .catch((reason) => console.warn("currency failed", reason));

            // fetch by language
            await fetch(
              `https://restcountries.com/v3.1/lang/${value}?fields=name,flags,cca2`
            )
              .then((response) => response.json())
              .then((data) => {
                if (data[0].status === 404) return;

                setSearchResult(data);
                setSearchLoading(true);
                return data;
              })
              .catch((reason) => console.warn("language failed", reason));

            // fetch by capital
            await fetch(
              `https://restcountries.com/v3.1/capital/${value}?fields=name,flags,cca2`
            )
              .then((response) => response.json())
              .then((data) => {
                if (data[0].status === 404) return;

                setSearchResult(data);
                setSearchLoading(true);
                return data;
              })
              .catch((reason) => console.warn("capital failed", reason));

            // fetch by region
            await fetch(
              `https://restcountries.com/v3.1/region/${value}?fields=name,flags,cca2`
            )
              .then((response) => response.json())
              .then((data) => {
                if (data[0].status === 404) return;

                setSearchResult(data);
                setSearchLoading(true);
                return data;
              })
              .catch((reason) => console.warn("region failed", reason));

            // fetch by subregion
            await fetch(
              `https://restcountries.com/v3.1/subregion/${value}?fields=name,flags,cca2`
            )
              .then((response) => response.json())
              .then((data) => {
                if (data[0].status === 404) return;

                setSearchResult(data);
                setSearchLoading(true);
                return data;
              })
              .catch((reason) => console.warn("subregion failed", reason));

            setSearchLoading(false);
          }}
        >
          <div className=" flex-grow mr-4">
            <Input
              placeholder="Search"
              name="search"
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
          </div>
          <Button type="submit" className=" bg-deep-purple-700">
            <FaSearch />
          </Button>
        </form>

        {/* search result */}

        {searchResult && (
          <div className=" bg-white py-4 rounded-lg mt-4">
            <SectionHeader align="center">Search result</SectionHeader>
            {searchLoading ? (
              <Loading />
            ) : (
              // grid container for country cards
              <CardGrid className="">
                {searchResult.map((value) => {
                  return (
                    <CountryCard
                      cca2={value.cca2}
                      text={value.name.official}
                      image={value.flags.png}
                    />
                  );
                })}
              </CardGrid>
            )}
          </div>
        )}

        <div
          className=" bg-white py-4 rounded-lg"
          style={{
            marginTop: "25vh",
          }}
        >
          {/* continent section */}
          <SectionHeader align="center">Continents</SectionHeader>

          <ul className="flex justify-around flex-wrap">
            {continents.map((value) => {
              // for each continent return a [li] tag that contains a button containing a continent
              return (
                <li>
                  <Button
                    className="mb-5 mx-1 w-40"
                    variant="outlined"
                    color="purple"
                    onClick={() => {
                      setCurrentContinent(value);
                    }}
                  >
                    {value.name}
                  </Button>
                </li>
              );
            })}
          </ul>

          {/* grid container for country cards */}
          <CardGrid className="">
            {/* if [currentContinentData] contains some data then execute the code below */}
            {currentContinentData &&
              // for each country from choosen content create a card and pass the value
              currentContinentData.map((value) => {
                return (
                  <CountryCard
                    cca2={value.cca2}
                    text={value.name.official}
                    image={value.flags.png}
                  />
                );
              })}
          </CardGrid>
        </div>
      </Container>
    </>
  );
}
