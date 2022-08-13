import { Typography } from "@material-tailwind/react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Loading() {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <FaMapMarkerAlt className=" block w-20 h-20  mx-auto my-40 space-x-2 animate-bounce" />
        <Typography className="">Loading</Typography>
      </div>
    </>
  );
}
