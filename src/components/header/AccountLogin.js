import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

// Account button in navbar
export function Account() {
  return (
    <Button variant="gradient" color="green" size="sm">
      Me
    </Button>
  );
}

// login and resgister button in navbar
export function LoginRegister() {
  return (
    <>
      <Link to="/register" className="mr-3">
        <Button variant="gradient" size="sm">
          Register
        </Button>
      </Link>
      <Link to="/login">
        <Button variant="outlined" size="sm">
          Login
        </Button>
      </Link>
    </>
  );
}
