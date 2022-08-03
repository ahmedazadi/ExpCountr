import { useContext } from "react";
import { UserData } from "../App";
import { Input, Button } from "@material-tailwind/react";
import Container from "../components/Container";
import { FaSearch } from "react-icons/fa";

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
  const background =
    "https://images.unsplash.com/photo-1638291792853-5ab967de3611?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80";
  return (
    <>
      <div
        className=" absolute top-0 left-0 h-screen w-screen bg-no-repeat blur bg-cover"
        style={{
          backgroundImage: `url("${background}")`,
          zIndex: "-2",
        }}
      ></div>
      <div
        className=" absolute top-0 left-0 h-screen w-screen"
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
        <form className="flex max-w-md mt-20 mx-auto">
          <div className="bg-white flex-grow">
            <Input placeholder="Search" />
          </div>
          <Button type="submit" className=" bg-deep-purple-700">
            <FaSearch />
          </Button>
        </form>
        <div
          className=" bg-white py-4 rounded-2xl"
          style={{
            marginTop: "30vh",
          }}
        >
          <h2 className="text-center font-bold text-2xl mb-8">Continents</h2>
          <ul className="flex justify-around">
            {continents.map((value) => {
              return (
                <li>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      console.log(value);
                    }}
                  >
                    {value.name}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </>
  );
}
