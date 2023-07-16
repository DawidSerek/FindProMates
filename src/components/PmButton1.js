import { Button } from "@chakra-ui/react";
import React from "react";

// Pro Mates button (made from Chakra Ui Button for specific use)
export default function PmButton1({ children }) {
  return (
    <Button
      variant="ghost"
      color="light.brand.0"
      border="2px"
      borderColor="light.brand.0"
      _hover={{ borderRadius: "10px" }}
    >
      {children}
    </Button>
  );
}
