import { Input } from "@material-tailwind/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search({ searchResult }) {
  const [text, setText] = useState();
  return (
    <div className="mx-auto w-72">
      <Input
        onChange={(e) => {
          searchResult(e.target.value);
        }}
        label="Search"
        icon={<FaSearch />}
      />
    </div>
  );
}
