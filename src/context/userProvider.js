import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    async function fetchUser() {
      const users = await fetch("http://localhost:3000/users");
      users.json().then((resp) => {
        setCurrentUser(resp[0]);
      });
    }
    fetchUser();
  }, []);
  return <UserContext.Provider value={{ currentUser }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
