import { Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";

// Pro Mates button (made from Chakra Ui Button for specific use)
export default function PmButton1({ children }) {
  const onHoverBg = useColorModeValue( "brand.light.200", "brand.dark.200" );
  const textColor = useColorModeValue( "brand.dark.200", "brand.light.0" );
  const onClickColor = useColorModeValue( "brand.dark.100", "brand.light.300" );
  return (
    <Button
      variant="ghost"
      color={textColor}
      border="2px"
      borderColor={textColor}
      _hover={{ bg:onHoverBg }}
      _active={{ bg:onClickColor }}
    >
      {children}
    </Button>
  );
}
