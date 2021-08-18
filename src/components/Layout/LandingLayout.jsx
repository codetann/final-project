import React from "react";
// components
import { VStack } from "@chakra-ui/layout";

export default function LandingLayout({ children }) {
  return (
    <VStack
      maxW="100vw"
      width="100%"
      minH="100vh"
      p={["2rem 1rem", "2rem 1rem", "2rem 2rem", "2rem 4rem", "2rem 4rem"]}
      spacing="5rem"
    >
      {children}
    </VStack>
  );
}
