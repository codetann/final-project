import React from "react";
import {
  Spinner,
  Heading,
  VStack,
  HStack,
  IconButton,
  Text,
  Image,
  Box,
  Tag,
} from "@chakra-ui/react";
import { Rating } from "./";

export function Business({ business }) {
  return (
    <VStack w="100%" align="left" spacing="1rem" maxW="xl">
      {/* business image */}
      <Box padding="1rem" bg="whiteAlpha.100" borderRadius="1rem">
        <Image
          src={business.image}
          w="100%"
          h="500px"
          objectFit="cover"
          borderRadius=".5rem"
          shadow="lg"
        />
      </Box>

      {/* business category tags */}
      <HStack spacing="1rem">
        {business?.categories &&
          business.categories.map((b, i) => (
            <Tag colorScheme="purple" key={i}>
              {b.title}
            </Tag>
          ))}
      </HStack>

      {/* business information */}
      <Heading size="md" textAlign="left">
        {business.name}
      </Heading>
      <HStack w="100%" justify="left" align="center">
        <Text color="green.300">{business.price}</Text>
        <Text fontSize="8px" color="whiteAlpha.400">
          ●
        </Text>
        <Rating rating={business.rating} count={business.review_count} />
      </HStack>
    </VStack>
  );
}
