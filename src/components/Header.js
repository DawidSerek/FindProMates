import { Flex, HStack, Heading, Input, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logos/2clr.png';

function Header() {
  const [search, setSearch] = useState("");
  return (
    <Flex alignItems="center" pb={3} ml={5} mt="2.5vh">
      
      <Link to="/">
        <img src={Logo} alt="Find Pro Mates logo" width={"80em"}></img>
      </Link>

      <Heading size="xl">Find Pro Mates</Heading>

      <Spacer />
        <HStack spacing={5}>

            <Input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="&#x1F50E;&#xFE0E;Search..."
              _focus={{
                bg: " white",
                color: "black",
              }}
            />

        </HStack>
      <Spacer />

    </Flex>
  );
}

export default Header;
