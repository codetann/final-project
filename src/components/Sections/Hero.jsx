import React from "react";
import {
  Stack,
  Button,
  Heading,
  VStack,
  Text,
  Spacer,
  Image,
} from "@chakra-ui/react";
import RatingSvg from "./rating-feedback.svg";

export default function Hero() {
  return (
    // <Stack
    //   w="100%"
    //   direction={["column", "row"]}
    //   padding={["0 2rem", "0 8rem"]}
    // >
    <VStack justify="center" align="center" maxW="2xl" spacing="3rem" h="68vh">
      <Heading textAlign="center" size="3xl">
        Dinning out, made{" "}
        <Heading size="3xl" color="purple.300" fontStyle="italic">
          simple!
        </Heading>
      </Heading>
      <Text textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </Text>
      <Stack w={["100%", "auto"]} direction={["column", "row"]} spacing="1rem">
        <Button colorScheme="purple" size="lg">
          Get started
        </Button>
        <Button size="lg">Learn more</Button>
      </Stack>
    </VStack>
  );
}
