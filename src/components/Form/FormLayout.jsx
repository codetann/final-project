import { VStack } from "@chakra-ui/react";
import React from "react";

export function FormLayout({ children }) {
  return (
    <VStack spacing="3rem" w="100%" maxW="lg">
      {children}
    </VStack>
  );
}
