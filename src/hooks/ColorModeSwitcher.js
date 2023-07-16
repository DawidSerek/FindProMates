import React from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();

  const text = useColorModeValue("dark", "light");

  const textColor = useColorModeValue( "brand.dark.300", "brand.light.0" );
  const onHoverBg = useColorModeValue( "brand.light.400", "brand.dark.200" );

  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      textColor={textColor}
      {...props}
    />
  );
};
