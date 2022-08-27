import { useState, useContext } from "react";
import { userContext } from "../App";

export default function Favourites() {
  const { currentUser } = { ...useContext(userContext) };
  return <>{/* <h1>currentUser: {JSON.stringify(currentUser.favs)}</h1> */}</>;
}
