import React from "react";
import { Switch as CSwitch } from "@chakra-ui/react";

export function Switch({ onToggle }) {
  return <CSwitch isRequired colorScheme="purple" onChange={onToggle} />;
}
