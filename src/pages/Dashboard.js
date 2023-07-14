import React from "react";
import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import TodoCard from "../components/TodoCard";
import { useProjectContext } from "../context/projectsProvider";
import { useUsersContext } from "../context/usersProvider";

function Dashboard() {
  const { projectsList, fetchProjectsError, isProjectsLoading } = useProjectContext();
  const { usersList, fetchUsersError, isUsersLoading } = useUsersContext();

  return (
    <SimpleGrid gap={5} pl={10} minH={"70vh"} minChildWidth="200px">
      <Skeleton isLoaded={!isProjectsLoading}>
        {!isProjectsLoading && !fetchProjectsError && <ProjectCard project={projectsList[0]} />}
      </Skeleton>

      <Skeleton isLoaded={!isProjectsLoading}>
        {!isProjectsLoading && !fetchProjectsError && <ProjectCard project={projectsList[1]} />}
      </Skeleton>
      <Skeleton isLoaded={!isUsersLoading}>
        {!isUsersLoading && !fetchUsersError && <TodoCard Todos={usersList[0].todos} />}
      </Skeleton>

      {/* //TODO ulepszyć ten kominikat */}
      {fetchProjectsError && <span>Nie udało sie załadować projektow: {fetchProjectsError} </span>}
      {fetchUsersError && <span>Nie udało sie załadować userow {fetchUsersError}</span>}
    </SimpleGrid>
  );
}
export default Dashboard;
