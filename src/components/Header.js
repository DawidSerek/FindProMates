import { Flex, HStack, Heading, Input, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [search, setSearch] = useState("");
  return (
    <Flex alignItems="center" pb={3} ml={5} mt="2.5vh">
      <Link to="/">
        <Heading size="2xl">Find Pro Mates</Heading>
      </Link>
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
