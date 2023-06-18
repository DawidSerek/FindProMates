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
      m={2}
      mt={0}
      h={"4em"}
      zIndex={2}
      // mr={5}
      // m={"1em"}
      bg={"pm.dark"}
      borderRadius={"20px"}
      borderBottomLeftRadius={0}
    >
      <Link to="/">
        <Flex alignItems="center">
          <Image
            src={Logo}
            alt="Find Pro Mates logo"
            // htmlWidth="80em"
            boxSize="5em"
            objectFit="scale-down"
          />
          {/* <img src={Logo} alt="Find Pro Mates logo" width={"80em"}></img> */}

          <Heading size="xl" marginLeft="0.35em">
            Find Pro Mates
          </Heading>
        </Flex>
      </Link>

      <Spacer />
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
