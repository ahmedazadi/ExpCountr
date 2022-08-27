// components
import Header from "./components/Header";

// react
import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Favourites from "./pages/Favourites";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CountryPage from "./pages/CountryPage";

export const UserData = createContext();

function App() {
  const [user, setUser] = useState();

  return (
    <>
      <UserData.Provider value={user}>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/Favourites" element={<Favourites />} />
          <Route path="/country/:cid" element={<CountryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserData.Provider>
    </>
  );
}

export default App;
