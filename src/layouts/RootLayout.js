import React from "react";
import { Box, Divider, Flex, Grid, GridItem, Spacer, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Footer from "../components/Footer";
import { ProjectsProvider } from "../context/projectsProvider";
export default function RootLayout() {
  const [navSize, setNavSize] = useState("large");
  const bg = useColorModeValue("brand.100", "");
  return (
    <Grid
      mb={-10}
      bg={bg}
      gridTemplateAreas={`"header header"
                          "sidebar main"
                          "sidebar footer"`}
      gridTemplateRows={"12vh 1fr 20px"}
      gridTemplateColumns={"150px 1fr"}
      gap={5}
    >
      {/* <Flex zIndex={1}> */}
      <GridItem area={"sidebar"}>
        <Sidebar navSize={navSize} setNavSize={setNavSize} />
        {/* </Flex> */}
      </GridItem>
      {/* <Flex w={navSize === "small" ? "95vw" : "80vw"} minH={"100vh"} h="100%" flexDir="column"> */}
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <Divider />

      {/* <Box as="main" m={2} borderRadius={10} p={5} h={"100%"}> */}
      <GridItem area={"main"} alignItems={""} p={5}>
        <ProjectsProvider>
          <Outlet />
        </ProjectsProvider>
      </GridItem>
      {/* </Box> */}

      {/* <Divider />
      <Spacer />
       */}
      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
      {/* </Flex> */}
    </Grid>
  );
}
