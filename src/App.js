// components
import Header from "./components/Header";

// react
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Favourites from "./pages/Favourites";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Layout from "./Layout";

export const UserData = createContext();

function App() {
  const [user, setUser] = useState({
    username: "ahmed_azad",
    password: "1234",
    favourites: ["ab", "cd", "ef"],
  });

  return (
    <>
      <Layout />
      {/* <UserData.Provider value={user}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/Favourites" element={<Favourites />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </UserData.Provider> */}
    </>
  );
}

export default App;
