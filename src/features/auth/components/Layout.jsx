import React from "react";
// components
import { VStack } from "@chakra-ui/react";

export function Layout({ children }) {
  return (
    <VStack
      maxW="100vw"
      width="100%"
      minH="100vh"
      align="center"
      justify="center"
      spacing="2rem"
      p={["2rem 1rem", "2rem 1rem", "2rem 2rem", "2rem 6rem", "2rem 8rem"]}
    >
      {children}
    </VStack>
  );
}
