import React from "react";
import { IconButton as CIconButton } from "@chakra-ui/react";

export function IconButton({ icon, colorScheme, onClick, ...rest }) {
  return (
    <CIconButton
      {...rest}
      colorScheme={colorScheme}
      icon={icon}
      onClick={onClick}
    />
  );
}
