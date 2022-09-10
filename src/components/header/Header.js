import { Navbar, Typography } from "@material-tailwind/react";
// iocns
import { FaGlobe, FaHeart, FaBars } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
// useContext for using userdata
import { useContext, useState, useEffect } from "react";
import { userContext } from "../../App";
// use link instead of anchor tag
import { Link } from "react-router-dom";
// right side buttons
import { Account, LoginRegister } from "./AccountLogin";

export default function Header() {
  const { currentUser } = { ...useContext(userContext) };
  const [expand, setExpand] = useState();

  useEffect(() => {
    // if it is a wider screen
    if (window.innerWidth < 720) {
      // [Expand] should be false by default
      setExpand(false);
    } else {
      // otherwise le it be true by default
      setExpand(true);
    }
  }, []);

  return (
    <>
      <Navbar className=" sticky top-0 mx-auto max-w-screen-xl z-30">
        <div className="text-blue-gray-900 container flex flex-col md:flex-row items-center justify-between">
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
          <ul
            className={`${
              expand ? "flex" : "hidden"
            } flex-col md:flex-row items-center mt-10 md:mt-0 gap-6`}
          >
            <Typography as="li" variant="small" className="p-1 font-normal">
              <Link
                to="./explore"
                className="flex items-center"
                onClick={() => {
                  setExpand(!expand);
                }}
              >
                <FaGlobe className=" inline-block mr-1" /> Explore
              </Link>
            </Typography>
            <Typography as="li" variant="small" className="p-1 font-normal">
              <Link
                to="./favourites"
                className="flex items-center"
                onClick={() => {
                  setExpand(!expand);
                }}
              >
                <FaHeart className=" inline-block mr-1" /> Favourites
              </Link>
            </Typography>
          </ul>

          {/* account buttons */}
          <div className={`${expand ? "block" : "hidden"}  mt-10 md:mt-0`}>
            {currentUser ? <Account /> : <LoginRegister />}
          </div>
        </div>
      </Navbar>
      <button
        className=" fixed md:hidden top-5 right-5 z-50 w-7 h-7 "
        onClick={() => {
          setExpand(!expand);
        }}
      >
        {expand ? (
          <BsXLg className=" w-full h-full" />
        ) : (
          <FaBars className=" w-full h-full" />
        )}
      </button>
    </>
  );
}
