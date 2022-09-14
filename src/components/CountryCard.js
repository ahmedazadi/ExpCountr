// conponnets from material tailwind for card element
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

export default function CountryCard({ text, image, cca2 }) {
  return (
    // first put card inside of [Link] tag so that the whole card will work like a button
    <Button variant="text" className=" p-0">
      <Link className="" to={`/country/${cca2}`}>
        {/* put card inside of Button to give it material design look */}
        {/* card from material tailwind */}
        <Card className="w-full shadow-none transition-all bg-transparent">
          <CardHeader floated={false} className=" ">
            <img src={image} alt="profile" className=" w-full h-full" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {text}
            </Typography>
          </CardBody>
        </Card>
      </Link>
    </Button>
  );
}
