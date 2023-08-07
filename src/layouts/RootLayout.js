import React from "react";
import { Grid, GridItem, Spacer, HStack, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { ProjectsProvider } from "../context/projectsProvider";

export default function RootLayout() {
  const [navSize, setNavSize] = useState("small");
  const bg = useColorModeValue("brand.light.0", "brand.dark.500");

  return (
    <Grid bg={bg} h = {"100vh"}>
      
      <GridItem>
        <Header setNavSize={setNavSize} navSize={navSize}/>
      </GridItem>

      <GridItem>
        <HStack>

          <Sidebar navSize={navSize} />
          
          <Spacer />
            <ProjectsProvider>
              <Outlet />
            </ProjectsProvider>
          <Spacer />

        </HStack>
      </GridItem>

    </Grid>
  );
}
