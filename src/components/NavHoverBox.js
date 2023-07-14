import { Flex, Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function NavHoverBox({ title, icon, description }) {
  const iconBg = useColorModeValue("brand.400", "brand.200");
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
        borderRightColor={iconBg}
      />

      <Flex
        h="100%"
        w="100%"
        flexDir="column"
        alignItems="center"
        justify="center"
        bg={iconBg}
        border="1px"
        borderRadius="15px"
        textAlign="center"
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
