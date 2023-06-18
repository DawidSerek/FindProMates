import { Flex, HStack, Heading, Image, Input, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logos/2clr.png";
function Header() {
  const [search, setSearch] = useState("");
  return (
    <Flex alignItems="center" pb={3} ml={5} mt="2.5vh">
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
        <Input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="&#x1F50E;&#xFE0E;  Search..."
          _focus={{
            bg: "#252467",
            color: "white",
          }}
        />
      </HStack>
      <Spacer />
    </Flex>
  );
}

export default Header;
