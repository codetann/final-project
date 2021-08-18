import React from "react";
import { Nav } from "../Navigation";
import { VStack, useColorModeValue } from "@chakra-ui/react";

export default function MainLayout({ children, pos = "center" }) {
  const bg = useColorModeValue("gray.50", "blackAlpha200");
  return (
    <VStack
      maxW="100vw"
      width="100%"
      minH="100vh"
      align="center"
      justify={pos}
      bg={bg}
      spacing="6rem"
      p={["1rem 1rem", "2rem 1rem", "2rem 2rem", "2rem 4rem", "2rem 4rem"]}
    >
      <Nav />
      {children}
    </VStack>
  );
}
