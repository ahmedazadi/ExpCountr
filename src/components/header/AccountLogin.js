import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

import { useContext } from "react";
import { userContext } from "../../App";
// Account button in navbar
export function Account({ fn }) {
  const { setCurrentUser } = { ...useContext(userContext) };

  return (
    <>
      {/* ME button */}
      <Link to="/me">
        <Button
          className="mr-3"
          variant="gradient"
          color="purple"
          size="sm"
          onClick={fn}
        >
          Me
        </Button>
      </Link>
      {/* log out button*/}
      <Button
        className=""
        variant="text"
        color="purple"
        size="sm"
        onClick={() => {
          setCurrentUser(null);
          localStorage.removeItem("email");
          localStorage.removeItem("password");

          fn();
        }}
      >
        log out
      </Button>
    </>
  );
}

// login and resgister button in navbar
export function LoginRegister({ fn }) {
  return (
    <>
      {/* Sign up button */}
      <Link to="/register" className="mr-3">
        <Button variant="gradient" color="purple" size="sm" onClick={fn}>
          Sign Up
        </Button>
      </Link>
      {/* Log in button */}
      <Link to="/login">
        <Button variant="text" color="purple" size="sm" onClick={fn}>
          Login
        </Button>
      </Link>
    </>
  );
}
