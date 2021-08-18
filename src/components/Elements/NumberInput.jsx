import React from "react";
import {
  NumberInputField,
  NumberInput as CNumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  VStack,
  FormLabel,
} from "@chakra-ui/react";

export function NumberInput({
  label = false,
  onChange,
  isFull = false,
  ...rest
}) {
  const handleChange = (value) => onChange(value);

  return (
    <VStack w={isFull ? "100%" : "auto"}>
      {label && (
        <HStack w="100%" align="left">
          <FormLabel>{label}</FormLabel>
        </HStack>
      )}

      <HStack w="100%">
        <CNumberInput
          {...rest}
          w={isFull ? "100%" : "auto"}
          onChange={handleChange}
          defaultValue={1}
          min={1}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </CNumberInput>
      </HStack>
    </VStack>
  );
}
