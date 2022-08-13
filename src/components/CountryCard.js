// conponnets from material tailwind for card element
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

export default function CountryCard({ text, image, cca2 }) {
  return (
    // first put card inside of [Link] tag so that the whole card will work like a button
    <Link className="" to={`/country/${cca2}`}>
      {/* card from material tailwind */}
      <Card className="w-full transition-transform hover:scale-105">
        <CardHeader floated={false} className=" ">
          <img src={image} alt="profile-picture" className=" w-full h-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {text}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
}
