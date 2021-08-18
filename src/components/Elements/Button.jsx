import React from "react";
import { Button as CButton } from "@chakra-ui/react";

export function Button({
  text,
  onToggle,
  isFull = false,
  isDisabled = false,
  onClick,
  onSubmit,
  type,
}) {
  const width = isFull ? "100%" : "auto";

  return (
    <CButton
      w={width}
      colorScheme="purple"
      isDisabled={isDisabled}
      onSubmit={onSubmit}
      onClick={onClick}
      type={type}
    >
      {text}
    </CButton>
  );
}
