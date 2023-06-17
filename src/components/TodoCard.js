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
} from "@chakra-ui/react";

export default function TodoCard({ Todos }) {
  return (
    <Card minW="200px" w="20vw" bg="white" h="60vh">
      <CardHeader color="gray.700">
        <Flex gap={5}>
          <Heading as="h3" size="sm">
            Your TODOs
          </Heading>
        </Flex>
      </CardHeader>

      <CardBody color="gray.500">
        <UnorderedList spacing={2}>
          {Todos.map(({ project, description, due, assigned }) => {
            return (
              <ListItem>
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
        <Flex>
          <Button variant="ghost">Details</Button>
        </Flex>
      </CardFooter>
    </Card>
  );
}
