import { Navbar, Button, Typography } from "@material-tailwind/react";
// iocns
import { FaGlobe, FaHeart } from "react-icons/fa";
// useContext for using userdata
import { useContext } from "react";
import { UserData } from "../App";
// use link instead of anchor tag
import { Outlet, Link } from "react-router-dom";

// Account button in navbar
function Account() {
  return (
    <Button variant="gradient" color="green" size="sm">
      Me
    </Button>
  );
}

// login and resgister button in navbar
function LoginRegister() {
  return (
    <>
      <a
        href="https://anvilproject.org/guides/content/creating-links"
        className="mr-3"
      >
        <Button variant="gradient" size="sm">
          Register
        </Button>
      </a>
      <a href="">
        <Button variant="outlined" size="sm">
          Login
        </Button>
      </a>
    </>
  );
}

export default function Header() {
  const data = useContext(UserData);

  return (
    <>
      <Navbar className="mx-auto max-w-screen-xl">
        <div className="text-blue-gray-900 container flex items-center justify-between">
          {/* logo */}
          <Link to="./">
            <Typography
              href="./"
              variant="h2"
              className="mr-4 text-xl cursor-pointer py-1.5 font-extrabold"
            >
              <span className=" text-deep-purple-600">Exp</span>
              Countr
            </Typography>
          </Link>

          {/* navigation */}
          <ul className="flex items-center gap-6">
            <Typography as="li" variant="small" className="p-1 font-normal">
              <Link to="./explore" className="flex items-center">
                <FaGlobe className=" inline-block mr-1" /> Explore
              </Link>
            </Typography>
            <Typography as="li" variant="small" className="p-1 font-normal">
              <Link to="./favourites" className="flex items-center">
                <FaHeart className=" inline-block mr-1" /> Favourites
              </Link>
            </Typography>
          </ul>

          {/* account buttons */}
          <div>{data ? <Account /> : <LoginRegister />}</div>
        </div>
      </Navbar>
    </>
  );
}
