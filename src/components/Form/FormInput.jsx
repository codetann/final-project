import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export function FormInput({ onChange, type, isRequired, label, ...rest }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <FormControl isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Input {...rest} type={type} onChange={handleChange} />
    </FormControl>
  );
}
