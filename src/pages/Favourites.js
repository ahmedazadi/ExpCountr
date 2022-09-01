import { Typography, Button } from "@material-tailwind/react";

import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../App";

// components
import CountryCard from "../components/CountryCard";
import Loading from "../components/Loading";
import SectionHeader from "../components/SectionHeader";
import Select from "react-select";

// layout
import Container from "../layout/Container";
import CardGrid from "../layout/CardGrid";

export default function Favourites() {
  const { currentUser } = { ...useContext(userContext) };
  const [favData, setFavData] = useState([]);

  useEffect(() => {
    // check if user has signed in then check if they have some favourited items
    if (currentUser && currentUser.favs.length > 0) {
      currentUser.favs.forEach((element) => {
        fetch(
          `https://restcountries.com/v3.1/alpha/${element}?fields=cca2,name,flags`
        )
          .then((Response) => Response.json())
          .then((data) => {
            setFavData((favData) => [...favData, data]);
          });
      });
    }
  }, [currentUser]);

  // check if the user has logged in
  if (!currentUser) {
    return (
      <>
        <div className="mx-auto max-w-md text-center">
          <Typography variant="paragraph">
            Sorry, in order to see you favourites, you need to Log In
          </Typography>
          <Link to="/login">
            <Button color="purple">Sign in</Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      {/* page container */}
      <Container>
        {/* section header */}
        <SectionHeader>Favourites</SectionHeader>
        {/* grid container */}
        <CardGrid className="bg-red-700">
          {favData.map((value) => {
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
