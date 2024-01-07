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
  const iconBg = useColorModeValue("brand.light.200", "brand.dark.200");
  const textColor = useColorModeValue( "brand.dark.300", "brand.light.0" );
  const onClickBgColor = useColorModeValue( "brand.dark.100", "brand.light.300" );

  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
      textColor={textColor}
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
          _active={{bg: onClickBgColor}}
        >

          <MenuButton 
            w="100%" 
            onMouseEnter={onOpen} 
            onMouseLeave={onClose}>
            <Flex>
              <Icon as={icon} fontSize="xl"/>
              <Text 
                ml={5} 
                display={navSize === "small" ? "none" : "flex"} 
                whiteSpace={"nowrap"}
                overflow={"hidden"}
              >
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
