import { Button } from "@chakra-ui/react";

// Pro Mates button (made from Chakra Ui Button for specific use)
export default function PmButton1({ content }) {
  return (
    <Button
      variant="ghost"
      color="white"
      border="2px"
      borderColor="pm.dark"
      _hover={{ borderColor: "white", borderRadius: "10px" }}
    >
      {content}
    </Button>
  );
}
