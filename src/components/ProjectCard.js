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
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import PmButton1 from "./PmButton1.js";

export default function ProjectCard({ project }) {
  const bg = useColorModeValue("brand.400", "brand.600");
  return (
    <Card minW="200px" w="20vw" bg={bg} h="60vh">
      <CardHeader>
        <Flex gap={5}>
          <Box w="50px" h="50px">
            <Text>AV</Text>
          </Box>
          <Box>
            <Heading as="h3" size="sm">
              {project.title}
            </Heading>
            <Text>by {project.author}</Text>
          </Box>
        </Flex>
      </CardHeader>

      <CardBody>
        <Heading as="h4" size="sm">
          About project:
        </Heading>
        <Text noOfLines="5" textOverflow="ellipsis">
          {project.description}
        </Text>
        <Divider />
        <Heading maxH="20vh" as="h4" size="sm" pt={4}>
          Collaborators (Mates):
        </Heading>

        <List spacing={2}>
          {project.collaborators.map((collaborator, index) => {
            return (
              //in final version => key= {collaborator.id}
              <ListItem key={index}>
                {collaborator.name} - {collaborator.role[0]}
              </ListItem>
            );
          })}
        </List>
      </CardBody>

      <Divider />

      <CardFooter>
        <PmButton1 content="Details" />
      </CardFooter>
    </Card>
  );
}
