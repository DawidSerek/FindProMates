import React from "react";
import {
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneIcon, SearchIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import DarkLogo from "../assets/logos/iconClr.png";
import LightLogo from "../assets/logos/iconClr.png";
import { ColorModeSwitcher } from "../hooks/ColorModeSwitcher";
function Header() {
  const [search, setSearch] = useState("");
  const bg = useColorModeValue("brand.light.500", "brand.dark.400");
  const logo = useColorModeValue(LightLogo, DarkLogo);
  return (
    <Flex
      as={"header"}
      alignItems="center"
      pos={"sticky"}
      top={0}
      p={3}
      m={5}
      mt={2}
      minH={"4em"}
      h={"100%"}
      zIndex={1}
      bg={bg}
      borderRadius={10}
      flexDir={{ base: "column", md: "row" }}
    >
      {/* Logo with title as a link to Dashboard */}
      <Link to="/">
        <Flex alignItems="center">
          <Image src={logo} alt="Find Pro Mates logo" boxSize="5em" objectFit="scale-down" />
          <Heading size="xl" marginLeft="0.35em" color="brand.light.0">
            Find Pro Mates
          </Heading>
        </Flex>
      </Link>

      <Spacer />
      <Spacer />
      
      {/* search bar */}

      <HStack spacing={5}>

        <InputGroup>

          <InputLeftElement>
            <SearchIcon color={"brand.light.0"}/>
          </InputLeftElement>

          <Input
            value={search}
            focusBorderColor="brand.light.0"
            _placeholder={{color:"white"}}
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
