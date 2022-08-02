import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

export default function CountryCard({ text, image, cca2 }) {
  return (
    <Link className="" to={`https://restcountries.com/v3.1/alpha/${cca2}`}>
      <Card className="w-64 mx-4  my-4 transition-transform hover:scale-110">
        <CardHeader floated={false} className=" h-48">
          <img src={image} alt="profile-picture" className=" w-full" />
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
