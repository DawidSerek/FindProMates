import { Box, Divider, Flex, Spacer } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Footer from "../components/Footer";
export default function RootLayout() {
  const [navSize, setNavSize] = useState("large");

  return (
    <Box  bg="pm.bright">
      <Header />
      <Sidebar navSize={navSize} setNavSize={setNavSize} />
      <Flex flexDir={"column"} zIndex={-1}>
        <Box
          // zIndex={-1}
          as="main"
          mr={{
            base: "2vw",
            md: "1vw",
          }}
          ml={{
            base: "2vw",
            md: "8vw",
          }}
          w="auto"
          alignItems={"right"}
          borderRadius={10}
          p={10}
          h={"85vh"}
          bg="pm.dark"
        >
          <Outlet />
        </Box>
        <Divider />
        <Footer />
      </Flex>
    </Box>
  );
}
