import { Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";

// Pro Mates button (made from Chakra Ui Button for specific use)
export default function PmButton1({ children }) {
  const onHoverBg = useColorModeValue( "brand.light.200", "brand.dark.200" );
  return (
    <Button
      variant="ghost"
      color="brand.light.0"
      border="2px"
      borderColor="brand.light.0"
      _hover={{ bg:onHoverBg }}
      _active={{ bg:"brand.light.0" }}
    >
      {children}
    </Button>
  );
}
