import {React, useEffect} from "react";
import { Grid, GridItem, Spacer, HStack, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { ProjectsProvider } from "../context/projectsProvider";

export default function RootLayout() {
  const [navSize, setNavSize] = useState("small");
  const bg = useColorModeValue("brand.light.0", "brand.dark.500");
  const [medium, large] = [850, 1800]
  
  const [siteWidth, setSiteWidth] = useState(
    window.innerWidth > large ? "large" :
    window.innerWidth > medium ? "medium" :
    "small"
  );

  useEffect(() => {
    const handleResize = () => {
      setSiteWidth(
        window.innerWidth > large ? "large" :
        window.innerWidth > medium ? "medium" :
        "small");
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Grid bg={bg} h = {"auto"}>
      
      <GridItem>
        <Header setNavSize={setNavSize} navSize={navSize} siteWidth={siteWidth}/>
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
