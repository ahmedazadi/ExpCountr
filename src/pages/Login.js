import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

export default function Login() {
  return (
    <Card className="w-96 m-auto mt-10">
      {/* header */}
      <CardHeader
        variant="gradient"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="purple">
          Sign In
        </Typography>
      </CardHeader>
      {/* body */}
      <CardBody className="flex flex-col gap-4">
        <Input color="purple" label="Email" size="lg" />
        <Input color="purple" label="Password" size="lg" />
        <div className="-ml-2.5">
          <Checkbox color="purple" label="Remember Me" />
        </div>
      </CardBody>
      {/* footer */}
      <CardFooter className="pt-0">
        <Button variant="gradient" color="purple" fullWidth>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don't have an account?
        </Typography>
        <Button
          variant="outlined"
          color="purple"
          fullWidth
          onClick={() => {
            window.open("/register", "_self");
          }}
        >
          Sign Up
        </Button>
      </CardFooter>
    </Card>
  );
}
