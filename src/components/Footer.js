import { Container, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

// Authors copyright
export default function Footer() {
  return (
    <Container bottom={0}>
      <Text textAlign={"center"} fontSize="0.8em">
        <Icon as={AiOutlineCopyrightCircle} boxSize="0.8em" mr={2}/>
        Copyright Piotr Rzadkowski & Dawid Serek 
      </Text>
    </Container>
  );
}
