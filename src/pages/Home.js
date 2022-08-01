import { useContext } from "react";
import { UserData } from "../App";

export default function Home() {
  const data = useContext(UserData);
  return <h1>{JSON.stringify(data)}</h1>;
}
