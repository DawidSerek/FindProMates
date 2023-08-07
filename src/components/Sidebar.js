import {React, useState, useEffect} from "react";
import {
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { IoCreateOutline } from "react-icons/io5";
import { AiFillProject, AiFillCloud } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavItem from "./NavItem";


function Sidebar({navSize}) {

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
  const textColor = useColorModeValue("brand.dark.300","brand.light.0");
  const iconColor = useColorModeValue( "brand.dark.300", "brand.light.0" )
  const bg = useColorModeValue("brand.light.100", "brand.dark.400");
  const [navHeight, setNavHeight] = useState("50em")

  useEffect(() => {
    window.addEventListener('resize', setNavHeight("calc(100vh - 5em)"));

    return () => {
      window.removeEventListener('resize', setNavHeight("calc(100vh - 5em)"));
    };
  }, []); 


  return (
    <Flex
      left="5"
      flexDir="column"
      w = {navSize === "small" ? "5em" : "21em"}
      h = {navHeight}
      justifyContent="space-between"
      bg={bg}
      transition={"width 0.3s"}
    >
      {/* Displaying NavItems on the top of the sidebar */}
      <Flex
        p="5%"
        flexDir="column"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        w="100%"
        as="nav"
        zIndex={5}
      >
        

        {links.map((link, index) => {
          return <NavItem key={index} navSize={navSize} {...link} />;
        })}
      </Flex>

    </Flex>
  );
}
export default Sidebar;
