import { Typography, Button } from "@material-tailwind/react";

import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../App";

export default function Favourites() {
  const { currentUser } = { ...useContext(userContext) };

  useEffect(() => {
    // check if user has signed in then check if they have some favourited items
    if (currentUser && currentUser.favs.length > 0) {
      currentUser.favs.forEach((element) => {
        console.log(element);
      });
    }
  }, []);

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

  return <>{<h1>currentUser: {JSON.stringify(currentUser.favs)}</h1>}</>;
}
