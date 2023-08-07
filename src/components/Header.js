import React from "react";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  textDecoration,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneIcon, SearchIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import DarkLogo from "../assets/logos/iconClr.png";
import LightLogo from "../assets/logos/iconClr.png";
import { ColorModeSwitcher } from "../hooks/ColorModeSwitcher";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {navSizeSetter, navSizeGetter} from "./Sidebar";

import { text } from "@fortawesome/fontawesome-svg-core";

function Header({navSize, setNavSize}) {
  const [search, setSearch] = useState("");
  const bg = useColorModeValue("brand.light.100", "brand.dark.400");
  const textColor = useColorModeValue( "brand.dark.300", "brand.light.0" );
  const logo = useColorModeValue(LightLogo, DarkLogo);

  return (
    <Flex
      as={"header"}
      alignItems="center"
      // pos={"sticky"}
      top={0}
      p={3}
      h={"10vh"}
      // zIndex={1}
      bg={bg}
      flexDir={{ base: "column", md: "row" }}
    >
      <IconButton
          bg = {bg}
          mt={5}
          _hover={{ background: "none" }}
          icon={<HamburgerIcon color={textColor}/>}
          size="lg"
          onClick={() => {
            setNavSize(navSize === "small" ? "large" : "small");
          }}
          m={"1em"}
        />


      {/* Logo with title as a link to Dashboard */}
      <Link to="/">
        <Flex alignItems="center">
          <Image src={logo} alt="Find Pro Mates logo" boxSize="5em" objectFit="scale-down" width="3.5em" />
        </Flex>
      </Link>

      <Spacer />
      <Spacer />
      
      {/* search bar */}

      <HStack spacing={5}>

        <InputGroup>

          <InputLeftElement>
            <SearchIcon color={textColor}/>
          </InputLeftElement>

          <Input
            value={search}
            focusBorderColor={textColor}
            borderColor={textColor}
            _placeholder={{color:{textColor}}}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search..."
          />
        </InputGroup>

      </HStack>

      <Spacer />
      <ColorModeSwitcher />
    </Flex>
  );
}

export default Header;
