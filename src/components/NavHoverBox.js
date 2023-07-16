import { Flex, Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function NavHoverBox({ title, icon, description }) {
  const bg = useColorModeValue("brand.light.400", "brand.dark.200");
  const textColor = useColorModeValue( "brand.dark.500", "brand.light.0" );
  return (
    <>
      {/* Little arrow pointing to current navitem */}
      <Flex
        pos="absolute"
        mt="calc(100px - 7.5px)"
        ml="-10px"
        width={0}
        height={0}
        border="100px"
        borderTop="10px solid transparent"
        borderBottom="10px solid transparent"
        borderRight="10px solid"
        borderRightColor={bg}
      />

      {/*The box itself*/}
      <Flex
        h="100%"
        w="100%"
        flexDir="column"
        alignItems="center"
        justify="center"
        bg={bg}
        border="1px"
        borderRadius="15px"
        borderColor={textColor}
        textAlign="center"
        textColor={textColor}
      >
        {/* Description and icon of current navitem */}
        <Icon as={icon} fontSize="3xl" mb={4} />

        <Heading size="md" fontWeight="normal">
          {title}
        </Heading>

        <Text>{description}</Text>
      </Flex>
    </>
  );
}
