import { Flex, Heading, Icon, Text } from "@chakra-ui/react";

export default function NavHoverBox({ title, icon, description }) {
  return (
    <>
      {/* <Flex
        pos="absolute"
        mt="calc(100px - 7.5px)"
        ml="-10px"
        width={0}
        height={0}

        border='100px' 
        borderColor='white'

        borderTop="10px solid transparent"
        borderBottom="10px solid transparent"
        borderRight="10px solid #63b3ed"
      /> ??? what's that */}

        <Flex
          h="100%"
          w="100%"
          flexDir="column"
          alignItems="center"
          justify="center"
          bg="pm.bright"
          border="1px"
          borderRadius="15px"
          textAlign="center"
        >

          <Icon as={icon} fontSize="3xl" mb={4} />
          
          <Heading size="md" fontWeight="normal">
            {title}
          </Heading>
          
          <Text>{description}</Text>
          
        </Flex>
    </>
  );
}
