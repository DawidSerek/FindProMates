import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import TodoCard from "../components/TodoCard";
import { useDBDataContext } from "../context/dbDataProvider";

function Dashboard() {
  var { users, fetchUsersError, isUserLoading, projects, fetchProjectsError, isProLoading } =
    useDBDataContext();
  projects = useLoaderData();
  const my_project = projects[0];
  const global_project = projects[1];
  const currentUser = {
    id: 0,
    name: "Bob",
    lastname: "Kowalski",
    nickname: "Bob123",
    roles: ["presenter", "HTML", "programmer", "UI/UX"],
    project: [0, 3],
    todos: [
      {
        project: {
          author: "Alice",
          name: "project 2",
        },
        description: "prepare presentation of your program",
        due: "18/05/2020 18:00",
        assigned: [{ name: "Kasia" }, { name: "Bob" }],
      },
    ],
  };

  return (
    <SimpleGrid gap={5} pl={10} minChildWidth="200px">
      {/* {!isProLoading && !fetchProjectsError && <ProjectCard project={projects[0]} />}
      {!isProLoading && !fetchProjectsError && <ProjectCard project={projects[1]} />} */}

      <ProjectCard project={my_project} />
      <ProjectCard project={global_project} />
      <TodoCard Todos={currentUser.todos} />

      {/* {fetchProjectsError && <span>Nie udało sie załadować projektow: {fetchProjectsError} </span>}
      {fetchUsersError && <TodoCard Todos={users[0].todos} />}
      {fetchUsersError && <span>Nie udało sie załadować userow</span>} */}
    </SimpleGrid>
  );
}
export default Dashboard;

export const projectsLoader = async () => {
  const res = await fetch("http://localhost:3500/projects");
  return res.json();
};
