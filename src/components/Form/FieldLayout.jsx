import { VStack, useColorModeValue } from "@chakra-ui/react";

export const FieldLayout = ({ children }) => {
  const bg = useColorModeValue("blackAlpha.100", "whiteAlpha.100");
  return (
    <VStack
      w="100%"
      bg={bg}
      spacing="2rem"
      p="2rem"
      shadow="md"
      borderRadius=".5rem"
    >
      {children}
    </VStack>
  );
};
