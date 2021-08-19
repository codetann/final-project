import React from "react";
import { VStack, HStack, Heading, useColorModeValue } from "@chakra-ui/react";

export function Members({ members }) {
  const bg = useColorModeValue("white", "whiteAlpha.100");
  return (
    <VStack w="100%">
      {members.map((m) => (
        <HStack
          key={m.id}
          w="100%"
          maxW="md"
          p="2rem"
          borderRadius=".5rem"
          bg={bg}
          justify="center"
          shadow="md"
        >
          <Heading size="md">{m.name}</Heading>
        </HStack>
      ))}
    </VStack>
  );
}
