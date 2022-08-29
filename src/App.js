// components
import Header from "./components/header/Header";

// react
import { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Favourites from "./pages/Favourites";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CountryPage from "./pages/CountryPage";

import db from "./db";

export const userContext = createContext();

function App() {
  const [users, setUsers] = useState(db);
  const [currentUser, setCurrentUser] = useState();

  // (only once) check if the user has already logged in by checking local storage
  useEffect(() => {
    users.forEach((value) => {
      // if email and password from local storage are correct
      if (
        value.email == localStorage.getItem("email") &&
        value.password == localStorage.getItem("password")
      ) {
        // then login
        setCurrentUser(value);
        return;
      }
    });
  }, []);

  return (
    <>
      <userContext.Provider
        value={{ users, setUsers, currentUser, setCurrentUser }}
      >
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/Favourites" element={<Favourites />} />
          <Route path="/country/:cid" element={<CountryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </userContext.Provider>
    </>
  );
}

export default App;
