import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export function FormInput({ onChange, type, isRequired, label }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <FormControl isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Input type={type} onChange={handleChange} />
    </FormControl>
  );
}
