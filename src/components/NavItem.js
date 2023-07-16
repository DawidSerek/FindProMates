import React from "react";
import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  Link,
  Text,
  MenuList,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import NavHoverBox from "./NavHoverBox";

// Item of navigation, displaying descirpion NavHoverBox when on mouse hover
export default function NavItem({ navSize, title, icon, url, description, active }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const iconBg = useColorModeValue("brand.light.400", "brand.dark.200");
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
    >
      {/* icon and title of current navItem */}
      <Menu isOpen={isOpen} placement="right">
        <Link
          bg={active && iconBg}
          p={3}
          borderRadius={8}
          _hover={{
            textDecor: "none",
            bg: iconBg,
          }}
          w={navSize === "large" && "100%"}
          as={ReachLink}
          to={url}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <MenuButton w="100%" onMouseEnter={onOpen} onMouseLeave={onClose}>
            <Flex>
              <Icon as={icon} fontSize="xl" color="brand.light.0" />
              <Text ml={5} display={navSize === "small" ? "none" : "flex"} color={"brand.light.0"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
        <MenuList
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          py={0}
          border="none"
          ml={5}
          w={200}
          h={200}
          borderRadius="20px"
        >
          {/* rendering description box */}
          <NavHoverBox title={title} icon={icon} description={description} />
        </MenuList>
      </Menu>
    </Flex>
  );
}
