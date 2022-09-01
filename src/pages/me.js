import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

import Container from "../layout/Container";

import { useContext } from "react";
import { userContext } from "../App";

export default function () {
  const { currentUser } = { ...useContext(userContext) };
  if (!currentUser) return "no data";
  return (
    <>
      <Container>
        <Card className="w-96 mx-auto">
          <CardHeader floated={false} className="h-80">
            <img src={currentUser.profile} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {currentUser.username}
            </Typography>
            <Typography color="gray" className="font-medium" textGradient>
              {currentUser.email}
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            {currentUser.favs.map((value) => {
              return <Card className=" py-2 px-4">{value}</Card>;
            })}
          </CardFooter>
        </Card>
      </Container>
    </>
  );
}
