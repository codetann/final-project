import React from "react";
import { Stack } from "@chakra-ui/react";

export function FormRow({ children }) {
  return (
    <Stack direction={["column", "row"]} w={"100%"}>
      {children}
    </Stack>
  );
}
