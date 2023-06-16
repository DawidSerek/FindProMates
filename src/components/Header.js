import { Box, Heading, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Box bg="#40de50" position="fixed" top={0} left={0} right={0}>
      <HStack spacing="20rem" px="1rem" py="1rem">
        <Heading>
          <Link to="/">Find Pro Mates</Link>
        </Heading>
        <Input width="30%" value={search} onChange={handleChange} placeholder="Search..." />
      </HStack>
    </Box>
  );
}

export default Header;
