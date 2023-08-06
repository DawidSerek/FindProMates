import React from "react";
import { Grid, GridItem, Spacer, HStack, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Footer from "../components/Footer";
import { ProjectsProvider } from "../context/projectsProvider";
export default function RootLayout() {
  const [navSize, setNavSize] = useState("large");
  const bg = useColorModeValue("brand.light.0", "brand.dark.500");
  
  return (
    <Grid mb={-10} bg={bg} templateRows={"10vh 1fr 5vh"} gap={5}>
      <GridItem>
        <Header />
      </GridItem>

      <GridItem>
        <HStack>
          <Sidebar navSize={navSize} setNavSize={setNavSize} />
          <Spacer />
          <ProjectsProvider>
            <Outlet />
          </ProjectsProvider>
          <Spacer />
        </HStack>
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  );
}
