import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  HStack,
  Button,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import PmButton1 from "./PmButton1";

export default function TodoCard({ Todos }) {
  const bg = useColorModeValue("brand.400", "brand.600");
  return (
    <Card minW="200px" w="20vw" bg={bg} h="60vh">
      <CardHeader>
        <Flex gap={5}>
          <Heading as="h3" size="sm">
            Your TODOs
          </Heading>
        </Flex>
      </CardHeader>

      <CardBody>
        <UnorderedList spacing={2}>
          {Todos.map(({ project, description, due, assigned, index }) => {
            return (
              <ListItem key={index}>
                <Text>{description}</Text>
                <Text>
                  <b> project name:</b> {project.name} <br /> <b> due:</b> {due}
                </Text>
              </ListItem>
            );
          })}
        </UnorderedList>
      </CardBody>

      <Divider borderColor="gray.200" />

      <CardFooter>
        <PmButton1 content="Details" />
      </CardFooter>
    </Card>
  );
}
