import { Box, Button, VStack } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
function Sidebar() {
  const links = [
    {
      url: "/profile",
      dest: "Profile",
    },
    {
      url: "/my-projects",
      dest: "My projects",
    },
    {
      url: "/global-projects",
      dest: "Global projects",
    },
  ];
  return (
    <VStack spacing={5} pt={10} bg="blue" height="100%">
      {links.map(({ url, dest }) => (
        <Button colorScheme="teal" variant="solid">
          <Link as={ReachLink} to={url}>
            {dest}
          </Link>
        </Button>
      ))}
    </VStack>
  );
}
export default Sidebar;
