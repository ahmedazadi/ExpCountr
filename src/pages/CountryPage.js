import { useParams } from "react-router-dom";

export default function CountryPage() {
  const cid = useParams().cid;

  return <h1>hello there</h1>;
}
