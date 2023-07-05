import React from "react";
import { Box, Container, Divider, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Footer from "../components/Footer";
export default function RootLayout() {
  const [navSize, setNavSize] = useState("large");
  const bg = useColorModeValue("brand.100", "");
  return (
    <Flex mb={-10} bg={bg}>
      <Flex zIndex={1}>
        <Sidebar navSize={navSize} setNavSize={setNavSize} />
      </Flex>

      <Flex w={navSize === "small" ? "95vw" : "80vw"} minH={"1000vh"} h="100%" flexDir="column">
        <Header />
        <Divider />

        <Box as="main" m={2} borderRadius={10} p={5} h={"100%"}>
          <Outlet />
        </Box>

        <Divider />
        <Spacer />
        <Footer />
      </Flex>
    </Flex>
  );
}
