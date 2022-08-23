import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function Example({ title, text, Icon }) {
  return (
    <Card className=" flex flex-row items-center pl-7 shadow-none border ">
      <div className=" w-8">
        <Icon className="w-full" />
      </div>
      <div>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            {text}
          </Typography>
        </CardBody>
      </div>
    </Card>
  );
}
