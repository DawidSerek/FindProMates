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
import { DashboardCardStyle } from "./PMStyles";
export default function TodoCard({ Todos }) {
  const bg = useColorModeValue("brand.light.400","brand.dark.400");
  const textColor = useColorModeValue( "brand.dark.300", "brand.light.0" );
  return (
    <Card {...DashboardCardStyle} bg={bg} textColor={textColor}>
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

      <Divider />

      <CardFooter>
        {/* <PmButton1 content="Details" /> */}
        <PmButton1>Details</PmButton1>
      </CardFooter>
    </Card>
  );
}
