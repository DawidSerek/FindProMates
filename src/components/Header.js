import React from "react";
import {
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneIcon, SearchIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import Logo from "../assets/logos/2clr.png";
function Header() {
  const [search, setSearch] = useState("");
  return (
    <Flex
      as={"header"}
      alignItems="center"
      pos={"sticky"}
      top={0}
      p={3}
      m={5}
      mt={2}
      h={"4em"}
      zIndex={2}
      bg={"pm.dark"}
      borderRadius={10}
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
      {/* search bar */}
      <HStack spacing={5}>
        <InputGroup>
          <InputLeftElement>
            <SearchIcon color="white" />
          </InputLeftElement>

          <Input
            textColor="white"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search..."
            _placeholder={{
              color: "white",
            }}
          />
        </InputGroup>
      </HStack>
      <Spacer />
    </Flex>
  );
}

export default Header;
