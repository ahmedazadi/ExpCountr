// components
import Navbar from "./components/Navbar";

// react
import { useState, createContext } from "react";

export const UserData = createContext();

function App() {
  const [user, setUser] = useState({
    username: "ahmed_azad",
    password: "1234",
    favourites: ["ab", "cd", "ef"],
  });

  return (
    <>
      <UserData.Provider value={user}>
        <Navbar />
        <h1>
          project started <br />
          {"it's : " + user}
        </h1>
      </UserData.Provider>
    </>
  );
}

export default App;
