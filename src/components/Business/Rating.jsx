import React from "react";
import { HStack, Box, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export function Rating({ rating, count }) {
  return (
    <HStack>
      <Box d="flex" alignItems="center">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon key={i} color={i < rating ? "yellow.400" : "gray.300"} />
          ))}
      </Box>
      <Text>{count} reviews</Text>
    </HStack>
  );
}
