import React, { useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  HStack,
  VStack,
  FormLabel,
} from "@chakra-ui/react";
import { NumberInput } from "./";

export function SliderInput({ onChange, label }) {
  const [value, setValue] = useState(5);
  const handleChange = (v) => {
    setValue(v);
    onChange(v);
  };

  return (
    <VStack w="100%">
      <HStack w="100%" align="left">
        <FormLabel>{label}</FormLabel>
      </HStack>

      <HStack w="100%">
        <NumberInput
          maxW="100px"
          mr="1rem"
          onChange={onchange}
          value={value}
          max={25}
        />
        <Slider
          w="100%"
          colorScheme="purple"
          focusThumbOnChange={false}
          value={value}
          max={25}
          min={1}
          step={1}
          onChange={handleChange}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb fontSize="sm" boxSize="20px" />
        </Slider>
      </HStack>
    </VStack>
  );
}
