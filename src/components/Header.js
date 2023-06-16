import {
  Box,
  Button,
  calc,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [search, setSearch] = useState("");
  return (
    
    <Flex height="100%" alignItems="center" bg="#232252">
      <IconButton aria-label="more" icon={<FontAwesomeIcon size="2xl" />}  />
      {/* <FontAwesomeIcon size="2xl" /> */}
      <Box flex={1} m={1}>
        <Link to="/">
          <Heading margin="" size="2xl">
            Find Pro Mates
          </Heading>
        </Link>
      </Box>
      <Spacer />
      <Box flex={1} p={2}>
        <div>
          <Input
            m={1}
            width="80%"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="&#x1F50E;&#xFE0E;Search..."
            // style="font-family:Arial, FontAwesome"
            bg="white"
            color="black"
          />
        </div>
      </Box>
      {/* <Button>Look For The New Projects</Button> */}
    </Flex>
  );
}

export default Header;
