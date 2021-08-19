import React from "react";
import { Button as CButton } from "@chakra-ui/react";

export function Button({
  text,
  variant = "solid",
  isFull = false,
  isDisabled = false,
  onClick,
  onSubmit,
  colorScheme = "purple",
  type,
}) {
  const width = isFull ? "100%" : "auto";

  return (
    <CButton
      w={width}
      colorScheme={colorScheme}
      isDisabled={isDisabled}
      onSubmit={onSubmit}
      onClick={onClick}
      type={type}
      variant={variant}
    >
      {text}
    </CButton>
  );
}
