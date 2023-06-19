import { Avatar, Divider, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { IoCreateOutline } from "react-icons/io5";
import { AiFillProject, AiFillCloud } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavItem from "./NavItem";
function Sidebar({ navSize, setNavSize }) {
  const links = [
    {
      title: "Dashboard",
      url: "/",
      icon: MdDashboard,
      description: "Go to Dashboard",
    },
    {
      title: "Profile",
      url: "/profile",
      icon: CgProfile,
      description: "Check your profile.",
    },
    {
      title: "New project",
      url: "/create-project",
      icon: IoCreateOutline,
      description: "Create and start a new project.",
    },
    {
      title: "My projects",
      url: "/my-projects",
      icon: AiFillProject,
      description: "Check project your created and those you joined.",
    },

    {
      title: "Global projects",
      url: "/global-projects",
      icon: AiFillCloud,
      description: "Look at project other Mates created.",
    },
  ];

  return (
    <Flex
      pos="sticky"
      left="5"
      top={0}
      // h="95vh"
      ml={5}
      mt={2}
      mb={2}
      flexDir="column"
      w={{
        base: navSize === "small" ? "24vw" : "80vw",
        md: navSize === "small" ? "10vw" : "30vw",
        lg: navSize === "small" ? "10vw" : "20vw",
      }}
      maxW={navSize === "small" ? "100px" : "400px"}
      borderRadius={navSize === "small" ? 10 : "30px"}
      justifyContent="space-between"
      bg="pm.dark"
    >
      {/* Displaying NavItems on the top of the sidebar */}
      <Flex
        p="5%"
        flexDir="column"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        w="100%"
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<HamburgerIcon color="white" />}
          size="lg"
          onClick={() => {
            setNavSize(navSize === "small" ? "large" : "small");
          }}
        />
        {links.map((link) => {
          return <NavItem navSize={navSize} {...link} />;
        })}
      </Flex>

      {/* Displaying profile info on the bottom of the sidebar */}
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        mb={4}
        alignItems={navSize === "small" ? "center" : "flex-start"}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
            <Heading color="white" as="h3" size="sm">
              Bob Kowalski
            </Heading>
            <Text color="gray">User</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
export default Sidebar;
