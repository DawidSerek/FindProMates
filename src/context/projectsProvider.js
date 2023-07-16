import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { URL } from "../url";

const ProjectContext = createContext(undefined);
export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState({
    projectsList: [],
    fetchProjectsError: null,
    isProjectsLoading: true,
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(URL + "projects");
        if (!response.ok) throw Error("Did not receive expected data");
        const projectsList = await response.json();
        setProjects({
          ...projects,
          projectsList: projectsList,
          fetchProjectsError: null,
          isProjectsLoading: false,
        });
      } catch (err) {
        setProjects({
          ...projects,
          fetchProjectsError: err.message,
        });
      }
    };
    //simulating loading from database
    setTimeout(() => {
      fetchProjects();
    }, 2000);
  }, []);
  return <ProjectContext.Provider value={{ ...projects }}>{children}</ProjectContext.Provider>;
};

export const useProjectContext = () => useContext(ProjectContext);
