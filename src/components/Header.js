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
import Logo from "../assets/logos/2clr.png";
import { ColorModeSwitcher } from "../hooks/ColorModeSwitcher";
function Header() {
  const [search, setSearch] = useState("");
  const bg = useColorModeValue("brand.200", "brand.800");
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
      zIndex={2}
      bg={bg}
      borderRadius={10}
      flexDir={{ base: "column", md: "row" }}
    >
      {/* Logo with title as a link to Dashboard */}
      <Link to="/">
        <Flex alignItems="center">
          <Image src={Logo} alt="Find Pro Mates logo" boxSize="5em" objectFit="scale-down" />

          <Heading size="xl" marginLeft="0.35em">
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
            <SearchIcon />
          </InputLeftElement>
          <Input
            value={search}
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
