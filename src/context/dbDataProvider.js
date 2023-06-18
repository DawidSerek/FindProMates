import { createContext, useContext, useEffect, useState } from "react";

const DbDataContext = createContext(undefined);
const url = "http://localhost:3500/";

export const DbDataProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [fetchUsersError, setFetchUsersError] = useState(null);
  // const [isUserLoading, setIsUserLoading] = useState(true);

  // const [projects, setProjects] = useState([]);
  // const [fetchProjectsError, setFetchProjectsError] = useState(null);
  // const [isProLoading, setIsProLoading] = useState(true);

  const [megaState, setMegaState] = useState({
    users: [],
    projects: [],
    fetchUsersError: null,
    fetchProjectsError: null,
    isUserLoading: true,
    isProLoading: true,
  });
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url + "users");
        if (!response.ok) throw Error("Did not recive expected data");
        const usersList = await response.json();
        setMegaState({
          ...megaState,
          users: usersList,
          fetchUsersError: null,
        });
      } catch (err) {
        setMegaState({
          ...megaState,
          fetchUsersError: err.message,
        });
      } finally {
        setMegaState({
          ...megaState,
          isUserLoading: false,
        });
      }
    };

    const fetchProjects = async () => {
      try {
        const response = await fetch(url + "projects");
        if (!response.ok) throw Error("Did not recive expected data");
        const projectsList = await response.json();
        setMegaState({
          ...megaState,
          users: projectsList,
          fetchProjectsError: null,
        });
      } catch (err) {
        setMegaState({
          ...megaState,
          fetchProjectsError: err.message,
        });
      } finally {
        setMegaState({
          ...megaState,
          isProjectsLoading: false,
        });
      }
    };
    fetchUsers();
    fetchProjects();
  }, []);
  return <DbDataContext.Provider value={{ ...megaState }}>{children}</DbDataContext.Provider>;
};

export const useDBDataContext = () => useContext(DbDataContext);
