import { Navbar, Button, Typography } from "@material-tailwind/react";
import { FaGlobe, FaHeart } from "react-icons/fa";

const loggedIn = false;

const aa = () => {
  if (loggedIn) {
    return (
      <Button variant="gradient" color="green" size="sm">
        Account
      </Button>
    );
  } else {
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
};

export default function Example() {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ml-0.5 h-4 w-4 opacity-75"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
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
        <ul className="flex items-center gap-6">
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
        </ul>

        {/* account buttons */}
        <div>{aa()}</div>
      </div>
    </Navbar>
  );
}
