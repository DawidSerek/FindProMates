import { Box, Container, Divider, Flex, Spacer } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Footer from "../components/Footer";
export default function RootLayout() {
  const [navSize, setNavSize] = useState("large");

  return (
    <Flex bg="#1C1B42">
      <Flex zIndex={1}>
        <Sidebar navSize={navSize} setNavSize={setNavSize} />
      </Flex>
      <Flex w={navSize === "small" ? "95vw" : "80vw"} h="100vh" flexDir="column">
        <Header />
        <Divider />
        <Box as="main" m={5} borderRadius={10} p={10} h="100%" bg="#232252">
          <Outlet />
        </Box>
        <Divider />
        <Spacer />
        <Footer />
      </Flex>
    </Flex>
  );
}
