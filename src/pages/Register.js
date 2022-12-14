import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Radio,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Container from "../layout/Container";
import * as Yup from "yup";
import { useContext } from "react";
import { userContext } from "../App";

export default function Register() {
  const { users, setUsers, setCurrentUser } = useContext(userContext);

  // Formik structure
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      password2: "",
      gender: null,
    },
    // use Yup library for validating the form (returns [errors])
    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, "Username must be 20 characters or less ")
        .required("Usernaem is required"),

      email: Yup.string()
        .email("Invalid Email address")
        .required("Email is required"),

      password: Yup.string()
        .required("Password is required")
        .max(15, "Password must be 15 characters or less"),

      password2: Yup.string()
        .required("Password confirmation is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      setUsers([...users, values]);
      setCurrentUser(values);
      console.log(users);
    },
  });
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-end items-center lg:mx-8">
        <Typography
          variant="h3"
          className="mx-auto text-deep-purple-700 text-center text-6xl lg:text-8xl right-left-animate"
        >
          Sign <span className="text-black">Up</span>
        </Typography>
        <Card className="w-96 mt-10 shadow-none rounded-none sm:rounded-lg sm:border">
          <form
            className="form-animate-child"
            onSubmit={(e) => {
              // prevent page from reloading
              e.preventDefault();
              // allow formik to handle the page
              formik.handleSubmit();
            }}
          >
            {/* header */}

            {/* body */}
            <CardBody className="flex flex-col gap-4 ">
              <Input
                name="username"
                color="purple"
                label="Username"
                size="lg"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username ? (
                <Typography className="text-yellow-900" variant="small">
                  {formik.errors.username}
                </Typography>
              ) : null}

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

              <Input
                name="password2"
                color="purple"
                label="Password"
                type="password"
                size="lg"
                value={formik.values.password2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password2 && formik.errors.password2 ? (
                <Typography className="text-yellow-900" variant="small">
                  {formik.errors.password2}
                </Typography>
              ) : null}

              <div className="flex items-center justify-start">
                <Typography>Gender: </Typography>
                <Radio
                  name="gender"
                  color="purple"
                  id="male"
                  label="male"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Radio
                  name="gender"
                  color="purple"
                  id="female"
                  label="female"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.gender && formik.errors.gender ? (
                <Typography className="text-yellow-900" variant="small">
                  {formik.errors.gender}
                </Typography>
              ) : null}
            </CardBody>

            {/* footer */}
            <CardFooter className="pt-0">
              {/* submit button */}
              <Button
                variant="fill"
                className="bg-deep-purple-700"
                type="submit"
                color="purple"
                fullWidth
              >
                Sign Up
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Already have an account?
              </Typography>
              <Link to="/Login">
                <Button
                  variant="outlined"
                  className="text-deep-purple-700 outline-deep-purple-700"
                  color="purple"
                  fullWidth
                >
                  Sign In
                </Button>
              </Link>
            </CardFooter>
          </form>
        </Card>
      </div>
    </Container>
  );
}
