import { Box, Divider, Flex, Spacer } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Footer from "../components/Footer";
export default function RootLayout() {
  const [navSize, setNavSize] = useState("large");

  return (
    <Box bg="blue.800">
      <Flex bg="blue.800">
        <Flex>
          <Sidebar navSize={navSize} setNavSize={setNavSize} />
        </Flex>
        <Flex w={navSize === "small" ? "95vw" : "80vw"} h="100vh" flexDir="column">
          <Header />
          <Divider />

          <Box as="main" m={5} borderRadius={10} p={10} h="100%" bg="blue.900">
            <Outlet />
          </Box>
          <Divider />
          <Spacer />
          <Footer />
        </Flex>
      </Flex>
    </Box>
  );
}
