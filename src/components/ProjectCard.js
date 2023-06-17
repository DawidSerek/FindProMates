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
} from "@chakra-ui/react";

export default function ProjectCard({ project }) {
  return (
    <Card minW="200px" w="20vw" bg="white" h="60vh">
      <CardHeader color="gray.700">
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

      <CardBody color="gray.500">
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
          {project.collaborators.map((mate) => {
            return (
              <ListItem>
                {mate.name} - {mate.role[0]}
              </ListItem>
            );
          })}
        </List>
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
