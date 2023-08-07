import React from "react";
import {
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import DarkLogo from "../assets/logos/iconClr.png";
import LightLogo from "../assets/logos/iconClr.png";
import { ColorModeSwitcher } from "../hooks/ColorModeSwitcher";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";


export default function Header({navSize, setNavSize, siteWidth}) {
  
  const [search, setSearch] = useState("");
  const bg = useColorModeValue("brand.light.100", "brand.dark.400");
  const textColor = useColorModeValue( "brand.dark.300", "brand.light.0" );
  const logo = useColorModeValue(LightLogo, DarkLogo);
  
  return (

    <Flex
      as={"header"}
      alignItems="center"
      // pos={"sticky"}
      p = {"2em"}
      h={"5em"}
      zIndex={1}
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
          mb = {"1em"}
          ml = {"-0.9em"}
      />


      {/* Logo with title as a link to Dashboard */}
      <Link to="/" >
          <Image 
            src={logo} 
            alt="Find Pro Mates logo" 
            boxSize="5em" 
            objectFit="scale-down" 
            width="3.5em" 
            ml = {"3em"}
          />
      </Link>

      <Spacer />
      <Spacer />
      
      {/* Search bar */}
      { (siteWidth == "medium" || siteWidth == "large") &&
        
        <HStack spacing={5} >
          <InputGroup w = {"70vw"}>

            <InputRightElement>
              <SearchIcon color={textColor}/>
            </InputRightElement>

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
        
      }

      <Spacer />

      <ColorModeSwitcher />
    </Flex>

  );
}