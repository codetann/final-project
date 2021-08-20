import React from "react";
import { HStack } from "@chakra-ui/layout";

export function LayoutButtons({ children }) {
  return (
    <HStack w="100%" justify="center" align="center" spacing="2rem" mt="4rem">
      {children}
    </HStack>
  );
}
