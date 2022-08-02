import { data } from "autoprefixer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CountryPage() {
  const cid = useParams().cid;

  useEffect(
    fetch(`https://restcountries.com/v3.1/alpha/${cid}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      }),
    []
  );

  return <h1>hello there: cid</h1>;
}
