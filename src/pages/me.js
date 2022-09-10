import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import Container from "../layout/Container";

import { useContext } from "react";
import { userContext } from "../App";
import Loading from "../components/Loading";

export default function () {
  const { currentUser } = { ...useContext(userContext) };

  // if currentUser is not ready then return Loading
  if (!currentUser) return <Loading />;

  return (
    <>
      <Container>
        <Card className=" max-w-sm mx-auto">
          <CardHeader floated={false} className="max-h-80">
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
          <CardFooter className="flex justify-center flex-wrap gap-7 pt-2">
            {currentUser.favs.map((value) => {
              return <Card className=" py-2 px-4">{value}</Card>;
            })}
          </CardFooter>
        </Card>
      </Container>
    </>
  );
}
