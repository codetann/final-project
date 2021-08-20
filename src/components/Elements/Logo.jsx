import React from "react";
import { HStack, IconButton, Heading } from "@chakra-ui/react";
import { FaHamburger } from "react-icons/fa";

export function Logo({ withTitle = false }) {
  return (
    <HStack spacing="1rem">
      <IconButton color="purple.200" fontSize="1.5rem" icon={<FaHamburger />} />
      {withTitle && <Heading size="xl">Dine</Heading>}
    </HStack>
  );
}
