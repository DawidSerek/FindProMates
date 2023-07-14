import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { URL } from "../url";

const UsersContext = createContext(undefined);

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState({
    usersList: [],
    fetchUsersError: null,
    isUsersLoading: true,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(URL + "users");
        if (!response.ok) throw Error("Did not receive expected data");
        const usersList = await response.json();
        setUsers({
          ...users,
          usersList: usersList,
          fetchUsersError: null,
          isUsersLoading: false,
        });
      } catch (err) {
        setUsers({
          ...users,
          fetchUsersError: err.message,
        });
      }
    };
    //simulating loading from database
    setTimeout(() => {
      fetchUsers();
    }, 2000);
  }, []);
  return <UsersContext.Provider value={{ ...users }}>{children}</UsersContext.Provider>;
};

export const useUsersContext = () => useContext(UsersContext);
