import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Radio,
  Button,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import Container from "../layout/Container";
import * as Yup from "yup";

export default function Register() {
  // Formik structure
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // use Yup library for validating the form (returns [errors])
    validationSchema: Yup.object({
      email: Yup.string().required("Please enter your Email"),

      password: Yup.string().required("Please enter you Password"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-end items-center lg:mx-8">
        <Typography
          variant="h3"
          color="purple"
          className="mx-auto text-center text-6xl lg:text-8xl"
        >
          Sign <span className="text-black">In</span>
        </Typography>
        <Card className="w-96 mt-10 shadow-none rounded-none sm:rounded-lg sm:border">
          <form
            onSubmit={(e) => {
              // prevent page from reloading
              e.preventDefault();
              // allow formik to handle the submit
              formik.handleSubmit();
            }}
          >
            {/* header */}

            {/* body */}
            <CardBody className="flex flex-col gap-4">
              <Input
                name="email"
                color="purple"
                label="Email"
                size="lg"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <Typography className="text-yellow-900" variant="small">
                  {formik.errors.email}
                </Typography>
              ) : null}

              <Input
                name="password"
                color="purple"
                label="Password"
                type="password"
                size="lg"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <Typography className="text-yellow-900" variant="small">
                  {formik.errors.password}
                </Typography>
              ) : null}
            </CardBody>

            {/* footer */}
            <CardFooter className="pt-0">
              {/* submit button */}
              <Button variant="gradient" type="submit" color="purple" fullWidth>
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
          </form>
        </Card>
      </div>
    </Container>
  );
}
