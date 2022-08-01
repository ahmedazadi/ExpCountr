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
          <Typography
            href="./"
            variant="h2"
            className="mr-4 text-lg cursor-pointer py-1.5 font-normal"
          >
            Material Tailwind
          </Typography>

          {/* navigation */}
          {/* <ul className="flex items-center gap-6">
            <Typography as="li" variant="small" className="p-1 font-normal">
              <a href="./discovery" className="flex items-center">
                <FaGlobe className=" inline-block mr-1" /> Discovery
              </a>
            </Typography>
            <Typography as="li" variant="small" className="p-1 font-normal">
              <a href="./favourites" className="flex items-center">
                <FaHeart className=" inline-block mr-1" /> Favourites
              </a>
            </Typography>
          </ul> */}

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
          </ul>
          {/* account buttons */}
          <div>{data ? <Account /> : <LoginRegister />}</div>
        </div>
      </Navbar>
    </>
  );
}
