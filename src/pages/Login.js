import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
// react
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
// layout
import Container from "../layout/Container";
// libraries
import { useFormik } from "formik";
import * as Yup from "yup";
// users data
import { userContext } from "../App";

export default function Login() {
  // users data
  const { users, currentUser, setCurrentUser } = useContext(userContext);

  // if the user has already signed in then jsut return to home page
  if (currentUser) {
    window.open("/", "_self").win.focus();
  }

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
    onSubmit: (formValues) => {
      users.forEach((usersData) => {
        if (formValues.email === usersData.email) {
          if (formValues.password === usersData.password) {
            setCurrentUser(usersData);
            // save data in the localstore of the browser
            localStorage.setItem("email", usersData.email);
            localStorage.setItem("password", usersData.password);
            // if you found what you're looking for then just return
            return;
          }
        }
      });
    },
  });

  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-end items-center lg:mx-8 ">
        <Typography
          variant="h3"
          className="mx-auto text-deep-purple-700 text-center text-6xl lg:text-8xl right-left-animate"
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
              <Button
                variant="fill"
                type="submit"
                className="bg-deep-purple-700"
                color="purple"
                fullWidth
              >
                Sign In
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don't have an account?
              </Typography>
              <Link to="/register">
                <Button
                  variant="outlined"
                  className=" text-deep-purple-700 outline-deep-purple-700"
                  color="purple"
                  fullWidth
                >
                  Sign Up
                </Button>
              </Link>
            </CardFooter>
          </form>
        </Card>
      </div>
    </Container>
  );
}
