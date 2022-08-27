import { Navbar, Typography } from "@material-tailwind/react";
// iocns
import { FaGlobe, FaHeart } from "react-icons/fa";
// useContext for using userdata
import { useContext } from "react";
import { userContext } from "../../App";
// use link instead of anchor tag
import { Link } from "react-router-dom";
// right side buttons
import { Account, LoginRegister } from "./AccountLogin";

export default function Header() {
  const { currentUser } = { ...useContext(userContext) };
  console.log(currentUser);
  return (
    <>
      <Navbar className=" sticky top-0 z-10 mx-auto max-w-screen-xl">
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
          <ul className="flex flex-col md:flex-row items-center gap-6">
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
          <div className="hidden sm:block">
            {currentUser ? <Account /> : <LoginRegister />}
          </div>
        </div>
      </Navbar>
    </>
  );
}
