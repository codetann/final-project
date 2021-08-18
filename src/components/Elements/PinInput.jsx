import React from "react";
import { HStack, PinInput as CPinInput, PinInputField } from "@chakra-ui/react";

export function PinInput({ onChange }) {
  const handleChange = (value) => {
    onChange(value);
  };

  return (
    <HStack>
      <CPinInput
        onChange={handleChange}
        colorScheme="purple"
        type="alphanumeric"
      >
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </CPinInput>
    </HStack>
  );
}
