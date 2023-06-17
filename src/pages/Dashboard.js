import { SimpleGrid } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import TodoCard from "../components/TodoCard";
import { useUserContext } from "../context/userProvider";

function Dashboard() {
  const projects = useLoaderData();
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
      <ProjectCard project={my_project} />
      <ProjectCard project={global_project} />
      <TodoCard Todos={currentUser.todos} />
    </SimpleGrid>
  );
}
export default Dashboard;

export const projectsLoader = async () => {
  const res = await fetch("http://localhost:3000/projects");
  return res.json();
};
